import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { personas } from '@/data/personas';
import axios from 'axios';

interface ResultCardProps {
  persona: typeof personas[0];
  onRestart: () => void;
}

export function ResultCard({ persona, onRestart }: ResultCardProps) {
  const { t, isRTL } = useI18n();
  const navigate = useNavigate();

  useEffect(() => {
    const saveResult = async () => {
      try {
        const userData = localStorage.getItem('userData');
        if (!userData) return console.warn('No userData found in localStorage');

        const { name, email } = JSON.parse(userData);

        const response = await axios.post(
          'http://localhost:8000/api/save_persona/',
          { name, email, persona: persona.titleEN },
          { headers: { 'Content-Type': 'application/json' } }
        );

        console.log('✅ Persona saved successfully:', response.data);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.error('❌ Axios error:', error.response?.data || error.message);
        } else {
          console.error('❌ Unknown error:', error);
        }
      }
    };

    saveResult();
  }, [persona]);

  const copyToClipboard = async () => {
    const url = `${window.location.origin}/result?result=${persona.id}`;
    try {
      await navigator.clipboard.writeText(url);
      console.log('Copied to clipboard:', url);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleLearnMore = () => navigate(`/roles/${persona.id}`);
  const Icon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card transition-smooth hover:shadow-hover" dir={isRTL ? 'rtl' : 'ltr'}>
      <CardHeader className="text-center space-y-4">
        <div className="text-6xl mx-auto">{persona.emoji}</div>
        <CardTitle className="text-3xl font-bold text-primary">{isRTL ? persona.titleAR : persona.titleEN}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {isRTL ? persona.summaryAR : persona.summaryEN}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={handleLearnMore} className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2">
            {isRTL ? 'اضغط لمعرفة المزيد' : 'Click to Learn More'}
            <Icon className="w-4 h-4" />
          </Button>

          <Button onClick={copyToClipboard} variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            {t('result.share')}
          </Button>

          <Button onClick={onRestart} variant="outline" className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            {t('result.restart')}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center">
              <span className="text-2xl mr-2 rtl:ml-2 rtl:mr-0">💪</span>
              {t('result.strengths')}
            </h3>
            <div className="space-y-2">
              {(isRTL ? persona.strengthsAR : persona.strengthsEN).map((strength, i) => (
                <div key={i} className="flex items-start space-x-2 rtl:space-x-reverse p-3 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{strength}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center">
              <span className="text-2xl mr-2 rtl:ml-2 rtl:mr-0">🛠️</span>
              {t('result.tools')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(isRTL ? persona.toolsAR : persona.toolsEN).map((tool, i) => (
                <Badge key={i} variant="secondary" className="px-3 py-1 transition-smooth hover:scale-105">{tool}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Updated Next Steps Section */}
        <div className="space-y-4 p-6 bg-muted/20 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-foreground flex items-center justify-center">
            <span className="text-2xl mr-2 rtl:ml-2 rtl:mr-0">🚀</span>
            {t('result.nextSteps')}
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('result.nextStepsMessage', {
              persona: isRTL ? persona.titleAR : persona.titleEN
            })}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
