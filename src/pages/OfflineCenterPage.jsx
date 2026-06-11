import { ArrowLeft, ArrowRight, Building2, MapPin } from 'lucide-react'
import OfflineCenterContent from '../sections/offline-center/OfflineCenterContent'
import { TRAINING_HERO_IMAGE, WHATSAPP_DEMO } from '../constants/content'
import { ROUTES } from '../constants/routes'
import AppLink from '../components/AppLink'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&h=400&q=80'

export default function OfflineCenterPage() {
  return (
    <section id="offline-center" className="relative -mt-5 overflow-hidden bg-gh-canvas pb-16 sm:-mt-6">
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-gh-purple/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        {/* Hero banner */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_6px_24px_rgb(15_23_42/0.07)]">
          <img
            src={HERO_IMAGE}
            alt={TRAINING_HERO_IMAGE.alt}
            className="aspect-[4/1] min-h-[150px] w-full object-cover object-center sm:min-h-[170px] lg:min-h-[190px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/95 via-[#1b4332]/78 to-[#1b4332]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6">
            <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm sm:mb-2.5 sm:px-3 sm:py-1 sm:text-[10px]">
              <Building2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Offline Center
            </span>
            <h1 className="max-w-xl font-rubik text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              Our <span className="text-[#a7f3d0]">KPHB Campus</span>
            </h1>
            <p className="mt-1.5 max-w-md text-[11px] leading-relaxed text-white/80 sm:mt-2 sm:text-xs">
              Mentor-led classrooms, live GenAI labs & placement support at our Hyderabad offline
              center.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noreferrer"
                className="btn-hero inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Book a campus visit
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                <MapPin className="h-3 w-3 text-[#a7f3d0] sm:h-3.5 sm:w-3.5" />
                KPHB Colony, Hyderabad
              </span>
            </div>
          </div>
        </div>

        <OfflineCenterContent />
      </div>
    </section>
  )
}
