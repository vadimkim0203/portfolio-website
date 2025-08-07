'use client';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hover:scale-[1.15] active:scale-105 transition-all">
      {theme === 'light' ? (
        <MoonIcon
          className="h-4 w-4 cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <SunIcon
          className="h-4 w-4 cursor-pointer"
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
}

export default ThemeSwitch;
