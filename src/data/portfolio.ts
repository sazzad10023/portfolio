export const profile = {
  name: "Kazi Sazzad Hossain",
  shortName: "SAZZAD",
  initials: "KSH",
  designation: "Full Stack Developer",
  focus: "React · Next.js · Node.js",
  tagline:
    "I build fast, accessible, and thoughtfully designed web experiences.",
  intro:
    "I'm a full-stack developer from Dhaka who enjoys turning complex ideas into clean, usable products. I work across the stack with React, Next.js, TypeScript, Node.js, and MongoDB, and I care deeply about the details that make an interface feel effortless.",
  email: "sh87201@gmail.com",
  phone: "+8801634845501",
  phoneHref: "tel:+8801634845501",
  whatsapp: "8801634845501",
  location: "Mirpur, Dhaka, Bangladesh",
  availability: "Available for freelance and full-time opportunities",
  resumeUrl: "/resume.pdf",
  resumeAvailable: true,
  photo: "/image/profile.png",
  university:
    "Bangladesh University of Business and Technology (BUBT)",
  bio: [
    "My programming journey started with C, C++, and Java — languages that taught me to think carefully about logic, memory, and structure. That foundation eventually led me to the web, where I discovered how much I enjoy building products people can actually see and use.",
    "Today I work mostly with Next.js, React, TypeScript, and Tailwind CSS, backed by Node.js, Express, MongoDB, and Better Auth. I enjoy full-stack work: designing a clean interface, shaping the data model behind it, and making sure the whole experience feels fast and coherent.",
    "Outside of programming, I enjoy football, photography, and exploring new places around Bangladesh. I'm also a firm believer in learning by building — most of what I know comes from turning ideas into real projects and then improving them one iteration at a time.",
  ],
  interests: [
    "Football",
    "Photography",
    "Open source",
    "Travel",
    "Problem solving",
  ],
} as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sazzad10023",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "www.linkedin.com/in/sazzad-hossain-956282394",
    icon: "linkedin",
  },
  // {
  //   label: "X (Twitter)",
  //   href: "https://x.com/sazzad10023",
  //   icon: "twitter",
  // },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sajjada.hosena.jisana",
    icon: "facebook",
  },
] as const;

export type SocialIconName = (typeof socialLinks)[number]["icon"];

export const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

export type SkillIconName =
  | "html5"
  | "css3"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "nodejs"
  | "express"
  | "mongodb"
  | "api"
  | "betterauth"
  | "php"
  | "mysql"
  | "git"
  | "github"
  | "vscode"
  | "figma"
  | "vercel"
  | "netlify"
  | "postman"
  | "python"
  | "jupyter";

export type Skill = {
  name: string;
  level: number;
  label: string;
  icon: SkillIconName;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "server" | "tools";
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, accessible, and intentional.",
    icon: "code",
    skills: [
      { name: "HTML5", level: 95, label: "Advanced", icon: "html5" },
      { name: "CSS3", level: 93, label: "Advanced", icon: "css3" },
      { name: "JavaScript", level: 90, label: "Advanced", icon: "javascript" },
      { name: "TypeScript", level: 87, label: "Advanced", icon: "typescript" },
      { name: "React", level: 90, label: "Advanced", icon: "react" },
      { name: "Next.js", level: 88, label: "Advanced", icon: "nextjs" },
      { name: "Tailwind CSS", level: 92, label: "Advanced", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, authentication, and data models that hold up.",
    icon: "server",
    skills: [
      { name: "Node.js", level: 82, label: "Proficient", icon: "nodejs" },
      { name: "Express.js", level: 80, label: "Proficient", icon: "express" },
      { name: "MongoDB", level: 82, label: "Proficient", icon: "mongodb" },
      { name: "REST APIs", level: 86, label: "Advanced", icon: "api" },
      { name: "Better Auth", level: 78, label: "Proficient", icon: "betterauth" },
      // 
      
      
      { name: "MySQL", level: 72, label: "Comfortable", icon: "mysql" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "The everyday tools behind a reliable shipping process.",
    icon: "tools",
    skills: [
      { name: "Git", level: 90, label: "Advanced", icon: "git" },
      { name: "GitHub", level: 90, label: "Advanced", icon: "github" },
      { name: "VS Code", level: 95, label: "Advanced", icon: "vscode" },
      { name: "Figma", level: 76, label: "Proficient", icon: "figma" },
      { name: "Vercel", level: 86, label: "Advanced", icon: "vercel" },
      { name: "Netlify", level: 86, label: "Advanced", icon: "netlify" },
      { name: "Postman", level: 82, label: "Proficient", icon: "postman" },
      { name: "Python", level: 74, label: "Comfortable", icon: "python" },
      { name: "Jupyter", level: 74, label: "Comfortable", icon: "jupyter" },
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period?: string;
  passingYear?: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    location: "Mirpur, Dhaka",
    period: "2023 — Present",
    description:
      "Studying core computer science alongside full-stack web development. Coursework includes data structures, algorithms, databases, software engineering, and data mining.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Noakhali Government College",
    location: "Noakhali, Bangladesh",
    passingYear: "2020",
    description:
      "Completed HSC in the science group with a focus on mathematics, physics, and chemistry.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Noakhali Zilla School",
    location: "Noakhali, Bangladesh",
    passingYear: "2018",
    description:
      "Built the early foundation in mathematics and logical problem solving.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string[];
  image: string;
  imageAlt: string;
  gradient: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  timeline: string;
  highlights: string[];
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "studiospace",
    title: "StudioSpace",
    category: "Full-Stack Platform",
    year: "2026",
    tagline:
      "A peer-to-peer creative workspace and production studio booking platform.",
    description: [
      "StudioSpace helps creators discover, compare, and book creative spaces for photography, filmmaking, podcasting, and music. Owners can list their studios, manage availability, and keep track of incoming bookings from one dashboard.",
      "The project brings together a Next.js App Router frontend, Better Auth for email and Google sign-in, a MongoDB data layer, and an Express-based API. The interface was built with TypeScript, Tailwind CSS, and Shadcn UI.",
    ],
    image: "/image/projects/studiospace.svg",
    imageAlt: "StudioSpace studio discovery interface preview",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Better Auth",
      "MongoDB",
      "Express.js",
    ],
    liveUrl: "https://studio-space-roan.vercel.app",
    githubUrl: "https://github.com/sazzad10023/StudioSpace",
    role: "Full-stack developer",
    timeline: "2026",
    highlights: [
      "Category and location-based studio discovery with search and filtering.",
      "Email and Google authentication with protected owner dashboards.",
      "Studio listing management and a booking flow with status tracking.",
      "Responsive layouts designed for desktop, tablet, and mobile.",
    ],
    challenges: [
      "Keeping authentication state consistent across the Next.js client and the Express API while supporting both email and Google sign-in.",
      "Designing a booking model that stays understandable when a studio has multiple date ranges, time slots, and booking statuses.",
      "Making the owner dashboard feel simple even though it combines listings, availability, and booking management in one place.",
    ],
    improvements: [
      "Add a real-time availability calendar with instant conflict detection.",
      "Introduce deposits and online payments through a payment provider.",
      "Add reviews, ratings, and saved studios for returning customers.",
      "Build map-based discovery and distance filtering for nearby studios.",
    ],
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Civic Tech",
    year: "2026",
    tagline:
      "A Bengali-language app for comparing daily essential commodity prices across markets.",
    description: [
      "BazarDor (বাজারদর) helps people in Bangladesh check the daily prices of rice, lentils, oil, vegetables, fish, and meat. Users can browse by category, compare prices across markets, and see how a product's price has moved over time.",
      "The app is built with Next.js App Router, TypeScript, Tailwind CSS, and DaisyUI. Better Auth handles email and social sign-in, MongoDB stores product and market data, and React Hot Toast provides lightweight feedback.",
    ],
    image: "/image/projects/bazardor.svg",
    imageAlt: "BazarDor commodity price comparison interface preview",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "React Hot Toast",
    ],
    liveUrl: "https://bangladesh-market-26.vercel.app",
    githubUrl: "https://github.com/sazzad10023/bangladesh_market_26",
    role: "Full-stack developer",
    timeline: "2026",
    highlights: [
      "Bengali-first product browsing with category filters and price sorting.",
      "Product detail views with current, previous, minimum, maximum, and average prices.",
      "Market-wise comparison so users can see where a product costs less.",
      "Authentication and profile management for a personalized experience.",
    ],
    challenges: [
      "Designing a readable Bengali interface that still feels clean on small screens and with dense price tables.",
      "Aggregating daily price data into useful trends without making the product page feel overwhelming.",
      "Keeping the data model flexible enough for different units, markets, and product categories.",
    ],
    improvements: [
      "Add price-drop alerts and a weekly market summary.",
      "Introduce charts for longer-term price trends and seasonal patterns.",
      "Make the app installable as a PWA with offline access to recent prices.",
      "Allow trusted contributors to submit and verify local market prices.",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    category: "Health & Fitness",
    year: "2025",
    tagline:
      "A workout library and planner that helps users build routines and track progress.",
    description: [
      "FitLog is a workout companion where users can browse exercises, inspect sets, reps, duration, and calorie information, then add workouts to a personal daily plan. Completed workouts are marked off so progress stays visible.",
      "The app uses Next.js, React, TypeScript, Tailwind CSS, and DaisyUI, with Context API for plan state and a REST API for workout data. React Toastify provides feedback when workouts are saved or completed.",
    ],
    image: "/image/projects/fitlog.svg",
    imageAlt: "FitLog workout planner interface preview",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Context API",
      "REST API",
    ],
    liveUrl: "https://my-ass-next-js.vercel.app",
    githubUrl: "https://github.com/sazzad10023/my-ass-next-js",
    role: "Frontend developer",
    timeline: "2025",
    highlights: [
      "A browsable workout library with detailed exercise information.",
      "A personal plan with add, remove, and mark-complete interactions.",
      "Saved workouts for quick access later.",
      "Duration and calorie calculations that make progress easier to understand.",
    ],
    challenges: [
      "Keeping plan state in sync across the library, detail view, and daily plan without duplicating entries.",
      "Designing completion tracking that feels immediate while remaining easy to undo.",
      "Presenting dense workout details in a layout that still works well on mobile.",
    ],
    improvements: [
      "Add accounts so plans can sync across devices.",
      "Show weekly and monthly progress charts.",
      "Support offline access and background sync.",
      "Add social challenges and shareable workout routines.",
    ],
  },
  {
    slug: "crop-recommendation",
    title: "Crop Recommendation",
    category: "Data Mining & ML",
    year: "2025",
    tagline:
      "A machine-learning notebook that recommends the best crop from soil and climate data.",
    description: [
      "This data-mining project explores a crop recommendation dataset containing soil nutrients and climate measurements. It compares several classification models and uses the strongest performer to recommend a crop from a set of input conditions.",
      "The analysis uses Python, pandas, NumPy, scikit-learn, Matplotlib, Seaborn, and Plotly. It covers label encoding, feature scaling, train/test splitting, model comparison, hyperparameter tuning, and K-Means clustering for exploring patterns in the data.",
    ],
    image: "/image/projects/crop-recommendation.svg",
    imageAlt: "Crop Recommendation data dashboard preview",
    gradient: "from-lime-400 via-emerald-500 to-teal-600",
    tech: [
      "Python",
      "Jupyter Notebook",
      "pandas",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
    githubUrl: "https://github.com/sazzad10023/Data_mining_project",
    role: "Data mining & ML",
    timeline: "2025",
    highlights: [
      "Exploratory analysis of soil and climate features across crop classes.",
      "Logistic Regression, Decision Tree, and Random Forest model comparison.",
      "GridSearchCV tuning and classification reports for model evaluation.",
      "K-Means clustering with an elbow plot to explore natural groupings.",
    ],
    challenges: [
      "Preparing a clean feature matrix from mixed soil and climate measurements.",
      "Comparing models fairly while handling scaling and label encoding correctly.",
      "Interpreting cluster results in a way that is useful rather than just visually interesting.",
    ],
    improvements: [
      "Turn the notebook into a small web app with a guided prediction form.",
      "Connect live weather and soil-health data sources.",
      "Add region-specific models and explainability for each recommendation.",
      "Deploy the trained model behind a lightweight API.",
    ],
  },
  {
    slug: "zombie-survival-game",
    title: "Zombie Survival Game",
    category: "Game Development",
    year: "2025",
    tagline:
      "A Java Swing survival game built around reusable object-oriented design patterns.",
    description: [
      "Zombie Survival Game is a 2D survival game built in Java with Swing. The player moves through a hostile environment, avoids or fights enemies, and collects health packs while the game loop keeps rendering and updating the world.",
      "The project was also an exercise in software design. Factories, prototypes, adapters, and strategy objects separate creation, movement, sound, and input so that new enemy and movement types can be added without rewriting the core loop.",
    ],
    image: "/image/projects/zombie-survival-game.svg",
    imageAlt: "Zombie Survival Game interface preview",
    gradient: "from-slate-700 via-emerald-700 to-lime-600",
    tech: [
      "Java",
      "Java Swing",
      "Object-Oriented Programming",
      "Design Patterns",
    ],
    githubUrl:
      "https://github.com/sazzad10023/Zombie-Survival-Game",
    role: "Game developer",
    timeline: "2025",
    highlights: [
      "Real-time Swing game loop with keyboard input and collision handling.",
      "Enemy spawning through factories and prototype-based creation.",
      "Swappable movement strategies for chasing and random behavior.",
      "Adapter-based sound and input layers that keep game logic decoupled.",
    ],
    challenges: [
      "Keeping the game loop stable while rendering, updating, and handling input on the Swing event thread.",
      "Designing collision and health logic that stays predictable as multiple enemies and bullets are active.",
      "Applying design patterns without over-engineering the small codebase.",
    ],
    improvements: [
      "Add sprite-based animation and a richer visual style.",
      "Introduce multiple levels, weapons, and enemy types.",
      "Add a save system and a proper pause/menu flow.",
      "Experiment with a lightweight multiplayer mode.",
    ],
  },
  {
    slug: "security-login-system",
    title: "Security Login System",
    category: "Security & PHP",
    year: "2025",
    tagline:
      "A hardened PHP authentication flow with OTP verification and account lockout.",
    description: [
      "Security Login System is a PHP and MySQL authentication project that goes beyond a basic username and password form. It adds email OTP verification, new-device login alerts, CSRF protection, and temporary account lockout after repeated failed attempts.",
      "The flow uses prepared statements, session regeneration, password hashing, and PHPMailer for transactional email. It was built to practice the defensive details that production authentication systems need.",
    ],
    image: "/image/projects/security-login-system.svg",
    imageAlt: "Security Login System authentication screen preview",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    tech: ["PHP", "MySQL", "PHPMailer", "HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/sazzad10023/Security_Login_System",
    role: "Backend developer",
    timeline: "2025",
    highlights: [
      "Password hashing and prepared statements throughout the login flow.",
      "Email OTP verification with a five-minute expiry window.",
      "New-device and new-IP login alerts.",
      "CSRF tokens and a 15-minute lockout after three failed attempts.",
    ],
    challenges: [
      "Keeping the OTP and lockout rules understandable across multiple redirect-based PHP scripts.",
      "Protecting every state-changing request with CSRF checks without breaking the login UX.",
      "Balancing security friction with a flow that still feels straightforward to a normal user.",
    ],
    improvements: [
      "Add passkey/WebAuthn support as a passwordless option.",
      "Introduce rate limiting at the edge in addition to per-account lockout.",
      "Build an audit dashboard for login history and security events.",
      "Move secrets into environment variables and rotate the mail credentials.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
