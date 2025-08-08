import { ReactNode } from 'react';

type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type LocalizedString = {
  en: string;
  ko: string;
};

type WorkExperience = {
  company: LocalizedString;
  title: LocalizedString;
  location: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
  link: string;
  id: string;
};

type Education = {
  name: LocalizedString;
  degree: LocalizedString;
  location: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
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
    company: {
      en: 'ThinkStorm',
      ko: 'ThinkStorm',
    },
    title: {
      en: 'Frontend engineer',
      ko: '프론트엔드 개발자',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Mar. 2025',
      ko: '2025년 3월',
    },
    end: {
      en: 'Present',
      ko: '현재',
    },
    link: 'https://thinkstorm.app/',
    id: 'work4',
  },
  {
    company: {
      en: 'Hinature (Purito Seoul)',
      ko: '하이네이처 (퓨리토 서울)',
    },
    title: {
      en: 'B2B Overseas Sales Manager',
      ko: 'B2B 해외 영업 매니저',
    },
    location: {
      en: 'Incheon, South Korea',
      ko: '인천, 대한민국',
    },
    start: {
      en: 'Jan. 2024',
      ko: '2024년 1월',
    },
    end: {
      en: 'Oct. 2024',
      ko: '2024년 10월',
    },
    link: 'https://purito.com/',
    id: 'work3',
  },
  {
    company: {
      en: 'Dinso Holdings',
      ko: '(주)딘소',
    },
    title: {
      en: 'Export Manager',
      ko: '수출 매니저',
    },
    location: { en: 'Seoul, South Korea', ko: '서울, 대한민국' },
    start: { en: 'Jun. 2023', ko: '2023년 6월' },
    end: { en: 'Nov. 2023', ko: '2023년 11월' },
    link: 'https://dinsokorea.com/',
    id: 'work2',
  },
  {
    company: {
      en: 'Uniqlo',
      ko: '유니클로',
    },
    title: {
      en: 'Store Manager',
      ko: '매장 관리자',
    },
    location: {
      en: 'Moscow, Russia',
      ko: '모스크바, 러시아',
    },
    start: {
      en: 'Mar. 2016',
      ko: '2016년 3월',
    },
    end: {
      en: 'Oct. 2022',
      ko: '2022년 10월',
    },
    link: 'https://www.uniqlo.com/us/en/',
    id: 'work1',
  },
];

export const EDUCATION: Education[] = [
  {
    name: {
      en: 'Moscow State University of Management',
      ko: 'Moscow State University of Management',
    },
    degree: {
      en: 'BSc in Political Science',
      ko: '정치학 학사',
    },
    location: {
      en: 'Moscow, Russia',
      ko: '모스크바, 러시아',
    },
    start: {
      en: 'Sep 2014',
      ko: '2014년 9월',
    },
    end: {
      en: 'Jul 2018',
      ko: '2018년 7월',
    },
    link: 'https://guu.ru/',
    id: 'education1',
  },
  {
    name: {
      en: 'Yandex EdTech',
      ko: 'Yandex EdTech',
    },
    degree: {
      en: 'Web and Multimedia App Developer',
      ko: '웹 및 멀티미디어 앱 개발자',
    },
    location: {
      en: 'Remote',
      ko: '원격',
    },
    start: {
      en: 'Nov 2023',
      ko: '2023년 11월',
    },
    end: {
      en: 'May 2025',
      ko: '2025년 5월',
    },
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
