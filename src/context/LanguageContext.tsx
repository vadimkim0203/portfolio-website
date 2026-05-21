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
    specialty:
      'B2B & Retail Operations | Software Engineering & Data Structures Enthusiast',
    greetings: 'Hello!',
    introduction: `I'm Vadim and my experience lies in overseas B2B sales and retail operations with a background in international business development and customer relationship management. 
    Currently working in the beauty industry, supporting global partnerships, market expansion, and go-to-market operations. Skilled at understanding customers’ needs, coordinating with different partners, and delivering practical solutions. Also interested in software engineering and digital solutions that improve business efficiency and user experience.`,
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
    specialty:
      'B2B 및 리테일 운영 전문가 | 소프트웨어 엔지니어링 및 자료구조에 관심',
    greetings: '안녕하세요!',
    introduction: `안녕하세요, 저는 김바딤입니다. 해외 B2B 영업 및 리테일 운영 분야에서 경험을 쌓아왔습니다. 국제 비즈니스 개발과 고객 관계 관리를 기반으로 다양한 업무를 수행해왔습니다.
현재는 뷰티 산업에서 근무하며 글로벌 파트너십, 시장 확장, 그리고 Go-to-Market 운영을 지원하고 있습니다. 고객의 니즈를 이해하고 다양한 파트너와 협업하며 실질적인 솔루션을 제공하는 데 강점이 있습니다. 또한 비즈니스 효율성과 사용자 경험을 향상시키는 소프트웨어 엔지니어링과 디지털 솔루션에도 관심을 가지고 있습니다.`,
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
