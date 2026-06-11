import { Sparkles } from 'lucide-react'
import { HIRING_PARTNER_BRANDS } from '../../constants/content'
import PartnerLogo from '../../components/ui/PartnerLogo'

export default function HiringPartners() {
  const tripledCompanies = [...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS, ...HIRING_PARTNER_BRANDS]

  return (
    <div className="relative overflow-hidden border-t border-b border-slate-100/80 bg-gh-canvas pt-10 pb-5">
      <div className="relative z-20 mx-auto mb-12 max-w-7xl px-6 text-center">
        <span className="section-tag">
          <Sparkles className="h-3.5 w-3.5" />
          Corporate Network
        </span>
        <h3 className="section-title mx-auto">
          Where Our Graduates <span className="highlight">Get Placed</span>
        </h3>
        {/* <div className="section-divider" /> */}
        <p className="mx-auto max-w-lg text-sm font-medium text-gh-muted">
          Our placement network features leading technology consultancies and MNCs.
        </p>
      </div>

      <div
        className="relative z-10 w-full overflow-hidden py-4
        before:absolute before:top-0 before:left-0 before:z-20 before:h-full before:w-20 before:bg-gradient-to-r before:from-gh-canvas before:to-transparent sm:before:w-40
        after:absolute after:top-0 after:right-0 after:z-20 after:h-full after:w-20 after:bg-gradient-to-l after:from-gh-canvas after:to-transparent sm:after:w-40"
      >
        <div className="animate-ticker flex w-max gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
          {tripledCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className={`inline-flex h-25 w-auto shrink-0 items-center justify-center rounded-lg border border-slate-200/50 bg-white/70 px-6 text-slate-400 shadow-md backdrop-blur-md transition-all duration-300 sm:px-8 ${company.color} hover:-translate-y-0.5 hover:scale-[1.02]`}
              aria-label={company.name}
            >
              <PartnerLogo company={company} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
