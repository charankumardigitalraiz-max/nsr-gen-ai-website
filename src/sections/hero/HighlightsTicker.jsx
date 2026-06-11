import { HIGHLIGHTS } from '../../constants/content'

export default function HighlightsTicker() {
  return (
    <div className="overflow-hidden border-y border-slate-950 bg-slate-900 py-2.5 shadow-inner">
      <div className="animate-ticker flex w-max gap-16 whitespace-nowrap">
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-100">
            <span className="text-[#52b788] animate-pulse">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}

