import { useState } from 'react'
import { Building2, PhoneCall } from 'lucide-react'
import { HIRING_PARTNER_BRANDS } from '../../constants/content'
import PartnerLogo from '../../components/ui/PartnerLogo'
import EnrollModal from '../../components/ui/EnrollModal'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'

export default function HiringPartnersGrid() {
  const [modalOpen, setModalOpen] = useState(false)

  // Duplicate arrays to ensure seamless infinite loop scrolling
  const row1Companies = [...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS]
  const row2Companies = [...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS].reverse()

  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <h2 className="font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
          Our <span className="highlight">100+ Hiring Partners</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Our graduates are hired by top product companies, multinational consultancies, and emerging tech enterprises.
        </p>
      </div>

      {/* Marquee Row 1 (Scrolling Left) */}
      <div className="relative w-full overflow-hidden py-3
        before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-slate-50 before:to-transparent sm:before:w-32
        after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-slate-50 after:to-transparent sm:after:w-32"
      >
        <div className="animate-ticker flex w-max items-center gap-6 px-4 hover:[animation-play-state:paused]">
          {row1Companies.map((company, index) => (
            <div
              key={`${company.name}-row1-${index}`}
              className="flex h-20 w-52 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 transition-all duration-300 hover:scale-[1.03] hover:border-[#00a86b]/35 hover:shadow-sm shrink-0"
            >
              <PartnerLogo company={company} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Scrolling Right / Reversed) */}
      <div className="relative w-full overflow-hidden py-3 mt-4
        before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-slate-50 before:to-transparent sm:before:w-32
        after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-slate-50 after:to-transparent sm:after:w-32"
      >
        <div className="animate-ticker-reverse flex w-max items-center gap-6 px-4 hover:[animation-play-state:paused]">
          {row2Companies.map((company, index) => (
            <div
              key={`${company.name}-row2-${index}`}
              className="flex h-20 w-52 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 transition-all duration-300 hover:scale-[1.03] hover:border-[#00a86b]/35 hover:shadow-sm shrink-0"
            >
              <PartnerLogo company={company} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 px-6">
        <button
          onClick={() => setModalOpen(true)}
          className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
        >
          <PhoneCall className="h-4 w-4" />
          Request Callback
        </button>
        <AppLink
          to={ROUTES.placements}
          className="btn-hero-outline inline-flex items-center gap-2 px-8 py-3 text-sm font-bold border-slate-300 hover:border-[#00a86b] text-slate-700 hover:text-[#1b4332]"
        >
          <Building2 className="h-4 w-4 text-[#00a86b]" />
          View All Companies
        </AppLink>
      </div>

      <EnrollModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse="General Enquiry / Career Callback"
      />
    </section>
  )
}
