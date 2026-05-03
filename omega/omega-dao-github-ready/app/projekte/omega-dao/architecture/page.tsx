import { OmegaShell } from '@/components/omega-shell'

const layers = [
  ['01', 'User Interface Layer', 'Jetzt', 'Next.js · React · TypeScript · responsive dashboards', 'Macht die Vision sichtbar und bedienbar. Recruiter sehen konkrete UI-Kompetenz.'],
  ['02', 'Identity & Role Layer', 'Nächster Schritt', 'Authentication · RBAC · Admin Scopes · später Wallet Identity', 'Definiert, wer was darf, und schafft sichere Grenzen zwischen Nutzerrollen.'],
  ['03', 'Governance Logic Layer', 'Nächster Schritt', 'Proposals · Discussions · Votes · State Transitions', 'Übersetzt Entscheidungsprozesse in klare Daten- und Zustandslogik.'],
  ['04', 'Data & Knowledge Layer', 'Geplant', 'PostgreSQL · Prisma · Members · Votes · Comments · Milestones', 'Speichert Wissen, Entscheidungen und Fortschritt nachvollziehbar.'],
  ['05', 'AI Coordination Layer', 'Später', 'LLM Summaries · Semantic Search · Risk Analysis · Clustering', 'Reduziert Komplexität und hilft Mitgliedern, informierte Entscheidungen zu treffen.'],
  ['06', 'Transparency Layer', 'Geplant', 'Public Dashboards · Decision History · Evidence Trails', 'Macht Entscheidungen, Begründungen und Projektstatus sichtbar.'],
  ['07', 'Blockchain Research Layer', 'Forschung', 'Solidity · Testnet · Voting Proofs · Treasury Simulation', 'Experimentiert mit Nachweisbarkeit, ohne Finanzversprechen oder echte Gelder.'],
]

export default function ArchitecturePage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Technical Architecture</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">
          A layered architecture for governance, intelligence and transparency.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Die Architektur trennt klar zwischen dem, was jetzt als Portfolio-Prototyp gebaut wird, den nächsten technischen Schritten
          und den späteren Forschungsmodulen wie KI und Testnet-Governance.
        </p>
      </section>

      <section className="grid xl:grid-cols-[0.75fr_1.25fr] gap-6">
        <div className="lux-card p-7 md:p-9">
          <p className="small-label mb-4">Implementation Logic</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">No fake complexity. Build the spine first.</h2>
          <p className="mt-5 text-slate-300 leading-8">
            Die richtige Reihenfolge ist entscheidend: zuerst Interface und Demo-Flow, dann Datenmodell und API,
            danach Transparenz, KI-Unterstützung und schließlich Blockchain-Experimente.
          </p>
          <div className="mt-6 space-y-3">
            {['Jetzt: sichtbarer UI-Prototyp', 'Nächster Schritt: API + Auth + Voting Logic', 'Geplant: Datenbank + Audit Logs', 'Später: AI + Testnet Sandbox'].map((x) => (
              <div key={x} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-slate-300">
                <span className="text-cyan-300">◦ </span>{x}
              </div>
            ))}
          </div>
        </div>

        <div className="lux-card-strong p-5 md:p-7 relative overflow-hidden">
          <div className="absolute inset-0 premium-grid opacity-20" />
          <div className="relative space-y-3">
            {layers.map(([num, title, status, tech, why]) => (
              <div key={num} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 grid md:grid-cols-[70px_1fr_170px] gap-4 items-start card-hover">
                <div className="size-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 font-black text-lg grid place-items-center">{num}</div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-slate-400 leading-7">{tech}</p>
                  <p className="mt-2 text-slate-300 leading-7">{why}</p>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-cyan-300 text-xs text-center font-mono uppercase tracking-[0.12em]">
                  {status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </OmegaShell>
  )
}
