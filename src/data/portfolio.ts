export const personal = {
  name: "Bhavya Darji",
  title: "Software Development Engineer",
  tagline: "Crafting digital experiences that feel effortless.",
  email: "bhavyadarji462@gmail.com",
  phone: "+91 8433791241",
  location: "Mumbai, India",
  profileImage: "/bhavya.png",
  heroSubtitle: "React Native & Next.js for Designers",
  origin: "Mumbai — Origin",
  workingWith: "Working with India & beyond",
  techStack: "FULL STACK ENGINEER",
  animations: "APPLICATION AND WEB DEVELOPER",
  summary:
    "I'm a full-stack engineer building production-ready web, mobile, and AI-powered SaaS products — with expertise in RAG pipelines, cross-platform apps, and modern web architectures.",
  profileSummary:
    "Whether I'm shipping solo as a freelancer or collaborating in agile teams, I care deeply about clean design, solid engineering, and scalable architectures. Proficient in React, React Native, Next.js, Flutter, Node.js, and Firebase, with hands-on experience building RAG (Retrieval-Augmented Generation) pipelines, AI integrations, and structured Git/GitHub branching workflows for team collaboration.",
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
    period: "Jun 2026",
    type: "Internship",
    letterId: "optisoft",
    letterLabel: "Recommendation Letter",
    letterUrl: "/letters/bhavya-optisoft-vision-recommendation-letter.pdf",
    highlights: [
      "Contributed to Lensoui, Eyecloud, and HelpHub — shipping features, integrating APIs, and debugging across the stack.",
      "Collaborated on app development workflows with a focus on reliability and clean user experiences.",
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
      "Gained hands-on experience in app development using React Native and Expo during a focused internship.",
      "Built a POS system for local restaurants to manage offline orders seamlessly, streamlining daily operations.",
      "Developed a Business Insights app delivering real-time sales, purchase, and performance metrics for decision-making.",
      "Strengthened cross-platform skills, problem-solving, and delivering user-focused solutions in production-like environments.",
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
      "Achieved a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.",
      "Managed front-end and back-end development in Portfolio Analyst, Employee Track, and Account Management systems.",
      "Coordinated the design, development, and launch of a new website — increasing online visibility and customer engagement.",
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
      "Selected through a competitive vetting process to drive IT and digital initiatives supporting environmental advocacy.",
      "Collaborated with co-founders on climate action campaigns and digital content distribution across community platforms.",
      "Managed digital assets and web content workflows ensuring consistent messaging and online outreach.",
    ],
  },
];

export const education = [
  {
    school: "KJ Somaiya Institute of Technology",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2025 – 2028",
  },
  {
    school: "Shri Bhagubhai Mafatlal Polytechnic",
    degree: "Diploma in Information Technology",
    period: "2022 – 2025",
  },
  {
    school: "Parle Tilak Vidyalaya",
    degree: "Secondary Education",
    period: "2010 – 2020",
  },
];

export const projects = [
  {
    title: "Velaar",
    link: "https://velaar.vercel.app/",
    category: "AI EdTech SaaS",
    status: "Live Product",
    accent: "indigo",
    description:
      "A massive, advanced, AI-powered educational management platform leveraging Generative AI and OCR to provide specialized tools for teachers, students, administrators, and parents.",
    highlights: [
      "Global AI Copilot using Gemini for context-aware, role-specific task automation",
      "Smart Attendance System featuring real-time QR scanning and one-click teacher sessions",
      "Deep AI Content Engine generating detailed lesson plans and intelligent question banks",
      "Automated AI PowerPoint generator transforming course topics into fully structured lecture slides",
    ],
    tags: ["React 19", "Express", "Supabase", "Gemini AI", "RAG Pipeline"],
  },
  {
    title: "Handwrite",
    link: "https://handwrite-omega.vercel.app/",
    category: "Business Venture",
    status: "Live Product",
    accent: "teal",
    description:
      "A SaaS platform that transforms typed text into realistic handwritten pages using personalized handwriting profiles — built for students facing mandatory handwritten submissions across Indian education.",
    highlights: [
      "Upload handwriting once to create a personalized engine with accurate style matching",
      "Print-ready PDFs with perfect spacing, margins, alignment, and multi-page flow",
      "Student-friendly page bundles with smart 30-day rollover — no complicated subscriptions",
      "Mobile-ready editor with live document preview, helpful in-app guidance, and zero learning curve",
    ],
    tags: ["React 19", "PDF Engine", "SaaS", "Product Design", "Mobile-Ready"],
  },
  {
    title: "Hasslefree Drive",
    link: "https://www.hasslefreedrive.com/",
    websiteLink: "https://www.hasslefreedrive.com/",
    androidLink: "https://play.google.com/store/apps/details?id=com.hasslefreedrive.app",
    iosLink: "", // Paste your iOS App Store link here once published (e.g. https://apps.apple.com/app/...)
    category: "Mobile Application",
    status: "Delivered",
    accent: "cyan",
    description:
      "An on-demand driver booking app connecting users with verified professional drivers for hourly or trip-based rides — personal and corporate, with instant or advance scheduling.",
    highlights: [
      "Simple booking for one-way, round-trip, or outstation travel with fare estimates",
      "Real-time driver tracking, secure in-app payments, and verified driver profiles",
      "Ratings, reviews, notifications, and booking history for a seamless experience",
      "Scalable REST API backend featuring JWT auth, role-based access, and push notifications",
    ],
    tags: ["Flutter", "Dart", "Google Maps", "REST API", "Real-time"],
  },
  {
    title: "Medway",
    link: "",
    category: "Healthcare Application",
    status: "Completed",
    accent: "sky",
    description:
      "A healthcare monitoring app designed for elderly users and caregivers — real-time vitals, emergency support, and complete care coordination.",
    highlights: [
      "Wearable heart-rate sensor integration providing continuous live vitals tracking and display",
      "One-click emergency ambulance dispatch system designed specifically for critical health situations",
      "Seamless doctor appointment scheduling, pharmacy ordering, and comprehensive monthly health reports",
      "Multi-user access portals for caregivers and family members featuring real-time alerts",
    ],
    tags: ["Flutter", "Health Tech", "IoT Sensors", "Firebase", "Emergency SOS"],
  },
  {
    title: "ATM Promo",
    link: "https://atm.promo/",
    category: "Web Development",
    status: "Delivered",
    accent: "amber",
    description:
      "Corporate marketing site for a growth acceleration agency — advertising, AI automation, and international expansion positioned with outcome-focused UX.",
    highlights: [
      "Industry-specific service pages for FinTech and Healthcare with highly optimized lead CTAs",
      "Outcome-focused UX design emphasizing strategic client partnerships and delivering measurable results",
      "Fully responsive layout featuring client testimonials and a seamless consultation booking flow",
      "Core Web Vitals optimized via lazy loading, minified assets, and schema markup",
    ],
    tags: ["WordPress", "UI/UX", "Core Web Vitals", "SEO", "Marketing"],
  },
  {
    title: "Prime Financials",
    link: "https://primefinancials.com/",
    category: "Web Development",
    status: "Delivered",
    accent: "emerald",
    description:
      "Corporate website for a financial services firm — execution, custody, settlement, and portfolio management presented with authority and clarity.",
    highlights: [
      "Intuitive navigation structure seamlessly organizing Services, Markets, Insights, and Contact pages",
      "Strategic content highlighting regulatory licensing, global market access, and boutique firm positioning",
      "Professional corporate branding highlighting the advisory board and full legal contact details",
      "Fully responsive layout ensuring a seamless browsing experience across all mobile devices",
    ],
    tags: ["WordPress", "FinTech", "Corporate Branding", "Responsive", "SEO"],
  },
  {
    title: "Barter Tech",
    link: "https://www.barter.tech/",
    category: "Web Development",
    status: "Delivered",
    accent: "sky",
    description:
      "Official company website showcasing Barter.Tech's services and value proposition in a clean, content-driven format.",
    highlights: [
      "Clean and professional layout effectively showcasing core company services and value propositions",
      "Highly responsive, user-friendly interface featuring modern UI/UX principles across all devices",
      "Optimized content-driven structure detailing tailored services, company background, and accessible contact information",
      "Advanced SEO-optimized architecture specifically tailored for B2B lead generation and organic growth",
    ],
    tags: ["WordPress", "Bootstrap", "B2B", "SEO Architecture", "Responsive"],
  },
];

export const certificates = [
  {
    title: "AI - ML Course",
    issuer: "Reliance Foundation", // Or a generic if we don't know, maybe I'll just say "Course Completion" or omit issuer
    date: "2023",
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

export const technicalSkills = [
  "React Native",
  "Next.js",
  "TypeScript",
  "RAG Pipelines",
  "Vector RAG",
  "Git & GitHub (Branching & Workflows)",
  "Render",
  "Expo",
  "Prompt Engineering",
  "Flutter",
  "Node.js",
  "Supabase",
  "Firebase",
  "REST APIs",
  "Python",
  "JavaScript",
  "SQL",
  "MySQL",
  "HTML5",
  "CSS3",
  "WordPress",
  "Bootstrap",
  "Java",
  "C++",
  "C",
  "Adobe Photoshop",
];

export const softSkills = [
  "Project Management",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
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
  { href: "#contact", label: "Let's Talk" },
  { href: "/resume.pdf", label: "Resume ↗" },
];

