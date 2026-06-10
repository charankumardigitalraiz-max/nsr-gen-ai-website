import { Bot, HelpCircle, GraduationCap, Briefcase, Landmark, BookOpen, ShieldAlert, Sparkles } from 'lucide-react'
import { WHATSAPP } from '../constants/content'

const DOUBTS = [
  {
    icon: GraduationCap,
    text: "Finished Degree, B.Tech, or MCA? Which career stream is best?",
    sub: "Choose the right career path tailored to your background",
    glow: "hover:border-gh-blue/30"
  },
  {
    icon: Briefcase,
    text: "Will I actually get placed after completing the course?",
    sub: "100% structured placement support & MNC referrals",
    glow: "hover:border-gh-purple/30"
  },
  {
    icon: BookOpen,
    text: "Who will teach the training so that concepts are easy to understand?",
    sub: "Learn from industry experts with hands-on labs",
    glow: "hover:border-cyber-pink/30"
  },
  {
    icon: Landmark,
    text: "How do I build professional communication skills for MNC interviews?",
    sub: "Dedicated communication classes designed for rural/village backgrounds",
    glow: "hover:border-gh-green/30"
  },
  {
    icon: ShieldAlert,
    text: "Fear of interviews? Who provides real-world mock interview prep?",
    sub: "Solve standard DSA, SQL, and GenAI interview question banks",
    glow: "hover:border-gh-blue/30"
  }
]

export default function DoubtsSection() {
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
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="doubts" className="relative overflow-hidden bg-gh-canvas">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyber-pink/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Banner Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="section-tag animate-pulse">Academic Guidance</span>
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight leading-tight">
            Finished B.Tech / Degree / MCA? <span className="text-gh-blue">What next?</span>
          </h2>
          <p className="mt-4 text-base text-gh-muted font-medium">
            Graduates face many doubts about their career path. Let us help you answer them:
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Doubts list */}
          <div className="lg:col-span-7 space-y-4">
            {DOUBTS.map((doubt) => {
              const Icon = doubt.icon
              return (
                <div
                  key={doubt.text}
                  className={`cyber-card flex gap-5 items-start ${doubt.glow}`}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gh-default border border-gh-border text-gh-blue group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gh-fg leading-relaxed">
                      {doubt.text}
                    </h4>
                    <p className="mt-1 text-xs text-gh-muted font-semibold tracking-wide uppercase">
                      {doubt.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Single Solution Banner */}
          <div className="lg:col-span-5">
            <div
              className="cyber-card border-gh-purple/30 bg-gradient-to-b from-gh-default/90 to-gh-default/50 p-8 shadow-2xl relative"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gh-purple/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gh-purple/15 text-gh-purple border border-gh-purple/20">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gh-purple">
                  NSR Solution
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-gh-fg leading-tight">
                Get a <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">Single Solution</span> for all queries at NSR Academy
              </h3>
              
              <p className="mt-3 text-sm text-gh-muted leading-relaxed">
                Everything you need to successfully launch your tech career, all under one roof:
              </p>

              <div className="mt-8 space-y-6">
                {/* Batches by level */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gh-blue/15 text-gh-blue border border-gh-blue/20">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gh-fg">Knowledge-Level Batches</h4>
                    <p className="mt-1 text-xs text-gh-muted leading-relaxed">
                      We divide batches according to your baseline skill level to deliver customized learning paths.
                    </p>
                  </div>
                </div>

                {/* 11 Millions Jobs Alert */}
                <div className="flex gap-4 p-4 rounded-xl border border-cyber-pink/20 bg-cyber-pink/5 shadow-inner">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30 animate-pulse">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-cyber-pink tracking-tight uppercase">
                      11 Million GenAI Jobs Coming
                    </h4>
                    <p className="mt-1 text-xs text-gh-fg/90 leading-relaxed font-semibold">
                      The future is driven by generative artificial intelligence. Build the skills needed to match the wave of <span className="text-cyber-pink font-extrabold">11 Million new roles</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gh-border/60 flex items-center justify-between">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero py-2.5 px-6 text-xs w-full text-center"
                >
                  Consult an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
