import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Layers,
  Sparkles,
  Users,
  Target,
  UserRound,
  Wrench,
} from 'lucide-react'
import { TRAINING_SERVICES, WHATSAPP } from '../constants/content'

const TRAINING_HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: 'Classroom & weekend batches',
    desc: 'Mentor-led sessions at KPHB campus',
  },
  {
    icon: Wrench,
    label: 'Live project labs',
    desc: 'Portfolio-ready GenAI & data work',
  },
  {
    icon: Users,
    label: 'Placement support',
    desc: 'Mock interviews until you get hired',
  },
]

const SERVICE_ICONS = {
  classroom: GraduationCap,
  project: Wrench,
  workshop: Layers,
  corporate: Building2,
  interview: Target,
  placement: Briefcase,
  weekend: CalendarDays,
  mentor: UserRound,
}

export default function TrainingServices() {
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
    <section id="training" className="relative overflow-hidden bg-gh-canvas py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gh-blue/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gh-purple/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6">
        <div className="training-intro">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gh-green/15 bg-gh-green/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gh-green">
              <Sparkles className="h-3.5 w-3.5" />
              Our Training Services
            </span>
            <h2 className="font-rubik text-2xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">
              From{' '}
              <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">
                learner to placed
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-gh-muted sm:text-base">
              Classroom training, live project labs, GenAI workshops, and end-to-end placement support at KPHB,
              Hyderabad.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {TRAINING_HIGHLIGHTS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="training-highlight-card">
                  <span className="training-highlight-icon">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="mt-3 font-rubik text-sm font-extrabold text-slate-800">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gh-muted">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-hero inline-flex gap-2">
              Talk to admissions
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              June batch open
            </span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] || GraduationCap

            return (
              <div
                key={service.title}
                className="cyber-card group flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white transition-all duration-300 hover:border-gh-purple/25 hover:shadow-md"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-slate-100/80 bg-slate-50">
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="training-service-tag absolute left-3 top-3 bg-white/95">{service.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gh-purple/20 bg-gh-purple/8 text-gh-purple">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <h3 className="font-rubik text-sm font-extrabold leading-snug text-slate-800 group-hover:text-gh-blue">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gh-muted">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
