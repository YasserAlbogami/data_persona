// Import from roles.ts for consistency
export { ROLES, type RoleKey, type Role } from '@/data/roles';
import { ROLES } from '@/data/roles';

// Keep these for backwards compatibility
export interface Persona {
  id: string;
  titleAR: string;
  titleEN: string;
  emoji: string;
  summaryAR: string;
  summaryEN: string;
  strengthsAR: string[];
  strengthsEN: string[];
  toolsAR: string[];
  toolsEN: string[];
  nextStepsAR: Array<{ title: string; url: string }>;
  nextStepsEN: Array<{ title: string; url: string }>;
  colorClass: string;
}

export interface Question {
  id: number;
  questionAR: string;
  questionEN: string;
  options: Array<{
    textAR: string;
    textEN: string;
    weights: Record<string, number>;
  }>;
}


// Convert ROLES to personas format for backwards compatibility
export const personas: Persona[] = ROLES.map(role => ({
  id: role.id,
  titleAR: role.titleAR,
  titleEN: role.titleEN,
  emoji: role.emoji,
  summaryAR: role.definitionAR,
  summaryEN: role.definitionEN,
  strengthsAR: role.responsibilitiesAR,
  strengthsEN: role.responsibilitiesEN,
  toolsAR: role.tools,
  toolsEN: role.tools,
  nextStepsAR: [
    { title: 'اقرأ أكثر', url: '#' },
    { title: 'موارد تعليمية', url: '#' },
    { title: 'مجتمعات متخصصة', url: '#' }
  ],
  nextStepsEN: [
    { title: 'Learn More', url: '#' },
    { title: 'Educational Resources', url: '#' },
    { title: 'Professional Communities', url: '#' }
  ],
  colorClass: role.colorClass
}));

export const questions: Question[] = [
  {
    id: 1,
    questionAR: 'وش أكثر شي يحمّسك بالبيانات؟',
    questionEN: 'What excites you most about data work?',
    options: [
      { textAR: 'بناء خطوط بيانات قوية وموثوقة', textEN: 'Building robust and reliable data pipelines', weights: { dataEngineer: 3, aiScientist: 1 } },
      { textAR: 'تجارب ونمذجة علمية', textEN: 'Scientific modeling and experiments', weights: { dataScientist: 3, mlEngineer: 2 } },
      { textAR: 'تحليل البيانات لفهم الأعمال', textEN: 'Analytics to understand business', weights: { dataAnalyst: 3, aiEngineer: 1 } },
      { textAR: 'تصميم هياكل بيانات طويلة المدى', textEN: 'Designing long-term data architectures', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 2,
    questionAR: 'تطبيقك المفضل بالشغل؟',
    questionEN: 'Your favorite tool at work?',
    options: [
      { textAR: 'dbt / Apache Airflow', textEN: 'dbt / Apache Airflow', weights: { dataEngineer: 3, mlEngineer: 1 } },
      { textAR: 'Jupyter / Google Colab', textEN: 'Jupyter / Google Colab', weights: { dataScientist: 3, aiScientist: 2 } },
      { textAR: 'Power BI / Tableau', textEN: 'Power BI / Tableau', weights: { dataAnalyst: 3, aiEngineer: 1 } },
      { textAR: 'Terraform / Snowflake Modeling', textEN: 'Terraform / Snowflake Modeling', weights: { dataEngineer: 3, aiScientist: 1 } }
    ]
  },
  {
    id: 3,
    questionAR: 'لو صار عندك يوم زيادة بالشغل، وش تسوي؟',
    questionEN: 'If you had an extra work day, what would you do?',
    options: [
      { textAR: 'أطور خط نشر النماذج', textEN: 'Improve model deployment pipeline', weights: { mlEngineer: 3, dataEngineer: 1 } },
      { textAR: 'أسوي لوحات تحليلات للمدير', textEN: 'Create management dashboards', weights: { dataAnalyst: 3, aiEngineer: 1 } },
      { textAR: 'أجرب خوارزمية جديدة', textEN: 'Experiment with new algorithms', weights: { dataScientist: 3, aiScientist: 2 } },
      { textAR: 'أراجع معايير النمذجة بالمؤسسة', textEN: 'Review enterprise modeling standards', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 4,
    questionAR: 'كيف تنظف البيانات عادةً؟',
    questionEN: 'How do you usually clean data?',
    options: [
      { textAR: 'أتمتة كاملة مع اختبارات', textEN: 'Full automation with tests', weights: { dataEngineer: 3, mlEngineer: 1 } },
      { textAR: 'تحليل تفاعلي لفهم الأنماط', textEN: 'Interactive analysis to understand patterns', weights: { dataScientist: 3, dataAnalyst: 2 } },
      { textAR: 'أطبق قواعد عمل واضحة', textEN: 'Apply clear business rules', weights: { dataAnalyst: 3, aiEngineer: 1 } },
      { textAR: 'أحدد معايير شاملة للمؤسسة', textEN: 'Set enterprise-wide standards', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 5,
    questionAR: 'أهم شي تفكر فيه عند مشاكل الأداء؟',
    questionEN: 'Your first thought when facing performance issues?',
    options: [
      { textAR: 'أحسن الاستعلامات والفهارس', textEN: 'Optimize queries and indexes', weights: { dataEngineer: 3, dataAnalyst: 1 } },
      { textAR: 'أراجع خوارزمية النموذج', textEN: 'Check model algorithm', weights: { mlEngineer: 3, dataScientist: 2 } },
      { textAR: 'أبسط التصورات والفلاتر', textEN: 'Simplify visualizations and filters', weights: { dataAnalyst: 3, aiEngineer: 1 } },
      { textAR: 'أعيد تقييم البنية الأساسية', textEN: 'Reassess underlying architecture', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 6,
    questionAR: 'لغتك البرمجية المفضلة؟',
    questionEN: 'Your preferred programming language?',
    options: [
      { textAR: 'SQL مع Python للأتمتة', textEN: 'SQL with Python for automation', weights: { dataEngineer: 3, dataAnalyst: 2 } },
      { textAR: 'Python للتحليل والنمذجة', textEN: 'Python for analysis and modeling', weights: { dataScientist: 3, mlEngineer: 2 } },
      { textAR: 'SQL مع أدوات التصور', textEN: 'SQL with visual tools', weights: { dataAnalyst: 3, aiEngineer: 2 } },
      { textAR: 'أستخدم حسب الحاجة', textEN: 'Multi-language depending on need', weights: { aiScientist: 3, mlEngineer: 1 } }
    ]
  },
  {
    id: 7,
    questionAR: 'كيف تعرف إن مشروعك ناجح؟',
    questionEN: 'How do you know your project is successful?',
    options: [
      { textAR: 'موثوقية النظام ووقت التشغيل', textEN: 'System reliability and uptime', weights: { dataEngineer: 3, aiScientist: 1 } },
      { textAR: 'دقة النموذج وقدرته التنبؤية', textEN: 'Model accuracy and predictive power', weights: { mlEngineer: 3, dataScientist: 2 } },
      { textAR: 'رضا المستخدمين واتخاذ القرارات', textEN: 'User satisfaction and decision-making', weights: { dataAnalyst: 3, aiEngineer: 2 } },
      { textAR: 'قابلية التوسع والالتزام بالمعايير', textEN: 'Scalability and standards compliance', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 8,
    questionAR: 'وش أكثر شي تحبه بالمشاكل؟',
    questionEN: 'What type of problems do you enjoy most?',
    options: [
      { textAR: 'تحديات البنية التحتية والأداء', textEN: 'Infrastructure and performance challenges', weights: { dataEngineer: 3, aiScientist: 2 } },
      { textAR: 'اكتشاف الأنماط والخوارزميات', textEN: 'Discover patterns and algorithms', weights: { dataScientist: 3, mlEngineer: 1 } },
      { textAR: 'تحسين العمليات وكفاءة الأعمال', textEN: 'Improve processes and efficiency', weights: { dataAnalyst: 3, aiEngineer: 2 } },
      { textAR: 'تصميم استراتيجي طويل المدى', textEN: 'Long-term strategic design', weights: { aiScientist: 3, dataEngineer: 1 } }
    ]
  },
  {
    id: 9,
    questionAR: 'دورك بفريق البيانات عادةً؟',
    questionEN: 'Your typical role in a data team?',
    options: [
      { textAR: 'أضمن تدفق البيانات بدون مشاكل', textEN: 'Ensure smooth data flow', weights: { dataEngineer: 3, aiScientist: 1 } },
      { textAR: 'أكتشف رؤى وفرص جديدة', textEN: 'Discover insights and opportunities', weights: { dataScientist: 3, dataAnalyst: 1 } },
      { textAR: 'أترجم البيانات للآخرين', textEN: 'Translate data for others', weights: { aiEngineer: 3, dataAnalyst: 2 } },
      { textAR: 'أخطط للمستقبل وأبني الأسس', textEN: 'Plan and set foundations', weights: { aiScientist: 3, mlEngineer: 1 } }
    ]
  },
  {
    id: 10,
    questionAR: 'مصدر تعلمك المفضل؟',
    questionEN: 'Your preferred learning source?',
    options: [
      { textAR: 'وثائق وتقارير تقنية', textEN: 'Technical docs and reports', weights: { dataEngineer: 3, aiScientist: 2 } },
      { textAR: 'أبحاث علمية ومؤتمرات', textEN: 'Research papers and conferences', weights: { dataScientist: 3, aiScientist: 3 } },
      { textAR: 'دراسات حالة وأمثلة عملية', textEN: 'Case studies and practical examples', weights: { dataAnalyst: 3, aiEngineer: 2 } },
      { textAR: 'توجهات الصناعة والتقارير الاستراتيجية', textEN: 'Industry trends and strategic reports', weights: { aiEngineer: 3, mlEngineer: 1 } }
    ]
  }
];
