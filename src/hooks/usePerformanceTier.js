import { useEffect, useState } from 'react'

export function getPerformanceTier() {
  if (typeof window === 'undefined') return 'medium'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low'

  const mobile = window.innerWidth < 768
  const cores = navigator.hardwareConcurrency || 4
  if (mobile || cores <= 4) return 'medium'
  return 'high'
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
