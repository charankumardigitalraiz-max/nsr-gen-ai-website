import { ArrowUpRight, Trophy } from 'lucide-react'
import { SUCCESSFUL_STUDENTS } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import StudentPlacementCard from './StudentPlacementCard'

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-gh-canvas">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-tag">
            <Trophy className="h-3.5 w-3.5" />
            Verified Careers
          </span>
          <h2 className="section-title">
            Successful Placement <span className="highlight">Records</span>
          </h2>
          <p className="mx-auto max-w-lg text-sm font-medium text-gh-muted">
            Learn from graduates who transitioned into stable engineering and analytics positions at
            verified MNC companies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SUCCESSFUL_STUDENTS.map((student) => (
            <StudentPlacementCard key={student.name} student={student} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <AppLink
            to={ROUTES.placements}
            className="btn-hero inline-flex items-center gap-2 px-8 py-3 text-xs font-bold"
          >
            <span>View all placement records</span>
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
        </div>
      </div>
      
    </section>
  )
}
