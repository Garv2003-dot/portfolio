export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  image: string;
  links: {
    live?: string;
    github?: string;
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  features: string[];
  challenges: { title: string; description: string }[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: 'packvision',
    title: 'Packvision',
    subtitle: 'Intelligent Packaging Monitoring System',
    description:
      'An enterprise-grade video analytics dashboard with real-time webcam media capture and secure client-to-cloud upload workflows.',
    problem:
      'Hardware constraints and security requirements necessitate a robust pipeline for capturing and storing packaging media with strict access controls.',
    solution:
      'Architected a high-speed React/TypeScript dashboard on Vercel, leveraging browser APIs for media capture and secure S3 presigned URLs for uploads.',
    image: '/packvision-logo.jpg',
    links: {
      github: 'https://github.com/Garv2003-dot', // Placeholder for now
    },
    techStack: [
      {
        category: 'Frontend',
        items: ['React 19', 'TypeScript', 'Tailwind CSS'],
      },
      { category: 'State & Deploy', items: ['Zustand', 'Vercel'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'S3'] },
    ],
    features: [
      'Real-time webcam media capture via browser APIs',
      'Secure client-to-cloud S3 upload workflows via presigned URLs',
      'Role-Based Access Control enforcing UI permissions and API boundaries',
      'High-speed delivery and edge-caching on Vercel',
    ],
    challenges: [
      {
        title: 'Secure Upload Pipelines',
        description:
          'Designing a secure and efficient way to upload large media files directly from the client to S3 without overwhelming the server.',
      },
      {
        title: 'Dynamic Access Control',
        description:
          'Implementing robust JWT middleware to dynamically enforce permissions across different user roles like Admin and Packager.',
      },
    ],
    outcomes: [
      'Rapid frontend deployment with high availability',
      'Secure and scalable hardware-to-cloud media pipeline',
    ],
  },
  {
    slug: 'vcrew',
    title: 'vCrew',
    subtitle: 'AI-Driven Resource Allocation System',
    description:
      'A fault-tolerant resource allocation system powered by AI intent parsing and a deterministic matching algorithm.',
    problem:
      'Translating unstructured user inputs into actionable resource allocation commands requires complex parsing and validation.',
    solution:
      'Integrated LLM APIs to establish a natural language processing layer that translates unstructured inputs into strictly validated JSON schemas.',
    image: '/vcrew-logo.png',
    links: {
      github: 'https://github.com/Garv2003-dot', // Placeholder for now
    },
    techStack: [
      { category: 'Frontend', items: ['Next.js 14', 'React 18'] },
      {
        category: 'Backend & AI',
        items: ['Express', 'LLM APIs', 'AI Orchestration'],
      },
      { category: 'Architecture', items: ['Turborepo', 'Supabase'] },
    ],
    features: [
      'AI intent parsing for NLP layer',
      'Turborepo-based scalable monorepo architecture',
      'Real-time state synchronization for bandwidth constraints',
      'Deterministic matching algorithm for demand-supply workflows',
    ],
    challenges: [
      {
        title: 'AI Intent Validation',
        description:
          'Ensuring that the natural language processing layer consistently produces strictly validated JSON schemas without hallucination.',
      },
      {
        title: 'Monorepo Setup',
        description:
          'Cleanly isolating the Next.js client and Express AI layer to enable rapid parallel iteration.',
      },
    ],
    outcomes: [
      'Automated demand-supply workflows',
      'Bidirectional consistency between project bandwidth and employee utilization',
    ],
  },
];
