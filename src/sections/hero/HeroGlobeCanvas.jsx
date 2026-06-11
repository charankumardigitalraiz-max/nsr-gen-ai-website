import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import GlobeScene from './GlobeScene'

function usePageVisible() {
  const [visible, setVisible] = useState(
    () => typeof document !== 'undefined' && !document.hidden,
  )

  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])

  return visible
}

export default function HeroGlobeCanvas({ quality = 'medium', active = true }) {
  const pageVisible = usePageVisible()
  const running = pageVisible && active
  const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.25)

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [-0.7, 0, 10], fov: 50 }}
      dpr={[1, dpr]}
      frameloop={running ? 'always' : 'never'}
      performance={{ min: 0.55, debounce: 250 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <GlobeScene quality={quality} />
    </Canvas>
  )
}
