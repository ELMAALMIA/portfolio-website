export interface Experience {
  company: string;
  role: string;
  location: string;
  type: string;
  period: string;
  achievements: string[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  period?: string;
}

export interface Article {
  title: string;
  summary: string;
  url: string;
  views: number;
  reads: number;
  published: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  expiry?: string;
  url?: string;
  skills: string[];
}

export const hero = {
  name: "Ayoub El Maalmi",
  headline: "Software Engineer | AI Integrator | Cloud-Native Architect",
  summary:
    "I engineer resilient platforms that blend Java/Spring backends, AI-driven experiences, and cloud-native automation. My focus is building systems that balance speed, safety, and clarity for cross-functional teams.",
  contact: {
    email: "elmaalmiayoub@gmail.com",
    phone: "+212 6 16 24 24 62",
    location: "Meknes, Morocco"
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/" },
    { label: "GitHub", href: "https://github.com/ELMAALMIA" },
    { label: "Medium", href: "https://medium.com/@ayoubelmaalmi" }
  ]
};

export const experiences: Experience[] = [
  {
    company: "Oracle — Java Management Service",
    role: "Research Assistant (Automation & Reporting)",
    location: "Casablanca-Settat, Morocco",
    type: "Internship",
    period: "Feb 2025 – Aug 2025",
    achievements: [
      "Built a Dropwizard service orchestrated by Jenkins to automate HTML/PDF usage reports with Chart.js visualisations, cutting processing time by 75%.",
      "Delivered a custom Jenkins UI so engineers can parameterise OCI data collection and trigger multi-region workflows on demand.",
      "Provisioned infrastructure with Terraform on OCI while meeting Oracle security controls, shipping documentation, training, and support playbooks.",
      "Updated Oracle LiveLabs workshops, improving developer guidance and hands-on cloud experience."
    ],
    stack: ["Dropwizard", "Java", "Jenkins", "Chart.js", "OCI", "Terraform", "Oracle DB", "Python"]
  },
  {
    company: "Upwork",
    role: "Software Developer (Freelance)",
    location: "Remote",
    type: "Freelance",
    period: "Sep 2023 – Sep 2024",
    achievements: [
      "Delivered cross-platform mobile apps (Flutter, React Native, Kotlin) with tailored UX and rapid release cycles for global clients.",
      "Implemented end-to-end automation using Playwright, Puppeteer, and WebdriverIO to guarantee stability across devices.",
      "Led client workshops to clarify requirements, estimate effort, and run continuous delivery without scope drift."
    ],
    stack: ["Flutter", "Kotlin", "React Native", "React", "Playwright", "Puppeteer", "REST APIs", "CI/CD"]
  },
  {
    company: "OkayEnergy",
    role: "Full-Stack Developer",
    location: "Meknes, Morocco",
    type: "Internship",
    period: "Apr 2023 – May 2023",
    achievements: [
      "Engineered a budget planning platform with React/Redux and a hardened Spring Boot API, improving financial data accuracy.",
      "Optimised PostgreSQL queries and implemented caching, reducing response times by 35%.",
      "Introduced CI/CD and peer reviews to increase release confidence and minimise production regressions."
    ],
    stack: ["React", "Redux", "Spring Boot", "REST", "PostgreSQL", "JUnit", "Jest", "AWS"]
  },
  {
    company: "2R Flèche",
    role: "Web Developer",
    location: "Meknes, Morocco",
    type: "Internship",
    period: "Apr 2022 – Jul 2022",
    achievements: [
      "Shipped a full-stack e-commerce platform with catalogue, checkout, and analytics dashboards.",
      "Applied SEO and performance tuning to grow organic traffic by 55% and orders by 150%.",
      "Shaped the UX architecture and optimised load times through caching and asset optimisation."
    ],
    stack: ["ASP.NET Core", "Blazor", "C#", "JavaScript", "MySQL", "Azure", "SEO"]
  },
  {
    company: "Provincial Directorate of Agriculture",
    role: "Full-Stack Developer",
    location: "Meknes, Morocco",
    type: "Internship",
    period: "Jul 2020",
    achievements: [
      "Designed a multi-platform absence management system (Laravel, React, Flutter) with role-based workflows and interactive calendars.",
      "Automated approval processes and HR reporting, reducing manual effort across departments."
    ],
    stack: ["Laravel", "React", "Flutter", "MySQL", "REST APIs", "Docker"]
  }
];

export const projects: Project[] = [
  {
    title: "TastyAI — Intelligent Recipe Generator",
    period: "Sep 2024 – Jan 2025",
    description:
      "A web app that produces personalised recipes using a multi-LLM orchestration layer with automated fallbacks.",
    highlights: [
      "Co-ordinated OpenAI, Google Gemini, and Mistral outputs with consistency checks and fallback logic to guarantee answers.",
      "Implemented real-time state management to track pantry ingredients, preferences, and recipe history client-side.",
      "Set up CI/CD and observability pipelines for Netlify deployments with rollout metrics and alerts."
    ],
    tech: ["Java", "Spring Boot", "TypeScript", "React", "LLM APIs", "Redis", "Netlify", "CI/CD"],
    links: [
      { label: "Live Demo", href: "https://tastyai.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ELMAALMIA/ws-recipe" }
    ]
  },
  {
    title: "Salesforce AI Assistant — Lead Scoring & Smart Emails",
    period: "Sep 2024",
    description:
      "AI-powered Salesforce integration that prioritises leads and drafts personalised outreach in seconds.",
    highlights: [
      "Automated lead scoring with CRM signals to surface high-value opportunities directly inside Salesforce.",
      "Generated contextual emails via OpenAI using lead metadata (name, company, latest interactions).",
      "Secured data exchange with OAuth 2.0 between Apex, Flows, and a Node.js REST gateway."
    ],
    tech: ["Salesforce", "Apex", "Node.js", "OpenAI API", "OAuth 2.0", "LWC", "CI/CD"],
    links: []
  },
  {
    title: "aiL — Multi-Modal Authentication Platform",
    period: "May 2024 – Jun 2024",
    description:
      "Mobile application combining face and voice recognition with near-real-time inference for secure verification.",
    highlights: [
      "Built a streaming pipeline to capture, process, and validate biometric signatures on-device.",
      "Achieved 94% accuracy using TensorFlow models optimised for mobile deployment.",
      "Crafted a guided onboarding flow with Expo and secured REST APIs for enrolment and validation."
    ],
    tech: ["React Native", "Expo", "Flask", "TensorFlow", "Python", "Docker"],
    links: [
      { label: "Mobile Repo", href: "https://github.com/ELMAALMIA/aiL" },
      {
        label: "Backend Repo",
        href: "https://github.com/Amine-H-Filali/-Authentication-App-Face-Voice-"
      }
    ]
  },
  {
    title: "UML Generator — Java Reverse Engineering",
    period: "Jan 2024",
    description:
      "Desktop utility that translates Java projects into interactive UML diagrams without external libraries.",
    highlights: [
      "Parsed projects with Java Reflection to extract classes, interfaces, attributes, and relationships on the fly.",
      "Visualised diagrams in Swing with live filtering and exportable formats.",
      "Optimised memory usage to handle large codebases smoothly."
    ],
    tech: ["Java", "Swing", "Reflection API", "Design Patterns"],
    links: [{ label: "Source Code", href: "https://github.com/ELMAALMIA/UML-Diagrams-Generator" }]
  },
  {
    title: "E-Supply-Online — Public Procurement Management",
    period: "Jan 2022 – May 2022",
    description:
      "Web platform to manage procurement cycles from RFIs to invoice tracking with full partner transparency.",
    highlights: [
      "Implemented Laravel MVC modules for workflow automation, notifications, and reporting dashboards.",
      "Modelled the solution with the Unified Process and UML artefacts to align stakeholders.",
      "Improved MySQL performance and caching strategies to support concurrent usage."
    ],
    tech: ["Laravel", "PHP", "MySQL", "jQuery", "JavaScript"],
    links: []
  }
];

export const articles: Article[] = [
  {
    title: "Practical Debugging Techniques for Java Developers",
    summary:
      "Three debugging strategies—conditional breakpoints, profiling, post-mortem analysis—to unpack complex Spring and Hibernate behaviour.",
    url: "https://medium.com/p/eyPjBuij",
    views: 76,
    reads: 50,
    published: "17 Oct 2025"
  },
  {
    title: "Event-Driven Hexagonal Architecture: Integrating RabbitMQ with Clean Architecture Principles",
    summary:
      "How to blend hexagonal architecture and event-driven patterns to keep services decoupled while scaling workloads.",
    url: "https://medium.com/p/event-driven-hexagonal-architecture",
    views: 144,
    reads: 61,
    published: "13 Sep 2025"
  },
  {
    title: "End-to-End Testing in Hexagonal Architecture: The Complete Testing Strategy",
    summary:
      "A layered testing approach to guarantee the entire hexagon works—from ports and adapters to journeys spanning domains.",
    url: "https://medium.com/p/e4i2AWFK",
    views: 227,
    reads: 197,
    published: "14 Aug 2025"
  },
  {
    title: "Implementing Hexagonal Architecture in Java: Breaking Free from Framework Tyranny",
    summary:
      "Lessons from migrating a 299K LOC Spring monolith to a domain-driven architecture with clean boundaries.",
    url: "https://medium.com/p/eGaTbJdA",
    views: 237,
    reads: 125,
    published: "14 Aug 2025"
  }
];

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle",
    issued: "Feb 2025",
    expiry: "Feb 2027",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder",
    skills: ["OCI", "Cloud Architecture", "Security"]
  },
  {
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    issued: "Mar 2024",
    skills: ["Algorithms", "Problem Solving"]
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    issued: "Feb 2024",
    skills: ["Project Planning", "Stakeholder Management"]
  },
  {
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    issued: "Nov 2023",
    skills: ["Java", "Object-Oriented Design"]
  },
  {
    title: "Git Essential Training: The Basics",
    issuer: "LinkedIn Learning",
    issued: "Nov 2023",
    skills: ["Git", "Version Control"]
  },
  {
    title: "Java: Testing with JUnit",
    issuer: "LinkedIn Learning",
    issued: "Nov 2023",
    skills: ["JUnit", "Testing"]
  },
  {
    title: "Java: Mastering Multithreading",
    issuer: "LinkedIn Learning",
    issued: "Nov 2023",
    skills: ["Concurrency", "Java"]
  }
];

export const stats = {
  medium: {
    monthly: {
      views: 36,
      reads: 20,
      presentations: 77
    },
    lifetime: {
      views: 237,
      reads: 197,
      topArticle: "Implementing Hexagonal Architecture in Java"
    }
  },
  linkedIn: {
    profileViews: 341,
    postImpressions: 1523,
    searchAppearances: 90
  }
};

export const skills = {
  backend: ["Java", "Kotlin", "Spring Boot", "Dropwizard", "Node.js", "Quarkus"],
  frontend: ["React", "Angular", "TypeScript", "Next.js", "React Native"],
  cloud: ["OCI", "Azure", "AWS", "Terraform", "Docker", "Kubernetes", "Jenkins"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DB2"],
  quality: ["JUnit", "Mockito", "Playwright", "Puppeteer", "TDD"],
  languages: ["Arabic (Native)", "French (B2)", "English (B2)"]
};

export const education = [
  {
    degree: "Master’s Degree — Software Quality",
    school: "Université Sidi Mohammed Ben Abdellah, Fes",
    period: "2023 – 2025",
    mention: "Graduated with honours"
  },
  {
    degree: "Professional Bachelor — Information Systems & Communication",
    school: "École Supérieure de Technologie de Meknès",
    period: "2022 – 2023",
    mention: "Graduated with honours"
  },
  {
    degree: "University Diploma of Technology — Computer Science",
    school: "École Supérieure de Technologie de Meknès",
    period: "2020 – 2022",
    mention: "Graduated with honours"
  }
];

