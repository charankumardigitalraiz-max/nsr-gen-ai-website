import { Canvas } from '@react-three/fiber'
import GlobeScene from './GlobeScene'

export default function HeroGlobeCanvas({ quality = 'medium' }) {
  const isHigh = quality === 'high'

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [-0.7, 0, 10], fov: 50 }}
      dpr={isHigh ? [1, 1.35] : 1}
      gl={{ antialias: isHigh, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <GlobeScene quality={quality} />
    </Canvas>
  )
}
