import { AI_HUB_NODES } from '../constants/content'
import { Terminal, FileText, Image as ImageIcon, Bot, Sparkles, Code, Play } from 'lucide-react'

const HUB_ICONS = {
  'Coding': Terminal,
  'Text': FileText,
  'Art': ImageIcon,
  'Agents': Bot
}

export default function AIHubVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px] sm:max-w-[460px] flex items-center justify-center select-none">
      
      {/* Background premium blurs & interactive circles */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gh-blue/20 via-transparent to-gh-purple/20 blur-3xl" />
      <div className="absolute inset-4 rounded-full border border-slate-200/40 animate-spin" style={{ animationDuration: '45s' }} />
      <div className="absolute inset-16 rounded-full border border-dashed border-gh-purple/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
      
      {/* Center Core Hub Node */}
      <div className="absolute z-10 flex items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-gh-blue/30 bg-white shadow-[0_8px_32px_-8px_rgba(2,132,199,0.3)]">
          <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-br from-gh-blue/10 to-gh-purple/10 animate-pulse" />
          <span className="font-outfit text-3xl font-extrabold tracking-widest text-slate-800 z-10 flex items-center gap-1">
            NSR
            {/* <Sparkles className="h-4 w-4 text-gh-purple animate-bounce" /> */}
          </span>
        </div>
      </div>

      {/* Hexagonal Node items with neon outline effects */}
      {AI_HUB_NODES.map((node) => {
        const Icon = HUB_ICONS[node.label] || Terminal
        return (
          <div key={node.label} className={`absolute ${node.pos} z-20`}>
            <div className="cyber-card group flex flex-col items-center p-3 text-center shadow-lg hover:scale-105 transition-all duration-300 min-w-[100px] border-slate-200 bg-white/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gh-blue/10 text-gh-blue group-hover:bg-gradient-to-r group-hover:from-gh-blue group-hover:to-gh-purple group-hover:text-white transition-all duration-300 shadow-inner">
                <Icon className="h-4 w-4" />
              </div>
              <span className="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-700">
                {node.label}
              </span>
            </div>
          </div>
        )
      })}

      {/* Vector connectors between central hub and nodes */}
      <svg className="absolute inset-0 h-full w-full text-slate-200" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <line x1="200" y1="200" x2="200" y2="50" stroke="url(#line-grad-y)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="350" y2="200" stroke="url(#line-grad-x)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="200" y2="350" stroke="url(#line-grad-y)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="50" y2="200" stroke="url(#line-grad-x)" strokeWidth="2" strokeDasharray="4 4" />
        <defs>
          <linearGradient id="line-grad-y" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="line-grad-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Developer Code Terminal Widget (Top-Right / overlay style) */}
      <div className="absolute bottom-4 right-2 sm:-right-4 z-30 max-w-[210px] rounded-xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-md hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </div>
          <span className="text-[8px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
            <Code className="h-2.5 w-2.5 text-gh-blue" />
            agent.py
          </span>
        </div>
        <pre className="text-[9px] font-mono text-slate-700 leading-normal overflow-hidden select-text text-left">
          <code>
            <span className="text-gh-purple">from</span> nsr <span className="text-gh-purple">import</span> Agent<br />
            <br />
            agent = Agent(<br />
            &nbsp;&nbsp;role=<span className="text-emerald-600">"DataAnalyst"</span>,<br />
            &nbsp;&nbsp;tools=[llm_search],<br />
            &nbsp;&nbsp;goal=<span className="text-emerald-600">"AutomateInsights"</span><br />
            )<br />
            agent.kickoff()
          </code>
        </pre>
        <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[8px] font-bold text-slate-400">STATUS: ACTIVE</span>
          <span className="h-4 w-4 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-sm">
            <Play className="h-2 w-2 fill-current" />
          </span>
        </div>
      </div>

      {/* Floating Metrics Widget (Top-Left / overlay style) */}
      <div className="absolute top-4 left-2 sm:-left-4 z-30 rounded-xl border border-slate-200 bg-white/90 p-2.5 shadow-xl backdrop-blur-md hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gh-purple/10 text-gh-purple flex items-center justify-center shadow-inner">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <span className="text-[7px] font-bold uppercase tracking-wider text-slate-400 block">System Accuracy</span>
            <strong className="text-xs font-black text-slate-800 tracking-tight block">99.8% AI Precision</strong>
          </div>
        </div>
      </div>

    </div>
  )
}
