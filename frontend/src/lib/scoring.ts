import { ROLES, questions, RoleKey } from '@/data/personas';

export interface QuizAnswer {
  questionId: number;
  selectedOption: number;
}

export interface PersonaScore {
  personaId: string;
  score: number;
}

export type ScoreResult = {
  winner: RoleKey;
  scores: Record<RoleKey, number>;
  contributions: Array<{ qIndex: number; role: RoleKey; delta: number }>;
  confidence: number;
};

export function calculatePersonaScores(answers: QuizAnswer[]): PersonaScore[] {
  const scores: Record<string, number> = {};
  
  // Initialize all role scores to 0
  ROLES.forEach(role => {
    scores[role.id] = 0;
  });
  
  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOption]) {
      const weights = question.options[answer.selectedOption].weights;
      Object.entries(weights).forEach(([roleId, weight]) => {
        scores[roleId] = (scores[roleId] || 0) + (weight as number);
      });
    }
  });
  
  // Convert to array and sort by score
  return Object.entries(scores)
    .map(([personaId, score]) => ({ personaId, score }))
    .sort((a, b) => b.score - a.score);
}

export function calculateScoreResult(answers: QuizAnswer[]): ScoreResult {
  const scores: Record<RoleKey, number> = {
    dataScientist: 0,
    dataAnalyst: 0,
    dataEngineer: 0,
    mlEngineer: 0,
    aiEngineer: 0,
    aiScientist: 0
  };
  
  const contributions: Array<{ qIndex: number; role: RoleKey; delta: number }> = [];
  
  // Calculate scores and track contributions
  answers.forEach((answer, index) => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOption]) {
      const weights = question.options[answer.selectedOption].weights;
      Object.entries(weights).forEach(([roleId, weight]) => {
        if (roleId in scores) {
          scores[roleId as RoleKey] += weight as number;
          contributions.push({
            qIndex: index,
            role: roleId as RoleKey,
            delta: weight as number
          });
        }
      });
    }
  });
  
  // Find winner with tie-breaking logic
  const sortedRoles = Object.entries(scores)
    .sort(([, a], [, b]) => b - a);
  
  const topScore = sortedRoles[0][1];
  const tiedRoles = sortedRoles.filter(([, score]) => score === topScore);
  
  let winner: RoleKey = tiedRoles[0][0] as RoleKey;
  
  if (tiedRoles.length > 1) {
    // Tie-breaker: More non-zero contributing questions wins
    const contributionCounts: Record<RoleKey, number> = {
      dataScientist: 0,
      dataAnalyst: 0,
      dataEngineer: 0,
      mlEngineer: 0,
      aiEngineer: 0,
      aiScientist: 0
    };
    
    contributions.forEach(({ role, delta }) => {
      if (delta > 0) {
        contributionCounts[role]++;
      }
    });
    
    const tiedRoleIds = tiedRoles.map(([id]) => id as RoleKey);
    const tiedWithContributions = tiedRoleIds
      .map(roleId => ({ roleId, count: contributionCounts[roleId] }))
      .sort((a, b) => b.count - a.count);
    
    const maxContributions = tiedWithContributions[0].count;
    const stillTied = tiedWithContributions.filter(r => r.count === maxContributions);
    
    if (stillTied.length === 1) {
      winner = stillTied[0].roleId;
    } else {
      // Tie-breaker: Most recent answered question
      const reversedAnswers = [...answers].reverse();
      for (const answer of reversedAnswers) {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.options[answer.selectedOption]) {
          const weights = question.options[answer.selectedOption].weights;
          const mentionedRoles = Object.keys(weights) as RoleKey[];
          
          for (const roleId of mentionedRoles) {
            if (stillTied.some(t => t.roleId === roleId)) {
              winner = roleId;
              break;
            }
          }
          if (winner !== tiedRoles[0][0]) break;
        }
      }
      
      // Final tie-breaker: Deterministic order
      if (stillTied.length > 1 && stillTied.some(t => t.roleId === winner)) {
        const order: RoleKey[] = ['aiScientist', 'aiEngineer', 'mlEngineer', 'dataScientist', 'dataEngineer', 'dataAnalyst'];
        for (const roleId of order) {
          if (stillTied.some(t => t.roleId === roleId)) {
            winner = roleId;
            break;
          }
        }
      }
    }
  }
  
  // Calculate confidence
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const confidence = scores[winner] / Math.max(1, totalScore);
  
  return {
    winner,
    scores,
    contributions,
    confidence
  };
}

export function getTopPersona(answers: QuizAnswer[]): string {
  const result = calculateScoreResult(answers);
  return result.winner;
}

export function saveQuizState(answers: QuizAnswer[], currentQuestion: number) {
  localStorage.setItem('quizState', JSON.stringify({
    answers,
    currentQuestion,
    timestamp: Date.now()
  }));
}

export function loadQuizState(): { answers: QuizAnswer[], currentQuestion: number } | null {
  try {
    const saved = localStorage.getItem('quizState');
    if (!saved) return null;
    
    const state = JSON.parse(saved);
    
    // Check if state is recent (within 24 hours)
    const dayInMs = 24 * 60 * 60 * 1000;
    if (Date.now() - state.timestamp > dayInMs) {
      localStorage.removeItem('quizState');
      return null;
    }
    
    return {
      answers: state.answers || [],
      currentQuestion: state.currentQuestion || 1
    };
  } catch {
    return null;
  }
}

export function clearQuizState() {
  localStorage.removeItem('quizState');
}