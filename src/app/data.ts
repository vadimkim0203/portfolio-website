import { ReactNode } from 'react';

type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type Education = {
  name: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
  icon: string | ReactNode;
};

type PublicationPost = {
  title: string;
  link: string;
  uid: string;
};

type PatentPost = {
  title: string;
  link: string;
  uid: string;
};

export type Skill = {
  name: string;
  slug: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'ThinkStorm',
    description: 'Collaborative platform for developers and innovators.',
    link: 'https://thinkstorm.app/',
    video: '/videos/thinkstorm.mov',
    id: 'thinkstorm',
  },
  {
    name: 'Gena',
    description: 'Dashboard panel for data analytics',
    link: 'https://www.gena.co/',
    video: '/videos/gena.mov',
    id: 'gena',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ThinkStorm',
    title: 'Frontend engineer',
    location: 'Seoul, South Korea',
    start: 'Mar. 2025',
    end: 'Present',
    link: 'https://thinkstorm.app/',
    id: 'work4',
  },
  {
    company: 'Hinature (Purito Seoul)',
    title: 'B2B Overseas Sales Manager',
    location: 'Incheon, South Korea',
    start: 'Jan. 2024',
    end: 'Oct. 2024',
    link: 'https://purito.com/',
    id: 'work3',
  },
  {
    company: 'Dinso Holdings',
    title: 'Export Manager',
    location: 'Seoul, South Korea',
    start: 'Jun. 2023',
    end: 'Nov. 2023',
    link: 'https://dinsokorea.com/',
    id: 'work2',
  },
  {
    company: 'Uniqlo',
    title: 'Store Manager',
    location: 'Moscow, Russia',
    start: 'Mar. 2016',
    end: 'Oct. 2022',
    link: 'https://www.uniqlo.com/us/en/',
    id: 'work1',
  },
];

export const EDUCATION: Education[] = [
  {
    name: 'Moscow State University of Management',
    degree: 'BSc in Political Science',
    location: 'Moscow, Russia',
    start: 'Sep 2014',
    end: 'Jul 2018',
    link: 'https://guu.ru/',
    id: 'education1',
  },
  {
    name: 'Yandex EdTech',
    degree: 'Web and Multimedia App Developer',
    location: 'Remote',
    start: 'Nov 2023',
    end: 'May 2025',
    link: 'https://practicum.yandex.com/',
    id: 'education2',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building an E-Commerce B2B Korean Apparel platform',
    description:
      'Building a platform for connecting international buyers all around the world.',
    link: 'https://www.oceanstore.kr/en',
    uid: 'blog-2',
  },
  {
    title: 'Procharity',
    description: 'Intellectual support for charitable foundations.',
    link: 'https://procharity.ru/',
    uid: 'blog-1',
  },
];

export const PUBLICATION_LIST: PublicationPost[] = [
  {
    title: 'CodeSeoul Backend Bootcamp ',
    link: 'https://www.linkedin.com/posts/kim-vadim_on-the-final-day-of-the-codeseoul-backend-activity-7293836988409860096-rImd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkDHSIB85vpEyzTFWg-51yFPPnfjrAHbys',
    uid: 'publication-1',
  },
  {
    title: 'Supabase Launch Week 15',
    link: 'https://www.linkedin.com/posts/florianldt_yesterday-i-had-a-pleasure-to-be-part-of-activity-7356881878588534784-WByQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkDHSIB85vpEyzTFWg-51yFPPnfjrAHbys',
    uid: 'publication-2',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vadimkim0203',
    icon: '/icons/github.svg',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kim-vadim/',
    icon: './icons/linkedin.svg',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kimvadim_/',
    icon: '/icons/instagram (1).svg',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'JavaScript',
    slug: 'js',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
  },
  {
    name: 'React',
    slug: 'react',
  },
  {
    name: 'NextJS',
    slug: 'nextjs',
  },
  {
    name: 'TailwindCSS',
    slug: 'tailwindcss',
  },
  {
    name: 'Git',
    slug: 'git',
  },
  {
    name: 'shadCN',
    slug: 'shadcnui',
  },
  {
    name: 'Framer',
    slug: 'framer',
  },
  {
    name: 'AWS EC2',
    slug: 'aws',
  },
  {
    name: 'Supabase',
    slug: 'supabase',
  },
  {
    name: 'Docker',
    slug: 'docker',
  },
  {
    name: 'Tanstack Query',
    slug: 'reactquery',
  },
  {
    name: 'i18n',
    slug: 'i18next',
  },
  {
    name: 'vercel',
    slug: 'vercel',
  },
  {
    name: 'redux',
    slug: 'redux',
  },
];

export const EMAIL = 'vadim.kim0203@gmail.com';
