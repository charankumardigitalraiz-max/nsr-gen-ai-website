export const HERO_VIDEO = "/Artificual ai video.mp4";

/** Left floating promo widget — files in `public/video/` */
export const FLOATING_PROMO_VIDEOS = [
  // {
  //   src: "/video/promotion-video1.mp4",
  //   title: "Campus & classroom tour",
  //   label: "Watch campus tour",
  // },
  {
    src: "/video/promotion-video2.mp4",
    title: "Student placement story",
    label: "Hear from our students",
  },
];

export const PHONE = "6281079591";

export const WHATSAPP = `https://wa.me/91${PHONE}?text=Hi%20NSR%20Academy%2C%20I%20want%20to%20register%20for%20the%20GenAI%20course.`;

export const WHATSAPP_DEMO = `https://wa.me/91${PHONE}?text=Hi%20NSR%20Academy%2C%20I%20would%20like%20to%20book%20a%20free%20GenAI%20demo%20session.`;

export {
  NAV_LINKS,
  NAVBAR_LINKS,
  FOOTER_LINKS,
  ROUTES,
  courseDetailPath,
  blogDetailPath,
} from "./routes";

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
      "/images/classroom training.jpg",
    imageAlt: "Instructor teaching students in a classroom",
  },
  {
    icon: "project",
    title: "Live Project Labs",
    desc: "Build real-world GenAI, data, and full-stack projects for your portfolio and interviews.",
    tag: "Hands-on",
    accent: "gh-purple",
    image:
      "/images/Live Projects.jpg",
    imageAlt: "Team collaborating on a live coding project",
  },
  {
    icon: "workshop",
    title: "GenAI Workshops",
    desc: "Focused workshops on LLMs, prompt engineering, RAG pipelines, and AI agent workflows.",
    tag: "Workshop",
    accent: "cyber-pink",
    image:
      "/images/GenAI.jpg",
    imageAlt: "Generative AI and machine learning workshop",
  },
  {
    icon: "corporate",
    title: "Corporate Training",
    desc: "Upskill your team with customized GenAI and data programs for IT services & product firms.",
    tag: "B2B",
    accent: "gh-green",
    image:
      "/images/corporate training.jpg",
    imageAlt: "Corporate team in a professional training session",
  },
  {
    icon: "interview",
    title: "Interview Preparation",
    desc: "Mock interviews, aptitude drills, SQL/Python rounds, and HR communication coaching.",
    tag: "Placement",
    accent: "gh-blue",
    image:
      "/images/Interview Training.jpg",
    imageAlt: "Candidate preparing for a technical interview",
  },
  {
    icon: "placement",
    title: "Placement Assistance",
    desc: "Resume reviews, referral support, and continuous guidance until you land your role.",
    tag: "Career",
    accent: "gh-purple",
    image:
      "/images/placementAssistance.jpg",
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

export { COURSES } from "./courseDetails.js";

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
  {
    label: "Coding",
    icon: "</>",
    title: "AI Software Development",
    desc: "Write production Python, build APIs, and ship full-stack apps wired to GenAI models.",
    topics: ["Python", "FastAPI", "LangChain"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=426&q=80",
    imageAlt: "Developer laptop with code editor open",
  },
  {
    label: "Text",
    icon: "📝",
    title: "LLMs & Prompt Engineering",
    desc: "Design prompts, fine-tune models, and build RAG systems that answer from real data.",
    topics: ["GPT", "RAG", "Embeddings"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=640&h=426&q=80",
    imageAlt: "Digital data streams representing language models and NLP",
  },
  {
    label: "Art",
    icon: "🎨",
    title: "Generative Visual AI",
    desc: "Create marketing visuals, design assets, and image workflows with modern GenAI tools.",
    topics: ["Image Gen", "Midjourney", "DALL·E"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&h=426&q=80",
    imageAlt: "Creative professional working on digital design",
  },
  {
    label: "Agents",
    icon: "🤖",
    title: "Autonomous AI Agents",
    desc: "Orchestrate multi-step agents, tool calling, and automated workflows for business tasks.",
    topics: ["CrewAI", "Agents", "Automation"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=426&q=80",
    imageAlt: "Analytics dashboard showing automated AI agent workflows",
  },
];

export const HIGHLIGHTS = [
  "Expert Technical Trainers",
  "Real-Time Project Work",
  "MNC Placement Referrals",
  "GenAI Integration Suite",
  "Zero-to-Hero Learning Path",
];

/**
 * Homepage hero banner slider — fills full screen (width + height) on laptops/desktops.
 *
 * RECOMMENDED SIZES (export at highest quality you have):
 * | Screen type        | Pixels (W × H) | Notes                          |
 * |--------------------|----------------|--------------------------------|
 * | Standard laptop    | 1920 × 1080    | 16:9 — most common             |
 * | MacBook / 16:10    | 1920 × 1200    | Better fit on taller laptops   |
 * | Large / 2K screen  | 2560 × 1440    | Retina, sharp on big displays  |
 *
 * Hero uses object-cover: image always fills 100% width AND 100% viewport height.
 * Keep main subject CENTER-RIGHT; left ~35% has text overlay.
 * Format: JPG or WebP, 200–400 KB. No portrait/square images.
 */
export const HERO_BANNER_SIZE = {
  standard: { width: 1920, height: 1080, ratio: "16:9" },
  laptop: { width: 1920, height: 1200, ratio: "16:10" },
  large: { width: 2560, height: 1440, ratio: "16:9" },
};

export const HERO_BANNER_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2560&h=1440&q=85",
    alt: "Students learning GenAI at NSR ProSkills Academy classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2560&h=1440&q=85",
    alt: "Instructor-led GenAI bootcamp session at KPHB Hyderabad",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2560&h=1440&q=85",
    alt: "Students collaborating on AI and data science projects",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2560&h=1440&q=85",
    alt: "Team workshop and placement preparation at NSR Academy",
  },
];

/** Full-width homepage dividers — 50vh banner strips between sections (1920×1080 recommended). */
export const HOME_SECTION_BANNERS = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2560&h=1080&q=85",
    alt: "Students preparing for placement interviews at NSR ProSkills Academy",
    eyebrow: "Placement pipeline",
    titleBefore: "From classroom to ",
    highlight: "your first offer",
    description:
      "Mock interviews, resume labs, and hiring partner drives — we stay with you until you sign the offer letter.",
    ctaLabel: "See placement process",
    ctaHref: "/placements",
    align: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2560&h=1080&q=85",
    alt: "Mentor guiding students at KPHB Hyderabad campus",
    eyebrow: "Offline at KPHB",
    titleBefore: "Learn GenAI where ",
    highlight: "mentors know your name",
    description:
      "Small batches, hands-on labs, and 1-on-1 guidance on our Hyderabad campus — not another recorded course.",
    ctaLabel: "Talk to an advisor",
    ctaHref: "/contact",
    align: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2560&h=1080&q=85",
    alt: "GenAI bootcamp training session with students building real projects",
    eyebrow: "Real projects",
    titleBefore: "Build portfolios that ",
    highlight: "get callbacks",
    description:
      "Capstone work with Python, LLMs, RAG, and dashboards — the proof recruiters ask for in 2026.",
    ctaLabel: "Explore courses",
    ctaHref: "/courses",
    align: "right",
  },
];

export const HERO_STATS = [
  { value: "500+", label: "Learners trained" },
  { value: "7–15 LPA", label: "Package range" },
  { value: "100%", label: "Placement support" },
];

export const PLACEMENT_PROCESS_STEPS = [
  {
    step: "01",
    title: "Complete the Course",
    desc: "Build real-world projects and clear assignments.",
  },
  {
    step: "02",
    title: "CRPR Clearance",
    desc: "Pass our Career Readiness & Project Review process.",
  },
  {
    step: "03",
    title: "Placement Activation",
    desc: "Get added to our active placement support pool.",
  },
  {
    step: "04",
    title: "Interview Scheduling",
    desc: "We match you with hiring partners.",
  },
  {
    step: "05",
    title: "Get Your Offer Letter",
    desc: "Land your first job in IT with our help.",
  },
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
    courseSlug: "full-stack-ai-ml",
    company: "Accenture",
    package: "12 LPA",
    initial: "KS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "K. Sai Kiran — GenAI developer graduate",
    tags: ["Python", "LLMs", "LangChain", "CrewAI"],
    quote: "NSR gave me the technical edge in autonomous agents.",
  },
  {
    name: "M. Shravya",
    role: "Data Scientist",
    courseSlug: "data-science-with-genai",
    company: "TCS",
    package: "9.5 LPA",
    initial: "MS",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "M. Shravya — data science graduate",
    tags: ["Data Science", "PyTorch", "Fine-Tuning", "Pandas"],
    quote: "The practical lab assessments match what companies look for.",
  },
  {
    name: "P. Rahul",
    role: "Business Analyst",
    courseSlug: "business-analyst-with-genai",
    company: "Capgemini",
    package: "8.2 LPA",
    initial: "PR",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "P. Rahul — business analyst graduate",
    tags: ["GenAI Tools", "SQL", "Tableau", "Power BI"],
    quote: "Corporate referral sessions directly helped land my interview.",
  },
  {
    name: "G. Harish",
    role: "Python Developer",
    courseSlug: "full-stack-python-with-ai",
    company: "Cognizant",
    package: "7.8 LPA",
    initial: "GH",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "G. Harish — Python developer graduate",
    tags: ["Python", "FastAPI", "VectorDB", "Deployment"],
    quote: "Going from scratch to deploying live APIs built my confidence.",
  },
  {
    name: "A. Priya",
    role: "Full Stack Developer",
    courseSlug: "full-stack-python-with-ai",
    company: "Infosys",
    package: "10 LPA",
    initial: "AP",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "A. Priya — full stack developer graduate",
    tags: ["React", "Node.js", "GenAI"],
    quote: "The placement team stayed with me until I accepted my offer.",
  },
  {
    name: "R. Vikram",
    role: "Data Analyst",
    courseSlug: "data-analyst-with-genai",
    company: "Wipro",
    package: "8.5 LPA",
    initial: "RV",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=480&h=320&q=80",
    imageAlt: "R. Vikram — data analyst graduate",
    tags: ["SQL", "Power BI", "Python"],
    quote: "Mock interviews prepared me for every round.",
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
  if (course?.hiringPartners?.length) return course.hiringPartners;
  return HIRING_PARTNER_BRANDS;
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

export const RECRUITER_TESTIMONIALS = [
  {
    name: "Sharanya Prasad Meruga",
    role: "TA Lead",
    company: "Enterpi Software Solutions",
    quote:
      "The candidates from NSR exhibit strong foundational skills in full-stack web development. Their project-based approach prepares them well for industry challenges from day one.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    name: "Vaishnavi Anumula",
    role: "Founder's Office",
    company: "Swio",
    quote:
      "We hired multiple developers from their pool and found them to be quick learners who adapt to modern tools and GenAI workflows exceptionally well.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    name: "Raksha Yadav",
    role: "Technical Recruiter",
    company: "Geeksynergy Technologies",
    quote:
      "Their training methodology focuses heavily on practical coding, which translates directly to solid interview performance. They know how to build real products.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    name: "Husna Shaik",
    role: "HR Manager",
    company: "SOPEONOW",
    quote:
      "Very professional placement process. The students are well-prepared not just technically, but also in communication and team collaboration.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  },
];

export const FOUNDERS_INFO = [
  {
    name: "Anil Kumar Ghorakavi",
    role: "Founder",
    credentials: "Ex-Oracle, Amazon",
    bgClass: "from-[#ff8541]/10 to-[#ff8541]/20",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80",
    companies: ["Oracle", "Amazon"],
  },
  {
    name: "Rakesh Kumar",
    role: "Founder",
    credentials: "Founder, Engrip & 10000 Coders",
    bgClass: "from-[#e84975]/10 to-[#e84975]/20",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    companies: ["engrip", "Revid"],
  },
  {
    name: "Praveen Kumar",
    role: "Co-Founder",
    credentials: "Ex-Microsoft",
    bgClass: "from-[#00a86b]/10 to-[#00a86b]/20",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    companies: ["Microsoft"],
  },
];

export const VIDEO_TESTIMONIALS = [
  {
    studentName: "Shashi",
    role: "Backend Developer",
    company: "TVAST COMPANY",
    quote:
      "NSR  was different from other institutes because it takes care of each person individually with 1:1 mentor support.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    studentName: "Sai Kiran",
    role: "GenAI Developer",
    company: "Accenture",
    quote:
      "Going from absolute coding basics to deploying live AI pipelines built my confidence and helped me land an offer of 12 LPA.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    studentName: "Shravya",
    role: "Data Scientist",
    company: "TCS",
    quote:
      "The hands-on curriculum, daily assignments, and mockup interviews prepared me fully to face recruiters with confidence.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    studentName: "Rupesh",
    role: "Frontend Engineer",
    company: "HUEMN",
    quote:
      "The environment here is very collaborative. Instructors are always available in the labs to solve queries and support projects.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  },
];
