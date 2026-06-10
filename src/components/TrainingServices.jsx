import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  Target,
  UserRound,
  Wrench,
} from 'lucide-react'
import { TRAINING_HERO_IMAGE, TRAINING_SERVICES, WHATSAPP } from '../constants/content'

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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gh-green/15 bg-gh-green/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gh-green">
              <Sparkles className="h-3.5 w-3.5" />
              Our Training Services
            </span>
            <h2 className="mt-4 font-rubik text-2xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">
              Everything to go from{' '}
              <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">
                learner to placed
              </span>
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-gh-muted sm:text-base">
              Classroom training, live project labs, GenAI workshops, interview prep, and placement support — all at
              KPHB, Hyderabad.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['Live mentor-led sessions', 'Real portfolio projects', 'Placement until you get hired'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-hero mt-8 inline-flex gap-2">
              Talk to admissions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="training-hero-visual">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-gh-blue/15 via-gh-purple/10 to-cyber-pink/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
              <img
                src={TRAINING_HERO_IMAGE.src}
                alt={TRAINING_HERO_IMAGE.alt}
                className="h-56 w-full object-cover sm:h-64 lg:h-72"
                loading="lazy"
              />
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  <span className="training-hero-pill">
                    <MapPin className="h-3.5 w-3.5" />
                    KPHB, Hyderabad
                  </span>
                  <span className="training-hero-pill">June batch open</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
