import { HIGHLIGHTS } from '../constants/content'

export default function HighlightsTicker() {
  return (
    <div className="border-y border-slate-950 bg-slate-900 py-2.5 overflow-hidden shadow-inner">
      <div className="animate-ticker flex gap-16 whitespace-nowrap w-max">
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-100">
            <span className="text-gh-purple animate-pulse">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}

