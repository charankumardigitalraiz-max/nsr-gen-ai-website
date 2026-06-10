import { Trophy, ShieldCheck, ArrowUpRight, GraduationCap } from 'lucide-react'
import { SUCCESSFUL_STUDENTS, WHATSAPP } from '../constants/content'

// Custom high-fidelity vector avatars to replace simple letter placeholders
const STUDENT_AVATARS = {
  'K. Sai Kiran': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-k" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-k)" />
      {/* Face & Hair outline */}
      <circle cx="50" cy="45" r="22" fill="#FEE2E2" />
      <path d="M30 45 C30 25, 70 25, 70 45 C70 40, 30 40, 30 45 Z" fill="#1E293B" />
      {/* Glasses */}
      <rect x="38" y="42" width="10" height="5" rx="2" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <rect x="52" y="42" width="10" height="5" rx="2" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <line x1="48" y1="44" x2="52" y2="44" stroke="#1E293B" strokeWidth="2.5" />
      {/* Shirt */}
      <path d="M22 80 C22 65, 78 65, 78 80 L78 95 L22 95 Z" fill="#E2E8F0" />
      <path d="M50 65 L40 76 L60 76 Z" fill="#475569" />
    </svg>
  ),
  'M. Shravya': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-s" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#9D174D" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-s)" />
      {/* Face & Long Hair */}
      <path d="M28 45 C28 20, 72 20, 72 45 C72 65, 28 65, 28 45 Z" fill="#1E293B" />
      <circle cx="50" cy="46" r="20" fill="#FED7AA" />
      {/* Clothes */}
      <path d="M22 80 C22 68, 78 68, 78 80 L78 95 L22 95 Z" fill="#F472B6" />
      <path d="M50 68 L42 78 L58 78 Z" fill="#FED7AA" />
    </svg>
  ),
  'P. Rahul': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-r)" />
      {/* Face & Hair */}
      <circle cx="50" cy="45" r="22" fill="#FEE2E2" />
      <path d="M32 35 C35 25, 65 25, 68 35 C70 42, 60 38, 50 38 C40 38, 30 42, 32 35 Z" fill="#78350F" />
      {/* Shirt */}
      <path d="M22 80 C22 65, 78 65, 78 80 L78 95 L22 95 Z" fill="#0F172A" />
      <path d="M50 65 L44 75 L56 75 Z" fill="#F8FAFC" />
      {/* Tie */}
      <path d="M48 75 L52 75 L54 90 L50 95 L46 90 Z" fill="#3B82F6" />
    </svg>
  ),
  'G. Harish': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-h" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-h)" />
      {/* Face & Hair */}
      <circle cx="50" cy="45" r="22" fill="#FED7AA" />
      <path d="M30 40 C35 20, 65 20, 70 40 L65 35 L35 35 Z" fill="#0F172A" />
      {/* Clothes */}
      <path d="M22 80 C22 66, 78 66, 78 80 L78 95 L22 95 Z" fill="#10B981" />
      <path d="M50 66 L43 75 L57 75 Z" fill="#FED7AA" />
    </svg>
  )
}

const STUDENT_METADATA = {
  'K. Sai Kiran': {
    tags: ['Python', 'LLMs', 'LangChain', 'CrewAI'],
    quote: 'NSR gave me the technical edge in autonomous agents.'
  },
  'M. Shravya': {
    tags: ['Data Science', 'PyTorch', 'Fine-Tuning', 'Pandas'],
    quote: 'The practical lab assessments match what companies look for.'
  },
  'P. Rahul': {
    tags: ['GenAI Tools', 'SQL', 'Tableau', 'PowerBI'],
    quote: 'Corporate referral sessions directly helped land my interview.'
  },
  'G. Harish': {
    tags: ['Python', 'FastAPI', 'VectorDB', 'Deployment'],
    quote: 'Going from scratch to deploying live APIs built my confidence.'
  }
}

export default function SuccessStories() {
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardEl.style.setProperty('--mouse-x', `${x}px`)
    cardEl.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section className="relative bg-gh-canvas overflow-hidden">
      {/* Backlight Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gh-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="section-tag inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold">
            <Trophy className="h-3.5 w-3.5 text-gh-purple" />
            Verified Careers
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-800 leading-tight">
            Successful Placement <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">Records</span>
          </h2>
          <p className="mt-4 text-sm text-gh-muted max-w-lg mx-auto font-medium">
            Learn from graduates who transitioned into stable engineering and analytics positions at verified MNC companies.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SUCCESSFUL_STUDENTS.map((student) => {
            const metadata = STUDENT_METADATA[student.name] || { tags: ['GenAI', 'Python'], quote: '' }
            
            return (
              <div
                key={student.name}
                className="cyber-card group flex flex-col justify-between p-6 border-slate-200/50 hover:border-gh-blue/40 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div>
                  {/* Top: Avatar & Verification status */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-14 w-14 rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 flex items-center justify-center p-0.5">
                      {STUDENT_AVATARS[student.name] || (
                        <div className="h-full w-full bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center font-bold text-slate-500">
                          {student.initial}
                        </div>
                      )}
                    </div>
                    
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Offer
                    </span>
                  </div>

                  {/* Student Credentials */}
                  <h4 className="text-base font-extrabold text-slate-800 tracking-tight">
                    {student.name}
                  </h4>
                  <p className="text-xs text-gh-purple font-extrabold tracking-wide uppercase mt-0.5">
                    {student.role}
                  </p>

                  {/* Student Testimonial Quote */}
                  <p className="mt-3 text-xs text-slate-500 italic font-medium leading-relaxed">
                    "{metadata.quote}"
                  </p>

                  {/* Custom tech chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {metadata.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats (Company & Package) */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Hired By</span>
                    <strong className="text-sm font-black text-slate-700 tracking-tight block">
                      {student.company}
                    </strong>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Package</span>
                    <span className="inline-flex items-center gap-0.5 text-sm font-black text-gh-blue tracking-tight">
                      {student.package}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Admission CTA Section */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-gh-blue hover:text-gh-purple transition duration-200"
          >
            <span>Learn how you can start your training journey</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
