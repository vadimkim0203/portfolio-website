'use client';

import { useLanguage } from '@/context/LanguageContext';
import { RiEnglishInput } from 'react-icons/ri';
import { TbAlphabetKorean } from 'react-icons/tb';

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ko' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-[2px] flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer"
      aria-label={`Switch to ${locale === 'en' ? 'Korean' : 'English'}`}
    >
      {locale === 'en' ? (
        <TbAlphabetKorean className="w-5 h-5" />
      ) : (
        <RiEnglishInput className="w-5 h-5" />
      )}
    </button>
  );
}
