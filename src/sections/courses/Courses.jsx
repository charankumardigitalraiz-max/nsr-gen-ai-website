import { useState } from 'react'
import { COURSE_DETAILS } from '../../constants/courseDetails'
import { courseDetailPath } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import { ArrowRight, Clock, GraduationCap, Sparkles } from 'lucide-react'
import EnrollModal from '../../components/ui/EnrollModal'

export default function Courses() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [enrollCourse, setEnrollCourse] = useState('')

  return (
    <section id="courses" className="relative overflow-hidden bg-gh-canvas">
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-tag">
            <Sparkles className="h-3.5 w-3.5" />
            Our Programs
          </span>
          <h2 className="section-title">
            GenAI Courses <span className="highlight">Offered</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm font-medium text-gh-muted">
            Industry-aligned programs designed to make you job-ready in the fastest-growing technology field.
          </p>
        </div>

        <div className="mx-auto grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COURSE_DETAILS.map((course) => (
            <article
              key={course.slug}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/25 hover:shadow-[0_4px_16px_rgb(15_23_42/0.06)]"
            >
              <AppLink to={courseDetailPath(course.slug)} className="block">
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"
                    aria-hidden
                  />
                  {course.logo && (
                    <span className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-br-xl border border-white/40 border-l-0 border-t-0 bg-white/95 p-2 shadow-md backdrop-blur-sm sm:h-14 sm:w-14 sm:p-2.5">
                      <img
                        src={course.logo}
                        alt={course.logoAlt || course.title}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                  )}
                </div>
              </AppLink>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#00a86b]/28 bg-[#f1f8f4] px-2.5 py-1 text-[10px] font-bold leading-none text-[#1b4332]">
                    <Clock className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    <span className="truncate">{course.duration}</span>
                  </span>
                  {/* <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#2d6a4f]">
                    <GraduationCap className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    <span className="truncate">{course.level}</span>
                  </span> */}
                </div>

                <AppLink to={courseDetailPath(course.slug)}>
                  <h3 className="mt-3 font-rubik text-sm font-extrabold leading-snug text-slate-900 transition duration-200 group-hover:text-[#00a86b]">
                    {course.title}
                  </h3>
                </AppLink>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gh-muted">
                  {course.shortDesc}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100">
                  <button
                    type="button"
                    className="btn-course-primary flex min-h-9 items-center justify-center rounded-lg px-2 text-[11px] font-semibold sm:text-xs"
                    onClick={() => {
                      setEnrollCourse(course.title)
                      setEnrollOpen(true)
                    }}
                  >
                    Enroll Now
                  </button>
                  <AppLink
                    to={courseDetailPath(course.slug)}
                    className="btn-course-outline flex min-h-9 items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold sm:text-xs"
                  >
                    Details
                    <ArrowRight className="h-3 w-3 shrink-0" />
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
        defaultCourse={enrollCourse}
      />
    </section>
  )
}
