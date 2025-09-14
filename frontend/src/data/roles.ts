export type RoleKey =
  | 'dataScientist' | 'dataAnalyst' | 'dataEngineer'
  | 'mlEngineer' | 'aiEngineer' | 'aiScientist';

export type Role = {
  id: RoleKey;
  titleAR: string;
  titleEN: string;
  emoji: string;
  teaserAR: string;  // short tile blurb
  teaserEN: string;
  definitionAR: string; // for التفاصيل drawer
  definitionEN: string;
  focusAR: string;
  focusEN: string;
  responsibilitiesAR: string[];
  responsibilitiesEN: string[];
  tools: string[];
  colorClass: string;
};

export const ROLES: Role[] = [
  {
    id: 'aiScientist',
    titleAR: 'عالِم ذكاء اصطناعي',
    titleEN: 'AI Scientist',
    emoji: '🧪🤖',
    teaserAR: 'بحث ونماذج جديدة وحدّ أحدث.',
    teaserEN: 'Research & new SOTA models.',
    definitionAR: 'يبحث ويبتكر خوارزميات ونماذج جديدة (SOTA) ويتعامل مع أوراق علمية وتجارب معمّقة.',
    definitionEN: 'Researches and invents new algorithms/models (SOTA); runs deep experiments.',
    focusAR: 'البحث والابتكار في الذكاء الاصطناعي.',
    focusEN: 'Research & innovation in artificial intelligence.',
    responsibilitiesAR: [
      'تطوير نماذج وخوارزميات ذكاء اصطناعي جديدة.',
      'إجراء أبحاث أساسية لدفع حدود المجال.',
      'نشر أوراق وبناء نماذج أولية.',
      'تجريب طرق متقدمة خارج الأطر التقليدية.',
      'التعاون مع المهندسين لتحويل الأبحاث إلى تطبيقات.',
    ],
    responsibilitiesEN: [
      'Develop new AI models and algorithms.',
      'Conduct fundamental AI research.',
      'Publish papers and build prototypes.',
      'Experiment with cutting-edge methods.',
      'Collaborate with engineers to apply research.',
    ],
    tools: ['PyTorch Research', 'TensorFlow', 'Arxiv', 'CUDA'],
    colorClass: 'tile-indigo'
  },
  {
    id: 'dataScientist',
    titleAR: 'عالِم بيانات',
    titleEN: 'Data Scientist',
    emoji: '📊🔍',
    teaserAR: 'رؤى قابلة للتنفيذ من البيانات.',
    teaserEN: 'Actionable insights from data.',
    definitionAR: 'يحول البيانات إلى رؤى قابلة للتنفيذ عبر النمذجة الإحصائية والتجريب.',
    definitionEN: 'Turns data into actionable insights using statistics and experimentation.',
    focusAR: 'تحويل البيانات إلى رؤى ونماذج تنبؤية.',
    focusEN: 'Turning data into insights and predictive models.',
    responsibilitiesAR: [
      'تنظيف ومعالجة وتحليل مجموعات بيانات كبيرة.',
      'تطبيق النمذجة الإحصائية والتعلم الآلي.',
      'التواصل مع أصحاب المصلحة بقصص البيانات.',
      'بناء والتحقق من النماذج التنبؤية.',
      'سد الفجوة بين البيانات الخام واتخاذ القرار.',
    ],
    responsibilitiesEN: [
      'Clean, process, and analyze datasets.',
      'Apply statistical modeling & ML.',
      'Communicate insights with stakeholders.',
      'Build and validate predictive models.',
      'Bridge raw data and decision-making.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Tableau'],
    colorClass: 'tile-teal'
  },
  {
    id: 'mlEngineer',
    titleAR: 'مهندس تعلم آلة',
    titleEN: 'ML Engineer',
    emoji: '⚙️🤝📈',
    teaserAR: 'من التدريب إلى النشر والمراقبة.',
    teaserEN: 'Train → deploy → monitor.',
    definitionAR: 'يطوّر ويشغّل نماذج تعلم الآلة من التدريب للنشر والمراقبة (MLOps).',
    definitionEN: 'Develops and productionizes ML models with MLOps (train → deploy → monitor).',
    focusAR: 'نشر وتوسيع نماذج التعلم الآلي.',
    focusEN: 'Deploying and scaling ML models.',
    responsibilitiesAR: [
      'تشغيل النماذج في بيئة الإنتاج.',
      'بناء خطوط جاهزة للتدريب والخدمة والمراقبة.',
      'تحسين الأداء وقابلية التوسع.',
      'إدارة MLOps والتدريب المستمر.',
      'التعاون مع مهندسي البيانات لضمان التدفق السلس.',
    ],
    responsibilitiesEN: [
      'Operationalize ML models.',
      'Build pipelines for training, serving, monitoring.',
      'Optimize for performance & scalability.',
      'Maintain MLOps workflows.',
      'Collaborate with data engineers.',
    ],
    tools: ['TensorFlow', 'PyTorch', 'MLflow', 'FastAPI', 'Docker'],
    colorClass: 'tile-mustard'
  },
  {
    id: 'dataEngineer',
    titleAR: 'مهندس بيانات',
    titleEN: 'Data Engineer',
    emoji: '🛠️🗄️',
    teaserAR: 'خطوط بيانات موثوقة وبحيرات بيانات.',
    teaserEN: 'Reliable pipelines and data lakes.',
    definitionAR: 'يصمم ويبني خطوط البيانات وبحيرات/مستودعات البيانات عالية الاعتمادية.',
    definitionEN: 'Designs and builds reliable data pipelines and lakes/warehouses.',
    focusAR: 'بناء وإدارة بنية تحتية للبيانات.',
    focusEN: 'Building and managing data infrastructure.',
    responsibilitiesAR: [
      'تصميم وصيانة خطوط البيانات وعمليات ETL.',
      'ضمان الوصولية والموثوقية وقابلية التوسع.',
      'دمج مصادر بيانات متعددة.',
      'إدارة أطر البيانات الضخمة.',
      'تحسين التخزين وأداء الاستعلام.',
    ],
    responsibilitiesEN: [
      'Design & maintain pipelines/ETL.',
      'Ensure data reliability & scalability.',
      'Integrate multiple data sources.',
      'Manage big data frameworks.',
      'Optimize storage & queries.',
    ],
    tools: ['SQL', 'Airflow', 'Spark', 'Kafka', 'AWS/GCP/Azure'],
    colorClass: 'tile-mint'
  },
  {
    id: 'dataAnalyst',
    titleAR: 'محلل بيانات',
    titleEN: 'Data Analyst',
    emoji: '📈📊',
    teaserAR: 'لوحات ومؤشرات تُجيب أسئلة العمل.',
    teaserEN: 'Dashboards that answer business questions.',
    definitionAR: 'يستكشف البيانات، يبني لوحات معلومات، ويجيب أسئلة الأعمال بالتحليلات.',
    definitionEN: 'Explores data, builds dashboards, and answers business questions with analysis.',
    focusAR: 'التحليلات الوصفية وذكاء الأعمال.',
    focusEN: 'Descriptive analytics & BI.',
    responsibilitiesAR: [
      'استعلام البيانات باستخدام SQL وأدوات BI.',
      'بناء تقارير ولوحات معلومات.',
      'تحليل الاتجاهات ومؤشرات الأداء.',
      'دعم اتخاذ القرارات بالأدلة.',
      'التركيز على التفسير أكثر من التنبؤ.',
    ],
    responsibilitiesEN: [
      'Query data with SQL/BI tools.',
      'Build dashboards and reports.',
      'Analyze KPIs & trends.',
      'Support decision-making.',
      'Focus on explanation not prediction.',
    ],
    tools: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Looker'],
    colorClass: 'tile-coral'
  },
  {
    id: 'aiEngineer',
    titleAR: 'مهندس ذكاء اصطناعي',
    titleEN: 'AI Engineer',
    emoji: '🤖⚡',
    teaserAR: 'دمج النماذج في المنتجات مع الاسترجاع والأدوات.',
    teaserEN: 'Ship AI (LLMs) into products.',
    definitionAR: 'يدمج نماذج الذكاء الاصطناعي (خاصة LLMs) في المنتجات، توصيل سلاسل الأدوات والاسترجاع.',
    definitionEN: 'Integrates AI (esp. LLMs) into products; tool orchestration and retrieval.',
    focusAR: 'بناء أنظمة وحلول ذكاء اصطناعي تطبيقية.',
    focusEN: 'Building applied AI systems.',
    responsibilitiesAR: [
      'دمج نماذج الذكاء الاصطناعي في المنتجات.',
      'تطوير APIs وخدمات تعتمد على AI.',
      'تحسين النماذج للقيود الواقعية.',
      'البقاء محدثاً بأطر AI الحديثة.',
      'التوازن بين البحث والتطبيق.',
    ],
    responsibilitiesEN: [
      'Integrate AI models into products.',
      'Develop AI-driven APIs/services.',
      'Optimize for real-world constraints.',
      'Stay updated on AI frameworks.',
      'Balance research & deployment.',
    ],
    tools: ['LangChain', 'ONNX', 'Transformers', 'Vector DBs', 'REST APIs'],
    colorClass: 'tile-peach'
  },
];

// Convert ROLES to personas format for backwards compatibility
export const personas = ROLES.map(role => ({
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