export const METADATA = {
  author: "Kareem Kobeissi",
  title: "Kareem Kobeissi | Full-Stack Developer",
  description:
    "Portfolio of Kareem Kobeissi, a Lebanon-based Full-Stack Developer with 2+ years of experience building web and mobile applications, REST APIs, database systems, and business automation.",
  siteUrl: "https://kareemm.com",
  keywords: [
    "Kareem Kobeissi",
    "Full-Stack Developer",
    "Web Developer",
    "REST API Developer",
    "Angular Developer",
    "React Developer",
    "ASP.NET Core Developer",
    "Lebanon",
    "Portfolio",
  ].join(", "),
  image: "/favicon.svg",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Experience", ref: "work" },
  { name: "Contact", ref: "contact" },
];

export const TYPED_STRINGS = [
  "Full-Stack Developer",
  "I build web applications and REST APIs",
  "I develop database-driven business systems",
];

export const SOCIAL_LINKS = [
  { name: "mail", url: "mailto:kbkareem31@gmail.com" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kareem-kobeissi-658488289",
  },
  { name: "github", url: "https://github.com/kareem-kobeissi" },
];

export const SKILLS = {
  frontend: [
    "Angular",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Responsive Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "C#",
    "ASP.NET Core",
    "PHP",
    "Python",
    "FastAPI",
    "Flask",
    "REST APIs",
  ],
  databases: [
    "Microsoft SQL Server",
    "MySQL",
    "MariaDB",
    "PostgreSQL",
    "MongoDB Atlas",
    "SQL",
  ],
  mobile: ["React Native", "Expo", "Flutter", "Dart"],
  security: [
    "JWT",
    "Google OAuth",
    "Role-Based Access Control",
    "HMAC Webhooks",
    "Socket.IO",
    "Meta WhatsApp Cloud API",
    "OpenAI API",
    "SMTP",
    "Third-Party APIs",
  ],
  tools: [
    "Git",
    "GitHub",
    "Jira",
    "Microsoft Teams",
    "Hostinger",
    "Render",
    "VPS",
    "Cron Jobs",
    "Cloud Deployment",
    "Testing & Debugging",
  ],
  seo: [
    "Technical SEO",
    "Google Search Console",
    "XML Sitemaps",
    "Schema.org",
    "Semantic HTML",
  ],
  automation: [
    "TradingView",
    "Pine Script",
    "MetaTrader 5",
    "MQL5",
    "Telegram Integration",
  ],
};

export const PROJECTS = [
  {
    name: "Smart Service",
    description:
      "A customer/provider home-service marketplace with JWT authentication, location-based discovery, real-time updates, tracking, notifications, ratings, and Arabic/English support.",
    gradient: ["#5B21B6", "#2563EB"],
    url: "https://github.com/kareem-kobeissi/SmartServiceApp",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
  },
  {
    name: "The Trading Routine",
    description:
      "A deployed trading education and automation platform with courses, MT5 tools, TradingView indicators, payments, OAuth and OTP, WhatsApp automation, AI-assisted workflows, licensing, admin tools, and SEO.",
    gradient: ["#0F172A", "#334155"],
    url: "https://thetradingroutine.com",
    sourceUrl: "https://github.com/kareem-kobeissi/TheTradingRoutineWebsite",
    tech: ["PHP", "MySQL", "Python", "FastAPI", "OpenAI", "WhatsApp API", "MT5"],
  },
  {
    name: "ERTKAZ Group",
    description:
      "A bilingual Arabic/English corporate website for a consulting firm with RTL support, animated editorial layouts, company profiles, service pages, and static deployment.",
    gradient: ["#713F12", "#CA8A04"],
    url: "https://ertkazgroup.com",
    sourceUrl: "https://github.com/kareem-kobeissi/ertkaz-group-website",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    name: "Taxi Platte",
    description:
      "A responsive German taxi website with booking and call actions, pricing, service coverage, galleries, reusable PHP components, accessible animations, and Schema.org SEO.",
    gradient: ["#111827", "#D97706"],
    url: "https://taxi-wulfrath.de",
    sourceUrl: "https://github.com/kareem-kobeissi/taxi-company-website-germany",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Schema.org", "SEO"],
  },
  {
    name: "Rana Clinic",
    description:
      "A responsive dietitian website and online shop with services, courses, cart functionality, client registration and login, testimonials, and contact features.",
    gradient: ["#14532D", "#16A34A"],
    url: "https://dietitianranacheaib-mena.online",
    sourceUrl: "https://github.com/kareem-kobeissi/dietitian-website",
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    name: "RJI World",
    description:
      "A bilingual English/Arabic showcase for a fashion, beauty, and media group with brand portfolios, authentication, contact integrations, and responsive design.",
    gradient: ["#831843", "#DB2777"],
    url: "https://rjiworld.online",
    sourceUrl: "https://github.com/kareem-kobeissi/klas-boutique-website",
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "Arabic RTL"],
  },
  {
    name: "Music App Using AI",
    description:
      "A music application with authentication, audio playback, favorites, playlists, song uploads, and Cloudinary media storage integration.",
    gradient: ["#312E81", "#7C3AED"],
    url: "https://github.com/kareem-kobeissi/Music-App-Using-AI",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Cloudinary"],
  },
  {
    name: "Additional Projects",
    description:
      "TradeVision Company Website, Clothing Store Website, ChocoSushiGarden System, and ScannerCode Mobile App.",
    gradient: ["#1F2937", "#475569"],
    url: "https://github.com/kareem-kobeissi",
    tech: ["React", "Vite", "Web", "Mobile", "Business Systems"],
  },
];

const workCard = (label) => (
  <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
    {label}
  </div>
);

export const WORK_CONTENTS = [
  {
    title: "Self-Employed",
    value: "self-employed",
    items: [
      {
        title: "Full-Stack & Mobile Developer",
        period: "Jul 2025 - Present | Lebanon / Remote",
        description:
          "Develop and deliver web applications, mobile applications, REST APIs, and custom software for local and international clients. Build responsive interfaces, admin dashboards, backend services, and relational and NoSQL integrations.",
        content: workCard("Web | Mobile | APIs | Automation"),
      },
      {
        title: "Complete Product Delivery",
        description:
          "Implement authentication, access controls, real-time updates, webhooks, and third-party integrations while managing requirements, testing, deployment, troubleshooting, maintenance, and post-launch support.",
        content: workCard("From requirements to support"),
      },
    ],
  },
  {
    title: "Trading Routine",
    value: "trading-routine",
    items: [
      {
        title: "TradingView Automation Specialist",
        period: "Mar 2026 - Present | Lebanon / Remote | Concurrent",
        description:
          "Develop Pine Script indicators and alerts with secure HTTPS webhooks and Telegram notifications. Integrate signals with MetaTrader 5 and risk tools, supporting automation across 9+ trading accounts.",
        content: workCard("TradingView | MT5 | Telegram"),
      },
      {
        title: "Reliable Signal Processing",
        description:
          "Improve automated signal handling with validation, logging, retries, and error handling.",
        content: workCard("9+ automated trading accounts"),
      },
    ],
  },
  {
    title: "Soft Hub IT",
    value: "soft-hub",
    items: [
      {
        title: "Full Stack Developer",
        period: "Dec 2025 - May 2026 | Dubai / Remote",
        description:
          "Developed Angular interfaces and ASP.NET Core backend features for enterprise applications, built authenticated REST APIs with role-based authorization, designed relational database structures, and resolved frontend and backend defects.",
        content: workCard("Angular | C# | ASP.NET Core | SQL"),
      },
    ],
  },
  {
    title: "Freelance Team",
    value: "collaboration",
    items: [
      {
        title: "Web & Mobile Developer",
        period: "Oct 2024 - Mar 2025 | Ansar / Remote | Concurrent",
        description:
          "Implemented responsive interfaces, backend features, API and database integrations, and bug fixes. Tested across devices and coordinated assigned work with developers using Jira.",
        content: workCard("Collaborative web & mobile delivery"),
      },
    ],
  },
  {
    title: "Infinity Labs",
    value: "infinity-labs",
    items: [
      {
        title: "Flutter Developer Intern",
        period: "Jul 2024 - Oct 2024 | Beirut / Remote",
        description:
          "Developed Flutter screens and reusable widgets with navigation, forms, validation, and API integrations. Debugged application issues and improved responsive behavior across device sizes.",
        content: workCard("Flutter | Dart | Cross-platform Mobile"),
      },
    ],
  },
];

export const EDUCATION = [
  "Bachelor of Science in Computer Science - Lebanese International University (Oct 2022 - Jun 2025)",
  "General Science High School Certificate - Ansar High School (2019 - 2022)",
];

export const CERTIFICATIONS = [
  "Supervised Machine Learning: Regression and Classification - DeepLearning.AI / Stanford University via Coursera (2024)",
  "Fundamentals of Cybersecurity - YouBee.ai (2023)",
  "CCNAv7: Introduction to Networks - Cisco Networking Academy (2024)",
  "Get Connected - Cisco Networking Academy (2022)",
  "League of Logics Workshop - Phoenicia University (2024)",
  "Certificate of Attendance - IEEE PU Student Branch (2024)",
];
