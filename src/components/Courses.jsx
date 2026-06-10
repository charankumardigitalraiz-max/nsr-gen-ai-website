import { useState } from 'react'
import { COURSES } from '../constants/content'
import { Sparkles, ArrowRight } from 'lucide-react'
import EnrollModal from './EnrollModal'

export default function Courses() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [enrollCourse, setEnrollCourse] = useState('')
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardEl.style.setProperty('--mouse-x', `${x}px`)
    cardEl.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="courses" className="relative overflow-hidden bg-gh-canvas">
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[350px] w-[350px] rounded-full bg-gh-blue/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gh-purple/15 bg-gh-purple/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gh-purple">
            <Sparkles className="h-3.5 w-3.5" />
            Our Programs
          </span>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">
            GenAI Courses{' '}
            <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">
              Offered
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-gh-muted">
            Industry-aligned programs designed to make you job-ready in the fastest-growing technology field.
          </p>
        </div>

        <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {COURSES.map((course) => {
            let hoverBorder = 'hover:border-gh-blue/40'
            if (course.title.includes('Data Science')) hoverBorder = 'hover:border-gh-purple/40'
            if (course.title.includes('Python')) hoverBorder = 'hover:border-cyber-pink/40'
            if (course.title.includes('Business Analyst')) hoverBorder = 'hover:border-gh-green/40'

            return (
              <div
                key={course.slug}
                className={`cyber-card group flex min-h-[330px] flex-col justify-between p-4 ${hoverBorder}`}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div>
                  <div className="relative mb-4 flex h-28 w-full items-center justify-center overflow-hidden rounded-lg border border-slate-100/60 bg-slate-50">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-rubik text-sm font-bold leading-snug tracking-tight text-slate-800 transition-colors duration-200 group-hover:text-gh-blue">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-gh-muted">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="course-card-actions">
                  <button
                    type="button"
                    className="btn-course-primary"
                    onClick={(e) => {
                      e.stopPropagation()
                      setEnrollCourse(course.title)
                      setEnrollOpen(true)
                    }}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                  </button>
                  <a
                    href={`#/courses/${course.slug}`}
                    className="btn-course-outline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Details</span>
                  </a>
                </div>
              </div>
            )
          })}
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
