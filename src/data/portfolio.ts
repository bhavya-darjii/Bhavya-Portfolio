export const personal = {
  name: "Bhavya Darji",
  title: "B.Tech AI & Data Science '28 · Full-Stack & AI Engineer · Building Velaar",
  tagline: "Crafting digital experiences that feel effortless.",
  email: "bhavyadarji462@gmail.com",
  phone: "+91 8433791241",
  location: "Mumbai, India",
  profileImage: "/bhavya.png",
  heroSubtitle: "Full-Stack & AI Engineer",
  origin: "Mumbai, India",
  workingWith: "Working with India & beyond",
  techStack: "B.Tech AI & Data Science '28",
  animations: "Full-Stack & AI Engineer · Building Velaar",
  summary:
    "I'm a full-stack and AI engineer building production-ready web, mobile, and AI-powered products. I've shipped a RAG-based edtech platform for engineering colleges, an AI lead generation system for a solar company in Australia, and cross-platform mobile apps used in restaurants and healthcare. Currently building Velaar full-time.",
  profileSummary:
    "Whether shipping solo as a founder or collaborating in agile teams, I approach every build the same way: understand the real problem first, then pick the right tools. Proficient in React, React Native, Next.js, TypeScript, Python, Node.js, and Supabase, with hands-on experience building RAG pipelines, AI integrations, payment gateways, real-time GPS tracking, and multi-tenant role-based architectures. I've worked across the full delivery cycle, from system design and user interviews through to deployment, structured Git workflows, and cross-device testing.",
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
    tagline: "An AI platform built for engineering colleges and universities. Automate lesson plans, exams, attendance, and academic reporting in one place.",
    description:
      "Faculty at engineering colleges spend hours every week writing lesson plans, formatting question papers, managing attendance on paper, and compiling reports for accreditation. Velaar automates all of it. It uses Google Gemini and a RAG (Retrieval-Augmented Generation) pipeline built on Supabase so that every generated lesson plan or exam paper is grounded in the institution's own uploaded syllabus, not made up.",
    caseStudy: {
      problem:
        "Engineering college faculty spend significant time outside class on repetitive admin work: writing lesson plans by hand, building exam papers manually, tracking attendance on registers, and compiling reports for NBA and NAAC accreditation. All of this takes time away from actual teaching.",
      whyRagAndGemini:
        "Generic AI models make up content or pull from the wrong syllabus. To prevent this, I built a RAG pipeline that stores the institution's own uploaded syllabus documents in Supabase using vector search (pgvector). When a faculty member requests a lesson plan or exam paper, Google Gemini retrieves context directly from those uploaded documents before generating anything, streaming results in under 1.8 seconds.",
      whatIsBuilt: [
        "Lesson plan generator aligned to Bloom's Taxonomy with one-click export to official college Word documents",
        "Exam paper builder for Term Test and End Semester exams, formatted to university standards with marking rubrics",
        "QR-based live attendance system with session timers to prevent proxy attendance",
        "Role-based access for Teachers, Students, HOD, Principal, Admin, Registrar, and Parents with JWT authentication",
      ],
      whatIsNext: [
        "Grading handwritten answer sheets using Google Gemini Vision (OCR + rubric matching)",
        "Expanding support for more university affiliations like Mumbai University, VTU, and SPPU",
        "Pilot trials with engineering colleges in Mumbai",
      ],
    },
    highlights: [
      "RAG pipeline grounds every AI output in the institution's own uploaded syllabus, preventing hallucinations",
      "Streaming responses under 1.8s for lesson plans, exam papers, and slide deck outlines",
      "QR-based live attendance sessions that remove paper registers and flag proxy patterns",
      "Hierarchical dashboards for Teachers, HOD, Principal, and Admin with student risk analytics",
    ],
    tags: ["React 19", "Google Gemini", "RAG Pipeline", "Supabase", "Express", "pgvector"],
  },
  {
    title: "Handwrite",
    link: "https://handwrite-omega.vercel.app/",
    category: "Past Venture · Founder Journey",
    status: "Shut Down · 180+ users",
    accent: "teal",
    isPastVenture: true,
    tagline: "A micro-SaaS that converted typed text into realistic-looking handwritten PDFs.",
    description:
      "Built to solve a common problem in Indian engineering colleges: mandatory handwritten assignments. Students would type their text and the app would generate a PDF that looked genuinely handwritten. It grew to 180+ users and generated 1,200+ pages before I shut it down after running the numbers on server costs vs. what students were willing to pay.",
    founderReflection: {
      whatWorked:
        "It spread entirely through word-of-mouth across Mumbai engineering colleges with zero ad spend. Students appreciated the realistic ink jitter and natural line spacing. Razorpay prepaid credit packs made the payment flow smooth and low-friction.",
      whyShutDown:
        "Rendering high-resolution canvas pages on the server is computationally expensive. As usage grew, server costs started exceeding revenue. Students were not willing to pay subscription prices, so I shut it down cleanly rather than keep losing money on infrastructure.",
      whatLearned:
        "The biggest lesson was to understand unit economics, customer acquisition cost (CAC), and price sensitivity before scaling compute-heavy products. That lesson directly shapes how I build and price software today.",
    },
    highlights: [
      "180+ users acquired entirely through college word-of-mouth with zero ad spend",
      "1,200+ print-ready assignment pages generated with custom margins and ruled paper styles",
      "Razorpay payment gateway integration with prepaid credit packs",
      "Custom HTML5 Canvas rendering engine with natural stroke variation, ink jitter, and paper textures",
    ],
    tags: ["React 19", "Micro-SaaS", "Razorpay", "PDF Engine", "Founder Journey"],
  },
  {
    title: "SunMac Solar: Lead Intelligence Platform",
    link: "https://sunmacsolar.com.au/",
    category: "AI · B2B · Lead Generation · Solar Tech",
    status: "Delivered",
    accent: "amber",
    tagline: "An AI-powered lead generation platform built for a commercial solar company in Australia.",
    description:
      "Built for SunMac Solar in Australia. The platform automatically finds businesses by postcode using ABN Lookup, checks Google Maps satellite imagery to see if those businesses already have solar panels on their rooftop, enriches the contact details, and drafts a personalised cold email for each lead. Also rebuilt the official SunMac Solar website from scratch.",
    highlights: [
      "Automated lead pipeline: finds businesses by postcode and generates ready-to-send outreach emails",
      "Satellite imagery analysis via Google Maps to check for existing rooftop solar panels",
      "Lead profiles stored as vectors in Supabase for semantic search and targeted follow-up",
      "Lead records enriched with LinkedIn data to identify decision-makers and relevant pain points",
      "AI-generated personalised email copy for each lead, tailored to their business type and location",
      "Internal lead management dashboard to review, filter, and track outreach status across all leads",
      "Rebuilt the SunMac Solar corporate website in Next.js for faster load times and better lead conversion",
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
    tagline: "Three commercial client websites built, delivered on time, and running live.",
    description:
      "Handled client briefs across growth marketing, financial services, and B2B technology. Each project was turned into a responsive, fast-loading production website built to the client's requirements.",
    clientProjects: [
      {
        name: "ATM Promo",
        role: "Lead Web Developer",
        url: "https://atm.promo/",
        type: "Growth Agency",
        metrics: "Fully responsive mobile-first layout, clean B2B lead capture funnels",
        details:
          "Built the growth marketing agency's website focusing on fast page speeds, clean typography, and simple conversion-focused lead capture forms that don't get in the way.",
      },
      {
        name: "Prime Financials",
        role: "Web Developer",
        url: "https://primefinancials.com/",
        type: "Corporate Wealth and Custody Firm",
        metrics: "Compliance-ready layout, mobile-first, structured service pages",
        details:
          "Built a corporate website for a wealth advisory firm. Complex custody and advisory services were broken down into clearly structured, easy-to-navigate sections.",
      },
      {
        name: "Barter Tech",
        role: "Front-End Developer",
        url: "https://www.barter.tech/",
        type: "B2B Technology Services",
        metrics: "SEO-optimized structure, clean grid layout, modular service pages",
        details:
          "Built a responsive company website to showcase their enterprise tech services with fast load times, clean navigation, and search-optimized page structure.",
      },
    ],
    highlights: [
      "ATM Promo: 95+ Core Web Vitals score with mobile-first layout and a clean lead capture funnel",
      "Prime Financials: Compliance-ready financial services website with structured service tiers",
      "Barter Tech: SEO-optimized B2B website using semantic HTML and a modular component structure",
      "All three sites delivered with reusable components, minified assets, and cross-device testing",
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
    tagline: "Book a verified professional driver on demand. Hourly, one-way, or outstation trips.",
    description:
      "A two-sided marketplace that connects car owners with vetted professional drivers. The app includes live GPS tracking of the driver, automatic fare calculation based on trip type, and a REST API backend. Currently in its launch phase.",
    highlights: [
      "Cross-platform Flutter app with real-time GPS driver tracking via Google Maps",
      "REST API backend with JWT authentication, role-based access control, and webhooks",
      "Dynamic fare engine that calculates pricing for hourly, round-trip, and outstation trips",
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
    tagline: "A health monitoring and emergency response app built for senior citizens and their caregivers.",
    description:
      "A healthcare mobile app designed for senior citizens and caregivers. It continuously reads health data from wearable sensors, lets users send an emergency SOS with one tap to dispatch an ambulance, and includes features for doctor appointments and medication reminders.",
    highlights: [
      "Wearable sensor integration for continuous live vitals monitoring and anomaly detection",
      "One-tap SOS button that broadcasts real-time location to trigger ambulance dispatch",
      "Caregiver dashboard with real-time Firebase sync and automated push notifications",
      "Doctor appointment booking, digital prescriptions, and medication reminder scheduling",
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
    id: "sunmac",
    author: "Mihir Bhatt",
    role: "Founder",
    company: "SunMac Solar / Ecomac Energy Pty Ltd",
    quote:
      "We were impressed by your background and believe your skill set and enthusiasm will make a valuable addition to our team. As a Founder's Office Intern, you will work closely with leadership on key strategic initiatives, operations, and business execution. We look forward to welcoming you to SunMac Solar and building great things together.",
  },
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
