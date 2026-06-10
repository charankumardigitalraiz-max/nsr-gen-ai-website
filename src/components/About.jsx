import { AI_PILLARS } from '../constants/content'
import heroImg from '../assets/hero.png'
import { Terminal, FileText, Image as ImageIcon, Bot, Cpu, Database } from 'lucide-react'

const PILLAR_ICONS = {
  '</>': Terminal,
  '📝': FileText,
  '🎨': ImageIcon,
  '🤖': Bot
}

export default function About() {
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
    <section id="about" className="relative overflow-hidden bg-gh-canvas">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Mockup Platform Graphic */}
          <div className="order-2 lg:order-1 flex justify-center relative w-full">
            <div className="relative max-w-[440px] w-full aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-gh-blue/20 via-gh-purple/10 to-cyber-pink/20 rounded-3xl blur-[60px] pointer-events-none" />
              
              <div 
                className="relative w-full rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-xl shadow-slate-200/30 backdrop-blur-sm overflow-hidden group"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <img 
                  src={heroImg} 
                  alt="NSR Platform Framework" 
                  className="max-h-[290px] w-auto mx-auto object-contain rounded-xl border border-slate-100/50 shadow-inner group-hover:scale-[1.01] transition-transform duration-500" 
                />

                {/* Floating tags */}
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 bg-slate-900 text-white rounded-xl px-3.5 py-1.5 shadow-md border border-slate-800">
                  <Cpu className="h-3.5 w-3.5 text-gh-blue" />
                  <span className="text-[9px] font-bold tracking-widest uppercase">GenAI Platform</span>
                </div>

                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-white text-slate-800 rounded-xl px-3.5 py-1.5 shadow-md border border-slate-200/80">
                  <Database className="h-3.5 w-3.5 text-gh-purple" />
                  <span className="text-[9px] font-bold tracking-widest uppercase">100% Practical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Content */}
          <div className="order-1 lg:order-2">
            <span className="section-tag">Our Mission</span>
            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight leading-tight font-rubik">
              Learn · Create · Innovate · Transform
            </h2>
            <p className="mt-4 text-base text-gh-muted font-medium">
              Empowering Skills. Shaping the AI Future.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {AI_PILLARS.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.icon] || Terminal
                return (
                  <div
                    key={pillar.label}
                    className="cyber-card group text-center flex flex-col items-center hover:border-gh-blue/30"
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gh-blue/15 text-gh-blue group-hover:scale-110 transition-transform animate-float">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-outfit text-base font-extrabold text-gh-fg">
                      {pillar.label}
                    </h3>
                    <p className="mt-2 text-xs text-gh-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
