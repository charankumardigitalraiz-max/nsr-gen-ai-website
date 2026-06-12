import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import StudentAvatar from '../../components/ui/StudentAvatar'

export default function StudentPlacementCard({ student, variant = 'default' }) {
  const tags = student.tags || ['GenAI', 'Python']
  const quote = student.quote || ''
  const isBoot = variant === 'boot'

  return (
    <article className={isBoot ? 'boot-testimonial-card' : 'flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition duration-300 hover:border-[#00a86b]/30 hover:shadow-md w-full'}>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <StudentAvatar student={student} size="md" />

          <span className="inline-flex items-center gap-1 rounded-full border border-[#00a86b]/20 bg-[#f1f8f4] px-2.5 py-0.5 text-[9px] sm:text-xs font-black uppercase text-[#00a86b]">
            <ShieldCheck className="h-3 w-3" />
            Verified
          </span>
        </div>

        <h4 className="font-rubik text-base font-extrabold tracking-tight text-[#1b4332]">{student.name}</h4>
        <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-[#00a86b]">
          {student.role}
        </p>

        {quote ? (
          <p className="mt-2 text-xs sm:text-sm font-normal italic leading-relaxed text-slate-500">
            &ldquo;{quote}&rdquo;
          </p>
        ) : null}

        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[#f1f8f4] border border-slate-100 px-1.5 py-0.5 text-[10px] sm:text-xs font-semibold text-[#2d6a4f]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Hired By
          </span>
          <strong className="mt-0.5 block text-sm font-black tracking-tight text-[#1b4332]">
            {student.company}
          </strong>
        </div>

        <div className="text-right">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Package
          </span>
          <span className="mt-0.5 inline-flex items-center gap-0.5 text-sm font-black tracking-tight text-[#00a86b]">
            {student.package}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </article>
  )
}
