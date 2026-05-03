import { OmegaShell } from '@/components/omega-shell'

const modules = [
  ['Governance Dashboard', 'Central command interface for proposals, decisions, project status and execution evidence.', 'UI + coordination control center', ['React', 'Dashboard', 'Audit UI'], 'Prototype'],
  ['Voting Engine', 'Voting logic, quorum thresholds, role-based permissions and future delegated voting patterns.', 'Decision logic and legitimacy layer', ['Rules', 'State Machine', 'Quorum'], 'Next'],
  ['AI Coordination Assistant', 'Summaries, comparisons, risk scans, semantic search and structured decision briefings.', 'Complexity compression layer', ['LLM', 'Embeddings', 'RAG'], 'Future'],
  ['Swarm Intelligence Layer', 'Idea clustering, contribution routing, collaboration matching and distributed ideation.', 'Collective intelligence interface', ['Clustering', 'Graph', 'Community'], 'Research'],
  ['Innovation Incubator', 'Turns accepted proposals into milestones, teams, execution plans and progress tracking.', 'Project execution layer', ['Milestones', 'Projects', 'Execution'], 'Planned'],
  ['Transparency Dashboard', 'Public visibility for governance history, logs, roadmap phase and decision evidence.', 'Trust and accountability layer', ['Audit', 'History', 'Reporting'], 'Planned'],
  ['Smart Contract Sandbox', 'Testnet-only governance experiments for transparent voting proofs and treasury simulation.', 'Blockchain research layer', ['Solidity', 'Testnet', 'Hardhat'], 'Research'],
  ['Knowledge Base', 'Structured memory for proposals, discussions, architecture notes and technical documentation.', 'Institutional memory system', ['PostgreSQL', 'Prisma', 'Search'], 'Planned'],
  ['Member / Role System', 'Member profiles, permission boundaries, admin scopes and contribution contexts.', 'Identity and access layer', ['RBAC', 'Auth', 'Roles'], 'Next'],
  ['Project Milestone Engine', 'Transforms decisions into visible milestones, owners, deadlines and evidence trails.', 'Execution tracking layer', ['Roadmaps', 'Status', 'Milestones'], 'Planned'],
  ['Audit Log System', 'Records key state transitions and decision history for transparency and review.', 'Traceability layer', ['Logs', 'Events', 'History'], 'Planned'],
  ['Future API Layer', 'A reusable interface for integrations, analytics, automations and public read models.', 'External interoperability layer', ['REST', 'GraphQL later', 'Webhooks'], 'Future'],
]

export default function ModulesPage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">System Catalog</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
          The modular engine behind Omega DAO.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Jede Komponente ist als eigenständiger Software-Baustein gedacht. So wird aus einer großen Vision ein
          realistisches Engineering-System mit klaren Implementierungsstufen.
        </p>
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {modules.map(([title, text, purpose, tags, status], i) => (
          <div key={String(title)} className="lux-card p-6 md:p-7 card-hover relative overflow-hidden">
            <div className="absolute -top-16 -right-16 size-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="size-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 grid place-items-center text-xl">◈</div>
                <div className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-xs text-slate-300 font-mono">{status}</div>
              </div>
              <div className="mt-5 text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Module {String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{text}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-cyan-300 uppercase tracking-[0.18em] font-mono">Technical purpose</div>
                <div className="mt-2 text-slate-200">{purpose}</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {(tags as string[]).map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs text-cyan-200 font-mono">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </OmegaShell>
  )
}
