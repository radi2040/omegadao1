import { OmegaShell } from '@/components/omega-shell'

const flow = ['Idea', 'Proposal', 'AI Summary', 'Coordination', 'Voting', 'Execution', 'Transparent Logs', 'Future Infrastructure']
const nodes = [
  ['Philosophy', 'Why should future coordination become more transparent, modular and adaptive?'],
  ['Technology', 'What software layers can structure proposals, decisions, data and execution?'],
  ['Governance', 'How do humans make legitimate decisions at network scale?'],
  ['AI Coordination', 'How can AI compress complexity without replacing human judgment?'],
  ['Infrastructure', 'How does the system become a reusable platform instead of a one-time tool?'],
  ['Future Civilization', 'How can networks coordinate energy, education, science and long-horizon projects?'],
]

export default function InfographicPage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Animated Infographic System</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
          Omega DAO as a living coordination map.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Eine visuelle Systemkarte für die Idee: aus einzelnen Gedanken entstehen strukturierte Vorschläge,
          koordinierte Entscheidungen, transparente Logs und langfristige Zukunftsinfrastruktur.
        </p>
      </section>

      <section className="lux-card-strong p-6 md:p-9 relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="relative">
          <div className="flex items-center justify-between gap-5 flex-wrap mb-8">
            <div>
              <p className="small-label mb-3">Primary Flow</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">From raw idea to future infrastructure.</h2>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300 text-sm font-mono">
              system.flow.v1
            </div>
          </div>

          <div className="grid md:grid-cols-4 xl:grid-cols-8 gap-3">
            {flow.map((x, i) => (
              <div key={x} className="relative group">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4 h-full min-h-[120px] flex flex-col justify-between card-hover">
                  <div className="text-cyan-300 font-mono text-xs">0{i + 1}</div>
                  <div className="text-lg font-black tracking-tight">{x}</div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${(i + 1) * 12}%` }} />
                  </div>
                </div>
                {i < flow.length - 1 && <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-px bg-cyan-300/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 grid xl:grid-cols-[1fr_0.9fr] gap-5">
        <div className="lux-card p-7 md:p-9">
          <p className="small-label mb-4">Omega DAO System Map</p>
          <div className="relative aspect-[1.15/1] min-h-[420px] rounded-[2rem] border border-white/10 bg-black/25 overflow-hidden">
            <div className="absolute inset-0 premium-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-cyan-400/10 grid place-items-center text-center shadow-[0_0_80px_rgba(34,211,238,0.18)]">
              <div>
                <div className="text-3xl">⬡</div>
                <div className="text-xs font-mono text-cyan-300 mt-1">OMEGA CORE</div>
              </div>
            </div>

            {nodes.map(([title], i) => {
              const positions = [
                'left-[8%] top-[10%]',
                'right-[8%] top-[12%]',
                'left-[6%] top-[47%]',
                'right-[6%] top-[47%]',
                'left-[18%] bottom-[10%]',
                'right-[18%] bottom-[10%]',
              ]
              return (
                <div key={title} className={`absolute ${positions[i]} w-36 md:w-44 rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-4 text-sm font-bold`}>
                  <div className="glow-dot mb-3" />
                  {title}
                </div>
              )
            })}

            <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-cyan-300/25" />
            <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px bg-violet-300/25" />
            <div className="absolute left-[22%] right-[22%] top-[24%] h-px rotate-12 bg-cyan-300/20" />
            <div className="absolute left-[22%] right-[22%] bottom-[24%] h-px -rotate-12 bg-violet-300/20" />
          </div>
        </div>

        <div className="space-y-5">
          {nodes.map(([title, text], i) => (
            <div key={title} className="lux-card p-5 card-hover">
              <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Node 0{i + 1}</div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          ['Input', 'Ideas, problems, research questions, proposals and community knowledge.'],
          ['Processing', 'AI summaries, risk comparison, semantic clustering and structured discussion.'],
          ['Decision', 'Voting, delegation, quorum rules, credible neutrality and transparent reasoning.'],
          ['Output', 'Milestones, project teams, documentation, execution logs and future infrastructure.'],
        ].map(([title, text]) => (
          <div key={title} className="lux-card p-6 card-hover">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">{title}</div>
            <p className="mt-4 text-slate-300 leading-8">{text}</p>
          </div>
        ))}
      </section>
    </OmegaShell>
  )
}
