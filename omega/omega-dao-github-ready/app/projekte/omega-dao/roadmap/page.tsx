"use client"

import { useState } from 'react'
import { OmegaShell } from '@/components/omega-shell'

const phases = [
  {
    id: '01',
    title: 'Concept & Positioning',
    state: 'Active',
    goal: 'Omega DAO klar als technisches Portfolio-Projekt positionieren.',
    deliverables: ['Projektthese', 'Reality Check', 'System-Narrativ', 'Recruiter-Framing'],
    tech: ['Product Thinking', 'Technical Writing', 'UX Strategy'],
    proof: 'Eine glaubwürdige Projektseite mit klarer Abgrenzung zwischen Vision, Prototyp und Forschung.',
  },
  {
    id: '02',
    title: 'Interactive UI Demo',
    state: 'Next',
    goal: 'Eine sichtbare Demo bauen, die nicht nur Text zeigt, sondern echte Interaktion.',
    deliverables: ['Proposal Form', 'Voting UI', 'Result Display', 'Mock Data Layer'],
    tech: ['React State', 'TypeScript', 'Tailwind', 'Component Design'],
    proof: 'Recruiter können klicken, abstimmen und sehen, wie sich der Status verändert.',
  },
  {
    id: '03',
    title: 'Functional Web App',
    state: 'Planned',
    goal: 'Aus der Demo wird eine echte Web-App mit Datenmodell und API.',
    deliverables: ['Auth', 'PostgreSQL', 'API Routes', 'RBAC'],
    tech: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
    proof: 'Persistente Proposals, Votes, Rollen und Audit Logs.',
  },
  {
    id: '04',
    title: 'Transparency & Audit Logs',
    state: 'Planned',
    goal: 'Alle Entscheidungen und Statusänderungen nachvollziehbar machen.',
    deliverables: ['Decision History', 'Public Logs', 'Milestone Evidence', 'Status Pages'],
    tech: ['Audit Trails', 'Data Modeling', 'Dashboards'],
    proof: 'Jede Entscheidung wird sichtbar und überprüfbar dargestellt.',
  },
  {
    id: '05',
    title: 'AI Coordination Layer',
    state: 'Future',
    goal: 'KI als Entscheidungs- und Wissensstrukturierung einsetzen.',
    deliverables: ['AI Summaries', 'Risk Analysis', 'Idea Clustering', 'Semantic Search'],
    tech: ['LLM API', 'Embeddings', 'RAG', 'Vector Search'],
    proof: 'KI reduziert Komplexität, statt nur als Buzzword aufzutreten.',
  },
  {
    id: '06',
    title: 'Blockchain Testnet Sandbox',
    state: 'Research',
    goal: 'Blockchain nur dort einsetzen, wo sie Nachweisbarkeit verbessert.',
    deliverables: ['Wallet Login', 'Voting Contract', 'Treasury Simulation', 'On-chain Logs'],
    tech: ['Solidity', 'Hardhat', 'Testnet', 'WalletConnect'],
    proof: 'Harmloses Testnet-Experiment ohne Finanzversprechen.',
  },
  {
    id: '07',
    title: 'Open Source Documentation',
    state: 'Future',
    goal: 'Das Projekt als nachvollziehbares Lern- und Engineering-System dokumentieren.',
    deliverables: ['README', 'Architecture Notes', 'API Docs', 'Contribution Guide'],
    tech: ['GitHub', 'Markdown', 'Docs Architecture'],
    proof: 'Professionelle Dokumentation, die Lernkurve und Struktur zeigt.',
  },
  {
    id: '08',
    title: 'Community Experiment',
    state: 'Long Horizon',
    goal: 'Später kleine echte Feedback-Schleifen mit Nutzern testen.',
    deliverables: ['Beta Feedback', 'Small Governance Tests', 'Iteration Reports'],
    tech: ['Analytics', 'Feedback Loops', 'Product Iteration'],
    proof: 'Validierte Learnings statt bloßer Vision.',
  },
]

export default function RoadmapPage() {
  const [active, setActive] = useState(1)
  const current = phases[active]

  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Visual Roadmap</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
          From vision to executable engineering milestones.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Diese Roadmap übersetzt eine große Zukunftsidee in konkrete Software-Artefakte: jede Phase soll als sichtbarer Beweis
          für Lernen, Systemdenken und technische Umsetzung funktionieren.
        </p>
      </section>

      <section className="grid xl:grid-cols-[360px_1fr] gap-6 py-6">
        <div className="lux-card p-5">
          <div className="small-label mb-4">Timeline</div>
          <div className="relative">
            <div className="absolute left-5 top-3 bottom-3 w-px timeline-line" />
            <div className="space-y-3">
              {phases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setActive(index)}
                  className={`relative w-full text-left pl-14 pr-4 py-4 rounded-2xl border transition ${active === index ? 'border-cyan-400/30 bg-cyan-400/10 text-white shadow-[0_0_35px_rgba(34,211,238,0.12)]' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}
                >
                  <span className={`absolute left-[13px] top-1/2 -translate-y-1/2 size-4 rounded-full border ${active === index ? 'bg-cyan-300 border-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.9)]' : 'bg-slate-900 border-white/20'}`} />
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-mono">Phase {phase.id} · {phase.state}</div>
                  <div className="mt-1 font-bold">{phase.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lux-card-strong p-7 md:p-9 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_36%)]" />
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <div className="text-cyan-300 font-mono text-sm uppercase tracking-[0.2em]">Phase {current.id} · {current.state}</div>
                <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.06em]">{current.title}</h2>
              </div>
              <div className="text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(34,211,238,0.35)]">{current.id}</div>
            </div>

            <div className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <div className="small-label mb-3">Goal</div>
                <p className="text-slate-300 leading-8 text-lg">{current.goal}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <div className="small-label mb-3">Portfolio Evidence</div>
                <p className="text-slate-300 leading-8">{current.proof}</p>
              </div>
            </div>

            <div className="mt-5 grid lg:grid-cols-2 gap-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <div className="small-label mb-4">Deliverables</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.deliverables.map((x) => (
                    <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                      <span className="text-cyan-300">◦ </span>{x}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <div className="small-label mb-4">Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((x) => (
                    <span key={x} className="px-3 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm font-mono">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-5">
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Roadmap progress signal</span><span>{Math.round(((active + 1) / phases.length) * 100)}%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-400 to-violet-400 transition-all" style={{ width: `${((active + 1) / phases.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </OmegaShell>
  )
}
