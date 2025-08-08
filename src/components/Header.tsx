'use client';

import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './locale/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useLanguage();

  const TABS = [
    { nameKey: 'navigation.home', link: '/' },
    { nameKey: 'navigation.projects', link: '/projects' },
    { nameKey: 'navigation.activities', link: '/activities' },
    { nameKey: 'navigation.contact', link: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="font-bold text-black text-2xl dark:text-white">
        <Link href="/">VADIM KIM</Link>
      </div>
      {mounted && (
        <div className="flex items-center gap-4">
          {TABS.map((tab, index) => (
            <Link
              href={tab.link}
              key={index}
              type="button"
              className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t(tab.nameKey)}
            </Link>
          ))}
          <ThemeSwitch />
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}

export default Header;
