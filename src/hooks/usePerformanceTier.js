import { useEffect, useState } from 'react'

export function getPerformanceTier() {
  if (typeof window === 'undefined') return 'medium'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low'

  const mobile = window.innerWidth < 768
  if (mobile) return 'medium'

  // Retina / HiDPI laptops (e.g. MacBook Pro) — heavy 3D + high DPR causes lag
  const dpr = window.devicePixelRatio || 1
  if (dpr > 1.5) return 'medium'

  const cores = navigator.hardwareConcurrency || 4
  if (cores > 6) return 'medium'

  return 'medium'
}

export default function usePerformanceTier() {
  const [tier, setTier] = useState('medium')

  useEffect(() => {
    const update = () => setTier(getPerformanceTier())
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return tier
}
