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
  description: LocalizedString;
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

type Activity = {
  title: string;
  description: string;
  images: string[];
  uid: string;
  link?: string;
};

export type Skill = {
  name: string;
  slug: string;
  icon?: string;
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
      en: 'Amorepacific',
      ko: '아모레퍼시픽',
    },
    title: {
      en: 'Key Account Manager',
      ko: 'B2B 해외 영업 매니저',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Sep. 2025',
      ko: '2025년 9월',
    },
    end: {
      en: 'Present',
      ko: '현재',
    },
    description: {
      en: `Since joining, I have been in charge of the growth and go-to-market strategy of Amorepacific's premium haircare portfolio - [**Amos Professional**](https://www.amosprofessional.com/) and [**Ayunche**](https://www.ayunche.com/) with a core focus on entering and developing within European, Russian, and CIS markets. My multi-focused role connects international business relations, regulatory compliance, and technical process optimization.

Key Areas:

Market Development & Compliance: Identifying potential business partners and handling market-entry requirements, including obtaining European regulatory certifications such as CPNP and SCPN to ensure seamless compliance and distribution.

Influencer Marketing & Client Relations: Managing communication with Russian and English speaking beauty influencers to build brand image through targeted marketing campaigns.

Global Event Representation: Serving as a brand manager at major global events, including "Salon Connection"-**Amos Professional**'s largest flagship convention where I engaged with international clients and introduced them premium product lineup and services.

Workflow Automation: Applying a passion for optimization and data-structures to build efficient corporate workflows; designed and deployed automated systems to navigate influencer scouting pipelines and optimize budget-spending tracking.`,
      ko: `입사 이후, 아모레퍼시픽의 프리미엄 헤어케어 포트폴리오 - [**아모스 프로페셔널**](https://www.amosprofessional.com/)과 [**아윤채**](https://www.ayunche.com/)의 성장 및 시장 진입 전략을 담당하고 있습니다. 유럽, 러시아, CIS 시장 진입 및 개발에 주력하고 있으며, 국제 비즈니스 관계, 규제 준수, 기술 프로세스 최적화를 연결하는 다층적 역할을 수행합니다.

주요 업무 분야:

시장 개발 & 규제 준수: 잠재적 비즈니스 파트너를 발굴하고 시장 진입 요건을 처리하며, 유럽 규제 인증(CPNP, SCPN)을 획득하여 원활한 규제 준수 및 유통을 보장합니다.

인플루언서 마케팅 & 클라이언트 관계: 러시아어 및 영어 사용 뷰티 인플루언서와의 소통을 관리하여 타겟 마케팅 캠페인을 통한 브랜드 이미지 구축을 주도합니다.

글로벌 이벤트 대표: 주요 글로벌 이벤트에서 브랜드 매니저로 활동하며, 아모스 프로페셔널의 최대 규모 플래그십 컨벤션인 "살롱 커넥션"에서 국제 클라이언트와 소통하고 프리미엄 제품 및 서비스를 소개합니다.

워크플로우 자동화: 최적화 및 자료구조 개선에 대한 열정을 바탕으로 효율적인 기업 워크플로우를 구축하며, 인플루언서 스카우팅 파이프라인 및 예산 지출 추적 시스템을 자동화하여 운영 효율성을 극대화합니다.`,
    },
    link: 'https://www.apgroup.com/int/en/index.html',
    id: 'work5',
  },
  {
    company: {
      en: 'Oceanstore',
      ko: 'Oceanstore',
    },
    title: {
      en: 'Key Account Manager / Developer',
      ko: 'B2B 해외 영업 매니저 / 개발자',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Nov. 2024',
      ko: '2024년 11월',
    },
    end: {
      en: 'Aug. 2025',
      ko: '2025년 08월',
    },
    description: {
      en: 'Managed B2B sales operations and developed full-stack solutions for e-commerce platform. Coordinated with international clients and implemented feature improvements using NextJS and NestJS.',
      ko: 'B2B 판매 운영을 관리하고 전자상거래 플랫폼을 위한 전체 스택 솔루션을 개발했습니다. 국제 클라이언트와 협력하고 React 및 Node.js를 사용하여 기능 개선을 구현했습니다.',
    },
    link: 'https://oceanstore.kr',
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
    description: {
      en: `Drove overseas B2B sales strategy for Korean beauty brand with focus on expanding international market presence.

Sales Performance:
- Achieved 100% gains of regional margin sales profits in Middle East region (U.A.E., Saudi Arabia)
- Generated 10% of total margin profits after the first fiscal year

Strategic Partnerships:
Developed partnerships with leading global cosmetic retailers including Watsons (Turkey and Singapore), Sephora (UK), and Gold Apple (Qatar).

Global B2B Network:
Managed B2B partnerships of various scales worldwide including Skinsider (UK), Know to Glow (Sweden), Dermaspace (Denmark), and Senti Senti (US).

Additional Initiatives:
- Influence Marketing coordination
- InterCHARM Korea Exhibitor`,
      ko: `K-뷰티 브랜드의 해외 B2B 영업 전략을 주도하며 국제 시장 확대에 주력했습니다.

판매 성과:
- 중동 지역(U.A.E., 사우디아라비아)의 지역 마진 판매 이익에서 100% 증가 달성
- 첫 회계년도 이후 총 마진 이익의 10% 기여

전략적 파트너십:
Watsons(터키 및 싱가포르), Sephora(영국), Gold Apple(카타르)를 포함한 주요 글로벌 화장품 소매업체와 파트너십 구축

글로벌 B2B 네트워크:
Skinsider(영국), Know to Glow(스웨덴), Dermaspace(덴마크), Senti Senti(미국) 등 다양한 규모의 B2B 파트너십 관리

추가 이니셔티브:
- 인플루언서 마케팅 조율
- InterCHARM Korea 참전`,
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
      en: 'Key Account Manager',
      ko: 'B2B 해외 영업 매니저',
    },
    location: { en: 'Seoul, South Korea', ko: '서울, 대한민국' },
    start: { en: 'Jun. 2023', ko: '2023년 6월' },
    end: { en: 'Nov. 2023', ko: '2023년 11월' },
    description: {
      en: "As an exclusive distributor of Manyo brand I helped to identify and secure 30% of new customers, expanding the company's client base across the world and contributing to revenue growth. Integrated Bitrix24 CRM system. Managed the process of integration, resulting in a 15% reduction in order processing. Improved the out-of-stock ratio by 15%.",
      ko: 'Manyo 브랜드의 독점 유통업체로서 30%의 신규 고객을 확보하고 전 세계 기업 고객층을 확장하여 매출 성장에 기여했습니다. Bitrix24 CRM 시스템을 통합했으며, 통합 프로세스를 관리하여 주문 처리 시간을 15% 단축했습니다. 재고 부족 비율을 15% 개선했습니다.',
    },
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
    description: {
      en: `Managed a smaller Uniqlo store with a team of 20+ staff members. Applied leadership skills to develop a well-connected and efficient team, delivering exceptional customer service and exceeding sales targets. Sales increasing 110% compared to the previous years.

Transitioned to a larger Uniqlo flagship store with a dynamic team of 150+ staff members. Sales increasing 108% compared to the previous years. Staff members conversion reduced by 10%

Planned seasonal zoning and visual presentation of the store. Reached +30% of monthly sales through proper planning in one of the biggest Uniqlo stores (top 5 sales store in global charts).

Invested in the professional development of team members through regular training sessions, performance evaluations, and mentorship programs. Recognized for building a skilled and motivated team. 5% increase in management positions through focused training programs and mentorship initiatives.

Enhanced the diversity of the staff by actively hiring and supporting members with hearing loss. Promoted an inclusive work environment where everyone, regardless of abilities, contributed to the success of the team.

Prioritized and upheld exceptional customer service standards, resulting in improved customer satisfaction scores through Voice of Customers system. 95% of satisfied customer.`,
      ko: `20명 이상의 직원 팀으로 소규모 유니클로 매장을 운영했습니다. 리더십 기술을 활용하여 결집력 있고 효율적인 팀을 구축하고, 뛰어난 고객 서비스를 제공하며 판매 목표를 초과 달성했습니다. 전년 대비 110% 매출 증가.

규모가 큰 유니클로 플래그십 매장으로 이전하여 150명 이상의 역동적인 팀을 관리했습니다. 전년 대비 108% 매출 증가. 직원 이탈률 10% 감소.

계절별 존 계획 및 매장 비주얼 프레젠테이션을 기획했습니다. 유니클로의 최대 규모 매장 중 하나(글로벌 차트 상위 5개 매장)에서 적절한 계획을 통해 월간 판매량 30% 이상 증가 달성.

정기적인 교육 세션, 성과 평가, 멘토십 프로그램을 통해 직원의 전문성 발전에 투자했습니다. 숙련되고 동기부여된 팀 구축으로 인정받았습니다. 중점적인 교육 프로그램과 멘토십 이니셔티브를 통해 관리 직책 5% 증가 달성.

청각 장애를 가진 직원을 적극적으로 채용하고 지원하여 직원 다양성을 향상시켰습니다. 능력에 관계없이 모두가 팀의 성공에 기여하는 포용적인 근무 환경을 조성했습니다.

뛰어난 고객 서비스 기준을 우선시하고 유지하여 Voice of Customers 시스템을 통한 고객 만족도 점수 개선을 달성했습니다. 95%의 고객 만족도.`,
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
    link: 'https://www.oceanstore.kr',
    uid: 'blog-2',
  },
  {
    title: 'Procharity',
    description: 'Intellectual support for charitable foundations.',
    link: 'https://procharity.ru/',
    uid: 'blog-1',
  },
];

export const ACTIVITY_LIST: Activity[] = [
  {
    title: 'Uniqlo Manager Candidate Program Photo Shoot',
    description:
      'Took part in Uniqlo photo shoot session for Uniqlo manager candidate program',
    images: [
      '/images/uniqlo1.jpeg',
      '/images/uniqlo2.jpeg',
      '/images/uniqlo3.jpeg',
      '/images/uniqlo4.jpeg',
      '/images/uniqlo5.jpeg',
    ],
    uid: 'activity-1',
  },
  {
    title: 'Amos Professional Workshop',
    description:
      'Participated in Amos Professional Workshop where we discussed development plans for the next fiscal year. Key focus areas included strategic marketing plans for entering new European and Asian markets, identifying emerging market opportunities, and optimizing budget allocation for regional expansion initiatives.',
    images: ['/images/amosWorkshop.png'],
    uid: 'activity-2',
  },
  {
    title:
      'Field Trip with Mongolian Partners to Amorepacific Factory and Botanical Garden',
    description:
      "Organized a visit with Mongolian business partners to Amorepacific's facilities in Asan, including the factory, headquarters, and botanical garden. Explored the company's production processes, innovative technologies, and sustainable practices. Learned how natural ingredients are cultivated and selected from the botanical garden before being used in product development, while also discussing potential partnership opportunities.",
    images: [
      '/images/Mongolia1.jpg',
      '/images/Mongolia2.jpg',
      '/images/Mongolia3.jpg',
      '/images/Mongolia4.jpg',
    ],
    uid: 'activity-3',
    link: 'https://www.instagram.com/p/DXUS0O5zV4Q/',
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
    name: 'Russian',
    slug: 'russian',
    icon: '/icons/russian.svg',
  },
  {
    name: 'English',
    slug: 'english',
    icon: '/icons/english.svg',
  },
  {
    name: 'Korean',
    slug: 'korean',
    icon: '/icons/korean.svg',
  },
  {
    name: 'P&L Simulation',
    slug: 'p-l-simulation',
    icon: '/icons/p-l-simulation.svg',
  },
  {
    name: 'Sales & Stock Analysis',
    slug: 'sales-stock-analysis',
    icon: '/icons/sales-stock-analysis.svg',
  },
  {
    name: 'Trends Spotting',
    slug: 'trends-spotting',
    icon: '/icons/trends-spotting.svg',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
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
    name: 'redux',
    slug: 'redux',
  },
  {
    name: 'Railway',
    slug: 'railway',
  },
  {
    name: 'NestJS',
    slug: 'nestjs',
  },
];

export const EMAIL = 'vkim0203@gmail.com';
