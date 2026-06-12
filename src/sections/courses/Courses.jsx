import { useCallback, useEffect, useRef, useState } from 'react'
import { COURSE_DETAILS } from '../../constants/courseDetails'
import { courseDetailPath } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import { ChevronLeft, ChevronRight, Clock, Sparkles } from 'lucide-react'
import BootSectionHeader from '../../components/ui/BootSectionHeader'
import EnrollModal from '../../components/ui/EnrollModal'

const AUTO_SCROLL_MS = 4000
const RESUME_AUTO_MS = 6000

function CourseSpotlightCard({ course, onEnroll }) {
  const detailPath = courseDetailPath(course.slug)

  return (
    <article data-course-card className="courses-scroll-item course-spotlight-card group">
      <img
        src={course.image}
        alt=""
        className="course-spotlight-card__bg"
        loading="lazy"
        aria-hidden
      />
      <div className="course-spotlight-card__shade" aria-hidden />

      <AppLink
        to={detailPath}
        className="course-spotlight-card__hit"
        aria-label={`View ${course.title} course details`}
      />

      <div className="course-spotlight-card__top pointer-events-none">
        {course.logo ? (
          <span className="course-spotlight-card__logo">
            <img
              src={course.logo}
              alt={course.logoAlt || course.title}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </span>
        ) : (
          <span />
        )}
        <span className="course-spotlight-card__duration">
          <Clock className="h-3 w-3 shrink-0 text-[#52b788]" aria-hidden />
          {course.duration}
        </span>
      </div>

      <div className="course-spotlight-card__foot pointer-events-none">
        <p className="course-spotlight-card__level">{course.level}</p>
        <h3 className="course-spotlight-card__title">{course.title}</h3>
        <p className="course-spotlight-card__desc">{course.shortDesc}</p>

        <div className="course-spotlight-card__actions pointer-events-auto">
          <button
            type="button"
            className="course-spotlight-card__enroll"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onEnroll(course.title)
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Courses({ standalone = false, embedded = false }) {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [enrollCourse, setEnrollCourse] = useState('')
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const sectionClass = standalone
    ? 'page-content-top courses-section-bg pb-14'
    : embedded
      ? 'boot-section courses-section-bg'
      : 'courses-section-bg'

  const loopedCourses = [...COURSE_DETAILS, ...COURSE_DETAILS]

  const getScrollStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 320
    const card = track.querySelector('[data-course-card]')
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 12 : 12
    return (card?.offsetWidth ?? 300) + gap
  }, [])

  const pauseAutoScroll = useCallback((ms = RESUME_AUTO_MS) => {
    pausedRef.current = true
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false
    }, ms)
  }, [])

  const scrollByStep = useCallback(
    (direction) => {
      const track = trackRef.current
      if (!track) return

      pauseAutoScroll()

      const step = getScrollStep()
      const halfWidth = track.scrollWidth / 2

      if (direction > 0 && track.scrollLeft >= halfWidth - step) {
        track.scrollTo({ left: track.scrollLeft - halfWidth + step, behavior: 'auto' })
        requestAnimationFrame(() => {
          track.scrollBy({ left: step, behavior: 'smooth' })
        })
      } else if (direction < 0 && track.scrollLeft <= step) {
        track.scrollTo({ left: halfWidth + track.scrollLeft - step, behavior: 'auto' })
        requestAnimationFrame(() => {
          track.scrollBy({ left: -step, behavior: 'smooth' })
        })
      } else {
        track.scrollBy({ left: direction * step, behavior: 'smooth' })
      }
    },
    [getScrollStep, pauseAutoScroll],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = () => {
      if (pausedRef.current) return

      const step = getScrollStep()
      const halfWidth = track.scrollWidth / 2

      if (track.scrollLeft >= halfWidth - 2) {
        track.scrollTo({ left: 0, behavior: 'auto' })
        requestAnimationFrame(() => {
          track.scrollBy({ left: step, behavior: 'smooth' })
        })
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' })
      }
    }

    const interval = window.setInterval(tick, AUTO_SCROLL_MS)
    return () => window.clearInterval(interval)
  }, [getScrollStep])

  useEffect(
    () => () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
    },
    [],
  )

  const handleEnroll = (title) => {
    setEnrollCourse(title)
    setEnrollOpen(true)
  }

  return (
    <section id="courses"
    style={{
      backgroundImage:'url(/ai_course_background_minimalist.png)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
    }}
     className={`relative overflow-hidden ${sectionClass}`}>
      <div
        className="pointer-events-none absolute top-1/4 -left-20 h-[320px] w-[320px] rounded-full bg-[#00a86b]/18 blur-3xl lg:blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#52b788]/12 blur-3xl lg:blur-[72px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[min(90%,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00a86b]/10 blur-3xl"
        aria-hidden
      />

      <div className="courses-section-inner">
        <BootSectionHeader
          className="boot-section-header-gap"
          theme="dark"
          icon={Sparkles}
          eyebrow="Our Programs"
          titleBefore="Explore AI "
          highlight="Courses"
          description="Job-ready GenAI, Data Science & Full Stack tracks — the exact skills Hyderabad hiring partners look for in 2026."
        />

        <div
          className="courses-scroll-wrap boot-section-content-gap"
          onMouseEnter={() => {
            pausedRef.current = true
          }}
          onMouseLeave={() => {
            pausedRef.current = false
          }}
        >
          <button
            type="button"
            aria-label="Previous course"
            className="courses-scroll-btn courses-scroll-btn--prev"
            onClick={() => scrollByStep(-1)}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>

          <div
            ref={trackRef}
            className="courses-scroll-track"
            role="region"
            aria-label="Course programs"
            tabIndex={0}
            onTouchStart={() => pauseAutoScroll()}
          >
            {loopedCourses.map((course, index) => (
              <CourseSpotlightCard
                key={`${course.slug}-${index}`}
                course={course}
                onEnroll={handleEnroll}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next course"
            className="courses-scroll-btn courses-scroll-btn--next"
            onClick={() => scrollByStep(1)}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
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
