"use client"

import { OmegaShell } from '@/components/omega-shell'
import { InteractiveTabs } from '@/components/interactive-tabs'

const flow = ['Idea', 'Proposal', 'AI Summary', 'Risk Scan', 'Discussion', 'Vote', 'Decision Log', 'Project Team', 'Milestones']

export default function GovernancePage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Governance Engineering</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
          Governance is not a slogan. It is a system design problem.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Omega DAO betrachtet Governance als technische Architektur: Zustände, Rollen, Regeln, Sicherheitsmechanismen,
          Transparenz, Entscheidungshistorie und menschliche Legitimität müssen zusammen funktionieren.
        </p>
      </section>

      <section className="lux-card-strong p-6 md:p-9 mb-8">
        <p className="small-label mb-5">Governance Flow</p>
        <div className="grid sm:grid-cols-3 xl:grid-cols-9 gap-3">
          {flow.map((x, i) => (
            <div key={x} className="relative">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center card-hover min-h-[112px] flex flex-col justify-between">
                <div className="text-cyan-300 font-mono text-xs">0{i + 1}</div>
                <div className="font-bold text-sm">{x}</div>
                <div className="mx-auto glow-dot" />
              </div>
              {i < flow.length - 1 && <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-px bg-cyan-300/35" />}
            </div>
          ))}
        </div>
      </section>

      <InteractiveTabs
        items={[
          {
            key: '01',
            title: 'Proposal Lifecycle',
            subtitle: 'How ideas become executable decisions',
            content: (
              <div className="space-y-4">
                <p>
                  Jede Idee durchläuft einen klaren Lebenszyklus: Einreichung, Kontext, KI-Zusammenfassung,
                  Diskussion, Risikoanalyse, Abstimmung, Entscheidungshistorie und Projektumsetzung.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Create proposal', 'Add context', 'AI summary', 'Risk scan', 'Discussion', 'Vote', 'Log decision', 'Track execution'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">{item}</div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            key: '02',
            title: 'Delegated Swarm Voting',
            subtitle: 'Routing attention and expertise',
            content: (
              <div className="space-y-4">
                <p>
                  Nicht jede Person kann jedes Thema tief prüfen. Delegation erlaubt, Vertrauen und Expertise dynamisch
                  zu routen, ohne die gesamte Entscheidung in eine zentrale Hierarchie zu verwandeln.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Base vote', 'Expert delegation', 'Quorum threshold'].map((x) => (
                    <div key={x} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-center font-bold">{x}</div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            key: '03',
            title: 'Credible Neutrality Layer',
            subtitle: 'Legitimacy through process clarity',
            content: (
              <div className="space-y-4">
                <p>
                  Ein System wird glaubwürdiger, wenn Regeln, Zustände und Entscheidungen nachvollziehbar sind.
                  Neutralität bedeutet hier nicht Meinungslosigkeit, sondern verlässliche und transparente Prozesslogik.
                </p>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                  {"Prozess > Person. Logs > Gerüchte. Regeln > Willkür."}
                </div>
              </div>
            ),
          },
          {
            key: '04',
            title: 'Public Goods & Moonshots',
            subtitle: 'What the system should coordinate',
            content: (
              <div className="space-y-4">
                <p>
                  Omega DAO ist für langfristige Projekte gedacht: Bildung, Energie, Gesundheit, Software, KI,
                  Infrastruktur, Robotik, Smart Cities und zukünftige Forschungsprojekte.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {['Energy', 'Education', 'Health', 'AI', 'Robotics', 'Space', 'Infrastructure', 'Compute', 'Materials'].map((x) => (
                    <div key={x} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center font-semibold">{x}</div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            key: '05',
            title: 'Moral Veto / Safety Layer',
            subtitle: 'Safety constraints for dangerous decisions',
            content: (
              <div className="space-y-4">
                <p>
                  Manche Entscheidungen brauchen zusätzliche Sicherheitsbarrieren. Ein moralischer Veto-Layer kann als
                  Prüfmechanismus gedacht werden, der gefährliche, illegitime oder schädliche Vorschläge blockiert oder eskaliert.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Risk classification before voting</li>
                  <li>Escalation for safety-sensitive decisions</li>
                  <li>Transparent justification for blocking or delaying proposals</li>
                </ul>
              </div>
            ),
          },
          {
            key: '06',
            title: 'Forking without Fragmentation',
            subtitle: 'Disagreement as structured evolution',
            content: (
              <div className="space-y-4">
                <p>
                  In dezentralen Systemen ist Konflikt normal. Die Frage ist, ob Konflikt zur Zerstörung führt oder als
                  strukturierter Fork mit dokumentierten Gründen, Übergängen und Kompatibilitätspfaden verarbeitet wird.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Disagreement', 'Documented Fork', 'Compatible Evolution'].map((x) => (
                    <div key={x} className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-5 text-center font-bold">{x}</div>
                  ))}
                </div>
              </div>
            ),
          },
        ]}
      />
    </OmegaShell>
  )
}
