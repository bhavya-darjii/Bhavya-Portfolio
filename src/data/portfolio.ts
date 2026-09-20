export const personal = {
  name: "Bhavya Darji",
  title: "B.Tech AI & Data Science '28 · Full-Stack & AI Engineer · Building Velaar",
  tagline: "Crafting digital experiences that feel effortless.",
  email: "bhavyadarji462@gmail.com",
  phone: "+91 8433791241",
  location: "Mumbai, India",
  profileImage: "/bhavya.png",
  heroSubtitle: "Full-Stack & AI Engineer",
  origin: "Mumbai — Origin",
  workingWith: "Working with India & beyond",
  techStack: "B.Tech AI & Data Science '28",
  animations: "Full-Stack & AI Engineer · Building Velaar",
  summary:
    "I'm a full-stack & AI engineer building production-ready web, mobile, and AI-powered products — currently building Velaar, an AI-native educational platform with RAG pipelines and Gemini.",
  profileSummary:
    "Whether I'm shipping solo as a founder/freelancer or collaborating in agile teams, I care deeply about clean design, solid engineering, and scalable architectures. Proficient in React, React Native, Next.js, TypeScript, Python, Node.js, and Supabase, with hands-on experience building RAG (Retrieval-Augmented Generation) pipelines, AI integrations, and structured Git/GitHub branching workflows for team collaboration.",
  social: {
    email: "mailto:bhavyadarji462@gmail.com",
    phone: "tel:+918433791241",
    linkedin: "https://www.linkedin.com/in/bhavya-darji-181573242/",
  },
};

export const experience = [
  {
    company: "Optisoft Vision",
    role: "React JS Software Developer",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    letterId: "optisoft",
    letterLabel: "Recommendation Letter",
    letterUrl: "/letters/bhavya-optisoft-vision-recommendation-letter.pdf",
    highlights: [
      "Engineered and refactored 12+ modular React/Vite components across EyeCloud, Lensoui, and HelpHub web portals.",
      "Integrated REST APIs with asynchronous state handling, reducing UI render lag and improving data synchronization.",
      "Resolved 25+ cross-browser rendering inconsistencies and participated in structured sprint deployments.",
    ],
  },
  {
    company: "Vinayak Soft Solutions",
    role: "App Development Intern",
    period: "Nov 2024 – Mar 2025",
    type: "Internship",
    letterId: "vinayak",
    letterLabel: "Recommendation Letter",
    letterUrl: "/letters/bhavya-vinayak-soft-solutions-recommendation-letter.pdf",
    highlights: [
      "Developed cross-platform mobile apps with React Native and Expo in an agile product environment.",
      "Engineered an offline-first POS system for local restaurants to capture and process table orders seamlessly.",
      "Built a Business Insights application delivering real-time sales, inventory, and performance dashboards for owners.",
      "Optimized app bundle size and render performance across Android and iOS touch interfaces.",
    ],
  },
  {
    company: "WebGyor Technologies",
    role: "WordPress Website Development",
    period: "June 2022 – August 2022",
    type: "Internship",
    letterId: "webgyor",
    letterLabel: "Recommendation Letter",
    letterUrl: "/letters/bhavya-webgyor-technologies-recommendation-letter.pdf",
    highlights: [
      "Built responsive, accessible client web applications enforcing consistent typography, layout, and visual hierarchy.",
      "Managed front-end and back-end integration across Portfolio Analyst, Employee Track, and Account Management portals.",
      "Streamlined asset delivery and caching configurations, improving page speed by 35% across internal tools.",
    ],
  },
  {
    company: "Ayika Foundation",
    role: "IT Intern",
    period: "Aug 2022 – Aug 2023",
    type: "Internship",
    letterId: "ayika",
    letterLabel: "Appointment Letter",
    letterUrl: "/letters/bhavya-ayika-offer-letter.pdf",
    highlights: [
      "Selected through a competitive evaluation process to lead digital operations supporting environmental advocacy.",
      "Managed digital content architecture and distribution workflows reaching 10,000+ community members across channels.",
      "Maintained online platform assets and automated regular content publishing schedules for environmental campaigns.",
    ],
  },
];

export const education = [
  {
    school: "KJ Somaiya Institute of Technology",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2025 – 2028",
    score: "CGPA: 8.7 / 10.0 (Current)",
  },
  {
    school: "Shri Bhagubhai Mafatlal Polytechnic",
    degree: "Diploma in Information Technology",
    period: "2022 – 2025",
    score: "Aggregate: 85.73%",
  },
  {
    school: "Parle Tilak Vidyalaya",
    degree: "Secondary Education (Class 10)",
    period: "2010 – 2020",
    score: "Aggregate: 93.50%",
  },
];

export const projects = [
  {
    title: "Velaar",
    link: "https://velaar.vercel.app/",
    category: "AI EdTech · Flagship Platform",
    status: "In Development · Live Demo",
    accent: "indigo",
    isFlagship: true,
    tagline: "AI-native educational copilot & institutional management platform.",
    description:
      "Velaar eliminates administrative grunt work in Indian education — where teachers spend 15+ hours weekly drafting lesson plans, question banks, slide decks, and managing attendance. Built with Gemini 1.5 Pro and a specialized Vector RAG pipeline to ensure strict curriculum-grounded accuracy without hallucinations.",
    caseStudy: {
      problem:
        "Indian schools and coaching centers drown teachers in administrative grunt work — manual lesson plan drafting, question paper formatting across Bloom's levels, lecture slide creation, and manual paper roll calls.",
      whyRagAndGemini:
        "Standard LLMs hallucinate non-syllabus facts. Combining Gemini 1.5 Pro's 1M+ token context with a Supabase pgvector RAG pipeline grounds every generated lesson plan, quiz, and slide directly in approved CBSE/ICSE board curriculum documents with sub-1.8s streaming responses.",
      whatIsBuilt: [
        "AI Lesson Plan & Bloom's Taxonomy Question Bank Generator with one-click export",
        "Automated Topic-to-Presentation PowerPoint slide deck creation engine",
        "Real-Time Dynamic QR Attendance session management with geo-verification safeguards",
        "Multi-role AI Copilot tailored specifically for Teachers, Students, Admins, and Parents",
      ],
      whatIsNext: [
        "OCR integration for automated grading of handwritten student homework",
        "Multilingual curriculum support for regional Indian languages (Hindi, Marathi, Gujarati)",
        "Pilot institutional deployments with local Mumbai coaching institutes and schools",
      ],
    },
    highlights: [
      "Vector RAG pipeline with Supabase pgvector delivering curriculum-verified responses",
      "Sub-1.8s streaming generation for complex multi-page lesson plans and question papers",
      "Dynamic QR attendance engine eliminating paper registers and proxy attendance",
      "Automated presentation generator transforming complex topics into structured PPTs",
    ],
    tags: ["React 19", "Gemini AI", "RAG Pipeline", "Supabase", "Express", "pgvector"],
  },
  {
    title: "Handwrite",
    link: "https://handwrite-omega.vercel.app/",
    category: "Past Venture · Founder Journey",
    status: "Shut Down · 180+ users",
    accent: "teal",
    isPastVenture: true,
    tagline: "Bootstrapped micro-SaaS converting typed text to realistic handwritten assignments.",
    description:
      "Launched to solve a widespread pain point for Indian college students facing mandatory handwritten submissions. Onboarded 180+ student users and generated 1,200+ pages before being gracefully retired to focus on AI & RAG systems.",
    founderReflection: {
      whatWorked:
        "Fast organic adoption across Mumbai engineering colleges via word-of-mouth; personalized handwriting profiles with natural font variations and instant Razorpay credit packs.",
      whyShutDown:
        "High server compute costs for high-DPI canvas/PDF rendering collided with student price sensitivity and low willingness-to-pay. Chose to sunset the product rather than run unprofitable infrastructure.",
      whatLearned:
        "Invaluable firsthand education in user acquisition, feedback loops, pricing psychology, and validating unit economics before scaling compute.",
    },
    highlights: [
      "Onboarded 180+ active student users across Mumbai colleges purely through organic referrals",
      "Rendered 1,200+ high-resolution, print-ready handwritten PDF pages with custom margins",
      "Integrated Razorpay payment gateway with modular, rollover credit bundles",
      "Built custom canvas rendering engine with realistic paper textures, rule lines, and ink flow",
    ],
    tags: ["React 19", "Micro-SaaS", "Razorpay", "PDF Engine", "Founder Journey"],
  },
  {
    title: "Freelance Client Work",
    link: "https://atm.promo/",
    category: "Client Engineering · 3 Projects",
    status: "Delivered",
    accent: "amber",
    isFreelanceGroup: true,
    tagline: "Delivered production client web applications across FinTech, B2B, and Marketing.",
    description:
      "End-to-end web engineering for commercial clients — spanning conversion-optimized agency platforms, corporate financial advisory sites, and B2B technology portals.",
    clientProjects: [
      {
        name: "ATM Promo",
        role: "Lead Web Developer",
        url: "https://atm.promo/",
        type: "Growth Agency (Representative Case Study)",
        metrics: "95+ Core Web Vitals, conversion-focused layout, targeted B2B lead capture funnels",
        details:
          "Engineered corporate site with optimized lead generation CTAs, responsive UI, and lightning-fast asset delivery.",
      },
      {
        name: "Prime Financials",
        role: "Web Developer",
        url: "https://primefinancials.com/",
        type: "Corporate Wealth & Custody Firm",
        metrics: "Multi-tier advisory architecture, regulatory compliance layout, mobile-first design",
        details:
          "Delivered professional corporate portal structuring execution, custody, and settlement advisory services.",
      },
      {
        name: "Barter Tech",
        role: "Front-End Developer",
        url: "https://www.barter.tech/",
        type: "B2B Technology Services",
        metrics: "SEO-optimized architecture, Bootstrap layout, structured service breakdown",
        details:
          "Constructed responsive company website showcasing enterprise service offerings and value propositions.",
      },
    ],
    highlights: [
      "ATM Promo: Built high-converting agency portal achieving 95+ Core Web Vitals and clean lead funnels",
      "Prime Financials: Structured corporate site for financial firm featuring regulatory compliance architecture",
      "Barter Tech: Engineered clean B2B portal with modern responsive design and search-optimized structure",
      "Standardized client deployments with reusable styling, minified assets, and responsive cross-device testing",
    ],
    tags: ["WordPress", "Bootstrap", "Client Work", "SEO", "Lead Generation"],
  },
  {
    title: "Hasslefree Drive",
    link: "https://www.hasslefreedrive.com/",
    websiteLink: "https://www.hasslefreedrive.com/",
    androidLink: "https://play.google.com/store/apps/details?id=com.hasslefreedrive.app",
    iosLink: "",
    category: "Mobile Application",
    status: "In Launch Phase",
    accent: "cyan",
    tagline: "On-demand professional driver booking platform with real-time dispatch.",
    description:
      "A dual-sided mobility application connecting vehicle owners with vetted, professional drivers for hourly, one-way, and outstation trips — currently in its production launch phase.",
    highlights: [
      "Built cross-platform Flutter application with live GPS driver tracking via Google Maps API",
      "Engineered scalable REST API backend with JWT authentication, role-based access, and webhooks",
      "Automated fare calculation engine supporting hourly, round-trip, and outstation pricing tiers",
      "Driver verification workflow and secure payment processing engine ready for production scale",
    ],
    tags: ["Flutter", "Dart", "Google Maps", "REST API", "Real-Time Tracking"],
  },
  {
    title: "Medway",
    link: "",
    category: "Healthcare Application",
    status: "Completed",
    accent: "sky",
    tagline: "Remote health monitoring & emergency response coordination for elderly care.",
    description:
      "Healthcare monitoring application designed for senior citizens and caregivers — integrating real-time vitals tracking, emergency alerts, and doctor appointment scheduling.",
    highlights: [
      "Wearable sensor integration architecture supporting continuous live vitals tracking and monitoring",
      "One-touch emergency SOS ambulance dispatch system designed for critical health anomalies",
      "Doctor appointment scheduling, medication reminders, and monthly health report generation",
      "Multi-user caregiver portal with real-time Firebase synchronization and push notifications",
    ],
    tags: ["Flutter", "Health Tech", "IoT Sensors", "Firebase", "Emergency SOS"],
  },
];

export const certificates = [
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Course Completion",
    date: "2024",
    link: "/certificates/ai-ml-course.pdf",
  },
  {
    title: "Claude AI Fluency",
    issuer: "Anthropic",
    date: "2024",
    link: "/certificates/claude-ai-fluency.pdf",
  },
  {
    title: "Claude AI Fluency for Students",
    issuer: "Anthropic",
    date: "2024",
    link: "/certificates/claude-ai-fluency-students.pdf",
  },
  {
    title: "Claude for Small Businesses",
    issuer: "Anthropic",
    date: "2024",
    link: "/certificates/claude-small-businesses.pdf",
  },
];

export const primarySkills = [
  { name: "React & Next.js", desc: "App Router, SSR/SSG, Server Components, State Management" },
  { name: "React Native & Expo", desc: "Cross-platform mobile architecture, native modules, gestures" },
  { name: "TypeScript & JavaScript", desc: "Strict typing, async runtime patterns, API contracts" },
  { name: "Python & RAG Pipelines", desc: "Vector embeddings, LangChain, Supabase pgvector, prompt design" },
  { name: "Node.js & Express", desc: "RESTful microservices, JWT auth, middleware architecture" },
  { name: "PostgreSQL & Supabase", desc: "pgvector, Row-Level Security (RLS), relational schemas" },
  { name: "Firebase & Cloud Services", desc: "Firestore, real-time sync, Auth, Cloud Functions" },
];

export const secondarySkills = [
  "Flutter & Dart",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub Workflows",
  "Docker",
  "Redis",
  "REST APIs",
  "MySQL",
  "Render",
  "Google Cloud Platform",
  "Java",
  "C/C++",
  "WordPress",
  "Adobe Photoshop",
];

export const technicalSkills = [
  ...primarySkills.map((s) => s.name),
  ...secondarySkills,
];

export const softSkills = [
  "Project Management",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
];

export const leadershipExperience = [
  {
    title: "Founder & Product Lead",
    organization: "Velaar & Handwrite",
    period: "2024 – Present",
    description:
      "End-to-end founder ownership: conducted user interviews with 50+ students and educators, translated real-world friction into system architectures, and launched products from scratch.",
    tag: "Entrepreneurship",
  },
  {
    title: "Technical Mentoring & Peer Guidance",
    organization: "Collegiate & Developer Community",
    period: "2023 – Present",
    description:
      "Mentored junior engineering students in React Native, web fundamentals, and structured Git branching workflows. Conducted hands-on code reviews and debugging sessions.",
    tag: "Mentorship",
  },
  {
    title: "Digital Operations Lead (Internship)",
    organization: "Ayika Foundation",
    period: "2022 – 2023",
    description:
      "Led digital outreach and web asset initiatives for climate advocacy, coordinating with co-founders on campaigns that engaged over 10,000 community members across channels.",
    tag: "Social Impact",
  },
  {
    title: "Hackathons & AI Innovation",
    organization: "Tech Events & Open Source",
    period: "2024 – Present",
    description:
      "Active participant in collegiate hackathons and local developer meetups in Mumbai, exploring cutting-edge LLM integration, agentic workflows, and RAG architectures.",
    tag: "Community",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Gujarati", level: "Native" },
  { name: "Marathi", level: "Intermediate" },
];

export const testimonials = [
  {
    id: "webgyor",
    author: "Saurabh Gupta",
    role: "Founder & Partner",
    company: "Webgyor Technologies",
    quote:
      "I highly recommend Bhavya Darji who has done an internship with us for 3 months. I can assure you that Bhavya has good work ethics and exemplary skills. Bhavya is a team player and very proactive. I strongly recommend Bhavya Darji as an excellent and professional member.",
  },
  {
    id: "vinayak",
    author: "Jatin Chauhan",
    role: "Founder",
    company: "Vinayak Soft Solutions",
    quote:
      "We have found Mr. Bhavya Darji to be a self-starter who is motivated, duty bound, and highly committed team player with strong conceptual knowledge. During his tenure with us as a Junior React JS Software Developer, we found him efficient, his character and conduct were good.",
  },
  {
    id: "ayika",
    author: "Siya Joshi & Litisha Bagadia",
    role: "Co-Founders",
    company: "Ayika Foundation",
    quote:
      "After a meticulous process of selection, we, the founders, take great privilege in appointing you as the IT Intern at Ayika Foundation. We are truly impressed with your work and are beyond excited to work with you... we are confident that you will play an instrumental role in furthering our mission.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Recommendations" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const footerTags = [
  "PIXEL-PERFECT",
  "SUPPORT ∞",
  "/CODE-QUALITY",
  "//HASSLE-FREE",
];

export const heroNavLinks = [
  { href: "#about", label: "About Me", hideOnMobile: true },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Approach", hideOnMobile: true },
  { href: "#leadership", label: "Leadership", hideOnMobile: true },
  { href: "#contact", label: "Let's Talk" },
  { href: "/Bhavya%20Darji%20%E2%80%94%20Resume.pdf", label: "Resume ↗" },
];
