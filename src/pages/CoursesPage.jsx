import { useState } from 'react'
import { ArrowLeft, BookOpen, Clock, MapPin } from 'lucide-react'
import { COURSE_DETAILS } from '../constants/courseDetails'
import { courseDetailPath, ROUTES } from '../constants/routes'
import AppLink from '../components/AppLink'
import EnrollModal from '../components/ui/EnrollModal'

export default function CoursesPage() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')

  const handleEnrollClick = (courseTitle) => {
    setSelectedCourse(courseTitle)
    setEnrollOpen(true)
  }

  return (
    <section id="courses-page" className="page-content-top-space relative overflow-hidden bg-slate-50 pb-16">
      <div className="pointer-events-none absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-[#00a86b]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-[#52b788]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Back link */}
        <AppLink
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </AppLink>

        {/* Section Header */}
        <div className="mx-auto mb-10 mt-4 max-w-2xl text-center">
          <span className="section-tag">
            <BookOpen className="h-3.5 w-3.5" />
            Academy Courses
          </span>
          <h1 className="section-title">
            Our <span className="highlight">Training Tracks</span>
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Classroom batches at KPHB, Hyderabad — live coding, labs, and placement support.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {COURSE_DETAILS.map((course) => (
            <article
              key={course.slug}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-[#00a86b]/30 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Duration chip on image */}
                <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-white">
                  <Clock className="h-3 w-3" />
                  {course.duration}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-3.5">
                {/* Top row: level pill (left) + logo (right) */}
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="self-start rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#00a86b]">
                    {course.level}
                  </span>
                  {course.logo && (
                    <span className="inline-flex items-center rounded-md bg-[#f1f8f4] px-2 py-1 ring-1 ring-[#00a86b]/15 shrink-0">
                      <img src={course.logo} alt="" className="h-7 max-w-[64px] object-contain" />
                    </span>
                  )}
                </div>

                <h3 className="font-rubik text-base font-extrabold text-[#1b4332] leading-snug">
                  {course.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 font-medium leading-relaxed line-clamp-2">
                  {course.tagline || course.shortDesc}
                </p>

                {/* Mode */}
                <div className="mt-2 flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {course.mode || 'KPHB, Hyderabad'}
                </div>

                {/* Spacer + CTA */}
                <div className="mt-auto pt-3 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleEnrollClick(course.title)}
                    className="inline-flex items-center justify-center rounded-lg px-3 py-1 text-[11px] font-bold text-white cursor-pointer transition-all active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(to bottom right, #1b4332, #00a86b, #2d6a4f)',
                      boxShadow: 'inset 0 1px 0 rgb(255 255 255 / 0.22), 0 2px 8px rgb(0 168 107 / 0.28)',
                    }}
                  >
                    Enroll Now
                  </button>
                  <AppLink
                    to={courseDetailPath(course.slug)}
                    className="text-[11px] font-semibold text-[#00a86b] hover:text-[#1b4332] transition-colors underline underline-offset-2"
                  >
                    View syllabus →
                  </AppLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <EnrollModal
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        defaultCourse={selectedCourse}
      />
    </section>
  )
}


