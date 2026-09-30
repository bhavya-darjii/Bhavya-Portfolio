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
    company: "SunMac Solar (Ecomac Energy Pty Ltd)",
    role: "Founder's Office Intern",
    period: "Sep 2026 – Present",
    type: "Internship",
    letterId: "sunmac",
    letterLabel: "Offer Letter",
    letterUrl: "/letters/bhavya-sunmac-solar-offer-letter.pdf",
    highlights: [
      "Working in the Founder's Office on strategic operations and business execution for an Australian B2B solar energy company.",
      "Engineered an AI-powered B2B lead generation platform automating business discovery, solar panel detection, lead enrichment, and personalised outreach email generation.",
      "Redesigned and developed the official SunMac Solar corporate website, improving UI, conversion architecture, and SEO.",
    ],
  },
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
    tagline: "An AI teaching copilot for Indian schools — lesson plans, question banks, and slide decks in seconds.",
    description:
      "Teachers in India spend hours every week typing out lesson plans, formatting question papers to Bloom's taxonomy, and making PowerPoint decks. Velaar automates that. Built with Gemini 1.5 Pro and Supabase pgvector so outputs stay strictly grounded in official CBSE/ICSE curriculum instead of hallucinating random textbook topics.",
    caseStudy: {
      problem:
        "School teachers spend hours outside class doing repetitive prep: typing lesson plans by hand, balancing question papers across easy/medium/hard Bloom's levels, formatting presentation slides, and calling roll on paper registers.",
      whyRagAndGemini:
        "Generic LLMs make things up and mix up syllabi. I built a RAG pipeline that chunks and embeds approved CBSE and ICSE curriculum documents into Supabase pgvector. When a teacher asks for a lesson plan or quiz, Gemini 1.5 Pro pulls context from the exact textbook chapters with streaming responses under 1.8 seconds.",
      whatIsBuilt: [
        "Lesson plan & Bloom's taxonomy question generator with one-click export",
        "Topic-to-PowerPoint engine that turns syllabus topics into formatted classroom slide decks",
        "QR attendance system with session timers to stop proxy attendance and drop paper registers",
        "Role-based portals for teachers, students, admins, and parents with JWT authentication",
      ],
      whatIsNext: [
        "Handwritten answer sheet grading using OCR and rubric matching",
        "Curriculum support for state boards in Hindi, Marathi, and Gujarati",
        "Classroom trials with coaching institutes in Mumbai",
      ],
    },
    highlights: [
      "Supabase pgvector RAG pipeline keeps AI outputs tied directly to board textbooks",
      "Fast streaming responses under 1.8s for multi-page lesson plans and question papers",
      "Tamper-resistant QR attendance tracking replacing paper registers",
      "One-click slide generation that turns syllabus topics into clean presentation decks",
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
    tagline: "A micro-SaaS that converted typed text into realistic handwritten PDFs.",
    description:
      "Built this to solve a real headache in Indian engineering colleges: mandatory handwritten assignments. Grew it to 180+ student users and rendered 1,200+ pages before shutting it down once I calculated the server compute costs against what students were willing to pay.",
    founderReflection: {
      whatWorked:
        "Word-of-mouth spread fast across Mumbai engineering colleges with zero ad spend. Students liked the realistic ink flow jitter and line spacing variations, and Razorpay prepaid credit packs made payments easy.",
      whyShutDown:
        "Rendering high-DPI canvas pages on the server is expensive. As usage grew, server costs outpaced revenue, and students weren't willing to pay subscription pricing. Rather than keep burning money on infrastructure, I decided to shut it down cleanly.",
      whatLearned:
        "My biggest takeaway was understanding unit economics, CAC, and price elasticity before scaling compute. That lesson changed how I build and price software today.",
    },
    highlights: [
      "180+ users acquired entirely through college word-of-mouth with zero ad spend",
      "1,200+ print-ready assignment pages generated with custom margins and ruled paper styles",
      "Razorpay payment gateway integration with prepaid credit packs",
      "Custom HTML5 Canvas engine with natural stroke variation, ink jitter, and paper textures",
    ],
    tags: ["React 19", "Micro-SaaS", "Razorpay", "PDF Engine", "Founder Journey"],
  },
  {
    title: "SunMac Solar — Lead Intelligence Platform",
    link: "https://sunmacsolar.com.au/",
    category: "AI · B2B · Lead Generation · Solar Tech",
    status: "Delivered",
    accent: "amber",
    tagline: "AI-powered lead intelligence and customer acquisition platform for commercial solar.",
    description:
      "Built for SunMac Solar (Australia) — an automated pipeline that finds businesses by postcode via ABN Lookup, checks satellite imagery for rooftop solar panels, enriches contact details, and drafts personalised outreach emails. Also rebuilt the official SunMac Solar corporate website.",
    highlights: [
      "Automated lead pipeline: discovers businesses from postcodes and generates ready-to-send cold emails",
      "Google Maps satellite imagery analysis and ABN Lookup API integration for business profiling",
      "Lead profiles stored as pgvectors in Supabase for semantic search and targeted outreach",
      "Enriched lead records with LinkedIn data to find decision-makers and energy pain points",
      "Rebuilt the SunMac Solar website with Next.js for better load speeds and commercial lead conversion",
    ],
    tags: ["Next.js", "Supabase", "pgvector", "Google Maps API", "RAG Pipeline", "B2B"],
  },
  {
    title: "Freelance Client Work",
    link: "https://atm.promo/",
    category: "Client Engineering · 3 Projects",
    status: "Delivered",
    accent: "amber",
    isFreelanceGroup: true,
    tagline: "Three commercial client sites delivered on schedule and running live.",
    description:
      "Took client briefs across growth marketing, financial wealth services, and B2B tech, turning them into responsive, fast-loading production websites.",
    clientProjects: [
      {
        name: "ATM Promo",
        role: "Lead Web Developer",
        url: "https://atm.promo/",
        type: "Growth Agency (Representative Case Study)",
        metrics: "95+ Core Web Vitals, high-converting B2B funnel, mobile-first",
        details:
          "Built their growth marketing agency site with a focus on speed, clean typography, and frictionless lead capture forms.",
      },
      {
        name: "Prime Financials",
        role: "Web Developer",
        url: "https://primefinancials.com/",
        type: "Corporate Wealth & Custody Firm",
        metrics: "Compliance-ready layout, mobile-first, structured service pages",
        details:
          "Developed a corporate website for a wealth advisory firm, breaking down complex custody and advisory services into clear sections.",
      },
      {
        name: "Barter Tech",
        role: "Front-End Developer",
        url: "https://www.barter.tech/",
        type: "B2B Technology Services",
        metrics: "SEO-optimized structure, clean Bootstrap grid, modular service pages",
        details:
          "Built a responsive company website showcasing their enterprise technology solutions with fast page load times and clear navigation.",
      },
    ],
    highlights: [
      "ATM Promo: 95+ Core Web Vitals with mobile-first layouts and clean lead capture funnels",
      "Prime Financials: Financial services portal with structured service tiers and mobile-first design",
      "Barter Tech: Search-optimized B2B website built on clean semantic HTML and modular components",
      "All three delivered with reusable component patterns, minified assets, and cross-device testing",
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
    tagline: "Book a professional driver on demand — hourly, one-way, or outstation.",
    description:
      "A two-sided marketplace connecting car owners with vetted professional drivers. Built with live GPS driver tracking, dynamic fare calculation, and a REST backend — currently in its launch phase.",
    highlights: [
      "Cross-platform Flutter mobile app with real-time GPS vehicle tracking via Google Maps",
      "REST API backend with JWT authentication, role-based access control, and webhooks",
      "Dynamic fare calculation engine supporting hourly, round-trip, and outstation pricing tiers",
      "Driver verification flow and payment processing ready for production rollout",
    ],
    tags: ["Flutter", "Dart", "Google Maps", "REST API", "Real-Time Tracking"],
  },
  {
    title: "Medway",
    link: "",
    category: "Healthcare Application",
    status: "Completed",
    accent: "sky",
    tagline: "Health monitoring and emergency response application for senior healthcare.",
    description:
      "A healthcare mobile app for senior citizens and caregivers: continuous telemetry from wearable sensors, single-tap SOS ambulance dispatch, doctor appointments, and medication reminders.",
    highlights: [
      "Wearable sensor integration for continuous live vitals tracking and anomaly detection",
      "One-tap emergency SOS system broadcasting real-time location for ambulance dispatch",
      "Caregiver coordination dashboard with real-time Firebase sync and automated push alerts",
      "Doctor appointments, digital prescriptions, and medication adherence reminders",
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
    title: "Digital Operations Lead",
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
