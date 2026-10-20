export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Web Application' | 'Security & Auth' | 'FinTech & Analytics';
  subtitle: string;
  overview: string;
  extendedOverview: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  tools: string[];
  role: string;
  timeline: string;
  keyAchievements: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Gokul C",
    title: "Frontend Developer (React & Angular Specialist)",
    email: "gokulcat15@gmail.com",
    avatar: "/assets/gokul_avatar.jpg",
    experienceYears: "4.5+",
    location: "Hyderabad, India · Open to Remote & Relocation",
    headline: "Crafting scalable, high-performance web applications with modern frontend precision.",
    heroBio: "Hi, I'm a passionate Frontend Developer with over 4.5+ years of experience designing and developing dynamic, user-friendly web applications. I specialize in crafting seamless, scalable, and high-performance front-end solutions with a strong focus on React.js, Angular, and their modern ecosystems. I’m dedicated to building efficient and user-centric applications that solve real-world problems. My attention to detail, commitment to clean and maintainable code, and adaptability to new challenges make me a valuable asset to any development team. Let’s collaborate and create something amazing together!",
    aboutBio: "Hi, I’m Gokul C., a Frontend Developer with a keen eye for design and a passion for building intuitive web applications. With over 4.5+ years of experience, I specialize in React.js, Angular, UI/UX design, and performance optimization techniques to deliver exceptional user experiences. My journey in development has been driven by a curiosity to explore cutting-edge technologies and solve complex problems. I’ve recently started expanding my expertise into backend development with Node.js, aiming to grow as a full-stack developer.",
    collaborationQuote: "Collaboration is at the heart of my workflow—whether it’s working closely with designers or ensuring proper design-to-code handoffs.",
    stats: [
      { label: "Experience", value: "4.5+ Years", detail: "Frontend Engineering" },
      { label: "Core Projects", value: "5 Featured", detail: "Full Case Studies" },
      { label: "Design Fidelity", value: "100%", detail: "Pixel-perfect Figma to Code" },
      { label: "Specialization", value: "React & Angular", detail: "Expanding to Full-Stack" }
    ],
    socials: {
      github: "https://github.com/gokulcat",
      linkedin: "https://www.linkedin.com/in/gokul-c-9647401a0/",
      youtube: "https://www.youtube.com/@gokulcat15",
      instagram: "https://www.instagram.com/the_.bub/",
      email: "mailto:gokulcat15@gmail.com"
    }
  },

  projects: [
    {
      id: "developers-app",
      title: "DevHub — Developer Environment Studio & Tool Store",
      shortTitle: "DevHub Developer Studio",
      category: "Web Application",
      subtitle: "Keyboard-First Developer Workspace & Tool Ecosystem !",
      overview: "DevHub is a high-performance developer workspace platform built for isolated runtime orchestration, automated environment scaffolding, package matrices, and containerized dev daemons with a keyboard-first command interface.",
      extendedOverview: "Engineered to eliminate friction in modern development setups, DevHub unifies workspace scaffolding, dependency matrix auditing, container runtime management, and community tool extensions into an ultra-fast, responsive dashboard. Features instant command palette navigation (⌘K), real-time process monitoring, and seamless terminal integrations.",
      image: "/assets/project_developers_app.svg",
      liveUrl: "https://developers-app-pied.vercel.app/",
      codeUrl: "https://github.com/gokulcat/Developers-App",
      tools: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Express", "Vite"],
      role: "Lead Full-Stack Frontend Engineer",
      timeline: "Production Delivery",
      keyAchievements: [
        "Keyboard-driven ⌘K command palette supporting fuzzy search across tools, scripts, and runtime daemons",
        "Interactive package matrix auditor with visual dependency vulnerability flags and version resolution",
        "Containerized environment manager supporting isolated runtime profiles with live CPU/memory telemetry",
        "Sub-50ms reactive UI state transitions using React 19 concurrent features and fluid motion primitives"
      ],
      challengesAndSolutions: [
        {
          challenge: "Synchronizing multi-runtime daemon statuses and system metric streaming without client-side lag.",
          solution: "Designed an event-driven telemetry stream with batched state reconciliation and memoized SVG metric charts."
        },
        {
          challenge: "Building a scalable tool marketplace with modular plug-in cards and instant search filtering.",
          solution: "Structured normalized catalog stores with client-side indexing and asynchronous module resolution."
        }
      ]
    },
    {
      id: "mint-vault",
      title: "Wealthora / MintVault — Smart Salary Splitter & Automated Wealth",
      shortTitle: "MintVault FinTech",
      category: "FinTech & Analytics",
      subtitle: "Autonomous Multi-Currency Salary Allocation Engine !",
      overview: "Wealthora (MintVault) is an autonomous multi-currency salary allocation platform featuring a dynamic 50/30/20 cash engine, high-yield vault compounding projections, and smart sinking funds for modern wealth building.",
      extendedOverview: "MintVault transforms complex financial allocation into intuitive, automated workflows. Users configure their monthly paycheck streams across global currencies, instantly split earnings into essential needs, discretionary spending, and compounding high-yield vaults (8.4%+ APY), and forecast future milestones with zero friction.",
      image: "/assets/project_mint_vault.svg",
      liveUrl: "https://mint-vault-omega.vercel.app/",
      codeUrl: "https://github.com/gokulcat/MintVault",
      tools: ["React", "TypeScript", "Tailwind CSS", "Material Symbols", "Vite", "GIT"],
      role: "Frontend Architect & UI Engineer",
      timeline: "Production Delivery",
      keyAchievements: [
        "Autonomous 50/30/20 dynamic budget allocation engine with live slider distribution recalculations",
        "Multi-currency FX routing engine supporting USD, EUR, GBP, and INR with real-time conversion rates",
        "High-yield compound interest milestone simulator with interactive timeline visualization",
        "Goal-oriented sinking funds tracker with target date projections and automated monthly delta calculations"
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling real-time currency conversions across divergent currency fractions without rounding drift.",
          solution: "Implemented high-precision integer-cent arithmetic routines coupled with centralized FX routing tables."
        },
        {
          challenge: "Visualizing compounding curves and expense ratios across multiple simultaneous saving goals.",
          solution: "Built custom responsive SVG telemetry dials and interactive allocation bars that smoothly interpolate state changes."
        }
      ]
    },
    {
      id: "rbac-application",
      title: "Role-Based Access Control (RBAC)",
      shortTitle: "Role-Based Access Control",
      category: "Security & Auth",
      subtitle: "Role Based Access-Control !",
      overview: "An efficient, scalable, and user-friendly role-based access control solution tailored to manage administrative permissions. Emphasizes modern security practices, dynamic permission matrices, and interactive state management.",
      extendedOverview: "Role-Based Access Control (RBAC) is a powerful and widely used approach for managing permissions within a system. It simplifies access control by assigning specific roles to users, where each role defines the actions and resources the user can access. RBAC is critical in ensuring system security, improving management efficiency, and reducing the risk of unauthorized access.",
      image: "/assets/project_2.png",
      liveUrl: "https://rbac-application.vercel.app",
      codeUrl: "https://github.com/gokulcat/RBAC---Application",
      tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GIT"],
      role: "Full-Stack Frontend Developer",
      timeline: "Production Delivery",
      keyAchievements: [
        "Dynamic permission matrix with real-time toggleable CRUD permissions",
        "Multi-role user assignment console (Admin, Editor, Viewer, Custom)",
        "Instant UI state reflection ensuring defensive access control before API dispatch",
        "Tailwind-powered responsive administrative dashboard design"
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling complex hierarchical permissions where child privileges depend on parent roles.",
          solution: "Designed a declarative permission resolver that calculates effective capabilities in client-side state with immediate UI feedback."
        },
        {
          challenge: "Preventing accidental role escalation or unauthorized actions.",
          solution: "Implemented UI-level disabling alongside strict defensive state guards that validate role tokens prior to performing state mutations."
        }
      ]
    },
    {
      id: "wealthwise",
      title: "WealthWise — Wealth Management Platform",
      shortTitle: "WealthWise FinTech",
      category: "FinTech & Analytics",
      subtitle: "Wealth Management Application !",
      overview: "WealthWise is a comprehensive financial management platform designed to empower individuals and families to take control of their finances effectively. It provides users with tools to set financial goals, track expenses, manage budgets, and gain insights into their financial health—all in one centralized platform.",
      extendedOverview: "WealthWise is tailored to simplify money management while helping users make informed decisions to achieve their financial aspirations. By combining powerful calculation tools with an intuitive design, it empowers users to make smarter financial decisions, achieve their goals, and ultimately lead a more financially secure life.",
      image: "/assets/project_3.png",
      liveUrl: "https://wealth-path.vercel.app/",
      codeUrl: "https://github.com/gokulcat/WealthPath",
      tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GIT"],
      role: "Frontend & UI Developer",
      timeline: "Production Delivery",
      keyAchievements: [
        "Interactive budget breakdown and burn velocity calculation engine",
        "Dynamic financial goal milestone projection and progress tracker",
        "Visual expense distribution charts across multiple spending categories",
        "Streamlined data input workflows for logging transactions seamlessly"
      ],
      challengesAndSolutions: [
        {
          challenge: "Simplifying dense financial data into actionable, easily digestible visual insights.",
          solution: "Engineered responsive data visualization components paired with clear contextual summaries rather than overwhelming spreadsheets."
        },
        {
          challenge: "State synchronization across multiple budgeting categories and recurring projections.",
          solution: "Structured centralized state management using React hooks and pure calculation utilities for zero-lag updates."
        }
      ]
    },
    {
      id: "portfolio-v1",
      title: "Developer Portfolio & Personal Brand",
      shortTitle: "Personal Portfolio",
      category: "Web Application",
      subtitle: "Portfolio about ME !",
      overview: "Welcome to my portfolio! This space is a reflection of my journey as a Full Stack Developer and my passion for creating innovative, user-focused web applications. A Centralized Hub for My Professional Journey! The portfolio project serves as a dynamic, interactive space that highlights my professional growth, key achievements, and technical expertise.",
      extendedOverview: "It’s a digital representation of who I am as a developer, detailing my career journey and creative pursuits. Designed with clean semantic markup, custom styling abstractions, responsive media queries, and streamlined user navigation across devices.",
      image: "/assets/project_1.png",
      liveUrl: "https://gokulportfolio28.netlify.app",
      codeUrl: "https://github.com/gokulcat/Portfolio",
      tools: ["HTML", "CSS", "JavaScript", "React", "SCSS", "GIT"],
      role: "Lead Frontend Architect",
      timeline: "Continuous Iteration",
      keyAchievements: [
        "100% responsive cross-device layout tested across desktop, tablet, and mobile",
        "Dynamic modular component hierarchy with SCSS design variables",
        "Sub-second initial paint speed and optimized bundle loading",
        "Clean interactive case study presentation and resume integration"
      ],
      challengesAndSolutions: [
        {
          challenge: "Creating a distinct visual identity that balances technical depth with aesthetic polish.",
          solution: "Established a custom SCSS architecture with consistent typography scales, reusable button and section primitives, and subtle micro-interactions."
        },
        {
          challenge: "Ensuring smooth asset loading without slowing initial paint.",
          solution: "Utilized asynchronous image loading, optimized vector icons, and lazy-loaded media assets."
        }
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Engineering",
      description: "Core technologies used to build dynamic, fast, and accessible user interfaces.",
      skills: [
        { name: "ReactJS", level: "Advanced / Core", featured: true },
        { name: "Angular", level: "Advanced / Core", featured: true },
        { name: "TypeScript", level: "Advanced / Core", featured: true },
        { name: "JavaScript (ES6+)", level: "Advanced", featured: true },
        { name: "RxJS & Reactive Streams", level: "Proficient", featured: true },
        { name: "Redux & NgRx", level: "Proficient", featured: true },
        { name: "HTML5 & Semantic DOM", level: "Mastery", featured: false },
        { name: "REST APIs & Fetch", level: "Proficient", featured: false }
      ]
    },
    {
      title: "UI/UX & Modern CSS",
      description: "Advanced styling methodologies, design system implementation, and micro-interactions.",
      skills: [
        { name: "CSS3 / Modern CSS", level: "Advanced", featured: true },
        { name: "Tailwind CSS", level: "Advanced", featured: true },
        { name: "SASS / SCSS", level: "Advanced", featured: true },
        { name: "Figma (Design-to-Code)", level: "Proficient", featured: true },
        { name: "Angular Material", level: "Proficient", featured: false },
        { name: "Material UI & Bootstrap", level: "Proficient", featured: false }
      ]
    },
    {
      title: "Backend & Full-Stack Expansion",
      description: "Server-side runtimes, APIs, and databases currently mastering for full-stack capability.",
      skills: [
        { name: "NodeJS", level: "Intermediate / Active", featured: true },
        { name: "ExpressJS", level: "Intermediate", featured: true },
        { name: "MongoDB", level: "Intermediate", featured: true },
        { name: "Server-Side Logic", level: "Intermediate", featured: false }
      ]
    },
    {
      title: "Workflow & Ecosystem",
      description: "Modern development toolchains, version control, and delivery pipelines.",
      skills: [
        { name: "GIT & GitHub", level: "Proficient", featured: true },
        { name: "Vite & Angular CLI", level: "Proficient", featured: false },
        { name: "Performance Optimization", level: "Proficient", featured: false },
        { name: "Cross-Browser Testing", level: "Proficient", featured: false }
      ]
    }
  ] as SkillCategory[],

  experienceTimeline: [
    {
      period: "2022 — Present",
      role: "Frontend Developer (React & Angular Specialist)",
      company: "Web & Enterprise Software Solutions",
      summary: "Designing and developing production React.js and Angular web applications with a relentless focus on reactive state management, performance, and component modularity.",
      highlights: [
        "Architected scalable UI modules across React and Angular frameworks serving enterprise clients",
        "Implemented reactive RxJS streams and state management pipelines for dynamic data flows",
        "Ensured seamless design-to-code handoffs collaborating closely with Figma UI/UX designers",
        "Optimized client-side bundles, runtime rendering performance, and sub-second page loads"
      ]
    },
    {
      period: "2020 — 2022",
      role: "Frontend & UI Developer",
      company: "Digital Studio & Freelance",
      summary: "Crafted dynamic client portfolios, interactive web interfaces, and responsive component systems using JavaScript, TypeScript, HTML5, and SASS/CSS.",
      highlights: [
        "Built modular SCSS architecture and responsive layouts across cross-device viewports",
        "Developed custom interactive widgets and client showcase spaces",
        "Delivered pixel-perfect layouts from design mockups ahead of deadlines"
      ]
    }
  ],

  marqueeItems: [
    "REACT.JS & ANGULAR ARCHITECTURE",
    "MODERN CSS & TAILWIND",
    "TYPESCRIPT & RXJS",
    "DESIGN-TO-CODE FIDELITY",
    "REDUX & NGRX STATE FLOW",
    "UI/UX PRECISION",
    "FULL-STACK EXPANSION (NODE.JS)",
    "RESPONSIVE LAYOUTS",
    "PERFORMANCE OPTIMIZATION",
    "COMPONENT MODULARITY"
  ]
};
