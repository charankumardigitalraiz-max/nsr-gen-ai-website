export const HERO_VIDEO = "/Artificual ai video.mp4";

export const PHONE = "6281079591";

export const WHATSAPP = `https://wa.me/91${PHONE}?text=Hi%20NSR%20Academy%2C%20I%20want%20to%20register%20for%20the%20GenAI%20course.`;

export const WHATSAPP_DEMO = `https://wa.me/91${PHONE}?text=Hi%20NSR%20Academy%2C%20I%20would%20like%20to%20book%20a%20free%20GenAI%20demo%20session.`;

export const NAV_LINKS = [
  { label: "Home", href: "#/" },
  { label: "Courses", href: "#/courses" },
  { label: "Services", href: "#/training" },
  { label: "Blogs", href: "#/blogs" },
  { label: "Roadmap", href: "#/roadmap" },
  { label: "Placements", href: "#/placements" },
  { label: "About", href: "#/about" },
];

/** Training section hero — stock photo (Unsplash) */
export const TRAINING_HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&h=600&q=80",
  alt: "Students learning together in a modern classroom",
};

/** Training service cards — thematic stock images (Unsplash) */
export const TRAINING_SERVICES = [
  {
    icon: "classroom",
    title: "Classroom Training",
    desc: "In-person sessions at our KPHB campus with structured daily labs and mentor support.",
    tag: "Core Program",
    accent: "gh-blue",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Instructor teaching students in a classroom",
  },
  {
    icon: "project",
    title: "Live Project Labs",
    desc: "Build real-world GenAI, data, and full-stack projects for your portfolio and interviews.",
    tag: "Hands-on",
    accent: "gh-purple",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Team collaborating on a live coding project",
  },
  {
    icon: "workshop",
    title: "GenAI Workshops",
    desc: "Focused workshops on LLMs, prompt engineering, RAG pipelines, and AI agent workflows.",
    tag: "Workshop",
    accent: "cyber-pink",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Generative AI and machine learning workshop",
  },
  {
    icon: "corporate",
    title: "Corporate Training",
    desc: "Upskill your team with customized GenAI and data programs for IT services & product firms.",
    tag: "B2B",
    accent: "gh-green",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Corporate team in a professional training session",
  },
  {
    icon: "interview",
    title: "Interview Preparation",
    desc: "Mock interviews, aptitude drills, SQL/Python rounds, and HR communication coaching.",
    tag: "Placement",
    accent: "gh-blue",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Candidate preparing for a technical interview",
  },
  {
    icon: "placement",
    title: "Placement Assistance",
    desc: "Resume reviews, referral support, and continuous guidance until you land your role.",
    tag: "Career",
    accent: "gh-purple",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Career placement and job offer handshake",
  },
  {
    icon: "weekend",
    title: "Weekend Batches",
    desc: "Flexible weekend schedules for working professionals and college students.",
    tag: "Flexible",
    accent: "cyber-pink",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Student studying during a weekend batch session",
  },
  {
    icon: "mentor",
    title: "1-on-1 Mentorship",
    desc: "Personal mentor sessions to clear doubts, review code, and plan your career path.",
    tag: "Premium",
    accent: "gh-green",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "One-on-one mentorship and guidance session",
  },
];

/** Blog cover photos — thematic stock images (Unsplash), not course/pamphlet assets */
export const BLOG_POSTS = [
  {
    slug: "genai-career-guide-2026",
    category: "Career",
    title: "GenAI Career Guide for Fresh Graduates in 2026",
    excerpt:
      "Which roles are hiring, what skills matter, and how to position yourself for Data, BA, and AI engineer tracks.",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Abstract AI and neural network visualization",
  },
  {
    slug: "python-zero-to-developer",
    category: "Python",
    title: "From Zero Coding to Python Developer in 5 Months",
    excerpt:
      "A practical week-by-week roadmap for beginners — syntax, projects, APIs, and interview prep.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Developer writing code on a laptop",
  },
  {
    slug: "crack-data-analyst-interviews",
    category: "Interviews",
    title: "How to Crack Data Analyst Interviews at TCS & Accenture",
    excerpt:
      "SQL patterns, case studies, Power BI tips, and how to talk about GenAI in analyst interviews.",
    date: "Feb 14, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Professional preparing for a job interview",
  },
  {
    slug: "llm-rag-beginners",
    category: "GenAI",
    title: "LLMs & RAG Explained for Beginners",
    excerpt:
      "Understand embeddings, vector search, and retrieval-augmented generation without the jargon overload.",
    date: "Jan 30, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1676299085922-0b672f7797ee?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Chatbot and artificial intelligence concept",
  },
  {
    slug: "business-analyst-genai-tools",
    category: "Business Analyst",
    title: "5 GenAI Tools Every Business Analyst Should Know",
    excerpt:
      "Speed up BRDs, user stories, stakeholder emails, and presentations with the right AI workflows.",
    date: "Jan 18, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Business team collaborating in a meeting",
  },
  {
    slug: "portfolio-projects-that-get-hired",
    category: "Projects",
    title: "Portfolio Projects That Actually Get You Hired",
    excerpt:
      "What hiring managers look for in data, ML, and full-stack AI projects — with examples you can build.",
    date: "Jan 5, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=560&q=80",
    imageAlt: "Analytics dashboard and portfolio project on screen",
  },
];

export const DOUBTS = [
  {
    icon: "🎓",
    text: "Completed B.Tech, Degree, or MCA? Which career stream is best for me?",
  },
  {
    icon: "💼",
    text: "Will I secure a high-paying job after completing the training?",
  },
  {
    icon: "👨‍🏫",
    text: "Who will teach the concepts in an easy-to-understand and practical way?",
  },
  {
    icon: "🗣️",
    text: "How do I improve my English fluency if I come from a rural background?",
  },
  {
    icon: "🤝",
    text: "I am afraid of interviews. Who will provide dedicated interview prep?",
  },
];

export { COURSES } from './courseDetails.js';

export const ROADMAP = [
  {
    step: "01",
    title: "Zero Level Training",
    desc: "Start from absolute basics — no prior programming knowledge needed.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Industry & GenAI Skills",
    desc: "Hands-on projects with modern generative AI models and tools.",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Resume & Interview Prep",
    desc: "Mock interviews, resume polishing, and business communication training.",
    icon: "📄",
  },
  {
    step: "04",
    title: "MNC Referrals",
    desc: "Direct corporate referrals to leading IT companies.",
    icon: "🏢",
  },
  {
    step: "05",
    title: "Placement Support",
    desc: "Continuous guidance until you land your dream tech role.",
    icon: "🤝",
  },
];

export const AI_PILLARS = [
  { label: "Coding", icon: "</>", desc: "Build AI-powered software products" },
  {
    label: "Text",
    icon: "📝",
    desc: "Master prompt design & agent architectures",
  },
  { label: "Art", icon: "🎨", desc: "Generate high-fidelity visual assets" },
  {
    label: "Agents",
    icon: "🤖",
    desc: "Build autonomous AI agents and workflows",
  },
];

export const HIGHLIGHTS = [
  "Expert Technical Trainers",
  "Real-Time Project Work",
  "MNC Placement Referrals",
  "GenAI Integration Suite",
  "Zero-to-Hero Learning Path",
];

export const HERO_STATS = [
  { value: "11M+", label: "AI Jobs Coming", color: "text-gh-blue" },
  { value: "7–15 LPA", label: "Average Package", color: "text-white" },
  { value: "100%", label: "Placement Support", color: "text-gh-green" },
];

export const HERO_FEATURES = [
  {
    icon: "bot",
    title: "GenAI Curriculum",
    desc: "Advanced Python, Data Science, & Machine Learning models.",
  },
  {
    icon: "building",
    title: "Corporate Placements",
    desc: "Direct resume screening and company partner referrals.",
  },
  {
    icon: "laptop",
    title: "Practical Work",
    desc: "Build real-world portfolios with production APIs.",
  },
  {
    icon: "mapPin",
    title: "KPHB, Hyderabad",
    desc: "Premium learning facility with lab access.",
  },
];

export const SUCCESSFUL_STUDENTS = [
  {
    name: "K. Sai Kiran",
    role: "GenAI Developer",
    company: "Accenture",
    package: "12 LPA",
    initial: "KS",
  },
  {
    name: "M. Shravya",
    role: "Data Scientist",
    company: "TCS",
    package: "9.5 LPA",
    initial: "MS",
  },
  {
    name: "P. Rahul",
    role: "Business Analyst",
    company: "Capgemini",
    package: "8.2 LPA",
    initial: "PR",
  },
  {
    name: "G. Harish",
    role: "Python Developer",
    company: "Cognizant",
    package: "7.8 LPA",
    initial: "GH",
  },
];

export const HIRING_COMPANIES = [
  { name: "Accenture" },
  { name: "TCS" },
  { name: "Capgemini" },
  { name: "Wipro" },
  { name: "Infosys" },
  { name: "Cognizant" },
];

/** Default partners; courses can override with `hiringPartners` when loaded from backend. */
export function getHiringPartnersForCourse(course) {
  if (course?.hiringPartners?.length) return course.hiringPartners
  return HIRING_PARTNER_BRANDS
}

export const HIRING_PARTNER_BRANDS = [
  {
    name: "Accenture",
    color: "hover:border-[#A12BFF]/30",
  },
  {
    name: "TCS",
    logo: "/brands/images.png",
    color: "hover:border-[#00549F]/30",
  },
  {
    name: "Capgemini",
    logo: "/brands/Newsroom.jfif",
    color: "hover:border-[#0070AD]/30",
  },
  {
    name: "Wipro",
    logo: "/brands/Wipro Careers _ Reinvent Your World.jfif",
    color: "hover:border-[#4A154B]/30",
  },
  {
    name: "Infosys",
    logo: "/brands/Infosys BPM Is Hiring Process Executive _ Apply Now _ 2022.jfif",
    color: "hover:border-[#007CC3]/30",
  },
  {
    name: "Cognizant",
    logo: "/brands/cognizant-new-logo-400px.jpg",
    color: "hover:border-[#0033A0]/30",
  },
];

export const ORBIT_ICONS = ["</>", "📊", "🐍", "🤖", "📈", "🧠"];

export const AI_HUB_NODES = [
  { label: "Coding", icon: "</>", pos: "top-0 left-1/2 -translate-x-1/2" },
  { label: "Text", icon: "📝", pos: "right-0 top-1/2 -translate-y-1/2" },
  { label: "Art", icon: "🎨", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { label: "Agents", icon: "🤖", pos: "left-0 top-1/2 -translate-y-1/2" },
];
