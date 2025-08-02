import { ReactNode } from 'react';
import { Magnetic } from './ui/magnetic';

export default function MagneticSocialLink({
  children,
  link,
  icon,
}: {
  children: ReactNode;
  link: string;
  icon: string | ReactNode;
}) {
  const iconElement =
    typeof icon === 'string' ? (
      <img
        src={icon}
        alt="social media icons"
        className="w-4 h-4 transition-all duration-200 group-hover:invert dark:invert dark:group-hover:invert"
      />
    ) : (
      <div className="transition-all duration-200 group-hover:invert dark:invert dark:group-hover:invert">
        {icon}
      </div>
    );
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        {iconElement}
      </a>
    </Magnetic>
  );
}
