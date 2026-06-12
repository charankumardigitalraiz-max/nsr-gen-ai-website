import React from 'react'
import { ROADMAP } from '../../constants/content'
import { Sparkles, ArrowRight, Target, Sliders, FileText, Send, Handshake } from 'lucide-react'

// Lucide icon mapping to replace emojis
const ROADMAP_ICONS = {
  '01': Target,
  '02': Sliders,
  '03': FileText,
  '04': Send,
  '05': Handshake
}

export default function Roadmap() {
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardEl.style.setProperty('--mouse-x', `${x}px`)
    cardEl.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="roadmap" className="page-content-top relative overflow-hidden bg-gh-canvas pb-14">
      {/* Dynamic background mesh blurs */}
      <div className="absolute top-1/2 right-1/4 h-[350px] w-[350px] rounded-full bg-gh-purple/5 blur-3xl lg:blur-[72px] pointer-events-none" />

      <div className="mx-auto max-w-[95rem] px-6 relative z-10">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="section-tag">
            <Sparkles className="h-3.5 w-3.5" />
            Your Journey
          </span>
          <h2 className="section-title">
            Our Training-to-Placement <span className="highlight">Milestones</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-3 text-sm text-gh-muted max-w-xl mx-auto font-medium">
            From absolute zero level to core engineering readiness and direct MNC placement referrals.
          </p>
        </div>

        {/* Horizontal Timeline Grid Container */}
        <div className="relative mt-12">

          {/* Horizontal connection line (Desktop only) */}
          <div className="absolute top-10 left-[10%] right-[10%] hidden h-[2px] bg-gradient-to-r from-[#1b4332] via-[#00a86b] to-[#52b788] xl:block z-0 opacity-40" />

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full mx-auto relative z-10">
            {ROADMAP.map((item, index) => {
              const IconComponent = ROADMAP_ICONS[item.step] || Target

              // Custom gradient color parameters for step indicators
              let indicatorColor = 'border-gh-blue/20 bg-gh-blue/5 text-gh-blue'
              if (index === 1 || index === 2) indicatorColor = 'border-gh-purple/20 bg-gh-purple/5 text-gh-purple'
              if (index >= 3) indicatorColor = 'border-cyber-pink/20 bg-cyber-pink/5 text-cyber-pink'

              return (
                <div
                  key={item.step}
                  className="cyber-card group relative overflow-hidden bg-white border border-slate-200/60 p-5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[230px] hover:shadow-md"
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div>
                    {/* Top: Icon & Step Number Indicator Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${indicatorColor}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full border text-xs font-black tracking-tight ${indicatorColor}`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Content text */}
                    <h3 className="mt-5 font-rubik text-sm font-bold text-slate-800 group-hover:text-gh-blue transition-colors duration-200 tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-gh-muted font-semibold">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connect Indicator (Mobile arrow / chevron icon indicator) */}
                  <div className="mt-4 pt-3 border-t border-slate-100/60 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                    <span>Stage {item.step} Complete</span>
                    {index < 4 && (
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
