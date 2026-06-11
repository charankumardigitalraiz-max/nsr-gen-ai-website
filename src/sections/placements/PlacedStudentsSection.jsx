import { useMemo, useState } from 'react'
import { GraduationCap, Sparkles } from 'lucide-react'
import { COURSES, SUCCESSFUL_STUDENTS } from '../../constants/content'
import StudentPlacementCard from '../success-stories/StudentPlacementCard'

const TAB_SHORT_LABELS = {
  'data-analyst-with-genai': 'Data Analyst',
  'data-science-with-genai': 'Data Science',
  'business-analyst-with-genai': 'Business Analyst',
  'full-stack-ai-ml': 'Full Stack AI',
  'full-stack-python-with-ai': 'Python + AI',
}

export default function PlacedStudentsSection() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All courses', count: SUCCESSFUL_STUDENTS.length },
      ...COURSES.map((course) => ({
        id: course.slug,
        label: TAB_SHORT_LABELS[course.slug] || course.title,
        count: SUCCESSFUL_STUDENTS.filter((s) => s.courseSlug === course.slug).length,
      })),
    ],
    [],
  )

  const filteredStudents = useMemo(() => {
    if (activeTab === 'all') return SUCCESSFUL_STUDENTS
    return SUCCESSFUL_STUDENTS.filter((student) => student.courseSlug === activeTab)
  }, [activeTab])

  const activeCourse = COURSES.find((course) => course.slug === activeTab)

  return (
    <div className="mb-16 sm:mb-20">
      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <span className="section-tag mx-auto w-fit justify-center">
          <GraduationCap className="h-3.5 w-3.5" />
          Success Stories
        </span>
        <h2 className="section-title mx-auto">
          Our Placed <span className="highlight">Students</span>
        </h2>
        <p className="mx-auto mt-1 max-w-lg text-sm font-medium text-gh-muted sm:text-base">
          Meet academy graduates who cracked roles at leading tech companies with verified offers.
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <div
          role="tablist"
          aria-label="Filter placements by course"
          className="inline-flex max-w-full flex-nowrap items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-slate-50 p-1 shadow-[0_2px_10px_rgb(15_23_42/0.06)] [scrollbar-width:none] sm:gap-1.5 sm:p-1.5 [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold transition duration-200 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1b4332] via-[#00a86b] to-[#52b788] text-white shadow-[0_2px_8px_rgb(15_23_42/0.1)]'
                    : 'text-slate-600 hover:bg-white hover:text-[#1b4332]'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span
                    className={`rounded-full px-1.5 py-px text-[9px] font-bold leading-none sm:text-[10px] ${
                      isActive ? 'bg-white/25 text-white' : 'bg-white text-[#00a86b] ring-1 ring-slate-200/80'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {activeTab !== 'all' && activeCourse && (
        <p className="mx-auto mb-6 max-w-2xl text-center text-xs text-slate-500 sm:text-sm">
          Placements from{' '}
          <span className="font-semibold text-[#1b4332]">{activeCourse.title}</span> —{' '}
          {activeCourse.shortDesc}
        </p>
      )}

      {filteredStudents.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredStudents.map((student) => (
            <StudentPlacementCard key={student.name} student={student} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md rounded-2xl border border-dashed border-slate-200 bg-[#f8faf9] px-6 py-10 text-center">
          <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f8f4] text-[#00a86b]">
            <Sparkles className="h-5 w-5" />
          </span>
          <p className="mt-3 font-rubik text-sm font-bold text-[#1b4332]">Placements coming soon</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            New success stories from this program will be added after upcoming batches complete
            their interviews.
          </p>
        </div>
      )}
    </div>
  )
}
