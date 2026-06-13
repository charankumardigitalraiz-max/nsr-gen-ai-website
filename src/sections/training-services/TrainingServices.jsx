import { useState } from 'react'
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
  CheckCircle,
} from 'lucide-react'
import { TRAINING_SERVICES, WHATSAPP } from '../../constants/content'
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

// Custom lists of details for each service to make the showcase rich and premium
const SERVICE_HIGHLIGHTS = {
  classroom: [
    'Daily in-person lab sessions at Kukatpally (KPHB) campus',
    'Structured curriculum taught by real-time working professionals',
    'Personal desktop workstations with pre-configured development tools',
  ],
  project: [
    'Build and deploy real-world production level GenAI & Full Stack apps',
    'Get code reviews and architecture design help from senior mentors',
    'Complete capstones designed to stand out to MNC hiring managers',
  ],
  workshop: [
    'Intensive sessions on prompt engineering, LLM fine-tuning, and RAG',
    'Learn cursor coding and claude code agentic workflows in real-time',
    'Certificate of achievement provided upon project submission',
  ],
  corporate: [
    'Custom tailored corporate training sessions for IT services groups',
    'Upskilling in Python, GenAI integrations, agentic workflows, and cloud',
    'Flexible scheduling with options for onsite or remote delivery',
  ],
  interview: [
    'Frequent mock interviews with senior recruiters and engineering managers',
    'Structured communication and soft-skills grooming classes',
    'Topic-wise assessments covering coding, databases, and system design',
  ],
  placement: [
    '100% placement support pool access with 2500+ corporate hiring partners',
    'Resume crafting workshops targeting applicant tracking systems (ATS)',
    'Exclusive job openings and recruitment drives held at our campus',
  ],
  weekend: [
    'Convenient weekend hours designed for working professionals and students',
    'Full access to curriculum portals, recordings, and online support',
    'Covers complete full-stack syllabus at a balanced pace',
  ],
  mentor: [
    'Assigned dedicated program manager to track progress weekly',
    '1-on-1 weekly doubt clearing sessions with top industry experts',
    'Personal career guidance, mock interviews, and portfolio reviews',
  ],
}

export default function TrainingServices({ embedded = false }) {
  const [activeTab, setActiveTab] = useState(0)

  const sectionClass = embedded
    ? 'overflow-x-hidden bg-white border-b border-slate-100 py-8 sm:py-10'
    : 'relative overflow-hidden overflow-x-hidden bg-slate-50/50 py-12 sm:py-16 md:py-20 border-b border-slate-100'

  const servicesList = embedded ? TRAINING_SERVICES.slice(0, 6) : TRAINING_SERVICES
  const activeService = servicesList[activeTab] || servicesList[0]
  const ActiveIcon = SERVICE_ICONS[activeService.icon] || GraduationCap

  return (
    <section id="training" className={sectionClass}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f8f4] border border-[#00a86b]/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b4332] sm:px-4 sm:text-xs mb-3 sm:mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#00a86b]" />
            Training Services
          </span>
          <h2 className="font-rubik text-2xl font-extrabold text-[#1b4332] sm:text-3xl md:text-4xl">
            Everything You Need To Go <span className="highlight">Job-Ready</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 font-medium sm:mt-4">
            Explore our ecosystem designed to take you from absolute coding fundamentals to joining top software organizations.
          </p>
        </div>

        {/* Unified Tabbed Showcase Card */}
        <div className="max-w-6xl mx-auto min-w-0 bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden grid md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] items-stretch">

          {/* Left Side: Tabs Navigation */}
          <div className="border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/60 p-3 sm:p-4">
            <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-2 sm:px-2.5 md:mb-2">
              Select Services
            </span>
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-1">
              {servicesList.map((service, index) => {
                const Icon = SERVICE_ICONS[service.icon] || GraduationCap
                const isActive = index === activeTab

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`training-service-tab ${
                      isActive ? 'training-service-tab--active' : 'training-service-tab--idle'
                    }`}
                  >
                    {isActive && (
                      <>
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#00a86b] rounded-r-md hidden md:block" />
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#00a86b] rounded-t-md md:hidden" />
                      </>
                    )}
                    <span className={`training-service-tab__icon ${isActive ? 'training-service-tab__icon--active' : ''}`}>
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="training-service-tab__label">{service.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Side: Content Preview Area */}
          <div className="min-w-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div className="grid gap-5 sm:gap-6 md:grid-cols-[1.1fr_1.9fr] md:items-center min-w-0">
              {/* Service image preview */}
              <div className="relative aspect-[16/10] sm:aspect-[5/3] md:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-inner bg-slate-50">
                <img
                  key={activeService.image}
                  src={activeService.image}
                  alt={activeService.imageAlt || activeService.title}
                  className="h-full w-full object-cover animate-fade-in"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 border border-white/20 text-white backdrop-blur-md">
                  <ActiveIcon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </div>

              {/* Service details */}
              <div className="min-w-0 text-left flex flex-col justify-between h-full py-1">
                <div>
                  <span className="inline-block rounded-md bg-[#f1f8f4] px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#2d6a4f] border border-[#00a86b]/15">
                    {activeService.tag}
                  </span>
                  <h3 className="mt-2 font-rubik text-lg sm:text-xl md:text-2xl font-black text-[#1b4332] leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed sm:text-base">
                    {activeService.desc}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3 sm:space-y-2.5 sm:pt-4">
                  {(SERVICE_HIGHLIGHTS[activeService.icon] || []).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 font-medium leading-relaxed">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#00a86b]" strokeWidth={2.25} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel CTA action */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-semibold text-slate-400 text-center sm:text-left">
                Want to know more about this training?
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary training-service-cta"
              >
                Inquire Details
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Global counselling banner */}
        {/* <div className="mt-16 rounded-3xl border border-[#00a86b]/20 bg-[#f1f8f4]/60 p-8 text-center sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-[#00a86b]/5 blur-2xl" />
          <h3 className="font-rubik text-2xl font-extrabold text-[#1b4332] sm:text-3xl">
            Book a Free <span className="highlight">Counselling Session</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 font-medium leading-relaxed">
            Tell us your background and goal — we&apos;ll suggest the right batch and learning track.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
            >
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            {!embedded && (
              <AppLink
                to={ROUTES.placements}
                className="btn-hero-outline inline-flex items-center gap-2 px-8 py-3 text-sm font-bold border-slate-300 hover:border-[#00a86b] text-slate-700 hover:text-[#1b4332]"
              >
                View placement records
                <ArrowRight className="h-4 w-4" />
              </AppLink>
            )}
            {embedded && (
              <AppLink
                to={ROUTES.training}
                className="btn-hero-outline inline-flex items-center gap-2 px-8 py-3 text-sm font-bold border-slate-300 hover:border-[#00a86b] text-slate-700 hover:text-[#1b4332]"
              >
                All training services
                <ArrowRight className="h-4 w-4" />
              </AppLink>
            )}
          </div>
        </div> */}
      </div>
    </section>
  )
}
