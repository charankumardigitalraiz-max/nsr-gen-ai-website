import { useEffect, useRef, useState } from 'react'
import { Bot, Code, Cpu, Database, MessageSquare, Network, Sparkles } from 'lucide-react'

function hubLayout(width) {
  if (width < 280) return { orbit: 48, inner: 14, chipBottom: '-2.1rem' }
  if (width < 320) return { orbit: 47, inner: 15, chipBottom: '-1.85rem' }
  if (width < 360) return { orbit: 46, inner: 15, chipBottom: '-1.6rem' }
  if (width < 400) return { orbit: 45, inner: 16, chipBottom: '-1.35rem' }
  return { orbit: 44, inner: 16, chipBottom: '-1.05rem' }
}

const AI_NODES = [
  { label: 'LLM', sub: 'Language Models', icon: MessageSquare, angle: -90, delay: '0s' },
  { label: 'GenAI', sub: 'Generative AI', icon: Sparkles, angle: 0, delay: '-0.7s' },
  { label: 'Python', sub: 'AI Coding', icon: Code, angle: 90, delay: '-1.4s' },
  { label: 'ML', sub: 'Machine Learning', icon: Cpu, angle: 180, delay: '-2.1s' },
  { label: 'RAG', sub: 'Retrieval AI', icon: Database, angle: -38, delay: '-2.8s' },
  { label: 'Agents', sub: 'AI Automation', icon: Bot, angle: 142, delay: '-3.5s' },
]

function polarPoint(angleDeg, radiusPercent = ORBIT_RADIUS) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: 50 + radiusPercent * Math.cos(rad),
    y: 50 + radiusPercent * Math.sin(rad),
  }
}

function HubNode({ node, orbitRadius }) {
  const Icon = node.icon
  const { x, y } = polarPoint(node.angle, orbitRadius)

  return (
    <div
      className="hub-orbit-node absolute z-20 w-[18%] min-w-[3.2rem] max-w-[5.25rem]"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="hub-node-card flex w-full flex-col items-center rounded-xl border border-white/12 bg-[rgb(10,14,23,0.92)] px-[0.45em] py-[0.4em] text-center shadow-[0_4px_16px_rgb(0,0,0,0.35)] backdrop-blur-md"
        style={{ animationDelay: node.delay, fontSize: 'clamp(0.575rem, 3cqw, 0.7rem)' }}
      >
        <span className="flex aspect-square w-[1.8em] items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
          <Icon className="h-[0.9em] w-[0.9em]" />
        </span>
        <span className="mt-[0.35em] font-extrabold uppercase tracking-wider text-white">{node.label}</span>
        <span className="hub-node-sub mt-[0.15em] font-semibold leading-tight text-slate-500">{node.sub}</span>
      </div>
    </div>
  )
}

export default function HeroAIHub() {
  const hubRef = useRef(null)
  const [{ orbit, inner, chipBottom }, setLayout] = useState(() => hubLayout(400))

  useEffect(() => {
    const el = hubRef.current
    if (!el) return undefined

    const update = () => setLayout(hubLayout(el.clientWidth))
    update()

    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hubLines = AI_NODES.map((node) => {
    const outer = polarPoint(node.angle, orbit)
    const innerPt = polarPoint(node.angle, inner)
    return {
      key: node.label,
      x1: (innerPt.x / 100) * 400,
      y1: (innerPt.y / 100) * 400,
      x2: (outer.x / 100) * 400,
      y2: (outer.y / 100) * 400,
    }
  })

  return (
    <div
      ref={hubRef}
      className="relative mx-auto aspect-square h-full w-full max-h-full max-w-full select-none pointer-events-none"
      style={{ containerType: 'size' }}
      aria-label="GenAI skills we teach"
    >
      <style>{`
        @keyframes hub-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .hub-node-card {
          animation: hub-float 4s ease-in-out infinite;
        }
        @container (max-width: 360px) {
          .hub-orbit-node {
            width: 17% !important;
            min-width: 2.95rem !important;
            max-width: 4.4rem !important;
          }
          .hub-node-sub { display: none; }
        }
        @container (max-width: 300px) {
          .hub-orbit-node {
            width: 16% !important;
            min-width: 2.75rem !important;
            max-width: 4rem !important;
          }
        }
        @container (max-width: 260px) {
          .hub-chip-text { display: none; }
        }
      `}</style>

      <div className="absolute inset-[5%]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          {hubLines.map((pt) => (
            <line
              key={pt.key}
              x1={pt.x1}
              y1={pt.y1}
              x2={pt.x2}
              y2={pt.y2}
              stroke="url(#hero-ai-line)"
              strokeWidth="1.25"
              opacity="0.35"
            />
          ))}
          <defs>
            <linearGradient id="hero-ai-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#58a6ff" />
              <stop offset="100%" stopColor="#a371f7" />
            </linearGradient>
          </defs>
        </svg>

        {AI_NODES.map((node) => (
          <HubNode key={node.label} node={node} orbitRadius={orbit} />
        ))}
      </div>

      <div
        className="hub-bottom-chip absolute left-1/2 z-30 flex max-w-[90%] -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[rgb(10,14,23,0.9)] px-2 py-1 backdrop-blur-md"
        style={{ bottom: chipBottom }}
      >
        <Network className="h-2.5 w-2.5 shrink-0 text-cyan-400" />
        <span
          className="hub-chip-text truncate font-bold uppercase tracking-widest text-slate-400"
          style={{ fontSize: 'clamp(0.45rem, 2cqw, 0.5625rem)' }}
        >
          Neural Networks · Live Projects
        </span>
      </div>
    </div>
  )
}
