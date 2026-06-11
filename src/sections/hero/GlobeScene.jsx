import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

const BLUE = '#58a6ff'
const PURPLE = '#a371f7'
const CYAN = '#56d4dd'
const SPACE = '#030508'
const GLOBE_X = 1.2
const CORE_RADIUS = 0.74
const GLOBE_RADIUS = 2.8

function createBrandTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')

  // Dark sphere body — only two opposite faces carry brand text (front + back).
  ctx.fillStyle = '#04070e'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const drawHighlightedLine = (text, x, y, size, color, glow, weight = 700, strokeScale = 0.04) => {
    ctx.font = `${weight} ${size}px Rubik, system-ui, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.globalAlpha = 1

    ctx.shadowColor = glow
    ctx.shadowBlur = 36
    ctx.fillStyle = color
    ctx.fillText(text, x, y)

    ctx.shadowBlur = 18
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = Math.max(1.5, size * strokeScale)
    ctx.strokeText(text, x, y)

    ctx.shadowBlur = 0
    ctx.fillStyle = color
    ctx.fillText(text, x, y)
  }

  const brandLines = [
    { text: 'NSR', y: 184, size: 124, color: '#38bdf8', glow: '#0ea5e9', weight: 500, strokeScale: 0.02 },
    { text: 'GenAI', y: 276, size: 74, color: '#f8fafc', glow: '#bae6fd' },
    { text: 'PROSKILLS ACADEMY', y: 342, size: 36, color: '#e9d5ff', glow: '#a78bfa' },
  ]

  const drawBrandAtCenter = (x) => {
    brandLines.forEach((line) => {
      drawHighlightedLine(
        line.text,
        x,
        line.y,
        line.size,
        line.color,
        line.glow,
        line.weight ?? 700,
        line.strokeScale ?? 0.04,
      )
    })
  }

  // Back face sits on the UV seam (u = 0 / 1) — split label so both halves meet at the seam.
  const drawBrandAcrossSeam = () => {
    brandLines.forEach((line) => {
      const weight = line.weight ?? 700
      const strokeScale = line.strokeScale ?? 0.04
      drawHighlightedLine(line.text, 0, line.y, line.size, line.color, line.glow, weight, strokeScale)
      drawHighlightedLine(
        line.text,
        canvas.width,
        line.y,
        line.size,
        line.color,
        line.glow,
        weight,
        strokeScale,
      )
    })
  }

  drawBrandAtCenter(canvas.width / 2)
  drawBrandAcrossSeam()

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

function BrandGlobeCore() {
  const core = useRef()
  const map = useMemo(() => createBrandTexture(), [])

  useFrame((_, delta) => {
    core.current.rotation.y += delta * 0.16
  })

  return (
    <group ref={core} position={[0, 0.14, 0]} rotation={[0.1, 0, 0]}>
      <pointLight color={BLUE} intensity={1.2} distance={2.2} decay={2} />
      <pointLight color={PURPLE} intensity={0.6} distance={2} decay={2} position={[0, -0.3, 0.4]} />
      <mesh>
        <sphereGeometry args={[CORE_RADIUS, 32, 32]} />
        <meshStandardMaterial
          map={map}
          emissiveMap={map}
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.65}
          metalness={0.08}
          roughness={0.35}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

function buildGlobePoints(count, radius) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * Math.random() - 1)
    const theta = Math.random() * Math.PI * 2
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }
  return positions
}

function buildGalaxyBand(count, spread) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const palette = [
    new THREE.Color('#ffffff'),
    new THREE.Color('#a8c7ff'),
    new THREE.Color('#c4b5fd'),
    new THREE.Color('#7dd3fc'),
    new THREE.Color('#f0abfc'),
  ]

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 6 + Math.random() * spread
    const arm = Math.sin(angle * 2.5 + radius * 0.15) * 1.8
    const y = (Math.random() - 0.5) * 2.2 + arm * 0.35

    positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = Math.sin(angle) * radius - 12 + (Math.random() - 0.5) * 4

    const c = palette[Math.floor(Math.random() * palette.length)]
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }

  return { positions, colors }
}

function buildDeepStars(count) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 20

    const tint = Math.random()
    const c = tint > 0.7 ? new THREE.Color('#b8d4ff') : tint > 0.4 ? new THREE.Color('#ffffff') : new THREE.Color('#d8b4fe')
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }

  return { positions, colors }
}

function GalaxyBand({ count, spread }) {
  const band = useRef()
  const { positions, colors } = useMemo(() => buildGalaxyBand(count, spread), [count, spread])

  useFrame((_, delta) => {
    band.current.rotation.y += delta * 0.004
  })

  return (
    <points ref={band}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function DeepStarField({ count }) {
  const field = useRef()
  const { positions, colors } = useMemo(() => buildDeepStars(count), [count])

  useFrame((_, delta) => {
    field.current.rotation.y += delta * 0.002
  })

  return (
    <points ref={field}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function NebulaCloud({ position, color, scale }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[scale, 12, 12]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.04}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function ParticleGlobe({ count }) {
  const globe = useRef()
  const ring = useRef()
  const positions = useMemo(() => buildGlobePoints(count, GLOBE_RADIUS), [count])

  useFrame((state, delta) => {
    globe.current.rotation.y += delta * 0.08
    globe.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    ring.current.rotation.z += delta * 0.12
  })

  return (
    <group position={[GLOBE_X, 0, 0]}>
      <BrandGlobeCore />
      <points ref={globe}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color={BLUE}
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 32, 32]} />
        <meshBasicMaterial color={PURPLE} wireframe transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.1, 0.015, 8, 64]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[2.2, 0.01, 6, 48]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function OrbitNodes({ count }) {
  const group = useRef()
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        angle: (i / count) * Math.PI * 2,
        radius: 4.5 + (i % 2) * 0.5,
        speed: 0.06 + (i % 3) * 0.02,
        y: (i / count - 0.5) * 1.5,
      })),
    [count],
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    group.current.children.forEach((child, i) => {
      const n = nodes[i]
      child.position.x = GLOBE_X + Math.cos(t * n.speed + n.angle) * n.radius
      child.position.z = Math.sin(t * n.speed + n.angle) * n.radius
      child.position.y = n.y + Math.sin(t + i) * 0.2
    })
  })

  return (
    <group ref={group}>
      {nodes.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial color={i % 2 === 0 ? BLUE : PURPLE} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function NeuralLines({ nodeCount = 10 }) {
  const lines = useRef()
  const count = nodeCount
  const { positions } = useMemo(() => {
    const pts = []
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 3.5 + Math.random() * 2
      pts.push(
        new THREE.Vector3(
          GLOBE_X + r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ),
      )
    }
    const pos = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.8) {
          pos.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }
    return { positions: new Float32Array(pos) }
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <lineSegments ref={lines} geometry={geometry}>
      <lineBasicMaterial color={PURPLE} transparent opacity={0.18} />
    </lineSegments>
  )
}

const SCENE_QUALITY = {
  medium: { globePoints: 200, galaxy: 500, deepStars: 250, orbit: 4, neural: 10, stars: 1200 },
  high: { globePoints: 280, galaxy: 750, deepStars: 350, orbit: 5, neural: 12, stars: 1600 },
}

export default function GlobeScene({ quality = 'medium' }) {
  const cfg = SCENE_QUALITY[quality] ?? SCENE_QUALITY.medium

  return (
    <>
      <fog attach="fog" args={[SPACE, 14, 55]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[-10, 4, -5]} color={PURPLE} intensity={1.1} distance={40} decay={2} />
      <pointLight position={[10, -2, -8]} color={BLUE} intensity={0.9} distance={40} decay={2} />

      <NebulaCloud position={[-8, 2, -22]} color="#6366f1" scale={14} />
      <NebulaCloud position={[9, -3, -20]} color="#0284c7" scale={12} />

      <Stars radius={100} depth={55} count={cfg.stars} factor={2.8} saturation={0.12} fade speed={0.1} />
      <DeepStarField count={cfg.deepStars} />
      <GalaxyBand count={cfg.galaxy} spread={22} />

      <ParticleGlobe count={cfg.globePoints} />
      <OrbitNodes count={cfg.orbit} />
      <NeuralLines nodeCount={cfg.neural} />
    </>
  )
}
