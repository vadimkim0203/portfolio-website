import { SKILLS } from '@/app/data';
import { Magnetic } from './ui/magnetic';
import { ReactNode } from 'react';
import StackIcon from 'tech-stack-icons';

export default function MagneticSkills() {
  return (
    <div className="mt-4 flex h-fit flex-wrap items-center justify-center gap-2">
      {SKILLS.map((skill) => (
        <Magnetic key={skill.slug} springOptions={{ bounce: 0.1 }}>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-zinc-100 bg-transparent px-4 py-2 text-sm text-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600 gap-2"
          >
            <StackIcon name={skill.slug} className="w-5 h-5 rounded-full" />
            <span>{skill.name}</span>
          </button>
        </Magnetic>
      ))}
    </div>
  );
}
