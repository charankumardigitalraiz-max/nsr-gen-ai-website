import { Quote } from 'lucide-react'
import { RECRUITER_TESTIMONIALS } from '../../constants/content'

export default function IndustryTestimonials() {
  const doubledTestimonials = [...RECRUITER_TESTIMONIALS, ...RECRUITER_TESTIMONIALS, ...RECRUITER_TESTIMONIALS]

  return (
    <section className="bg-slate-50 pt-15 sm:pt-20 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
            What the <span className="highlight">Industry Says</span> About Our Talent
          </h2>
          <p className="mt-4 text-slate-600 font-medium">
            From CTOs to HR leaders—hear how our full stack learners are making an impact in the real world.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Ticker Track */}
      <div className="relative w-full overflow-hidden py-4
        before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-slate-50 before:to-transparent sm:before:w-32
        after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-slate-50 after:to-transparent sm:after:w-32"
      >
        <div className="animate-ticker flex w-max items-stretch gap-6 px-4 hover:[animation-play-state:paused]">
          {doubledTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#00a86b]/30 hover:shadow-md w-[260px] sm:w-[300px] shrink-0"
            >
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-[#00a86b]/10 rotate-180" />
                <p className="relative z-10 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-[#00a86b]/20"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.name}</h4>
                  <p className="text-[10px] font-semibold text-[#00a86b]">{t.role}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
