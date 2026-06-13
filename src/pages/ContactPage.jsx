import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, PhoneCall } from 'lucide-react'
import ContactContent from '../sections/contact/ContactContent'
import { PHONE } from '../constants/content'
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-200 shadow-[0_4px_18px_rgb(15_23_42/0.07)] sm:rounded-2xl">
          <div className="relative min-h-[300px] w-full sm:min-h-[220px] sm:aspect-[21/9] lg:aspect-[4/1] lg:min-h-[190px]">
            <img
              src={HERO_IMAGE}
              alt="NSR Academy admissions and counselling team"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1b4332]/96 via-[#1b4332]/90 to-[#1b4332]/75 lg:from-[#1b4332]/92 lg:via-[#1b4332]/78 lg:to-[#1b4332]/45" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/70 via-[#1b4332]/25 to-[#1b4332]/10 lg:from-[#1b4332]/50 lg:via-transparent lg:to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-6">
              <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d1fae5] backdrop-blur-sm">
                <PhoneCall className="h-3.5 w-3.5" />
                Contact Us
              </span>
              <h1 className="max-w-xl font-rubik text-[1.35rem] font-extrabold leading-[1.2] tracking-tight text-white sm:text-2xl lg:text-3xl">
                Get in touch with <span className="text-[#a7f3d0]">NSR Academy</span>
              </h1>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90 sm:max-w-lg lg:text-sm">
                Admissions, demo sessions & placement support — reach us anytime.
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="btn-hero inline-flex w-full cursor-pointer items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold sm:w-auto sm:px-5"
                >
                  Book a free demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:+91${PHONE}`}
                  className="hidden items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/15 sm:inline-flex"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#a7f3d0]" />
                  +91 {PHONE}
                </a>
                <span className="hidden items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:inline-flex">
                  <MapPin className="h-3.5 w-3.5 text-[#a7f3d0]" />
                  KPHB, Hyderabad
                </span>
              </div>
            </div>
          </div>
        </div>

        <ContactContent />
      </div>

      <EnrollModal open={demoOpen} onClose={() => setDemoOpen(false)} defaultCourse="" />
    </section>
  )
}
