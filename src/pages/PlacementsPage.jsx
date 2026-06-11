import { ArrowLeft, Trophy } from 'lucide-react'
import PlacementsContent from '../sections/placements/PlacementsContent'
import { ROUTES } from '../constants/routes'
import AppLink from '../components/AppLink'

export default function PlacementsPage() {
  return (
    <section id="placements" className="relative -mt-5 overflow-hidden bg-gh-canvas pb-16 sm:-mt-6">
      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-[400px] w-[400px] rounded-full bg-gh-purple/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        <div className="mx-auto mb-10 mt-3 max-w-3xl text-center">
          <span className="section-tag">
            <Trophy className="h-3.5 w-3.5" />
            Placements
          </span>
          <h1 className="section-title">
            Placement Records & <span className="highlight">Hiring Partners</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm font-medium text-gh-muted">
            Verified offers from leading MNCs — see where our graduates land and which companies hire
            from NSR Academy.
          </p>
        </div>

        <PlacementsContent />
      </div>
    </section>
  )
}
