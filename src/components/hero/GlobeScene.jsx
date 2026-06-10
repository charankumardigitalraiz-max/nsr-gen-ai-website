import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

const BLUE = '#58a6ff'
const PURPLE = '#a371f7'
const CYAN = '#56d4dd'
const SPACE = '#030508'
const GLOBE_X = 1.2

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
  const cloud = useRef()

  useFrame((state) => {
    cloud.current.material.opacity = 0.035 + Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.012
  })

  return (
    <mesh ref={cloud} position={position}>
      <sphereGeometry args={[scale, 24, 24]} />
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
  const positions = useMemo(() => buildGlobePoints(count, 2.8), [count])

  useFrame((state, delta) => {
    globe.current.rotation.y += delta * 0.08
    globe.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    ring.current.rotation.z += delta * 0.12
  })

  return (
    <group position={[GLOBE_X, 0, 0]}>
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
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial color={PURPLE} wireframe transparent opacity={0.08} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.1, 0.015, 8, 100]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[2.2, 0.01, 6, 80]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function AICore() {
  const core = useRef()
  const inner = useRef()
  const ring = useRef()

  useFrame((state, delta) => {
    core.current.rotation.x += delta * 0.1
    core.current.rotation.y += delta * 0.15
    inner.current.rotation.x -= delta * 0.08
    inner.current.rotation.y -= delta * 0.12
    ring.current.rotation.z += delta * 0.2
    core.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group position={[GLOBE_X, 0, 0]}>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.012, 8, 64]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.5} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.65, 1]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.45} />
      </mesh>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshBasicMaterial color={BLUE} wireframe transparent opacity={0.65} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.85} />
      </mesh>
      <pointLight color={PURPLE} intensity={2.5} distance={10} decay={2} />
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

function NeuralLines({ quality }) {
  const lines = useRef()
  const count = quality === 'high' ? 18 : 12
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

  useFrame((state) => {
    if (lines.current) {
      lines.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime) * 0.05
    }
  })

  return (
    <lineSegments ref={lines} geometry={geometry}>
      <lineBasicMaterial color={PURPLE} transparent opacity={0.2} />
    </lineSegments>
  )
}

export default function GlobeScene({ quality = 'medium' }) {
  const isHigh = quality === 'high'
  const globePoints = isHigh ? 500 : 280
  const galaxyCount = isHigh ? 2200 : 1200
  const deepStars = isHigh ? 900 : 500
  const orbitCount = isHigh ? 6 : 4

  return (
    <>
      <fog attach="fog" args={[SPACE, 14, 55]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[-10, 4, -5]} color={PURPLE} intensity={1.2} distance={40} decay={2} />
      <pointLight position={[10, -2, -8]} color={BLUE} intensity={1} distance={40} decay={2} />
      <pointLight position={[0, 0, -15]} color={CYAN} intensity={0.4} distance={30} decay={2} />

      <NebulaCloud position={[-8, 2, -22]} color="#6366f1" scale={14} />
      <NebulaCloud position={[9, -3, -20]} color="#0284c7" scale={12} />
      <NebulaCloud position={[0, 5, -25]} color="#a855f7" scale={16} />
      <NebulaCloud position={[-4, -4, -18]} color="#ec4899" scale={10} />

      <Stars radius={120} depth={80} count={isHigh ? 6000 : 3200} factor={4} saturation={0.15} fade speed={0.15} />
      <Stars radius={70} depth={40} count={isHigh ? 2500 : 1400} factor={2.5} saturation={0} fade speed={0.25} />
      <DeepStarField count={deepStars} />
      <GalaxyBand count={galaxyCount} spread={isHigh ? 28 : 22} />

      <ParticleGlobe count={globePoints} />
      <AICore />
      <OrbitNodes count={orbitCount} />
      <NeuralLines quality={quality} />
    </>
  )
}
