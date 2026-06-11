import { Trophy } from 'lucide-react'
import { SUCCESSFUL_STUDENTS } from '../../constants/content'
import StudentAvatar from '../../components/ui/StudentAvatar'

const IMPACT_STATS = [
  { value: '500+', label: 'Learners trained' },
  { value: '7–15 LPA', label: 'Package range' },
  { value: '100%', label: 'Placement support' },
  { value: '50+', label: 'Hiring partners' },
]

function SpotlightStudentCard({ student }) {
  return (
    <article className="inline-flex w-[228px] shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-[0_2px_12px_rgb(15_23_42/0.08)] sm:w-[248px]">
      <StudentAvatar student={student} size="sm" />
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-rubik text-xs font-bold text-slate-900">{student.name}</h3>
        <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-[#00a86b]">
          {student.role}
        </p>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="truncate rounded-md bg-[#f1f8f4] px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#00a86b] ring-1 ring-[#00a86b]/20">
            {student.company}
          </span>
          <span className="shrink-0 text-[11px] font-extrabold text-[#1b4332]">{student.package}</span>
        </div>
      </div>
    </article>
  )
}

export default function AboutSuccessSpotlight() {
  const scrollingStudents = [...SUCCESSFUL_STUDENTS, ...SUCCESSFUL_STUDENTS]

  return (
    <section className="mb-5">
      <div className="relative overflow-hidden rounded-2xl border border-[#2d6a4f] bg-[#1b4332] p-6 shadow-[0_8px_32px_rgb(15_23_42/0.18)] sm:p-8 lg:p-10">

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#52b788]/40 bg-[#00a86b]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d1fae5]">
            <Trophy className="h-3.5 w-3.5" />
            Our impact
          </span>
          <h2 className="mt-3 font-rubik text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Success stories that <span className="text-[#a7f3d0]">inspire</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
            From first line of code to verified MNC offers — our graduates prove what structured
            GenAI training and mentor support can achieve.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {IMPACT_STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-[#2d6a4f] px-3 py-3 text-center shadow-[0_2px_10px_rgb(15_23_42/0.15)]"
              >
                <p className="font-rubik text-lg font-extrabold text-white sm:text-xl">{value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#a7f3d0]/90 sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden py-1">
            <div className="animate-ticker flex w-max items-center gap-3 hover:[animation-play-state:paused]">
              {scrollingStudents.map((student, index) => (
                <SpotlightStudentCard key={`${student.name}-${index}`} student={student} />
              ))}
            </div>
          </div>

          {/* <div className="mt-8 text-center sm:text-left">
            <AppLink
              to={ROUTES.placements}
              className="btn-hero inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold"
            >
              View all placement records
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
          </div> */}
        </div>
      </div>
    </section>
  )
}
