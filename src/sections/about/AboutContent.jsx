import {
  ArrowRight,
  Bot,
  Building2,
  GraduationCap,
  Handshake,
  Laptop,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import {
  AI_PILLARS,
  HERO_FEATURES,
  HIRING_PARTNER_BRANDS,
  WHATSAPP,
} from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import PartnerCarousel from '../../components/ui/PartnerCarousel'
import AboutSuccessSpotlight from './AboutSuccessSpotlight'

const ABOUT_IMAGE = {
  src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&h=650&q=80',
  alt: 'Students collaborating on a GenAI project in the classroom',
}

const FEATURE_ICONS = {
  bot: Bot,
  building: Building2,
  laptop: Laptop,
  mapPin: MapPin,
}

const ACADEMY_VALUES = [
  {
    icon: Rocket,
    title: 'Zero to job-ready',
    desc: 'Structured paths for freshers and career switchers — no prior coding experience required.',
  },
  {
    icon: Users,
    title: 'Mentor-led learning',
    desc: 'Daily doubt clearing, code reviews, and personalised feedback from industry trainers.',
  },
  {
    icon: Target,
    title: 'Outcome-focused',
    desc: 'Portfolio projects, mock interviews, and MNC referrals until you land a verified offer.',
  },
]

const MISSION_FEATURES = [
  {
    icon: GraduationCap,
    title: 'Learn by building',
    desc: 'Hands-on labs every week — chatbots, RAG pipelines, and APIs you can demo to recruiters.',
  },
  {
    icon: MapPin,
    title: 'KPHB classroom',
    desc: 'Offline batches at our Hyderabad centre with dedicated lab systems and mentor access.',
  },
  {
    icon: Handshake,
    title: 'Placement support',
    desc: 'Resume prep, mock interviews, and MNC referrals until you secure a verified offer.',
  },
  {
    icon: Target,
    title: 'Built for outcomes',
    desc: 'Small groups, clear milestones, and skills mapped to what hiring teams expect today.',
  },
]

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Counsel & assess',
    desc: 'Free demo session to map your background to the right GenAI program.',
  },
  {
    step: '02',
    title: 'Learn & build',
    desc: 'Classroom labs, live projects, and GenAI tools used in real companies.',
  },
  {
    step: '03',
    title: 'Place & grow',
    desc: 'Resume prep, referrals, and interview support through your first offer.',
  },
]

export default function AboutContent({ preview = false, fullPage = false }) {
  return (
    <>
      {/* Mission */}
      <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_4px_24px_rgb(15_23_42/0.08)]">
            <img
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-4 left-4 rounded-lg border border-white/25 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#1b4332] backdrop-blur-sm">
              KPHB · Hyderabad
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          {/* <span className="section-tag w-fit">
            <Sparkles className="h-3.5 w-3.5" />
            Our Mission
          </span> */}
          <h2 className="section-title text-left">
            Learn · Create · <span className="highlight">Innovate · Transform</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gh-muted">
            We train for real jobs — not theory alone. From your first Python line to deploying GenAI
            apps, every step is guided by mentors who have shipped products in the industry.
          </p>

          {fullPage && (
            <div className="mt-4 rounded-lg border-l-[3px] border-[#00a86b] bg-[#f1f8f4]/60 px-3.5 py-2.5">
              <p className="text-sm leading-relaxed text-[#2d6a4f]">
                Freshers start from zero. Working professionals upskill without leaving their job.
                Everyone graduates with portfolio projects — not just certificates.
              </p>
            </div>
          )}

          <div className="mt-5 space-y-2.5">
            {(fullPage ? MISSION_FEATURES : MISSION_FEATURES.slice(0, 3)).map(
              ({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  className="group flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_rgb(15_23_42/0.05)] transition duration-300 hover:border-slate-300"
                >
                  <div className="flex w-10 shrink-0 flex-col items-center justify-center gap-0.5 bg-[#f8faf9] py-3 text-[#00a86b] sm:w-12">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                    <span className="font-rubik text-[9px] font-extrabold text-[#00a86b]/40">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 border-l border-slate-100 px-3 py-2.5 sm:px-4 sm:py-3">
                    <h3 className="font-rubik text-sm font-bold text-[#1b4332]">{title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{desc}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {fullPage && (
        <>
          {/* AI Pillars */}
          <div className="mb-16">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="section-title">
                Four pillars of <span className="highlight">modern AI</span>
              </h2>
              <p className="text-lg text-gh-muted">
                A balanced curriculum across code, language models, creative AI, and autonomous agents.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AI_PILLARS.map((pillar) => (
                <article
                  key={pillar.label}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt || pillar.label}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/75 via-[#1b4332]/20 to-transparent"
                      aria-hidden
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full border border-white/30 bg-[#00a86b]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      {pillar.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-rubik text-sm font-extrabold leading-snug text-[#1b4332]">
                      {pillar.title || pillar.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pillar.desc}</p>
                    {(pillar.topics || []).length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {pillar.topics.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-[#f1f8f4] px-1.5 py-0.5 text-[9px] font-semibold text-[#2d6a4f]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Core values */}
          <div className="mb-16">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <h2 className="section-title">
                Our core <span className="highlight">values</span>
              </h2>
              <p className="text-lg text-gh-muted">
                The principles behind how we teach, mentor, and support you until you land your offer.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgb(15_23_42/0.07)]">
              <div className="grid divide-y divide-slate-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {ACADEMY_VALUES.map(({ icon: Icon, title, desc }, index) => (
                  <div
                    key={title}
                    className="group flex gap-4 p-5 sm:p-6 lg:flex-col lg:gap-0"
                  >
                    <div className="flex shrink-0 flex-col items-center gap-2 lg:items-start">
                      <span className="font-rubik text-[10px] font-extrabold tracking-widest text-[#00a86b]/50">
                        0{index + 1}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00a86b]/20 bg-[#f1f8f4] text-[#00a86b] transition duration-300 group-hover:border-[#00a86b] group-hover:bg-[#00a86b] group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 lg:mt-4">
                      <h3 className="font-rubik text-base font-bold text-[#1b4332]">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey */}
          {/* <div className="mb-16">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="section-tag mx-auto w-fit justify-center">
                <GraduationCap className="h-3.5 w-3.5" />
                Your path
              </span>
              <h2 className="section-title">
                How we take you <span className="highlight">from zero to hired</span>
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {JOURNEY_STEPS.map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="font-rubik text-2xl font-extrabold text-[#00a86b]/30">{step}</span>
                  <h3 className="mt-2 font-rubik text-sm font-bold text-slate-800">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div> */}



          {/* Hiring network */}
          <div className="mb-5">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              {/* <span className="section-tag mx-auto w-fit justify-center">
                <Handshake className="h-3.5 w-3.5" />
                Hiring network
              </span> */}
              <h2 className="section-title">
                Trusted by leading <span className="highlight">MNCs</span>
              </h2>
              <p className="mt-2 text-base text-[#2d6a4f]/90">
                Our placement network connects graduates with technology consulting and product firms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white py-3 shadow-[0_4px_20px_rgb(15_23_42/0.07)] sm:py-4">
              <PartnerCarousel companies={HIRING_PARTNER_BRANDS} />
            </div>
          </div>

          <AboutSuccessSpotlight />
        </>
      )}

      {!preview && (
        <>
          {/* Academy strengths */}
          {/* <div className="mb-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-tag mx-auto w-fit justify-center">Why NSR</span>
          <h2 className="section-title">
            Built for <span className="highlight">job-ready outcomes</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {HERO_FEATURES.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon] || Bot
            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgb(15_23_42/0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_8px_20px_rgb(15_23_42/0.09)]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f8f4] text-[#00a86b]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-rubik text-sm font-bold text-slate-800">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_8px_28px_rgb(15_23_42/0.08)] sm:px-10 sm:py-12">
            <h3 className="relative font-rubik text-xl font-bold text-slate-900 sm:text-2xl">
              Ready to start your <span className="highlight">GenAI journey?</span>
            </h3>
            <p className="relative mx-auto mt-2 max-w-md text-base text-[#2d6a4f]/90">
              Explore our programs, visit the KPHB campus, or speak with admissions to find your track.
            </p>
            <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppLink to={ROUTES.courses} className="btn-hero inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold">
                View courses
                <ArrowRight className="h-4 w-4" />
              </AppLink>
              <AppLink
                to={ROUTES.offlineCenter}
                className="btn-hero-outline inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
              >
                Visit campus
              </AppLink>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-outline inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold"
              >
                Talk to admissions
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
