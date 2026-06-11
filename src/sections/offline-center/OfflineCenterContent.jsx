import {
  ArrowRight,
  Bus,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers,
  MapPin,
  Target,
  Train,
  Users,
  Wrench,
} from 'lucide-react'
import { ACADEMY_ADDRESS, ACADEMY_HOURS, OFFLINE_CENTER_FEATURES } from '../../constants/contact'
import { PHONE, WHATSAPP, WHATSAPP_DEMO } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'

const CAMPUS_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=700&q=80'

const LAB_IMAGE =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80'

const CAMPUS_STATS = [
  { value: '4+', label: 'GenAI programs', icon: Layers },
  { value: 'Mon–Sat', label: 'Live batches', icon: CalendarDays },
  { value: '1:15', label: 'Mentor ratio', icon: Users },
  { value: '5 min', label: 'From KPHB Metro', icon: Train },
]

const FEATURE_ICONS = {
  'Mentor-led classrooms': GraduationCap,
  'Live project labs': Wrench,
  'Interview prep room': Target,
  'Weekend batches': CalendarDays,
}

const NEARBY_LANDMARKS = [
  '5 min walk from KPHB Metro Station (Blue Line)',
  'Near JNTU & Kukatpally bus routes',
  'Easy access from Miyapur, Gachibowli & HITEC City',
]

const TRANSPORT = [
  {
    icon: Train,
    title: 'By metro',
    desc: 'KPHB Metro Station (Blue Line) — short walk to our campus in KPHB Colony Phase 1.',
    accent: 'from-blue-500/10 to-cyan-500/5',
    iconColor: 'text-blue-600',
  },
  {
    icon: Bus,
    title: 'By bus',
    desc: 'RTC buses to KPHB, JNTU, and Kukatpally stops — frequent service from across Hyderabad.',
    accent: 'from-emerald-500/10 to-teal-500/5',
    iconColor: 'text-[#00a86b]',
  },
  {
    icon: Car,
    title: 'By car / bike',
    desc: 'Parking available near KPHB main road. Search "KPHB Colony Phase 1" on Google Maps.',
    accent: 'from-violet-500/10 to-purple-500/5',
    iconColor: 'text-gh-purple',
  },
]

function FeatureCard({ feature }) {
  const Icon = FEATURE_ICONS[feature.title] || GraduationCap

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#00a86b]/25 hover:shadow-[0_8px_24px_rgb(15_23_42/0.06)]">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#00a86b]/5 transition duration-300 group-hover:bg-[#00a86b]/10"
        aria-hidden
      />
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1f8f4] text-[#00a86b]">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="relative mt-4 font-rubik text-sm font-bold text-slate-800">{feature.title}</h3>
      <p className="relative mt-2 text-xs leading-relaxed text-slate-500">{feature.desc}</p>
    </div>
  )
}

export default function OfflineCenterContent() {
  return (
    <>
      {/* Stats strip */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {CAMPUS_STATS.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:px-5"
          >
            <Icon className="mx-auto h-4 w-4 text-[#00a86b]" strokeWidth={2} />
            <p className="mt-2 font-rubik text-xl font-extrabold text-slate-800 sm:text-2xl">{value}</p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[11px]">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Campus overview — bento layout */}
      <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_4px_24px_rgb(15_23_42/0.06)] lg:col-span-7">
          <img
            src={CAMPUS_IMAGE}
            alt="Students collaborating in NSR Academy classroom"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[360px]"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <span className="rounded-lg border border-white/25 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#1b4332] backdrop-blur-sm">
              KPHB · Hyderabad
            </span>
            <span className="rounded-lg border border-white/25 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-slate-600 backdrop-blur-sm">
              In-person · GenAI labs
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="flex flex-1 flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-7">
            <span className="section-tag w-fit">Our campus</span>
            <h2 className="mt-3 font-rubik text-xl font-bold leading-snug text-slate-800 sm:text-2xl">
              Learn in person at our{' '}
              <span className="highlight">KPHB center</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              NSR GenAI ProSkills Academy runs mentor-led offline batches at our Hyderabad campus.
              Structured daily labs, live GenAI projects, and placement support — all under one roof.
            </p>
            <ul className="mt-5 space-y-2.5">
              {NEARBY_LANDMARKS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00a86b]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={LAB_IMAGE}
              alt="Hands-on GenAI project lab at NSR Academy"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/70 to-transparent" />
            <p className="absolute bottom-4 left-4 max-w-[200px] text-xs font-medium leading-relaxed text-white/90">
              Dedicated lab hours for Python, data & GenAI projects
            </p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mt-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-rubik text-xl font-bold text-slate-800 sm:text-2xl">
            What you get at the <span className="highlight">offline center</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Everything you need to go from zero to job-ready — on campus, with mentors beside you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {OFFLINE_CENTER_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>

      {/* Getting here */}
      {/* <div className="mt-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-rubik text-xl font-bold text-slate-800 sm:text-2xl">
            How to <span className="highlight">reach us</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Well connected by metro, bus, and road — easy to reach from anywhere in Hyderabad.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {TRANSPORT.map(({ icon: Icon, title, desc, accent, iconColor }) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br ${accent} p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-rubik text-sm font-bold text-slate-800">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Address + hours */}
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-8">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f8f4] text-[#00a86b]">
              <MapPin className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <h3 className="font-rubik text-lg font-bold text-slate-800">Campus address</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {ACADEMY_ADDRESS.line1}
                <br />
                {ACADEMY_ADDRESS.line2}
                <br />
                {ACADEMY_ADDRESS.city}, {ACADEMY_ADDRESS.state} {ACADEMY_ADDRESS.pincode}
                <br />
                {ACADEMY_ADDRESS.country}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${ACADEMY_ADDRESS.line2}, ${ACADEMY_ADDRESS.city}, ${ACADEMY_ADDRESS.state}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
              >
                Open in Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-8">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f8f4] text-[#00a86b]">
              <Clock className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="flex-1">
              <h3 className="font-rubik text-lg font-bold text-slate-800">Campus hours</h3>
              <ul className="mt-3 space-y-2.5">
                {ACADEMY_HOURS.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm"
                  >
                    <span className="font-semibold text-slate-700">{slot.days}</span>
                    <span className="text-slate-500">{slot.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Call <a href={`tel:+91${PHONE}`} className="font-semibold text-[#00a86b]">+91 {PHONE}</a> before visiting on Sunday.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:px-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1b4332] via-[#00a86b] to-[#52b788]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#00a86b]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gh-purple/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-xl">
          <h3 className="font-rubik text-xl font-bold text-slate-800 sm:text-2xl">
            Plan your <span className="highlight">campus visit</span>
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Walk in for a free counselling session, see our labs, and meet the mentors who will guide
            your GenAI journey.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noreferrer"
              className="btn-hero inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
            >
              Book a free demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-outline inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
          <AppLink
            to={ROUTES.contact}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
          >
            More contact options
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </div>
    </>
  )
}
