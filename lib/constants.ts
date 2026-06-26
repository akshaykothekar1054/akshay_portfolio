// ── Personal Info ────────────────────────────────────────────────────────────

export const PERSON = {
  name: "Akshay Kothekar",
  title: "Full Stack Developer",
  email: "akshaykothekar3726@gmail.com",
  phone: "+91 9370410946",
  linkedin: "https://linkedin.com/in/akshay-kothekar-838a29232",
  github: "https://github.com/akshaykothekar",
  location: "Amravati, Maharashtra, India",
  summary:
    "Full Stack Developer with 3+ years of experience building scalable, production-grade web applications. Proficient in JavaScript, PHP, React.js, and Node.js with a strong focus on multi-tenant SaaS architecture, REST APIs, and performance optimization. Passionate about clean UI, developer tooling, and shipping products that solve real problems.",
} as const;

// ── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "PHP", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks",
    skills: ["React.js", "Node.js", "Bootstrap", "TailwindCSS"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "Postman", "Figma"],
  },
  {
    label: "Concepts",
    skills: ["JWT", "REST APIs", "Multi-Tenancy", "SaaS"],
  },
];

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills);

// ── Experience ───────────────────────────────────────────────────────────────

export type Experience = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  location: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Promax Scientific Developers",
    role: "Full Stack Developer",
    period: "Aug 2023 – Present",
    startDate: "2023-08",
    endDate: null,
    location: "Amravati, Maharashtra (On-site)",
    highlights: [
      "Architected and delivered a multi-tenant SaaS HRM platform used by 10+ client organizations.",
      "Built RESTful APIs in Node.js and PHP consumed by React.js frontends.",
      "Designed role-based access control (RBAC) and JWT authentication flows.",
      "Reduced page load time by 40% through code-splitting and lazy loading.",
      "Led end-to-end development of a Gym Management SaaS from requirements to deployment.",
      "Collaborated with UI/UX designers in Figma to translate wireframes into pixel-perfect interfaces.",
    ],
  },
  {
    company: "Ctronics Infotech",
    role: "Junior Web Developer",
    period: "Dec 2022 – May 2023",
    startDate: "2022-12",
    endDate: "2023-05",
    location: "Amravati, Maharashtra (On-site)",
    highlights: [
      "Developed and maintained PHP-based web applications for client projects.",
      "Integrated MySQL databases with backend services and optimized slow queries.",
      "Built responsive UI components using Bootstrap and vanilla JavaScript.",
      "Participated in code reviews and adopted Git-based version control workflows.",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "digital-content-platform",
    title: "Digital Content Platform",
    tagline: "AI-assisted multi-format content publishing tool",
    description:
      "A comprehensive platform enabling creators to draft, edit, and publish content across multiple channels. Features an AI-assisted writing module, media asset management, and analytics dashboard.",
    stack: ["React.js", "Node.js", "MySQL", "REST APIs", "JWT"],
    highlights: [
      "Implemented rich-text editor with media embedding and version history.",
      "Built an AI content-assist feature integrated via third-party API.",
      "Designed multi-role workflow (author → editor → publisher).",
      "Achieved 99.9% uptime through robust error handling and logging.",
    ],
    featured: true,
  },
  {
    id: "agendamaker",
    title: "AgendaMaker",
    tagline: "Smart meeting agenda builder with real-time collaboration",
    description:
      "A productivity tool for teams to create, share, and track meeting agendas in real time. Supports templates, action-item tracking, and email notifications.",
    stack: ["React.js", "Node.js", "PostgreSQL", "REST APIs"],
    highlights: [
      "Built real-time agenda updates using WebSocket.",
      "Created a flexible template system supporting custom agenda formats.",
      "Integrated email notification pipeline for meeting reminders.",
      "Implemented exportable PDF/DOCX agendas.",
    ],
    featured: true,
  },
  {
    id: "hrm-system",
    title: "HRM System",
    tagline: "Multi-tenant Human Resource Management SaaS",
    description:
      "An enterprise-grade HRM SaaS serving multiple client organizations from a single codebase. Covers employee lifecycle, payroll, leave management, and performance reviews.",
    stack: ["React.js", "Node.js", "PHP", "MySQL", "JWT", "Multi-Tenancy"],
    highlights: [
      "Engineered tenant isolation using schema-per-tenant PostgreSQL strategy.",
      "Built payroll engine supporting custom pay structures and tax rules.",
      "Developed leave calendar with conflict detection and approval workflows.",
      "Onboarded 10+ organizations with zero data leakage incidents.",
    ],
    featured: true,
  },
  {
    id: "gym-management-saas",
    title: "Gym Management SaaS",
    tagline: "End-to-end membership and billing platform for fitness centers",
    description:
      "A SaaS product for gym owners to manage memberships, track attendance, handle billing, and send renewal reminders. Mobile-responsive with a clean dashboard UI.",
    stack: ["React.js", "Node.js", "MySQL", "TailwindCSS", "REST APIs"],
    highlights: [
      "Led full product lifecycle from discovery to production deployment.",
      "Built automated membership renewal reminder system via SMS/email.",
      "Designed attendance tracking with biometric integration hooks.",
      "Reduced admin overhead by 60% through workflow automation.",
    ],
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

// ── Education ────────────────────────────────────────────────────────────────

export type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa: number;
};

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Sipna College of Engineering & Technology",
    period: "2019 – 2023",
    cgpa: 7.5,
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Akshay built our entire SaaS platform from scratch. His attention to detail and ability to deliver under pressure is exceptional.",
    name: "Rahul Sharma",
    role: "Founder, SaaS Startup",
    initials: "RS",
  },
  {
    quote:
      "The HRM system Akshay developed reduced our HR workload significantly. Professional, clean code, and always on time.",
    name: "Priya Mehta",
    role: "Operations Manager",
    initials: "PM",
  },
  {
    quote:
      "Great communicator and technically sharp. He turned a complex brief into a working product faster than expected.",
    name: "Amit Desai",
    role: "Product Lead",
    initials: "AD",
  },
];

// ── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
] as const;
