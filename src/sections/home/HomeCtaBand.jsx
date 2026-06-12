import { useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import DemoModal from '../../components/ui/DemoModal'
import EnrollModal from '../../components/ui/EnrollModal'

export default function HomeCtaBand() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [enrollOpen, setEnrollOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1b4332] to-[#0c2e20] text-white py-16 sm:py-20 border-t border-white/5">
      {/* Decorative background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgb(82 183 136 / 0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-[#00a86b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#a7f3d0] mb-4">
          <MapPin className="h-3 w-3 text-[#00a86b]" />
          KPHB · Hyderabad Campus
        </span>
        
        <h2 className="font-rubik text-3xl font-extrabold text-white leading-tight sm:text-4xl">
          Ready to start your <span className="text-[#00a86b]">GenAI career?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          Join the next offline batch — live projects, mentor support, and placement assistance until you land your role.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setEnrollOpen(true)}
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
          >
            Enroll now
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
          >
            Book a free demo
          </button>

          <AppLink
            to={ROUTES.courses}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#a7f3d0] hover:text-white transition-colors duration-200"
          >
            Browse all courses
          </AppLink>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </section>
  )
}
