import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, PhoneCall } from 'lucide-react'
import ContactContent from '../sections/contact/ContactContent'
import { PHONE, WHATSAPP_DEMO } from '../constants/content'
import { ROUTES } from '../constants/routes'
import AppLink from '../components/AppLink'
import EnrollModal from '../components/ui/EnrollModal'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&h=400&q=80'

export default function ContactPage() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section
      id="contact"
      className="page-hero-flush relative overflow-hidden bg-gradient-to-b from-[#f8faf9] via-white to-white pb-16"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        {/* Hero banner */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_4px_18px_rgb(15_23_42/0.07)]">
          <img
            src={HERO_IMAGE}
            alt="NSR Academy admissions and counselling team"
            className="aspect-[4/1] min-h-[150px] w-full object-cover object-center sm:min-h-[170px] lg:min-h-[190px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/92 via-[#1b4332]/78 to-[#1b4332]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6">
            <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#52b788]/40 bg-[#00a86b]/25 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#d1fae5] backdrop-blur-sm sm:mb-2.5 sm:px-3 sm:py-1 sm:text-[10px]">
              <PhoneCall className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Contact Us
            </span>
            <h1 className="max-w-xl font-rubik text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              Get in touch with <span className="text-[#a7f3d0]">NSR Academy</span>
            </h1>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/80 sm:mt-2 sm:text-base">
              Admissions, demo sessions & placement support — form, WhatsApp, or visit KPHB campus.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="btn-hero inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
              >
                Book a free demo
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#52b788]/35 bg-[#00a86b]/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition hover:bg-[#00a86b]/35 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                <PhoneCall className="h-3 w-3 text-[#a7f3d0] sm:h-3.5 sm:w-3.5" />
                +91 {PHONE}
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#52b788]/35 bg-[#00a86b]/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                <MapPin className="h-3 w-3 text-[#a7f3d0] sm:h-3.5 sm:w-3.5" />
                KPHB, Hyderabad
              </span>
            </div>
          </div>
        </div>

        <ContactContent />
      </div>

      <EnrollModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultCourse=""
      />
    </section>
  )
}
