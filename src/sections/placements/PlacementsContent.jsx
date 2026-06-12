import { PHONE, WHATSAPP, HIRING_PARTNER_BRANDS } from '../../constants/content'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import PartnerCard from '../../components/ui/PartnerCard'
import PlacedStudentsSection from './PlacedStudentsSection'
import { Trophy, Calendar, MapPin, Phone, Handshake } from 'lucide-react'

export default function PlacementsContent() {
  return (
    <>
      <div className="mb-16 sm:mb-20">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="section-tag w-fit">
              <Handshake className="h-3.5 w-3.5" />
              Hiring Partners
            </span>
            <h2 className="section-title text-left">
              Companies that <span className="highlight">hire our grads</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gh-muted lg:text-right">
            Leading IT services and consulting firms that regularly onboard NSR graduates into tech,
            data, and analyst roles.
          </p>
        </div>

        <div className="overflow-visible rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_4px_20px_rgb(15_23_42/0.07)] sm:p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {HIRING_PARTNER_BRANDS.map((company) => (
              <PartnerCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      </div>

      <PlacedStudentsSection />

      {/* <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-[0_4px_20px_rgb(15_23_42/0.07)] sm:px-10 sm:py-10">
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl text-left">

            <h2 className="font-rubik text-2xl font-bold leading-snug tracking-tight text-slate-800 sm:text-3xl">
              Ready to Accelerate Your <span className="highlight">Career?</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              Get batch dates, fee structure, and placement support — speak with our admissions team
              today.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs text-slate-600">
                <Calendar className="h-3.5 w-3.5 text-[#00a86b]" strokeWidth={2} />
                Next batch <span className="font-semibold text-slate-800">20th June</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs text-slate-600">
                <MapPin className="h-3.5 w-3.5 text-gh-purple" strokeWidth={2} />
                <span className="font-semibold text-slate-800">KPHB, Hyderabad</span>
              </span>
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto lg:items-end">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-hero inline-flex w-full items-center justify-center gap-2 px-7 py-2.5 text-sm font-semibold sm:w-auto lg:min-w-[220px]"
            >
              <WhatsAppIcon />
              Register via WhatsApp
            </a>
            <a
              href={`tel:+91${PHONE}`}
              className="btn-hero-outline inline-flex w-full items-center justify-center gap-2 px-7 py-2.5 text-sm font-semibold sm:w-auto lg:min-w-[220px]"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call +91 {PHONE}
            </a>
          </div>
        </div>
      </div> */}
    </>
  )
}
