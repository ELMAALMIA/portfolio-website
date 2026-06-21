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
  category?: "java" | "kotlin" | "ai" | "fullstack";
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
  headline: "Fullstack Developer | Java / Kotlin | Spring Boot",
  summary:
    "Fullstack Java/Kotlin Developer with hands-on experience building backend services and preparing applications for cloud environments. Focused on delivering reliable and scalable solutions through clean code and close collaboration with teams.",
  contact: {
    email: "elmaalmiayoub@gmail.com",
    phone: "+212 6 16 24 24 62",
    location: "Rabat, Morocco"
  },
  cvUrl: "/Ayoub_EL_MAALMI_Software_Engineer_Java_Kotlin_Spring.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/" },
    { label: "GitHub", href: "https://github.com/ELMAALMIA" },
    { label: "Medium", href: "https://medium.com/@ayoubelmaalmi" }
  ]
};

export const experiences: Experience[] = [
  {
    company: "2SIS",
    role: "Fullstack Developer",
    location: "Remote",
    type: "Freelance",
    period: "Oct 2025 – Present",
    achievements: [
      "Built a mobile application with shared business logic using Kotlin Multiplatform (KMM), ensuring consistency and scalability across platforms.",
      "Architected a PSP integration handling 1,000+ transactions daily with a 99.9% success rate through rigorous error-management.",
      "Worked with stakeholders to improve and maintain a real-world car reservation system."
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Kotlin", "KMM", "Git", "CI/CD"]
  },
  {
    company: "Oracle — Java Platform",
    role: "Software Engineer",
    location: "Casablanca, Morocco",
    type: "Internship",
    period: "Feb 2025 – Aug 2025",
    achievements: [
      "Automated JMS product reporting using Java and Spring Boot, reducing manual effort by 90% and providing leadership with real-time KPI visibility on OCI.",
      "Engineered a JMS-based data pipeline for automated ingestion and transformation, eliminating manual data entry errors and ensuring data integrity across environments.",
      "Developed an interactive dashboard using Chart.js to allow stakeholders to visualise and extract actionable business insights from JMS usage data.",
      "Deployed containerised microservices to OCI production environments using Terraform for Infrastructure as Code (IaC)."
    ],
    stack: ["Java", "Spring Boot", "Python", "Shell", "JavaScript", "Chart.js", "Oracle DB", "Jenkins", "OCI", "Terraform"]
  },
  {
    company: "OkayEnergy",
    role: "Fullstack Developer",
    location: "Meknes, Morocco",
    type: "Internship",
    period: "Apr 2023 – May 2023",
    achievements: [
      "Developed a mobile application for monitoring and simulating budgets related to gas stations using Kotlin and Spring Boot.",
      "Collaborated with non-technical stakeholders to translate business needs into functional application features."
    ],
    stack: ["Java", "Spring Boot", "Kotlin", "XML", "React"]
  },
  {
    company: "2R Flèche",
    role: "Backend Java Developer",
    location: "Remote",
    type: "Internship",
    period: "Apr 2022 – Jul 2022",
    achievements: [
      "Developed RESTful backend services for an e-commerce platform and handled deployment on AWS.",
      "Collaborated with the team to improve API reliability, maintainability, and deployment stability."
    ],
    stack: ["Java", "AWS", "REST APIs", "MySQL", "JWT"]
  }
];

export const projects: Project[] = [
  {
    title: "Morocco Tourism App",
    period: "2025",
    description:
      "Fullstack tourism platform with a microservices-based Java backend exposing REST APIs, a React frontend, and AI-powered content assistance via LLM APIs.",
    highlights: [
      "Designed a microservices architecture with Spring Boot, ensuring loose coupling and independent deployability.",
      "Integrated LLM APIs through a Python FastAPI gateway for AI-powered content generation and recommendations.",
      "Containerised all services with Docker and orchestrated with Nginx for production-ready deployment."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Python", "FastAPI", "LLM APIs", "React", "Docker", "Nginx"],
    links: [
      { label: "Live Demo", href: "https://assad-tourist-app-mvp.vercel.app/" },
  
    ],
    category: "java"
  },
  {
    title: "TastyAI — Intelligent Recipe Generator",
    period: "Sep 2024 – Jan 2025",
    description:
      "Spring Boot backend orchestrating multiple LLMs (OpenAI, Gemini, Mistral) with automated fallbacks, paired with a React/TypeScript frontend.",
    highlights: [
      "Built a Java/Spring Boot service layer to coordinate LLM outputs with consistency checks and fallback logic.",
      "Implemented Redis caching for API responses, reducing LLM call costs and improving response times.",
      "Set up CI/CD and observability pipelines for deployments with rollout metrics and alerts."
    ],
    tech: ["Java", "Spring Boot", "TypeScript", "React", "LLM APIs", "Redis", "Netlify", "CI/CD"],
    links: [
      { label: "Live Demo", href: "https://tastyai.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ELMAALMIA/ws-recipe" }
    ],
    category: "java"
  },
  {
    title: "Custom Java Testing Framework",
    period: "2024",
    description:
      "Lightweight testing framework built from scratch using Java annotations and reflection to discover, execute, and report on tests.",
    highlights: [
      "Leveraged Java Reflection API and custom annotations to auto-discover and execute test methods at runtime.",
      "Implemented test lifecycle hooks (@BeforeEach, @AfterEach) and assertion utilities without external dependencies.",
      "Generated structured test reports with pass/fail summaries, execution times, and stack traces."
    ],
    tech: ["Java", "Reflection API", "Annotations", "Maven", "Unit Testing"],
    links: [
      { label: "Source Code", href: "https://github.com/ELMAALMIA/Simple-Test-Framework-" }
    ],
    category: "java"
  },
  {
    title: "Salesforce AI Assistant — Lead Scoring & Smart Emails",
    period: "Sep 2024",
    description:
      "AI-powered Salesforce integration that prioritises leads and drafts personalised outreach, with a backend REST gateway handling secure data exchange.",
    highlights: [
      "Automated lead scoring with CRM signals to surface high-value opportunities directly inside Salesforce.",
      "Generated contextual emails via OpenAI using lead metadata (name, company, latest interactions).",
      "Secured data exchange with OAuth 2.0 between Apex, Flows, and a REST gateway."
    ],
    tech: ["Salesforce", "Apex", "Node.js", "OpenAI API", "OAuth 2.0", "LWC", "CI/CD"],
    links: [],
    category: "ai"
  },
  {
    title: "aiL — Multi-Modal Authentication Platform",
    period: "May 2024 – Jun 2024",
    description:
      "Mobile application combining face and voice recognition with near-real-time inference for secure biometric verification.",
    highlights: [
      "Built a streaming pipeline to capture, process, and validate biometric signatures on-device.",
      "Achieved 94% accuracy using TensorFlow models optimised for mobile deployment.",
      "Designed secured REST APIs following clean architecture principles for enrolment and validation."
    ],
    tech: ["React Native", "Expo", "Flask", "TensorFlow", "Python", "Docker"],
    links: [
      { label: "Mobile Repo", href: "https://github.com/ELMAALMIA/aiL" },
      { label: "Backend Repo", href: "https://github.com/Amine-H-Filali/-Authentication-App-Face-Voice-" }
    ],
    category: "ai"
  },
  {
    title: "UML Generator — Java Reverse Engineering",
    period: "Jan 2024",
    description:
      "Pure Java desktop utility that translates Java projects into interactive UML class diagrams using Reflection API — zero external libraries.",
    highlights: [
      "Parsed projects with Java Reflection to extract classes, interfaces, attributes, and relationships on the fly.",
      "Visualised diagrams in Swing with live filtering and exportable formats.",
      "Optimised memory usage to handle large codebases with hundreds of classes smoothly."
    ],
    tech: ["Java", "Swing", "Reflection API", "Design Patterns"],
    links: [{ label: "Source Code", href: "https://github.com/ELMAALMIA/UML-Diagrams-Generator" }],
    category: "java"
  },
  {
    title: "E-Supply-Online — Public Procurement Management",
    period: "Jan 2022 – May 2022",
    description:
      "Web platform managing procurement cycles from RFIs to invoice tracking with workflow automation and reporting dashboards.",
    highlights: [
      "Implemented MVC modules for workflow automation, notifications, and reporting dashboards.",
      "Modelled the solution with the Unified Process and UML artefacts to align stakeholders.",
      "Improved MySQL performance and caching strategies to support concurrent usage."
    ],
    tech: ["Laravel", "PHP", "MySQL", "jQuery", "JavaScript"],
    links: [],
    category: "fullstack"
  }
];

export const articles: Article[] = [
  {
    title: "End-to-End Testing in Hexagonal Architecture: The Complete Testing Strategy",
    summary:
      "A layered testing approach for Java applications — from ports and adapters to integration journeys spanning domains.",
    url: "https://medium.com/@ayoubelmaalmi/end-to-end-testing-in-hexagonal-architecture-the-complete-testing-strategy-e40bf704f359",
    views: 353,
    reads: 357,
    published: "14 Aug 2025"
  },
  {
    title: "Event-Driven Hexagonal Architecture: Integrating RabbitMQ with Clean Architecture Principles",
    summary:
      "How to blend hexagonal architecture and event-driven patterns to keep Java services decoupled while scaling workloads.",
    url: "https://medium.com/@ayoubelmaalmi/event-driven-hexagonal-architecture-integrating-rabbitmq-with-clean-architecture-principles-d9a5aaa2cd4e",
    views: 275,
    reads: 188,
    published: "13 Sep 2025"
  },
  {
    title: "Implementing Hexagonal Architecture in Java: Breaking Free from Framework Tyranny",
    summary:
      "Lessons from migrating a 299K LOC Spring monolith to a domain-driven hexagonal architecture with clean boundaries.",
    url: "https://medium.com/@ayoubelmaalmi/implementing-hexagonal-architecture-in-java-breaking-free-from-framework-tyranny-273cfedbc735",
    views: 284,
    reads: 130,
    published: "14 Aug 2025"
  },
  {
    title: "Practical Debugging Techniques for Java Developers",
    summary:
      "Three debugging strategies — conditional breakpoints, profiling, post-mortem analysis — to unpack complex Spring and Hibernate behaviour.",
    url: "https://medium.com/@ayoubelmaalmi/practical-debugging-techniques-for-java-developers-c0a673ed4bea",
    views: 210,
    reads: 94,
    published: "17 Oct 2025"
  },
  {
    title: "Setting Up an OCI Instance as a Jenkins Node",
    summary:
      "Step-by-step guide to configuring Oracle Cloud Infrastructure instances as Jenkins build agents for CI/CD pipelines.",
    url: "https://medium.com/@ayoubelmaalmi/setting-up-an-oci-instance-as-a-jenkins-node-0fec4b0758e0",
    views: 129,
    reads: 20,
    published: "1 Dec 2025"
  },
  {
    title: "Building a Custom Java Test Framework and Running It in GitHub Actions",
    summary:
      "Creating a lightweight testing framework from scratch using Java Reflection and annotations, then integrating it into CI/CD workflows.",
    url: "https://medium.com/@ayoubelmaalmi/building-a-custom-java-test-framework-and-running-it-in-github-actions-e968bffc7ffc",
    views: 74,
    reads: 19,
    published: "28 Dec 2025"
  }
, {
  title: "Setting Up a Big Data Architecture with Spring Boot and MongoDB Sharding (in french)",
  summary:
    "Designing and implementing a scalable Big Data architecture using Spring Boot and MongoDB Sharding, covering cluster setup, data distribution, and performance considerations.",
  url: "https://medium.com/@ayoubelmaalmi/mise-en-place-dune-architecture-big-data-avec-spring-boot-et-mongodb-sharding-94f72fb80666",
  views: 50,
  reads: 50,
  published: "04 Jan 2025"
}


];

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle",
    issued: "Feb 2025",
    expiry: "Feb 2027",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4CED6235E812F8E0B098C815D719F8F607D5CD4F5C3E1F9C7F99947CAE5A3272",
    skills: ["OCI", "Cloud Architecture", "Security"]
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    issued: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/FK5UP9NWH3AL",
    skills: ["Project Planning", "Stakeholder Management"]
  },
  {
    title: "The Complete Android + Kotlin Developer Course™",
    issuer: "Udemy",
    issued: "Nov 2023",
    url: "https://www.udemy.com/certificate/UC-c22ea441-ff75-4fb1-8d72-caeb7b9c0cf0/",
    skills: ["Kotlin", "KMM", "Android", "Kotlin Multiplatform"]
  },
  {
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    issued: "Nov 2023",
    url: "https://www.hackerrank.com/certificates/b56ee27642ad",
    skills: ["Java", "Object-Oriented Design"]
  },

  {
    title: "Java: Mastering Multithreading",
    issuer: "LinkedIn Learning",
    issued: "Nov 2023",
    url: "https://www.linkedin.com/learning/certificates/55479dbc9f416dfe0288c651dbb42c6f5bc7e481406fb79a008f22a5a4dfaa2b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bx54y9qJ6SQmAyqTQgKkwiw%3D%3D",
    skills: ["Concurrency", "Java", "Performance"]
  }
];

export const coreSkills = {
  "Backend Development": ["Java", "Kotlin", "Spring / Spring Boot", "Spring Ecosystem", "RESTful APIs"],
  "Frontend Development": ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle Database"],
  "DevOps & Quality": ["OCI", "Jenkins", "Git", "Docker", "CI/CD Pipelines", "JUnit", "Mockito"]
};

export const technicalKnowledge = {
  "Languages & Frameworks": ["Python", "Kotlin Multiplatform (KMM)", "Angular", "FastAPI", "React Native"],
  "Databases & Storage": ["Firebase", "Redis"],
  "Cloud & Platforms": ["AWS", "Cloud Fundamentals"],
  Concepts: ["Agile/Scrum", "Microservices", "Hexagonal Architecture", "Responsive Design"]
};

export const education = [
  {
    degree: "Master's Degree in Software Quality Engineering (Bac+5)",
    school: "USMBA, Fez, Morocco",
    period: "2023 – 2025",
    mention: "Graduated with honours"
  },
  {
    degree: "Bachelor's Degree in Information Systems Development (Bac+3)",
    school: "EST, Meknes, Morocco",
    period: "2022 – 2023",
    mention: "Graduated with honours"
  },
  {
    degree: "University Diploma of Technology in Computer Engineering (Bac+2)",
    school: "EST, Meknes, Morocco",
    period: "2020 – 2022",
    mention: "Graduated with honours"
  }
];
