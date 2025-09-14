import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Header() {
  const { language, setLanguage, t, isRTL } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentLang, setCurrentLang] = useState(language);
  useEffect(() => {
    setCurrentLang(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const goToRolesComparison = () => navigate('/roles');
  const goToHome = () => navigate('/');

  // Determine which page is active
  const isHome = location.pathname === '/';
  const isRoles = location.pathname.startsWith('/roles');

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Data Science Club" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-primary">{t('app.title')}</h1>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="font-medium"
          >
            {t('language.toggle')}
          </Button>

          {/* Roles Comparison Button */}
          <Button
            variant={isRoles ? 'default' : 'outline'}
            size="sm"
            onClick={goToRolesComparison}
            className="font-medium"
          >
            {isRTL ? 'مقارنة الأدوار' : 'Roles Comparison'}
          </Button>

          {/* Home Button */}
          <Button
            variant={isHome ? 'default' : 'outline'}
            size="sm"
            onClick={goToHome}
            className="font-medium"
          >
            {isRTL ? 'الرئيسية' : 'Home'}
          </Button>
        </div>
      </div>
    </header>
  );
}
