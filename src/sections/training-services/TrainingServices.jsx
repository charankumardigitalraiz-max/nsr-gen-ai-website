import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  GraduationCap,
  Layers,
  Sparkles,
  Target,
  UserRound,
  Wrench,
} from 'lucide-react'
import { TRAINING_HERO_IMAGE, TRAINING_SERVICES, WHATSAPP } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'

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

const SERVICE_GROUPS = [
  {
    label: 'Learn',
    desc: 'Structured programs for every schedule',
    icons: ['classroom', 'weekend', 'workshop'],
  },
  {
    label: 'Build',
    desc: 'Hands-on labs and real project work',
    icons: ['project', 'corporate'],
  },
  {
    label: 'Place',
    desc: 'Career coaching until you get hired',
    icons: ['interview', 'placement', 'mentor'],
  },
]

function ServiceRow({ service }) {
  const Icon = SERVICE_ICONS[service.icon] || GraduationCap

  return (
    <div className="group flex gap-3 rounded-xl border border-transparent p-2 transition duration-200 hover:border-slate-200 hover:bg-slate-50">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          aria-hidden
        />
        <span className="absolute inset-0 flex items-center justify-center bg-[#1b4332]/50">
          <Icon className="h-4 w-4 text-white" strokeWidth={2} />
        </span>
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-rubik text-sm font-semibold text-slate-800">{service.title}</h4>
          <span className="rounded-md bg-[#f1f8f4] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#2d6a4f]">
            {service.tag}
          </span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{service.desc}</p>
      </div>
    </div>
  )
}

export default function TrainingServices() {
  const servicesByIcon = Object.fromEntries(TRAINING_SERVICES.map((s) => [s.icon, s]))

  return (
    <section id="training" className="relative overflow-hidden bg-gh-canvas pb-14">
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <Sparkles className="h-3.5 w-3.5" />
            Training Services
          </span>
          <h2 className="section-title">
            Everything you need to go <span className="highlight">job-ready</span>
          </h2>
          <p className="mx-auto max-w-lg text-sm text-gh-muted">
            Classroom training, live projects, and placement support — all at our KPHB campus in Hyderabad.
          </p>
        </div>

        {/* Hero banner */}
        {/* <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgb(15_23_42/0.06)]">
          <img
            src={TRAINING_HERO_IMAGE.src}
            alt={TRAINING_HERO_IMAGE.alt}
            className="aspect-[21/9] min-h-[180px] w-full object-cover sm:min-h-[220px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/90 via-[#1b4332]/70 to-[#1b4332]/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 sm:px-10">
            <p className="max-w-md text-sm leading-relaxed text-white/85">
              Mentor-led batches, portfolio-ready labs, and interview prep — designed for freshers and
              working professionals.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-hero inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold"
              >
                Talk to admissions
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs font-medium text-white/70">
                Next batch starts <span className="font-semibold text-white">20th June</span>
              </span>
            </div>
          </div>
        </div> */}

        {/* Grouped services */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {SERVICE_GROUPS.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
            >
              <div className="mb-4 border-b border-slate-100 pb-4">
                <h3 className="font-rubik text-lg font-bold text-slate-800">
                  <span className="highlight">{group.label}</span>
                </h3>
                <p className="mt-1 text-xs text-slate-500">{group.desc}</p>
              </div>
              <div className="space-y-1">
                {group.icons.map((iconKey) => {
                  const service = servicesByIcon[iconKey]
                  if (!service) return null
                  return <ServiceRow key={service.title} service={service} />
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1b4332] via-[#00a86b] to-[#52b788]"
            aria-hidden
          />
          <h3 className="font-rubik text-xl font-bold text-slate-800 sm:text-2xl">
            Book a free <span className="highlight">counselling session</span>
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Tell us your background and goal — we&apos;ll suggest the right batch and learning track.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-hero inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
            >
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <AppLink
              to={ROUTES.placements}
              className="btn-hero-outline inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
            >
              View placement records
              <ArrowRight className="h-4 w-4" />
            </AppLink>
          </div>
        </div> */}
      </div>
    </section>
  )
}
