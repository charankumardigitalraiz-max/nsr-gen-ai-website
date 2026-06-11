export default function PartnerCard({ company }) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_2px_10px_rgb(15_23_42/0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_6px_20px_rgb(15_23_42/0.09)] ${company.color ?? ''}`}
    >
      <div className="flex h-[4.75rem] items-center justify-center bg-gradient-to-b from-slate-50/90 to-white px-3 py-2 sm:h-[5.25rem] sm:px-4">
        {company.logo ? (
          <img
            src={encodeURI(company.logo)}
            alt={`${company.name} logo`}
            className="max-h-[3rem] w-auto max-w-full object-contain object-center transition duration-300 group-hover:scale-[1.04] sm:max-h-[3.35rem]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="font-rubik text-lg font-bold tracking-tight text-[#A100FF] sm:text-xl">
            accenture
          </span>
        )}
      </div>
      <div className="border-t border-slate-100 px-2 py-1.5 text-center">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 transition group-hover:text-[#00a86b]">
          {company.name}
        </span>
      </div>
    </div>
  )
}
