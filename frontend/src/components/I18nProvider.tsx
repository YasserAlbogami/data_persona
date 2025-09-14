import React, { useState, useEffect, ReactNode } from 'react';
import { I18nContext, Language, translations } from '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string, params?: Record<string, string | number>) => {
    const text = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    if (params) {
      return Object.entries(params).reduce((acc, [paramKey, value]) => {
        return acc.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value));
      }, text);
    }
    
    return text;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update document title
    document.title = t('app.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('app.subtitle'));
    }
  }, [language, isRTL, t]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}