import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, GripVertical, Play, Video, X } from 'lucide-react'
import { FLOATING_PROMO_VIDEOS } from '../../constants/content'

const DEFAULT_SIZE = { width: 200, height: 360 }
const NAV_OFFSET = 88

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function getDefaultPosition() {
  if (typeof window === 'undefined') {
    return { x: 16, y: 120 }
  }

  return {
    x: 16,
    y: clamp(window.innerHeight - DEFAULT_SIZE.height - NAV_OFFSET, 80, window.innerHeight - 160),
  }
}

export default function FloatingVideoWidget() {
  const videos = FLOATING_PROMO_VIDEOS
  const [expanded, setExpanded] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadError, setLoadError] = useState(false)
  const [position, setPosition] = useState(getDefaultPosition)
  const [dragging, setDragging] = useState(false)

  const videoRef = useRef(null)
  const widgetRef = useRef(null)
  const dragState = useRef(null)
  const didDragRef = useRef(false)

  const active = videos[activeIndex]
  const count = videos.length

  const goPrev = useCallback(() => {
    setLoadError(false)
    setActiveIndex((current) => (current - 1 + count) % count)
  }, [count])

  const goNext = useCallback(() => {
    setLoadError(false)
    setActiveIndex((current) => (current + 1) % count)
  }, [count])

  const tryPlay = useCallback(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  const clampPosition = useCallback(
    (x, y, minimized = false) => {
      const el = widgetRef.current
      const width = el?.offsetWidth ?? DEFAULT_SIZE.width
      const height = el?.offsetHeight ?? (minimized ? 56 : DEFAULT_SIZE.height)

      return {
        x: minimized ? 0 : clamp(x, 8, window.innerWidth - width - 8),
        y: clamp(y, 72, window.innerHeight - height - 8),
      }
    },
    [],
  )

  const handleClose = useCallback(() => {
    videoRef.current?.pause()
    setPosition((current) => clampPosition(0, current.y, true))
    setExpanded(false)
  }, [clampPosition])

  const handlePointerDown = useCallback(
    (event) => {
      if (event.button !== 0) return

      const target = event.currentTarget
      target.setPointerCapture(event.pointerId)

      didDragRef.current = false
      dragState.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: position.x,
        originY: position.y,
      }
      setDragging(true)
      event.preventDefault()
    },
    [position.x, position.y],
  )

  const handlePointerMove = useCallback(
    (event) => {
      if (!dragState.current || dragState.current.pointerId !== event.pointerId) return

      const dx = event.clientX - dragState.current.startX
      const dy = event.clientY - dragState.current.startY
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        didDragRef.current = true
      }
      setPosition(
        clampPosition(
          dragState.current.originX + dx,
          dragState.current.originY + dy,
          !expanded,
        ),
      )
    },
    [clampPosition, expanded],
  )

  const handlePointerUp = useCallback((event) => {
    if (!dragState.current || dragState.current.pointerId !== event.pointerId) return

    dragState.current = null
    setDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }, [])

  useEffect(() => {
    setLoadError(false)
    const el = videoRef.current
    if (!el || !expanded) return

    el.load()
    tryPlay()
  }, [activeIndex, expanded, tryPlay])

  useEffect(() => {
    const onResize = () => {
      setPosition((current) => clampPosition(current.x, current.y, !expanded))
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [clampPosition, expanded])

  if (!active) return null

  const widgetStyle = expanded
    ? { left: `${position.x}px`, top: `${position.y}px` }
    : { top: `${position.y}px` }

  if (!expanded) {
    return (
      <button
        ref={widgetRef}
        type="button"
        className={`floating-video-tab ${dragging ? 'floating-video-tab--dragging' : ''}`}
        style={widgetStyle}
        onClick={() => {
          if (didDragRef.current) {
            didDragRef.current = false
            return
          }
          setExpanded(true)
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-label={`Open video: ${active.label || active.title}`}
        title="Drag to move · Click to open"
      >
        <span className="floating-video-tab__pulse" aria-hidden />
        <Video className="h-5 w-5 shrink-0" strokeWidth={2.25} />
        <Play className="floating-video-tab__play h-3 w-3 shrink-0" aria-hidden />
      </button>
    )
  }

  return (
    <aside
      ref={widgetRef}
      className={`floating-video-card ${dragging ? 'floating-video-card--dragging' : ''}`}
      style={widgetStyle}
      aria-label="Promo video player"
    >
      <div className="floating-video-card__head">
        <div
          className="floating-video-card__drag"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <GripVertical className="floating-video-card__grip h-4 w-4 shrink-0 text-[#52b788]" aria-hidden />
          <p className="floating-video-card__title">{active.title}</p>
        </div>
        <button
          type="button"
          className="floating-video-card__close"
          onClick={handleClose}
          aria-label="Minimize video to side icon"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="floating-video-card__media">
        {loadError ? (
          <div className="floating-video-card__error">
            <p className="text-xs font-semibold text-white">Video could not load.</p>
            <button
              type="button"
              className="mt-2 text-xs font-bold text-[#52b788] underline"
              onClick={() => {
                setLoadError(false)
                videoRef.current?.load()
                tryPlay()
              }}
            >
              Retry
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            key={active.src}
            className="floating-video-card__video"
            src={active.src}
            controls
            playsInline
            muted
            autoPlay
            preload="auto"
            onCanPlay={tryPlay}
            onLoadedData={tryPlay}
            onError={() => setLoadError(true)}
          />
        )}
      </div>

      {count > 1 ? (
        <div className="floating-video-card__nav">
          <button
            type="button"
            className="floating-video-card__nav-btn"
            onClick={goPrev}
            aria-label="Previous video"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="floating-video-card__counter">
            {activeIndex + 1} / {count}
          </span>
          <button
            type="button"
            className="floating-video-card__nav-btn"
            onClick={goNext}
            aria-label="Next video"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </aside>
  )
}
