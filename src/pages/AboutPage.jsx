import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Heart, MapPin } from 'lucide-react'
import About from '../sections/about/About'
import { ROUTES } from '../constants/routes'
import AppLink from '../components/AppLink'

const BANNER_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&h=400&q=80',
    alt: 'Students learning in NSR Academy classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&h=400&q=80',
    alt: 'Students collaborating on a GenAI project',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&h=400&q=80',
    alt: 'Instructor teaching in a modern classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=400&q=80',
    alt: 'Team workshop at the training center',
  },
]

const SLIDE_INTERVAL_MS = 2000

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % BANNER_SLIDES.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="about-page"
      className="relative -mt-5 overflow-hidden bg-gradient-to-b from-[#f8faf9] via-white to-white pb-2 sm:-mt-6"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        <div className="relative mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_4px_18px_rgb(15_23_42/0.07)]">
          <div className="relative aspect-[4/1] min-h-[150px] w-full sm:min-h-[170px] lg:min-h-[190px]">
            {BANNER_SLIDES.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1b4332]/92 via-[#1b4332]/78 to-[#1b4332]/45" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6">
            <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#d1fae5] backdrop-blur-sm sm:px-3 sm:py-1 sm:text-[10px]">
              <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              About Us
            </span>
            <h1 className="max-w-xl font-rubik text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              NSR GenAI <span className="text-[#a7f3d0]">ProSkills Academy</span>
            </h1>
            <p className="mt-1.5 max-w-lg text-[11px] leading-relaxed text-white/80 sm:mt-2 sm:text-xs">
              Hyderabad&apos;s practical GenAI institute — classroom training, live projects, and
              placement support for job-ready careers.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
              <AppLink
                to={ROUTES.courses}
                className="btn-hero inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Explore programs
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </AppLink>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                <MapPin className="h-3 w-3 text-[#a7f3d0] sm:h-3.5 sm:w-3.5" />
                KPHB, Hyderabad
              </span>
            </div>
          </div>

          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 sm:bottom-4 sm:right-6">
            {BANNER_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        <About fullPage />
      </div>
    </section>
  )
}
