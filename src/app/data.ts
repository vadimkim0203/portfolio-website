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
};

type PublicationPost = {
  title: string,
  link: string,
  uid: string,
};

type PatentPost = {
  title: string,
  link: string,
  uid: string,
};

export const PROJECTS: Project[] = [
  {
    name: "SPOCLIP Website",
    description:
      "Advanced components and templates to craft beautiful websites.",
    link: "https://www.spoclip.ai",
    video: "/videos/projects_spoclip.mp4",
    id: "spoclip",
  },
  {
    name: "Dandycv Tools",
    description:
      "Advanced components and templates to craft beautiful websites.",
    link: "https://www.dandycv.com",
    video: "/videos/projects_dandycv.mp4",
    id: "dandycv",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Data Design Engineering",
    title: "AI Engineer / Computer Vision",
    location: "Seoul, South Korea",
    start: "Apr. 2025",
    end: "Present",
    link: "https://www.datadesign.engineering",
    id: "work4",
  },
  {
    company: "Spoclip AI",
    title: "Chef Technology Officer (CTO)",
    location: "Seoul, South Korea",
    start: "Sep. 2023",
    end: "Feb. 2025",
    link: "https://www.spoclip.ai",
    id: "work3",
  },
  {
    company: "Spoclip AI",
    title: "AI Engineer",
    location: "Seoul, South Korea",
    start: "Apr. 2023",
    end: "Sep. 2025",
    link: "https://www.spoclip.ai",
    id: "work2",
  },
  {
    company: "Intelligent Computing & Codesign Lab",
    title: "Research Assistant",
    location: "Ulsan, South Korea",
    start: "Sep. 2022",
    end: "Mar. 2023",
    link: "https://iccl.unist.ac.kr/",
    id: "work1",
  },
];

export const EDUCATION: Education[] = [
  {
    name: "Ulsan National Institute of Science and Technology (UNIST)",
    degree: "MSc in Computer Science & Engineering",
    location: "Ulsan, South Korea",
    start: "2020",
    end: "2022",
    link: "https://www.unist.ac.kr/",
    id: "education1",
  },
  {
    name: "Nazarbayev University",
    degree: "BSc in Computer Science & Minor in Mathematics",
    location: "Astana, Kazakhstan",
    start: "2015",
    end: "2020",
    link: "https://www.nu.edu.kz/",
    id: "education2",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Building a Robot Librarian",
    description: "My Journey with the BNL Project in Luxembourg",
    link: "/projects/view/robot-librarian",
    uid: "blog-2",
  },
  {
    title: "Welcome to My Personal Tech Space",
    description: "The very first commit to my personal blog",
    link: "/projects/view/hello-world",
    uid: "blog-1",
  },
  // {
  //   title: "Exploring the Intersection of Design, AI, and Design Engineering",
  //   description: "How AI is changing the way we design",
  //   link: "/projects/view/exploring-the-intersection-of-design-ai-and-design-engineering",
  //   uid: "blog-0",
  // },
];

export const PUBLICATION_LIST: PublicationPost[] = [
  {
    title: "A. Azamat, F. Asim, J. Kim and J. Lee, ”Partial Sum Quantization for Reducing ADC Size in ReRAM-Based Neural Network Accelerators”, in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 42, no. 12, pp. 4897-4908, Dec. 2023, doi: 10.1109/TCAD.2023.329446",
    link: "https://doi.org/10.1109/TCAD.2023.3294461",
    uid: "publication-1",
  },
  {
    title: "A. Azamat, J. Park, and J. Lee, ”Squeezing Accumulators in Binary Neural Networks for Extremely Resource-Constrained Applications”, In Proceedings of the 41st IEEE/ACM International Conference on Computer-Aided Design (ICCAD ’22). Association for Computing Machinery, New York, NY, USA, Article 141, 1–7, doi: 10.1145/3508352.3549418",
    link: "https://doi.org/10.1145/3508352.3549418",
    uid: "publication-2",
  },
  {
    title: "A. Azamat, F. Asim and J. Lee, ”Quarry: Quantization-based ADC Reduction for ReRAM-based Deep Neural Network Accelerators”, 2021 IEEE/ACM International Conference On Computer Aided Design (ICCAD), Munich, Germany, 2021, pp. 1-7, doi: 10.1109/ICCAD51958.2021.9643502",
    link: "https://doi.org/10.1109/ICCAD51958.2021.9643502",
    uid: "publication-3",
  },
  {
    title: "F. Asim, J. Park, A. Azamat and J. Lee. ”CSQ: Centered Symmetric Quantization for Extremely Low Bit Neural Networks”, In British Machine Vision Association (BMVA’21), November 21-24, 2021.",
    link: "https://bmvc2022.mpi-inf.mpg.de/0538.pdf",
    uid: "publication-4",
  },
  {
    title: "A. Amankhan, A. Kural, I. Temirbek, A. Abukhan, D. Mukashov, A. Azamat, K. Kudaibergenov and M. Bagheri, ”Multi-functional Smart Electricity Metering System”, 2019 IEEE International Conference on Environment and Electrical Engineering and 2019 IEEE Industrial and Commercial Power Systems Europe (EEEIC / I&CPS Europe), 2019, pp. 1-6, doi: 10.1109/EEEIC.2019.8783738",
    link: "https://doi.org/10.1109/EEEIC.2019.8783738",
    uid: "publication-5",
  }
];


export const PATENT_LIST: PatentPost[] = [
  {
    title: "H. Sim, J. Lee, and A. Azamat, ”Neural network operation apparatus and method”, US Patent Application US20240143274A1, May 2, 2024.​",
    link: "https://patents.google.com/patent/US20240143274A1/",
    uid: "patent-1",
  },
  {
    title: "J. Lee, and A. Azamat, ”Apparatus and method with neural network”, US Patent Application US20230029509A1, February 2, 2023.",
    link: "https://patents.google.com/patent/US20230029509A1/",
    uid: "patent-2",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/azatkariuly",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/azatkariuly",
  },
  {
    label: "Google Scholar",
    link: "https://scholar.google.com/citations?user=vvrwfuIAAAAJ&hl=en&oi=ao",
  },
];

export const SKILLS = [
  {
    src: "/images/skills/python-ar21.svg",
    name: "python",
  },
  {
    src: "/images/skills/pytorch-ar21.svg",
    name: "pytorch",
  },
  {
    src: "/images/skills/opencv-ar21.svg",
    name: "opencv",
  },
  {
    src: "/images/skills/numpy-ar21.svg",
    name: "numpy",
  },
  {
    src: "/images/skills/reactjs-ar21.svg",
    name: "react",
  },
  {
    src: "/images/skills/nextjs-ar21.svg",
    name: "next.js",
  },
  {
    src: "/images/skills/nodejs-ar21.svg",
    name: "node.js",
  },
  {
    src: "/images/skills/expressjs-ar21.svg",
    name: "express.js",
  },
  {
    src: "/images/skills/firebase-ar21.svg",
    name: "firebase",
  },
  {
    src: "/images/skills/supabase-ar21.svg",
    name: "supabase",
  },
  {
    src: "/images/skills/postgresql-ar21.svg",
    name: "postgresql",
  },
  {
    src: "/images/skills/mongodb-ar21.svg",
    name: "mongodb",
  },
  {
    src: "/images/skills/docker-ar21.svg",
    name: "docker",
  },
  {
    src: "/images/skills/amazon_aws-ar21.svg",
    name: "aws",
  },
];

export const EMAIL = "azat.kariuly@gmail.com";
