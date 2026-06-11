/** Full article content keyed by slug — listing cards use BLOG_POSTS in content.js */
export const BLOG_DETAILS = [
  {
    slug: 'genai-career-guide-2026',
    author: 'NSR Academy Team',
    authorRole: 'Career & Placement Mentors',
    tags: ['GenAI', 'Career', 'Freshers', 'Hyderabad'],
    keyTakeaways: [
      'GenAI roles span data, BA, full-stack, and dedicated AI engineer tracks — pick one lane early.',
      'Employers expect Python basics, one cloud tool, and a portfolio project that uses an LLM API.',
      'Hyderabad MNCs are hiring for analyst and developer hybrids who can explain AI outputs to business teams.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'If you graduated in 2024 or 2025, you have heard the same question in every family gathering: "AI will take jobs — what will you do?" The better question is which GenAI-enabled role you are training for, and how fast you can show proof of work.',
      },
      {
        type: 'heading',
        content: 'Roles that are actually hiring in 2026',
      },
      {
        type: 'list',
        items: [
          'Data Analyst / BI Analyst with SQL, Power BI, and GenAI-assisted reporting workflows',
          'Python Developer building APIs, automation, and light ML integrations',
          'Business Analyst who documents requirements and prototypes with AI copilots',
          'AI Engineer (junior) focused on RAG pipelines, prompt design, and deployment basics',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Most freshers do not start as "AI researchers." They start as engineers and analysts who ship features faster because they understand models, embeddings, and responsible use of generated content.',
      },
      {
        type: 'callout',
        title: 'NSR placement insight',
        content:
          'Students who complete live LLM projects and mock interviews in our KPHB program consistently outperform candidates who only list online certificates without deployable work.',
      },
      {
        type: 'heading',
        content: 'Skills to build in your first 90 days',
      },
      {
        type: 'list',
        items: [
          'Python fundamentals → pandas → one analytics or API project',
          'SQL joins, window functions, and a dashboard narrative',
          'One GenAI project: chatbot, document Q&A, or workflow automation',
          'Resume + LinkedIn aligned to a single job title (not "everything in tech")',
        ],
      },
      {
        type: 'quote',
        content:
          'Hiring managers do not ask "Do you know AI?" — they ask "Show me what you built and how you would explain it to a client."',
      },
    ],
  },
  {
    slug: 'python-zero-to-developer',
    author: 'NSR Academy Team',
    authorRole: 'Python & Full-Stack Faculty',
    tags: ['Python', 'Beginners', 'Roadmap'],
    keyTakeaways: [
      'Consistency beats intensity — 1–2 hours daily for 5 months beats weekend cramming.',
      'Three portfolio projects (script, API, small full-stack app) matter more than fifty toy exercises.',
      'Interview prep should start in month 4, not after you "finish" the syllabus.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'Starting from zero is not a disadvantage if your roadmap is structured. This guide mirrors how we take absolute beginners to job-ready Python developers at NSR Academy — with weekly milestones you can follow on your own or in our classroom track.',
      },
      { type: 'heading', content: 'Month 1 — Foundations' },
      {
        type: 'list',
        items: [
          'Variables, loops, functions, and error handling',
          'File I/O and working with JSON / CSV',
          'Git basics: commit, branch, push',
          'Mini project: expense tracker or quiz app in the terminal',
        ],
      },
      { type: 'heading', content: 'Month 2–3 — Data & APIs' },
      {
        type: 'list',
        items: [
          'NumPy, pandas, and exploratory data analysis',
          'REST APIs with FastAPI or Flask',
          'Environment variables, virtualenv, and project structure',
          'Project: API that serves cleaned dataset + simple frontend or Postman collection',
        ],
      },
      { type: 'heading', content: 'Month 4–5 — Job readiness' },
      {
        type: 'paragraph',
        content:
          'Capstone with authentication or database integration, deploy to Render/Railway, write a README hiring managers will actually read, and run weekly mock technical + HR rounds.',
      },
      {
        type: 'callout',
        title: 'Common mistake',
        content:
          'Jumping to Django before you can write clean functions and tests. Master core Python first — frameworks are easier when fundamentals are solid.',
      },
    ],
  },
  {
    slug: 'crack-data-analyst-interviews',
    author: 'NSR Academy Team',
    authorRole: 'Interview Prep Coaches',
    tags: ['Interviews', 'SQL', 'Power BI', 'TCS', 'Accenture'],
    keyTakeaways: [
      'Practice SQL on real business scenarios — not just SELECT * from one table.',
      'Prepare 2–3 "story" dashboards you can walk through live in 5 minutes.',
      'Mention GenAI responsibly: how you validate outputs, not hype.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'TCS, Accenture, and similar firms hire analysts who can translate data into decisions. Your interview is less about memorizing syntax and more about structured thinking under pressure.',
      },
      { type: 'heading', content: 'SQL rounds — what to expect' },
      {
        type: 'list',
        items: [
          'Joins across fact and dimension-style tables',
          'Aggregations, GROUP BY, HAVING, and ranking with window functions',
          'Case studies: "Find customers who churned" or "Top products by region"',
          'Explain your query aloud while typing — interviewers score communication',
        ],
      },
      { type: 'heading', content: 'Power BI & case studies' },
      {
        type: 'paragraph',
        content:
          'Bring one dashboard that answers a business question: revenue trend, funnel drop-off, or operational KPIs. Know your DAX measures and why you chose each visual.',
      },
      {
        type: 'quote',
        content:
          'When they ask about GenAI, say how you use it to draft SQL or summarize reports — then how you verify every number before sharing with stakeholders.',
      },
      { type: 'heading', content: 'HR & aptitude' },
      {
        type: 'paragraph',
        content:
          'Prepare STAR stories for teamwork, deadlines, and learning new tools. Link your training projects to client-ready language: requirements, delivery, and impact.',
      },
    ],
  },
  {
    slug: 'llm-rag-beginners',
    author: 'NSR Academy Team',
    authorRole: 'GenAI Curriculum Lead',
    tags: ['LLM', 'RAG', 'Embeddings', 'Beginners'],
    keyTakeaways: [
      'LLMs predict text; RAG grounds answers in your documents so hallucinations drop.',
      'Embeddings turn text into vectors so similar chunks can be retrieved quickly.',
      'A minimal RAG app = ingest PDFs → chunk → embed → search → prompt LLM with context.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'Retrieval-Augmented Generation sounds academic until you build a "chat with my notes" app. Here is the mental model we teach before students touch LangChain or vector databases.',
      },
      { type: 'heading', content: 'What is an LLM?' },
      {
        type: 'paragraph',
        content:
          'A Large Language Model reads your prompt and generates the most likely next tokens. It does not "know" your company handbook unless that text appears in the prompt or it was trained on public data about it.',
      },
      { type: 'heading', content: 'Why RAG exists' },
      {
        type: 'list',
        items: [
          'You upload private documents (policies, code, course PDFs)',
          'Text is split into chunks and converted to embedding vectors',
          'User question is embedded; top matching chunks are retrieved',
          'LLM answers using only those chunks as context',
        ],
      },
      {
        type: 'callout',
        title: 'Try this weekend',
        content:
          'Build a 50-line Python script: load one PDF, chunk by paragraph, use an embedding API, store in Chroma or FAISS, and ask three questions. That single project impresses more than theory slides.',
      },
      { type: 'heading', content: 'Jargon decoder' },
      {
        type: 'list',
        items: [
          'Embedding — numeric fingerprint of meaning for a piece of text',
          'Vector DB — fast similarity search over embeddings',
          'Chunk size — trade-off between context detail and retrieval precision',
          'System prompt — instructions that shape tone and safety of answers',
        ],
      },
    ],
  },
  {
    slug: 'business-analyst-genai-tools',
    author: 'NSR Academy Team',
    authorRole: 'Business Analysis Faculty',
    tags: ['Business Analyst', 'GenAI', 'Productivity'],
    keyTakeaways: [
      'Use AI for first drafts — never for final sign-off without human review.',
      'Standardize prompts for BRDs, user stories, and meeting summaries.',
      'Document assumptions when AI suggests requirements stakeholders did not approve.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'Business analysts spend hours on documentation, workshops, and follow-ups. GenAI tools do not replace stakeholder conversations — they compress repetitive writing so you can focus on alignment and delivery.',
      },
      { type: 'heading', content: 'Five workflows worth mastering' },
      {
        type: 'list',
        items: [
          'Meeting notes → action items → draft email to stakeholders',
          'Epic / user story generation from bullet requirements (with acceptance criteria template)',
          'Process flow descriptions from whiteboard photos or rough notes',
          'Competitive research summaries with cited sources you verify manually',
          'Presentation outlines and speaker notes for steering committees',
        ],
      },
      {
        type: 'heading',
        content: 'Guardrails for professional use',
      },
      {
        type: 'paragraph',
        content:
          'Never paste confidential client data into public tools without policy approval. Redact names, use internal copilots where available, and keep an audit trail of what was AI-assisted versus human-authored.',
      },
      {
        type: 'quote',
        content:
          'The best BAs in 2026 are translators: business pain → structured requirements → delivery teams — with AI speeding the middle, not skipping the conversations.',
      },
    ],
  },
  {
    slug: 'portfolio-projects-that-get-hired',
    author: 'NSR Academy Team',
    authorRole: 'Placement & Project Mentors',
    tags: ['Portfolio', 'Projects', 'Hiring'],
    keyTakeaways: [
      'One polished end-to-end project beats five half-finished repos.',
      'README should explain problem, approach, tech stack, and how to run in under 2 minutes.',
      'Include metrics or outcomes — even classroom projects can show before/after impact.',
    ],
    sections: [
      {
        type: 'paragraph',
        content:
          'Recruiters spend 60–90 seconds on your GitHub or portfolio link. They are not looking for perfection — they want signal that you can ship, explain, and iterate.',
      },
      { type: 'heading', content: 'What hiring managers scan for' },
      {
        type: 'list',
        items: [
          'Clear problem statement in the README first paragraph',
          'Live demo link or screenshots for non-technical reviewers',
          'Consistent code style and meaningful commit history',
          'Evidence you handled data quality, errors, or edge cases',
        ],
      },
      { type: 'heading', content: 'Project ideas by track' },
      {
        type: 'list',
        items: [
          'Data: churn prediction dashboard with SQL + Power BI narrative',
          'Python: inventory API with auth and deployed docs',
          'GenAI: RAG chatbot over course notes or public docs with evaluation notes',
          'Full-stack: student placement tracker with role-based views',
        ],
      },
      {
        type: 'callout',
        title: 'NSR capstone tip',
        content:
          'Present your project as if to a client: problem, stakeholders, solution, demo, and "what I would do next in v2." That structure wins placement interviews.',
      },
      {
        type: 'heading',
        content: 'Presentation beats complexity',
      },
      {
        type: 'paragraph',
        content:
          'A simple CRUD app with excellent documentation often outranks a flashy ML model with no deployment story. Show you can deliver value, not just experiment.',
      },
    ],
  },
]

export function getBlogBySlug(slug) {
  const detail = BLOG_DETAILS.find((b) => b.slug === slug)
  if (!detail) return null

  return detail
}

export function getRelatedBlogs(slug, limit = 3) {
  return BLOG_DETAILS.filter((b) => b.slug !== slug).slice(0, limit)
}
