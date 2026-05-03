"use client"

import { useMemo, useState } from 'react'
import { OmegaShell } from '@/components/omega-shell'

type VoteType = 'yes' | 'no' | 'abstain'

const initialProposals = [
  {
    id: 'P-001',
    title: 'AI Summary Engine MVP',
    area: 'AI Coordination',
    desc: 'Build a first version that summarizes proposals, extracts risks and generates decision briefings.',
    yes: 18,
    no: 3,
    abstain: 4,
    quorum: 30,
    status: 'Active',
  },
  {
    id: 'P-002',
    title: 'Public Transparency Dashboard v1',
    area: 'Transparency',
    desc: 'Create a public dashboard for proposal history, roadmap phase and execution evidence.',
    yes: 22,
    no: 2,
    abstain: 2,
    quorum: 28,
    status: 'Active',
  },
  {
    id: 'P-003',
    title: 'Role System & Permission Layer',
    area: 'Security',
    desc: 'Implement member roles, admin permissions and safe boundaries for proposal moderation.',
    yes: 15,
    no: 5,
    abstain: 7,
    quorum: 32,
    status: 'Review',
  },
  {
    id: 'P-004',
    title: 'Knowledge Graph Prototype',
    area: 'Knowledge Base',
    desc: 'Model relations between ideas, proposals, modules and milestones for future semantic search.',
    yes: 12,
    no: 6,
    abstain: 8,
    quorum: 30,
    status: 'Discussion',
  },
  {
    id: 'P-005',
    title: 'Testnet Governance Sandbox',
    area: 'Blockchain Research',
    desc: 'Create a harmless testnet-only sandbox for transparent voting experiments without real funds.',
    yes: 9,
    no: 8,
    abstain: 5,
    quorum: 35,
    status: 'Research',
  },
]

function pct(value: number, total: number) {
  if (!total) return 0
  return Math.round((value / total) * 100)
}

export default function DashboardPage() {
  const [proposals, setProposals] = useState(initialProposals)

  const totals = useMemo(() => {
    const votes = proposals.reduce((acc, p) => acc + p.yes + p.no + p.abstain, 0)
    const yes = proposals.reduce((acc, p) => acc + p.yes, 0)
    return {
      active: proposals.length,
      votes,
      approval: pct(yes, votes),
      summaries: 17,
      transparency: 86,
      members: 42,
    }
  }, [proposals])

  function vote(id: string, type: VoteType) {
    setProposals((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [type]: p[type] + 1 } : p)),
    )
  }

  return (
    <OmegaShell>
      <section className="py-8 md:py-12">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div>
            <p className="small-label mb-4">Live Concept Dashboard</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
              Omega DAO Command Center.
            </h1>
            <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
              Eine interaktive Demo-Oberfläche mit simulierten Governance-Daten. Keine echten Mitglieder, keine echte DAO,
              keine Finanzdaten — nur ein hochwertiger Prototyp, der zeigt, wie die spätere Plattform funktionieren könnte.
            </p>
          </div>

          <div className="lux-card p-5 min-w-[280px]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300">System Integrity</div>
            <div className="mt-3 flex items-end gap-3">
              <div className="text-5xl font-black">{totals.transparency}%</div>
              <div className="text-emerald-300 pb-2">stable</div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-400" style={{ width: `${totals.transparency}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 py-6">
        {[
          ['System Status', 'Prototype Online', 'emerald'],
          ['Active Proposals', totals.active.toString(), 'cyan'],
          ['Demo Members', totals.members.toString(), 'violet'],
          ['Votes This Week', totals.votes.toString(), 'amber'],
          ['Roadmap Phase', '02 / Demo', 'cyan'],
          ['AI Summaries', totals.summaries.toString(), 'emerald'],
          ['Approval Signal', `${totals.approval}%`, 'violet'],
          ['Module Health', '7 / 9', 'cyan'],
        ].map(([label, value, color]) => (
          <div key={label} className="lux-card p-5 card-hover">
            <div className={`text-${color}-300 text-xs font-mono uppercase tracking-[0.18em]`}>{label}</div>
            <div className="mt-3 text-3xl font-black tracking-tight">{value}</div>
            <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full rounded-full bg-${color}-300`} style={{ width: label === 'System Status' ? '94%' : '72%' }} />
            </div>
          </div>
        ))}
      </section>

      <section className="grid xl:grid-cols-[1.2fr_0.8fr] gap-5 py-8">
        <div className="lux-card-strong p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
            <div>
              <p className="small-label mb-3">Governance Simulator</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Vote on simulated proposals.</h2>
              <p className="mt-3 text-slate-400 leading-7">
                Demo data only. Click Yes, No or Abstain and watch the proposal state update live.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {proposals.map((p) => {
              const total = p.yes + p.no + p.abstain
              const approval = pct(p.yes, total)
              const quorum = Math.min(100, pct(total, p.quorum))
              const passed = approval >= 60 && quorum >= 100

              return (
                <div key={p.id} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs font-mono">{p.id}</span>
                        <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs">{p.area}</span>
                        <span className={`px-2.5 py-1 rounded-full border text-xs ${passed ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300' : 'border-amber-400/20 bg-amber-400/10 text-amber-300'}`}>
                          {passed ? 'Likely Accepted' : p.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                      <p className="mt-2 text-slate-400 leading-7">{p.desc}</p>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => vote(p.id, 'yes')} className="px-3 py-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 hover:bg-emerald-400/20 transition">Yes</button>
                      <button onClick={() => vote(p.id, 'no')} className="px-3 py-2 rounded-xl bg-red-400/10 border border-red-400/20 text-red-300 hover:bg-red-400/20 transition">No</button>
                      <button onClick={() => vote(p.id, 'abstain')} className="px-3 py-2 rounded-xl bg-slate-400/10 border border-white/10 text-slate-300 hover:bg-white/10 transition">Abstain</button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 mt-5">
                    <div className="rounded-2xl bg-emerald-400/10 border border-emerald-400/20 p-3">
                      <div className="text-xs text-emerald-300 font-mono">YES</div>
                      <div className="text-2xl font-black">{p.yes}</div>
                    </div>
                    <div className="rounded-2xl bg-red-400/10 border border-red-400/20 p-3">
                      <div className="text-xs text-red-300 font-mono">NO</div>
                      <div className="text-2xl font-black">{p.no}</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                      <div className="text-xs text-slate-400 font-mono">ABSTAIN</div>
                      <div className="text-2xl font-black">{p.abstain}</div>
                    </div>
                  </div>

                  <div className="mt-5 grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Approval</span><span>{approval}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" style={{ width: `${approval}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Quorum</span><span>{total} / {p.quorum}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${quorum}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-5">
          <div className="lux-card p-6">
            <p className="small-label mb-3">AI Coordination Feed</p>
            <div className="space-y-3">
              {[
                'Summarized AI Summary Engine MVP into 4 decision points.',
                'Detected dependency: Role System should precede public governance.',
                'Clustered Knowledge Graph Prototype with semantic search roadmap.',
                'Recommended: build audit logs before testnet sandbox.',
              ].map((x) => (
                <div key={x} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300 leading-7">
                  <span className="text-cyan-300">◎ </span>{x}
                </div>
              ))}
            </div>
          </div>

          <div className="lux-card p-6">
            <p className="small-label mb-3">Module Health</p>
            <div className="space-y-4">
              {[
                ['Frontend Prototype', 88],
                ['Governance Logic', 62],
                ['Data Model', 41],
                ['AI Layer', 28],
                ['Testnet Sandbox', 16],
              ].map(([label, value]) => (
                <div key={String(label)}>
                  <div className="flex justify-between text-sm text-slate-300 mb-2">
                    <span>{label}</span><span>{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lux-card p-6">
            <p className="small-label mb-3">System Event Log</p>
            <div className="space-y-3 font-mono text-xs text-slate-400">
              {[
                '[12:04] proposal.created: AI Summary Engine MVP',
                '[12:11] vote.cast: Public Transparency Dashboard v1',
                '[12:18] module.updated: Governance Logic Layer',
                '[12:31] milestone.opened: Interactive UI Demo',
                '[12:46] ai.summary.generated: Knowledge Graph Prototype',
              ].map((x) => (
                <div key={x} className="border-l border-cyan-400/30 pl-3">{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </OmegaShell>
  )
}
