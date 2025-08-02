import { Github } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import React from 'react';
import StackIcon from 'tech-stack-icons';

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
    title: 'Welcome to My Personal Tech Space',
    description: 'The very first commit to my personal blog',
    link: '/projects/view/hello-world',
    uid: 'blog-1',
  },
];

export const PUBLICATION_LIST: PublicationPost[] = [
  {
    title:
      'A. Azamat, F. Asim, J. Kim and J. Lee, ”Partial Sum Quantization for Reducing ADC Size in ReRAM-Based Neural Network Accelerators”, in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 42, no. 12, pp. 4897-4908, Dec. 2023, doi: 10.1109/TCAD.2023.329446',
    link: 'https://doi.org/10.1109/TCAD.2023.3294461',
    uid: 'publication-1',
  },
  {
    title:
      'A. Azamat, J. Park, and J. Lee, ”Squeezing Accumulators in Binary Neural Networks for Extremely Resource-Constrained Applications”, In Proceedings of the 41st IEEE/ACM International Conference on Computer-Aided Design (ICCAD ’22). Association for Computing Machinery, New York, NY, USA, Article 141, 1–7, doi: 10.1145/3508352.3549418',
    link: 'https://doi.org/10.1145/3508352.3549418',
    uid: 'publication-2',
  },
  {
    title:
      'A. Azamat, F. Asim and J. Lee, ”Quarry: Quantization-based ADC Reduction for ReRAM-based Deep Neural Network Accelerators”, 2021 IEEE/ACM International Conference On Computer Aided Design (ICCAD), Munich, Germany, 2021, pp. 1-7, doi: 10.1109/ICCAD51958.2021.9643502',
    link: 'https://doi.org/10.1109/ICCAD51958.2021.9643502',
    uid: 'publication-3',
  },
  {
    title:
      'F. Asim, J. Park, A. Azamat and J. Lee. ”CSQ: Centered Symmetric Quantization for Extremely Low Bit Neural Networks”, In British Machine Vision Association (BMVA’21), November 21-24, 2021.',
    link: 'https://bmvc2022.mpi-inf.mpg.de/0538.pdf',
    uid: 'publication-4',
  },
  {
    title:
      'A. Amankhan, A. Kural, I. Temirbek, A. Abukhan, D. Mukashov, A. Azamat, K. Kudaibergenov and M. Bagheri, ”Multi-functional Smart Electricity Metering System”, 2019 IEEE International Conference on Environment and Electrical Engineering and 2019 IEEE Industrial and Commercial Power Systems Europe (EEEIC / I&CPS Europe), 2019, pp. 1-6, doi: 10.1109/EEEIC.2019.8783738',
    link: 'https://doi.org/10.1109/EEEIC.2019.8783738',
    uid: 'publication-5',
  },
];

export const PATENT_LIST: PatentPost[] = [
  {
    title:
      'H. Sim, J. Lee, and A. Azamat, ”Neural network operation apparatus and method”, US Patent Application US20240143274A1, May 2, 2024.​',
    link: 'https://patents.google.com/patent/US20240143274A1/',
    uid: 'patent-1',
  },
  {
    title:
      'J. Lee, and A. Azamat, ”Apparatus and method with neural network”, US Patent Application US20230029509A1, February 2, 2023.',
    link: 'https://patents.google.com/patent/US20230029509A1/',
    uid: 'patent-2',
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
