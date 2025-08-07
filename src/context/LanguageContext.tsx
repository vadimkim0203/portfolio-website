'use client';

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';

export type Locale = 'en' | 'ko';

interface TranslationSet {
  [key: string]: string;
}

type Translations = {
  [K in Locale]: TranslationSet;
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  en: {
    welcomeMessage: 'Welcome to our website',
  },
  ko: {
    welcomeMessage: '웹사이트에 오신 것을 환영합니다',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = Cookies.get('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ko')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    Cookies.set('locale', newLocale, { expires: 365 });
    setLocaleState(newLocale);
  };

  const t = (key: string): string => {
    return translations[locale]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
