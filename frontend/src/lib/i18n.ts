import { createContext, useContext } from 'react';

export type Language = 'ar' | 'en';

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
  isRTL: boolean;
}

export const translations = {
  ar: {
    // Header
    'app.title': 'اختبار شخصية البيانات',
    'app.subtitle': 'اكتشف دورك المثالي في عالم علوم البيانات',
    'language.toggle': 'EN',

    // Landing page
    'landing.title': 'اختبار شخصية البيانات',
    'landing.subtitle': 'اكتشف شخصيتك في عالم البيانات واعرف المسار المهني المناسب لك',
    'landing.start': 'ابدأ الاختبار',
    'landing.description': 'أجب على 10 أسئلة بسيطة لنساعدك في اكتشاف دورك المثالي في مجال علوم البيانات',

    // Quiz
    'quiz.progress': 'السؤال {{current}} من {{total}}',
    'quiz.back': 'السابق',
    'quiz.next': 'التالي',
    'quiz.skip': 'تخطي',
    'quiz.finish': 'إنهاء الاختبار',
    'quiz.select': 'اختر إجابة واحدة',

    // Result
    'result.title': 'نتيجة اختبارك',
    'result.match': 'أنت مناسب لدور',
    'result.strengths': 'نقاط قوتك',
    'result.tools': 'الأدوات التي ستحبها',
    'result.nextSteps': 'الخطوات التالية',
    'result.nextStepsMessage': 'بما أنك تمتلك عقلية {{persona}}، تحقق من بريدك الإلكتروني خلال الأيام القادمة لأننا سنرسل لك المواد للبدء كـ {{persona}}.',
    'result.share': 'شارك النتيجة',
    'result.restart': 'إعادة الاختبار',
    'result.copied': 'تم نسخ الرابط!',

    // Footer
    'footer.credits': 'مصمم بواسطة Lovable',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ ما',
    'common.retry': 'حاول مرة أخرى',
  },
  en: {
    // Header
    'app.title': 'Data Personality Test',
    'app.subtitle': 'Discover your ideal role in the world of data science',
    'language.toggle': 'عربي',

    // Landing page
    'landing.title': 'Data Personality Test',
    'landing.subtitle': 'Discover your data personality and find the perfect career path for you',
    'landing.start': 'Start Quiz',
    'landing.description': 'Answer 10 simple questions to help you discover your ideal role in the field of data science',

    // Quiz
    'quiz.progress': 'Question {{current}} of {{total}}',
    'quiz.back': 'Back',
    'quiz.next': 'Next',
    'quiz.skip': 'Skip',
    'quiz.finish': 'Finish Quiz',
    'quiz.select': 'Select one answer',

    // Result
    'result.title': 'Your Quiz Result',
    'result.match': 'You are a perfect match for',
    'result.strengths': 'Your Strengths',
    'result.tools': 'Tools You\'ll Love',
    'result.nextSteps': 'Next Steps',
    'result.nextStepsMessage': 'Since you have the mindset of a {{persona}}, check your email in the coming days because we will send you the materials to get you started as {{persona}}.',
    'result.share': 'Share Result',
    'result.restart': 'Restart Quiz',
    'result.copied': 'Link copied!',

    // Footer
    'footer.credits': 'Built with Lovable',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Try again',
  }
};

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
