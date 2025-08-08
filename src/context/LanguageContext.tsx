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
    name: 'Vadim Kim',
    specialty: 'Frontend Engineer',
    greetings: 'Hi there!',
    introduction: `I'm Vadim — a frontend developer with a background in retail and B2B
            services. I’m experienced in understanding user needs, solving
            real-world problems, and building practical, user-friendly
            solutions. My main tools are TypeScript, Next.js, and Tailwind CSS.`,
    headerWork: 'Work Experience',
    headerEducation: 'Education',
    headerProjects: 'Projects',
    headerSkills: 'Skills',
    allProjects: 'See all projects',
    'navigation.home': 'Home',
    'navigation.projects': 'Projects',
    'navigation.activities': 'Activities',
    'navigation.contact': 'Contact',
  },
  ko: {
    name: '김바딤',
    specialty: '프론트엔드 개발자',
    greetings: '안녕하세요!',
    introduction: `저는 리테일 및 B2B 서비스 분야에서의 경력을 바탕으로 한 프론트엔드 개발자 Vadim입니다.
사용자 요구를 정확히 파악하고, 실질적인 문제를 해결하며, 실용적이고 사용자 중심적인 솔루션을 구축하는 데 강점을 가지고 있습니다.
주요 사용 기술은 TypeScript, Next.js, Tailwind CSS입니다.`,
    headerWork: '경력 사항',
    headerEducation: '학력 사항',
    headerProjects: '프로젝트',
    headerSkills: '기술 스택',
    allProjects: '전체 프로젝트 보기',
    'navigation.home': '홈',
    'navigation.projects': '프로젝트',
    'navigation.activities': '활동',
    'navigation.contact': '연락처',
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
