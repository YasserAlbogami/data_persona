import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { ROLES } from '@/data/roles';

export default function RoleComparison() {
  const navigate = useNavigate();
  const { t, isRTL } = useI18n();

  const comparisonData = [
    {
      criteriaAR: 'التركيز الرئيسي',
      criteriaEN: 'Main Focus',
      roles: ROLES.map(role => ({
        id: role.id,
        valueAR: role.focusAR,
        valueEN: role.focusEN,
        emoji: role.emoji
      }))
    },
    {
      criteriaAR: 'مثال على المهام',
      criteriaEN: 'Example Tasks',
      roles: [
        { id: 'aiScientist', valueAR: 'بحث خوارزميات جديدة', valueEN: 'Research new algorithms', emoji: '🧪🤖' },
        { id: 'dataScientist', valueAR: 'بناء نماذج تنبؤية', valueEN: 'Build predictive models', emoji: '📊🔍' },
        { id: 'mlEngineer', valueAR: 'نشر نماذج ML في الإنتاج', valueEN: 'Deploy ML models to production', emoji: '⚙️🤝📈' },
        { id: 'dataEngineer', valueAR: 'بناء خطوط البيانات', valueEN: 'Build data pipelines', emoji: '🛠️🗄️' },
        { id: 'dataAnalyst', valueAR: 'إنشاء التقارير والداشبورد', valueEN: 'Create reports and dashboards', emoji: '📈📊' },
        { id: 'aiEngineer', valueAR: 'دمج AI في التطبيقات', valueEN: 'Integrate AI into applications', emoji: '🤖⚡' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {isRTL ? 'مقارنة الأدوار المهنية' : 'Professional Roles Comparison'}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'مقارنة شاملة بين الأدوار المختلفة في مجال علوم البيانات والذكاء الاصطناعي'
              : 'A comprehensive comparison between different roles in data science and artificial intelligence'
            }
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">
              {isRTL ? 'جدول المقارنة' : 'Comparison Table'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-start p-4 font-semibold min-w-[150px]">
                      {isRTL ? 'المعيار' : 'Criteria'}
                    </th>
                    {ROLES.map(role => (
                      <th key={role.id} className="text-center p-4 font-semibold min-w-[160px]">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-2xl">{role.emoji}</span>
                          <span className="text-sm">
                            {isRTL ? role.titleAR : role.titleEN}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t">
                      <td className="p-4 font-medium bg-muted/20">
                        {isRTL ? row.criteriaAR : row.criteriaEN}
                      </td>
                      {row.roles.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 text-center text-sm">
                          <div className="text-muted-foreground leading-relaxed">
                            {isRTL ? cell.valueAR : cell.valueEN}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Role Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {ROLES.map(role => (
            <Card 
              key={role.id} 
              className="hover-lift cursor-pointer transition-smooth"
              onClick={() => navigate(`/roles/${role.id}`)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{role.emoji}</div>
                <CardTitle className="text-lg">
                  {isRTL ? role.titleAR : role.titleEN}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  {isRTL ? role.teaserAR : role.teaserEN}
                </p>
                <Badge variant="outline" className="text-xs">
                  {isRTL ? 'اضغط للتفاصيل' : 'Click for details'}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/')}
            className="bg-cta hover:bg-cta-hover text-cta-foreground"
          >
            {isRTL ? 'ابدأ اختبار تحديد الشخصية' : 'Start Personality Test'}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}