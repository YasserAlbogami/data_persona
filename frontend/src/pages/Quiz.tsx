import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionCard } from '@/components/QuestionCard';
import { questions } from '@/data/personas';
import { useI18n } from '@/lib/i18n';
import { QuizAnswer, saveQuizState, loadQuizState, clearQuizState } from '@/lib/scoring';
import { ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';

export default function Quiz() {
  const { t, isRTL } = useI18n();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Load saved state on mount
  useEffect(() => {
    const savedState = loadQuizState();
    if (savedState) {
      setAnswers(savedState.answers);
      setCurrentQuestion(savedState.currentQuestion - 1); // Convert to 0-based index
      
      // Set selected option for current question
      const currentAnswer = savedState.answers.find(
        a => a.questionId === savedState.currentQuestion
      );
      if (currentAnswer) {
        setSelectedOption(currentAnswer.selectedOption);
      }
    }
  }, []);

  // Save state whenever answers or current question changes
  useEffect(() => {
    if (answers.length > 0 || currentQuestion > 0) {
      saveQuizState(answers, currentQuestion + 1); // Convert to 1-based index
    }
  }, [answers, currentQuestion]);

  const currentQuestionData = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const canGoNext = selectedOption !== null;
  const canGoBack = currentQuestion > 0;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      // Save current answer
      const newAnswers = [
        ...answers.filter(a => a.questionId !== currentQuestionData.id),
        { questionId: currentQuestionData.id, selectedOption }
      ];
      setAnswers(newAnswers);
    }

    if (isLastQuestion) {
      // Finish quiz - navigate to results
      clearQuizState();
      const finalAnswers = selectedOption !== null 
        ? [
            ...answers.filter(a => a.questionId !== currentQuestionData.id),
            { questionId: currentQuestionData.id, selectedOption }
          ]
        : answers;
      
      navigate('/result', { state: { answers: finalAnswers } });
    } else {
      // Go to next question
      setCurrentQuestion(prev => prev + 1);
      
      // Check if we have an answer for the next question
      const nextQuestionAnswer = answers.find(
        a => a.questionId === questions[currentQuestion + 1].id
      );
      setSelectedOption(nextQuestionAnswer?.selectedOption ?? null);
    }
  };

  const handleBack = () => {
    if (canGoBack) {
      setCurrentQuestion(prev => prev - 1);
      
      // Load the answer for the previous question
      const prevQuestionAnswer = answers.find(
        a => a.questionId === questions[currentQuestion - 1].id
      );
      setSelectedOption(prevQuestionAnswer?.selectedOption ?? null);
    }
  };

  const handleSkip = () => {
    // Remove any existing answer for this question and proceed
    const newAnswers = answers.filter(a => a.questionId !== currentQuestionData.id);
    setAnswers(newAnswers);

    if (isLastQuestion) {
      clearQuizState();
      navigate('/result', { state: { answers: newAnswers } });
    } else {
      setCurrentQuestion(prev => prev + 1);
      
      // Check if we have an answer for the next question
      const nextQuestionAnswer = newAnswers.find(
        a => a.questionId === questions[currentQuestion + 1].id
      );
      setSelectedOption(nextQuestionAnswer?.selectedOption ?? null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Progress */}
          <ProgressBar 
            current={currentQuestion + 1} 
            total={questions.length} 
          />

          {/* Question Card */}
          <Card className="p-8 shadow-card bg-card">
            <QuestionCard
              question={currentQuestionData}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
            />
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={!canGoBack}
              className="transition-smooth hover-lift"
            >
              {isRTL ? (
                <ChevronRight className="w-4 h-4 mr-2" />
              ) : (
                <ChevronLeft className="w-4 h-4 mr-2" />
              )}
              {t('quiz.back')}
            </Button>

            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="transition-smooth hover-lift"
              >
                <SkipForward className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                {t('quiz.skip')}
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canGoNext && !isLastQuestion}
                className="transition-smooth hover-lift gradient-hero text-white"
              >
                {isLastQuestion ? t('quiz.finish') : t('quiz.next')}
                {isRTL ? (
                  <ChevronLeft className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}