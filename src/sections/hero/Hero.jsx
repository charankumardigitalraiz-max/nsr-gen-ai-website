import { useState } from 'react'
import { CheckCircle2, Calendar } from 'lucide-react'
import { HERO_STATS } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import DemoModal from '../../components/ui/DemoModal'
import HighlightsTicker from './HighlightsTicker'
import HeroScene3D from './HeroScene3D'
import HeroAIHub from './HeroAIHub'

const HERO_POINTS = [
  'Zero-level to job-ready GenAI training',
  'Live projects with LLMs & industry tools',
  'Resume, interview prep & MNC referrals',
]

const GALAXY_BG = {
  backgroundImage: [
    'radial-gradient(1px 1px at 10% 20%, rgb(255 255 255 / 0.9), transparent)',
    'radial-gradient(1px 1px at 25% 65%, rgb(186 230 253 / 0.8), transparent)',
    'radial-gradient(1.5px 1.5px at 40% 35%, rgb(255 255 255 / 0.7), transparent)',
    'radial-gradient(1px 1px at 55% 80%, rgb(216 180 254 / 0.75), transparent)',
    'radial-gradient(1px 1px at 70% 15%, rgb(255 255 255 / 0.85), transparent)',
    'radial-gradient(1.5px 1.5px at 85% 55%, rgb(147 197 253 / 0.8), transparent)',
    'radial-gradient(1px 1px at 18% 42%, rgb(134 239 172 / 0.75), transparent)',
    'radial-gradient(1.5px 1.5px at 72% 72%, rgb(52 211 153 / 0.65), transparent)',
  ].join(', '),
  backgroundSize: '280px 280px, 320px 320px, 260px 260px, 300px 300px, 340px 340px, 290px 290px, 305px 305px, 285px 285px',
}

const SECTION_BG = {
  background: [
    'radial-gradient(ellipse 70% 55% at 12% 65%, rgb(16 185 129 / 0.14), transparent 60%)',
    'radial-gradient(ellipse 55% 45% at 88% 30%, rgb(45 212 191 / 0.1), transparent 55%)',
    'radial-gradient(ellipse 100% 80% at 50% 50%, rgb(15 23 42 / 0.15), transparent 70%)',
    'radial-gradient(ellipse 90% 70% at 50% 120%, rgb(30 27 75 / 0.35), transparent 55%)',
    'linear-gradient(180deg, #030508 0%, #041210 45%, #0a0e17 100%)',
  ].join(', '),
}

const BTN_DEMO =
  'hero-btn btn-hero h-11 min-w-[10.75rem] gap-2 px-5 font-rubik text-xs font-extrabold tracking-wide'

const BTN_OUTLINE =
  'hero-btn btn-hero-outline hero-btn-outline h-11 min-w-[10.75rem] gap-2 px-5 font-rubik text-xs font-bold tracking-wide'

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="hero-fit relative flex h-dvh max-h-dvh min-h-0 flex-col overflow-x-hidden bg-[#030508] text-white">
      <style>{`
        .hero-fit .hero-title {
          font-size: clamp(2.25rem, 5.5vw, 3.75rem);
        }
        .hero-fit .hero-copy-stack > * + * {
          margin-top: 1.5rem;
        }
        .hero-fit .hero-hub-wrap {
          height: min(420px, 52dvh, 38vw);
          width: min(420px, 52dvh, 38vw);
          flex-shrink: 0;
        }
        @media (min-width: 1024px) and (max-width: 1280px) {
          .hero-fit .hero-hub-wrap {
            height: min(360px, 50dvh, 36vw);
            width: min(360px, 50dvh, 36vw);
          }
        }
        @media (max-height: 860px) {
          .hero-fit .hero-title {
            font-size: clamp(2rem, 4.2vw + 0.6vh, 3rem);
          }
          .hero-fit .hero-copy-stack > * + * {
            margin-top: 1.125rem;
          }
          .hero-fit .hero-desc {
            font-size: clamp(0.9375rem, 1.1vw + 0.8vh, 1.0625rem);
            line-height: 1.45;
          }
          .hero-fit .hero-hub-wrap {
            height: min(360px, 48dvh, 34vw);
            width: min(360px, 48dvh, 34vw);
          }
        }
        @media (max-height: 740px) {
          .hero-fit .hero-title {
            font-size: clamp(1.75rem, 3.5vw + 1vh, 2.5rem);
          }
          .hero-fit .hero-copy-stack > * + * {
            margin-top: 0.75rem;
          }
          .hero-fit .hero-desc {
            font-size: clamp(0.875rem, 0.8vw + 0.9vh, 1rem);
          }
          .hero-fit .hero-points li {
            font-size: 0.8125rem;
          }
          .hero-fit .hero-stat-value {
            font-size: clamp(1rem, 2vh, 1.25rem);
          }
          .hero-fit .hero-hub-wrap {
            height: min(320px, 46dvh, 34vw);
            width: min(320px, 46dvh, 34vw);
          }
          .hero-fit .hero-btn {
            height: 2.5rem;
            min-height: 2.5rem;
          }
        }
        @media (max-width: 640px) {
          .hero-fit {
            height: auto;
            max-height: none;
            min-height: 100dvh;
          }
        }
        .hero-fit .hero-btn-outline {
          border-color: rgb(0 168 107 / 0.45);
          background: transparent;
          color: white;
          box-shadow: none;
        }
        .hero-fit .hero-btn-outline:hover {
          border-color: rgb(82 183 136 / 0.75);
          background: rgb(0 168 107 / 0.15);
          color: white;
        }
        .hero-fit .highlight {
          background: linear-gradient(to right, #52b788, #00c97a, #a7f3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <HeroScene3D />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.85]"
        style={GALAXY_BG}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0" style={SECTION_BG} aria-hidden="true" />

      <div
        className="pointer-events-none absolute top-[10%] -left-[12%] z-[1] h-[min(55vw,560px)] w-[min(55vw,560px)] rounded-full bg-teal-400/20 blur-3xl lg:blur-[64px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[5%] -right-[10%] z-[1] h-[min(50vw,520px)] w-[min(50vw,520px)] rounded-full bg-sky-600/22 blur-3xl lg:blur-[64px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[18%] left-[8%] z-[1] h-[min(42vw,440px)] w-[min(42vw,440px)] rounded-full bg-emerald-400/22 blur-3xl lg:blur-[72px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[35%] left-1/2 z-[1] h-[min(40vw,400px)] w-[min(70vw,700px)] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/16 to-indigo-500/18 blur-3xl lg:blur-[72px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#030508]/88 via-[#030508]/55 to-transparent lg:from-[#030508]/88 lg:via-[#030508]/15 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#030508]/30 via-transparent to-[#030508]/45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#030508]/50 via-[#030508]/75 to-[#030508]/85 lg:hidden"
        aria-hidden="true"
      />

      <section className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 min-h-0 grid-cols-1 items-center gap-10 !py-0 px-6 pt-[5rem] pb-2 sm:pt-[5.5rem] lg:grid-cols-2 lg:gap-16 lg:pt-[6rem]">
        <div className="hero-copy-stack relative flex min-h-0 max-w-xl flex-col justify-center bg-transparent">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl backdrop-blur-sm"
            style={{
              background:
                'radial-gradient(ellipse 90% 80% at 0% 60%, rgb(16 185 129 / 0.1), transparent 65%), radial-gradient(ellipse 110% 100% at 0% 50%, rgb(3 5 8 / 0.65), transparent 75%)',
            }}
            aria-hidden="true"
          />

          <h1 className="hero-title font-rubik font-extrabold leading-[1.1] tracking-tight text-white">
            Zero to{' '}
            <span className="highlight">Job Ready</span>
            <br />
            in GenAI
          </h1>

          <p className="hero-desc max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Built for B.Tech, Degree &amp; MCA graduates in Hyderabad — learn coding, build real AI
            projects, and get placed in top companies with full career support.
          </p>

          <ul className="hero-points space-y-2.5">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <button type="button" onClick={() => setDemoOpen(true)} className={BTN_DEMO}>
              Book a Demo
              <Calendar className="h-3.5 w-3.5 shrink-0" />
            </button>
            <AppLink to={ROUTES.courses} className={BTN_OUTLINE}>
              View Courses
            </AppLink>
          </div>

          <div className="flex flex-wrap gap-2 lg:hidden">
            {['LLM', 'GenAI', 'Python', 'ML', 'RAG', 'AI Agents'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid max-w-md grid-cols-3 gap-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-emerald-500/15 bg-slate-800/40 px-2 py-3.5 text-center shadow-[0_0_24px_rgb(16_185_129/0.06)] backdrop-blur-sm"
              >
                <p className={`hero-stat-value font-rubik text-lg font-extrabold sm:text-xl ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-0 items-center justify-center justify-self-center overflow-visible p-2 lg:flex lg:-translate-x-4 xl:-translate-x-8">
          <div className="hero-hub-wrap relative">
            <HeroAIHub />
          </div>
        </div>
      </section>

      <div className="relative z-20 mt-auto w-full shrink-0">
        <HighlightsTicker />
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  )
}
