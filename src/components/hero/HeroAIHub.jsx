import { Bot, Brain, Code, Cpu, Database, MessageSquare, Sparkles, Network } from 'lucide-react'

const AI_NODES = [
  { label: 'LLM', sub: 'Large Language Models', icon: MessageSquare, pos: 'hero-ai-node--top' },
  { label: 'GenAI', sub: 'Generative AI', icon: Sparkles, pos: 'hero-ai-node--right' },
  { label: 'Python', sub: 'AI Coding', icon: Code, pos: 'hero-ai-node--bottom' },
  { label: 'ML', sub: 'Machine Learning', icon: Cpu, pos: 'hero-ai-node--left' },
  { label: 'RAG', sub: 'Retrieval AI', icon: Database, pos: 'hero-ai-node--top-right' },
  { label: 'Agents', sub: 'AI Automation', icon: Bot, pos: 'hero-ai-node--bottom-left' },
]

export default function HeroAIHub() {
  return (
    <div className="hero-ai-hub" aria-label="GenAI skills we teach">
      <div className="hero-ai-hub-ring hero-ai-hub-ring--outer" aria-hidden="true" />
      <div className="hero-ai-hub-ring hero-ai-hub-ring--inner" aria-hidden="true" />

      <svg className="hero-ai-hub-lines" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <circle cx="200" cy="200" r="118" stroke="url(#hero-ai-grad)" strokeWidth="1" strokeDasharray="5 6" opacity="0.45" />
        <line x1="200" y1="200" x2="200" y2="62" stroke="url(#hero-ai-line)" strokeWidth="1.5" opacity="0.35" />
        <line x1="200" y1="200" x2="338" y2="200" stroke="url(#hero-ai-line)" strokeWidth="1.5" opacity="0.35" />
        <line x1="200" y1="200" x2="200" y2="338" stroke="url(#hero-ai-line)" strokeWidth="1.5" opacity="0.35" />
        <line x1="200" y1="200" x2="62" y2="200" stroke="url(#hero-ai-line)" strokeWidth="1.5" opacity="0.35" />
        <line x1="200" y1="200" x2="298" y2="102" stroke="url(#hero-ai-line)" strokeWidth="1" opacity="0.25" />
        <line x1="200" y1="200" x2="102" y2="298" stroke="url(#hero-ai-line)" strokeWidth="1" opacity="0.25" />
        <defs>
          <linearGradient id="hero-ai-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#58a6ff" />
            <stop offset="50%" stopColor="#a371f7" />
            <stop offset="100%" stopColor="#56d4dd" />
          </linearGradient>
          <linearGradient id="hero-ai-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#58a6ff" />
            <stop offset="100%" stopColor="#a371f7" />
          </linearGradient>
        </defs>
      </svg>

      <div className="hero-ai-core">
        <div className="hero-ai-core-glow" aria-hidden="true" />
        <div className="hero-ai-core-inner">
          <Brain className="hero-ai-core-icon" />
          <span className="hero-ai-core-title">GenAI</span>
          <span className="hero-ai-core-sub">Training Hub</span>
        </div>
      </div>

      {AI_NODES.map((node) => {
        const Icon = node.icon
        return (
          <div key={node.label} className={`hero-ai-node ${node.pos}`}>
            <div className="hero-ai-node-card">
              <span className="hero-ai-node-icon">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="hero-ai-node-label">{node.label}</span>
              <span className="hero-ai-node-sub">{node.sub}</span>
            </div>
          </div>
        )
      })}

      <div className="hero-ai-chip hero-ai-chip--code">
        <Network className="h-3 w-3 text-cyan-400" />
        <span>Neural Networks · Live Projects</span>
      </div>
    </div>
  )
}
