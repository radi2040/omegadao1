"use client"

import { useMemo, useState } from 'react'
import { OmegaShell } from '@/components/omega-shell'

const ideas = [
  { id: 1, title: 'AI Proposal Summaries', domain: 'AI', score: 82 },
  { id: 2, title: 'Microgrid Governance', domain: 'Energy', score: 74 },
  { id: 3, title: 'Smart City Transparency Board', domain: 'Cities', score: 91 },
  { id: 4, title: 'Proof-of-Contribution System', domain: 'Governance', score: 78 },
  { id: 5, title: 'Education Skill Graph', domain: 'Education', score: 69 },
  { id: 6, title: 'Decentralized Research Funding', domain: 'Science', score: 86 },
]

export default function SwarmAIPage() {
  const [selectedDomain, setSelectedDomain] = useState('All')
  const domains = ['All', ...Array.from(new Set(ideas.map((x) => x.domain)))]
  const visible = useMemo(() => selectedDomain === 'All' ? ideas : ideas.filter((x) => x.domain === selectedDomain), [selectedDomain])

  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Decentralized Intelligence</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-6xl">
          Swarm intelligence meets decentralized AI.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Omega DAO betrachtet KI nicht als zentralen Herrscher, sondern als verteilte Koordinationsschicht: Vorschläge
          strukturieren, Risiken sichtbar machen, Wissen vernetzen und menschliche Entscheidungen verbessern.
        </p>
      </section>

      <section className="grid xl:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="lux-card p-7 md:p-9">
          <p className="small-label mb-4">Swarm Logic</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Collective intelligence becomes powerful when signals are structured.
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            Viele Menschen erzeugen viele Ideen. Ohne System entsteht Chaos. Mit Clustering, Ranking, Feedback-Loops,
            Delegation und KI-Zusammenfassungen können Ideen in sinnvolle Entscheidungsräume überführt werden.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {['Collect', 'Cluster', 'Evaluate', 'Coordinate'].map((x) => (
              <div key={x} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center font-bold">{x}</div>
            ))}
          </div>
        </div>

        <div className="lux-card-strong p-7 md:p-9">
          <p className="small-label mb-4">Interactive Idea Filter</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-full border text-sm transition ${selectedDomain === domain ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                {domain}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {visible.map((idea) => (
              <div key={idea.id} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-cyan-300 text-xs font-mono uppercase tracking-[0.18em]">{idea.domain}</div>
                    <div className="mt-1 font-bold text-lg">{idea.title}</div>
                  </div>
                  <div className="text-2xl font-black">{idea.score}</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${idea.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          ['AI Summaries', 'KI verdichtet lange Diskussionen zu klaren Entscheidungsbriefings.'],
          ['Semantic Search', 'Mitglieder finden ähnliche Ideen, Dokumente und frühere Entscheidungen.'],
          ['Idea Clustering', 'Ähnliche Vorschläge werden gruppiert, damit keine Energie verloren geht.'],
          ['Agentic Coordination', 'Spätere Agenten könnten Projektstände prüfen und nächste Schritte vorschlagen.'],
        ].map(([title, text]) => (
          <div key={title} className="lux-card p-6 card-hover">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">AI Module</div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">{title}</h3>
            <p className="mt-4 text-slate-400 leading-7">{text}</p>
          </div>
        ))}
      </section>
    </OmegaShell>
  )
}
