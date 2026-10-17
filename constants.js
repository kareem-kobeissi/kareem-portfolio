export const METADATA = {
  author: "Kareem Kobeissi",
  title: "Kareem Kobeissi | Full-Stack & Mobile Developer",
  description:
    "Portfolio of Kareem Kobeissi, a Lebanon-based Full-Stack and Mobile Developer building web applications, cross-platform mobile apps, custom software, and automation systems.",
  siteUrl: "https://kareemm.com",
  keywords: [
    "Kareem Kobeissi",
    "Full-Stack Developer",
    "Mobile Developer",
    "React Native Developer",
    "Angular Developer",
    "ASP.NET Core Developer",
    "Lebanon",
    "Portfolio",
  ].join(", "),
  image: "/preview.png",
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
  "Full-Stack & Mobile Developer",
  "I build reliable web and mobile applications",
  "I create custom software and automation",
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
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Responsive Design",
  ],
  mobile: ["React Native", "Expo", "Flutter", "Dart"],
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
    "SQL Server",
    "MySQL",
    "MariaDB",
    "PostgreSQL",
    "MongoDB Atlas",
  ],
  other: [
    "JWT & RBAC",
    "Socket.IO",
    "TradingView",
    "Pine Script",
    "MetaTrader 5",
    "Webhooks",
    "Git",
    "Jira",
    "Cloud & VPS",
  ],
};

export const PROJECTS = [
  {
    name: "Smart Service",
    description:
      "A bilingual home-service marketplace with customer/provider roles, nearby discovery, live tracking, push notifications, ratings, and smart estimates.",
    gradient: ["#5B21B6", "#2563EB"],
    url: "https://github.com/kareem-kobeissi/SmartServiceApp",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    name: "The Trading Routine",
    description:
      "A bilingual trading education and digital-products platform with courses, secure accounts, checkout, payment options, and user/admin dashboards.",
    gradient: ["#0F172A", "#334155"],
    url: "https://thetradingroutine.com",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Sobh W Masa",
    description:
      "A custom Arabic/English supermarket storefront with RTL/LTR browsing, search, favorites, inventory controls, promotions, and WhatsApp ordering.",
    gradient: ["#166534", "#65A30D"],
    url: null,
    tech: ["PHP", "MariaDB", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Ego Clothing Store",
    description:
      "A responsive React storefront developed for a clothing brand and delivered as a public production website.",
    gradient: ["#831843", "#DB2777"],
    url: "https://ego-luxury.com/",
    tech: ["React.js", "CSS"],
  },
  {
    name: "AI Customer Automation",
    description:
      "An AI-assisted workflow platform with secure accounts, HMAC webhooks, order tracking, email monitoring, approvals, workers, retries, and audit history.",
    gradient: ["#312E81", "#7C3AED"],
    url: null,
    tech: ["PHP", "MySQL", "Python", "FastAPI", "OpenAI API"],
  },
  {
    name: "Used-Car Dealership",
    description:
      "A dealership application with a responsive public site, authentication, protected dashboard, and vehicle, inspection, employee, and settings modules.",
    gradient: ["#1F2937", "#475569"],
    url: null,
    tech: ["Full Stack", "Authentication", "Dashboard", "Database Design"],
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
        period: "Jul 2025 — Present · Lebanon / Remote",
        description:
          "Deliver end-to-end web, mobile, and custom software solutions for local and international clients—from requirements and architecture through deployment, maintenance, and post-launch support.",
        content: workCard("Web · Mobile · APIs · Automation"),
      },
      {
        title: "End-to-End Delivery",
        description:
          "Build responsive applications, REST APIs, admin dashboards, relational and NoSQL data layers, secure authentication, role-based access, real-time communication, webhooks, and third-party integrations.",
        content: workCard("Reliable business software"),
      },
    ],
  },
  {
    title: "Trading Routine",
    value: "trading-routine",
    items: [
      {
        title: "TradingView Automation Specialist",
        period: "Mar 2026 — Present · Lebanon / Remote",
        description:
          "Develop TradingView indicators and Pine Script alerts with secure HTTPS webhook processing, Telegram notifications, MetaTrader 5 integration, and configurable position-sizing and risk controls.",
        content: workCard("TradingView · MT5 · Telegram"),
      },
      {
        title: "Real-Time Reliability",
        description:
          "Support centralized automation across 9+ trading accounts using cloud/VPS infrastructure, validation, logging, retries, and robust error handling.",
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
        period: "Dec 2025 — May 2026 · Dubai / Remote",
        description:
          "Developed reusable Angular interfaces and ASP.NET Core backend functionality, integrated REST APIs with authentication and role-based authorization, designed relational data structures, and resolved defects across the stack.",
        content: workCard("Angular · C# · ASP.NET Core · SQL"),
      },
    ],
  },
  {
    title: "Freelance Team",
    value: "collaborator",
    items: [
      {
        title: "Collaborator",
        period: "Oct 2024 — Mar 2025 · Ansar / Remote",
        description:
          "Collaborated with distributed developers on mobile and web projects, implementing responsive interfaces, backend functionality, API and database integrations, bug fixes, testing, and feature improvements tracked in Jira.",
        content: workCard("Distributed web & mobile delivery"),
      },
    ],
  },
  {
    title: "Infinity Labs",
    value: "infinity-labs",
    items: [
      {
        title: "Flutter Developer Intern",
        period: "Jul 2024 — Oct 2024 · Beirut / Remote",
        description:
          "Developed responsive Flutter interfaces with reusable widgets, navigation, forms, validation, interactive components, and API/data integrations while strengthening mobile architecture and testing practices.",
        content: workCard("Flutter · Dart · Cross-platform Mobile"),
      },
    ],
  },
];

export const EDUCATION = [
  "BS in Computer Science — Lebanese International University (2022–2025)",
  "General Science — Ansar High School (2019–2022)",
];

export const CERTIFICATIONS = [
  "Spring BootCamp Workshop — CodewithSerah (Feb 2026)",
  "Certificate of Attendance — IEEE PU Student Branch (Sep 2024)",
];
