import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import StudentAvatar from '../../components/ui/StudentAvatar'

export default function StudentPlacementCard({ student }) {
  const tags = student.tags || ['GenAI', 'Python']
  const quote = student.quote || ''

  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#00a86b]/30 hover:shadow-md">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <StudentAvatar student={student} size="lg" />

          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-extrabold uppercase text-emerald-600">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified Offer
          </span>
        </div>

        <h4 className="text-base font-extrabold tracking-tight text-slate-800">{student.name}</h4>
        <p className="mt-0.5 text-xs font-extrabold uppercase tracking-wide text-gh-purple">
          {student.role}
        </p>

        {quote ? (
          <p className="mt-3 text-xs font-medium italic leading-relaxed text-slate-500">
            &ldquo;{quote}&rdquo;
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[9px] font-bold tracking-wide text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Hired By
          </span>
          <strong className="mt-0.5 block text-sm font-black tracking-tight text-slate-700">
            {student.company}
          </strong>
        </div>

        <div className="text-right">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Package
          </span>
          <span className="mt-0.5 inline-flex items-center gap-0.5 text-sm font-black tracking-tight text-gh-blue">
            {student.package}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
