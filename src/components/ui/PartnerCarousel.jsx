import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PartnerCard from './PartnerCard'

const AUTO_SCROLL_MS = 3200
const RESUME_AUTO_MS = 6000

export default function PartnerCarousel({ companies }) {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const [paused, setPaused] = useState(false)

  const getScrollStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 152
    const card = track.querySelector('[data-partner-card]')
    const gap = 12
    return (card?.offsetWidth ?? 140) + gap
  }, [])

  const scrollByStep = useCallback(
    (direction) => {
      const track = trackRef.current
      if (!track) return

      pausedRef.current = true
      setPaused(true)

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

      window.setTimeout(() => {
        pausedRef.current = false
        setPaused(false)
      }, RESUME_AUTO_MS)
    },
    [getScrollStep],
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
  }, [getScrollStep, paused])

  const looped = [...companies, ...companies]

  return (
    <div className="relative px-10 sm:px-12">
      <button
        type="button"
        aria-label="Previous partners"
        onClick={() => scrollByStep(-1)}
        className="absolute left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_2px_8px_rgb(15_23_42/0.08)] transition hover:border-slate-300 hover:text-[#1b4332] sm:left-2 sm:h-9 sm:w-9"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto scroll-smooth py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {looped.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            data-partner-card
            className="w-[7.5rem] shrink-0 sm:w-[8.75rem]"
          >
            <PartnerCard company={company} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next partners"
        onClick={() => scrollByStep(1)}
        className="absolute right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_2px_8px_rgb(15_23_42/0.08)] transition hover:border-slate-300 hover:text-[#1b4332] sm:right-2 sm:h-9 sm:w-9"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
