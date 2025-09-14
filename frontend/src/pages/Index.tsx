import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { PersonaTile } from '@/components/PersonaTile';
import { PreTestModal } from '@/components/PreTestModal';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { personas } from '@/data/personas';

export default function Index() {
  const { t, isRTL } = useI18n();
  const navigate = useNavigate();
  const [showPreTestModal, setShowPreTestModal] = useState(false);

  const handleStartQuiz = () => {
    setShowPreTestModal(true);
  };

  const Icon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              {t('app.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isRTL 
                ? 'اكتشف مسارك المهني المثالي في عالم علوم البيانات والذكاء الاصطناعي'
                : 'Discover your ideal career path in data science and artificial intelligence'
              }
            </p>
            
            <p className="text-muted-foreground max-w-xl mx-auto">
              {isRTL
                ? 'اختبار شخصية مخصص يساعدك على تحديد الدور الأنسب لك'
                : 'A personalized quiz to help you identify the most suitable role for you'
              }
            </p>
          </div>

          <Button 
            onClick={handleStartQuiz}
            size="lg"
            className="text-lg px-8 py-6 font-semibold bg-cta hover:bg-cta-hover text-cta-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {isRTL ? 'ابدأ الاختبار' : 'Start Test'}
            <Icon className="w-5 h-5" />
          </Button>
        </div>

        {/* Persona Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            {isRTL ? 'الأدوار المهنية' : 'Professional Roles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <PersonaTile 
                key={persona.id} 
                persona={persona}
                onClick={() => navigate(`/roles/${persona.id}`)} // <-- Navigate to RoleDetail
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {isRTL ? 'جاهز لاكتشاف مسارك المهني؟' : 'Ready to discover your career path?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isRTL 
                ? 'استغرق بضع دقائق فقط واكتشف الدور المثالي لك في عالم علوم البيانات'
                : 'Take just a few minutes and discover your ideal role in the world of data science'
              }
            </p>
            <Button 
              onClick={handleStartQuiz}
              size="lg"
              className="text-lg px-8 py-6 font-semibold bg-cta hover:bg-cta-hover text-cta-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {isRTL ? 'ابدأ الاختبار' : 'Start Test'}
              <Icon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      <PreTestModal 
        isOpen={showPreTestModal}
        onClose={() => setShowPreTestModal(false)}
      />
    </div>
  );
}