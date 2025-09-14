import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResultCard } from '@/components/ResultCard';
import { personas } from '@/data/personas';
import { QuizAnswer, getTopPersona, clearQuizState } from '@/lib/scoring';
import { useI18n } from '@/lib/i18n';

export default function Result() {
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [persona, setPersona] = useState<typeof personas[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we have a shared result in URL params
    const sharedPersonaId = searchParams.get('result');
    
    if (sharedPersonaId) {
      const sharedPersona = personas.find(p => p.id === sharedPersonaId);
      if (sharedPersona) {
        setPersona(sharedPersona);
        setLoading(false);
        return;
      }
    }

    // Check if we have answers from quiz completion
    const answers = location.state?.answers as QuizAnswer[];
    
    if (!answers || answers.length === 0) {
      // No data available, redirect to home
      navigate('/');
      return;
    }

    // Calculate result
    const topPersonaId = getTopPersona(answers);
    const resultPersona = personas.find(p => p.id === topPersonaId);
    
    if (resultPersona) {
      setPersona(resultPersona);
    } else {
      // Fallback to first persona if something goes wrong
      setPersona(personas[0]);
    }
    
    setLoading(false);
  }, [location.state, navigate, searchParams]);

  const handleRestart = () => {
    clearQuizState();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground">{t('common.loading')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!persona) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">{t('common.error')}</p>
            <button 
              onClick={() => navigate('/')}
              className="text-primary hover:underline"
            >
              {t('common.retry')}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t('result.title')}
          </h1>
        </div>
        
        <ResultCard 
          persona={persona} 
          onRestart={handleRestart}
        />
      </main>

      <Footer />
    </div>
  );
}