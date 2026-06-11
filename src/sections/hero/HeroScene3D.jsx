import { lazy, Suspense, useEffect, useState } from 'react'
import usePerformanceTier from '../../hooks/usePerformanceTier'

const HeroGlobeCanvas = lazy(() => import('./HeroGlobeCanvas'))

export default function HeroScene3D() {
  const tier = usePerformanceTier()
  const [mounted, setMounted] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return undefined

    const hero = document.querySelector('.hero-fit')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [mounted])

  if (!mounted || tier === 'low') return null

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-full lg:left-[28%] lg:w-auto">
      <Suspense fallback={null}>
        <HeroGlobeCanvas quality={tier} active={heroVisible} />
      </Suspense>
    </div>
  )
}
