import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { ROLES } from '@/data/roles';

export default function RoleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, isRTL } = useI18n();

  const role = ROLES.find(r => r.id === id);

  if (!role) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">{t('common.error')}</p>
            <Button onClick={() => navigate('/')} variant="outline">
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          {isRTL ? 'رجوع' : 'Back'}
        </Button>

        {/* Role Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{role.emoji}</div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            {isRTL ? role.titleAR : role.titleEN}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isRTL ? role.focusAR : role.focusEN}
          </p>
        </div>

        {/* Role Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isRTL ? 'نظرة عامة' : 'Overview'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {isRTL ? role.definitionAR : role.definitionEN}
            </p>
          </CardContent>
        </Card>

        {/* Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isRTL ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(isRTL ? role.responsibilitiesAR : role.responsibilitiesEN).map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{responsibility}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isRTL ? 'الأدوات والتقنيات' : 'Tools & Technologies'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {role.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/roles')}
            variant="outline"
            className="flex items-center gap-2"
          >
            {isRTL ? 'مقارنة الأدوار' : 'Compare Roles'}
            <Icon className="w-4 h-4" />
          </Button>
          <Button 
            onClick={() => navigate('/')}
            className="bg-cta hover:bg-cta-hover text-cta-foreground flex items-center gap-2"
          >
            {isRTL ? 'ابدأ الاختبار' : 'Take Test'}
            <Icon className="w-4 h-4" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}