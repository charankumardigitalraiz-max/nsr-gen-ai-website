import { Sparkles, CheckCircle2, MapPin, Calendar } from 'lucide-react'

import { HERO_STATS, WHATSAPP_DEMO } from '../constants/content'

import HighlightsTicker from './HighlightsTicker'

import HeroScene3D from './hero/HeroScene3D'
import HeroAIHub from './hero/HeroAIHub'



const HERO_POINTS = [

  'Zero-level to job-ready GenAI training',

  'Live projects with LLMs & industry tools',

  'Resume, interview prep & MNC referrals',

]



export default function Hero() {

  return (

    <div className="hero-section relative flex min-h-screen flex-col justify-between overflow-hidden">

      <HeroScene3D />

      <div className="hero-galaxy-stars" aria-hidden="true" />
      <div className="hero-section-bg" aria-hidden="true" />
      <div className="hero-nebula hero-nebula--left" aria-hidden="true" />
      <div className="hero-nebula hero-nebula--right" aria-hidden="true" />
      <div className="hero-nebula hero-nebula--core" aria-hidden="true" />
      <div className="hero-3d-overlay" aria-hidden="true" />



      <section className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pb-10 pt-[4.75rem] sm:pb-12 sm:pt-[5.5rem] lg:grid-cols-2 lg:gap-16 lg:pb-16 lg:pt-[6rem]">
        <div className="hero-copy">
          {/* <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="hero-badge-dark">
              <Sparkles className="h-3.5 w-3.5" />
              NSR GenAI ProSkills Academy
            </span>
            <span className="hero-live-badge">June Batch · Admissions Open</span>
          </div> */}



          <h1 className="hero-title-dark font-rubik">
            Zero to{' '}
            <span className="hero-title-accent">Job Ready</span>
            <br />
            in GenAI
          </h1>



          <p className="hero-desc-dark max-w-lg">
            Built for B.Tech, Degree &amp; MCA graduates in Hyderabad — learn coding, build
            real AI projects, and get placed in top companies with full career support.
          </p>



          <ul className="mt-6 space-y-2.5">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gh-blue" />
                {point}
              </li>
            ))}
          </ul>



          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">

            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-cta btn-hero-demo"
            >
              Book a Demo
              <Calendar className="h-3.5 w-3.5 shrink-0" />
            </a>
            <a href="#/courses" className="btn-hero-cta btn-hero-dark-outline">
              View Courses
            </a>
          </div>


          <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
            {['LLM', 'GenAI', 'Python', 'ML', 'RAG', 'AI Agents'].map((tag) => (
              <span key={tag} className="hero-ai-mobile-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="hero-stat-dark">
                <p className={`font-rubik text-lg font-extrabold sm:text-xl ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>



        {/* Right — AI hub over globe */}
        <div className="relative hidden min-h-[380px] items-center justify-center lg:flex lg:-translate-x-8">
          <HeroAIHub />
        </div>
      </section>



      <div className="relative z-20 mt-auto w-full">
        <HighlightsTicker />
      </div>
    </div>

  )

}


