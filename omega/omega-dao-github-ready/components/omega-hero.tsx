import Link from 'next/link'

export function OmegaHero() {
  return (
    <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center min-h-[78vh] py-8">
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {['Amine Radi', 'Civilization-scale Vision', 'Deep-Tech Portfolio', 'Future Systems'].map((x) => (
            <span key={x} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs md:text-sm">{x}</span>
          ))}
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.88] font-black tracking-[-0.08em] omega-gradient-text">
          Omega<br />DAO
        </h1>

        <p className="mt-6 text-xl md:text-3xl font-bold tracking-tight max-w-4xl">
          A decentralized innovation network inspired by swarm intelligence, programmable governance,
          AI coordination and modular digital infrastructure.
        </p>

        <p className="mt-6 text-slate-300 text-base md:text-lg leading-8 max-w-3xl">
          Omega DAO is my long-term attempt to turn collective intelligence into digital infrastructure. It is designed as a
          future-oriented software system: proposals, voting, coordination, transparent decision logs, project incubation,
          AI-assisted knowledge synthesis and later testnet governance experiments.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projekte/omega-dao/architecture" className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold">Explore Architecture</Link>
          <Link href="/projekte/omega-dao/manifesto" className="px-5 py-3 rounded-xl glass font-semibold">Read Manifesto</Link>
          <Link href="/projekte/omega-dao/infographic" className="px-5 py-3 rounded-xl glass font-semibold">Open Infographic</Link>
        </div>

        <div className="mt-8 border-l-2 border-cyan-400 pl-5 text-slate-200 max-w-3xl leading-8">
          <span className="text-cyan-300 font-mono">mission.statement = </span>
          “Build a technical system where ideas can be proposed, structured, evaluated, voted on, and transformed into coordinated projects for the future.”
        </div>
      </div>

      <aside className="glass rounded-[2rem] p-6 md:p-7 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_35%)]" />
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-300 font-mono">omega.system.status</span>
          </div>

          <div className="space-y-3 text-sm md:text-[15px] leading-7 font-mono text-slate-300">
            <div><span className="text-cyan-300">project</span>: Omega DAO</div>
            <div><span className="text-cyan-300">thesis</span>: civilization-scale coordination</div>
            <div><span className="text-cyan-300">focus</span>: governance · AI · swarm intelligence</div>
            <div><span className="text-cyan-300">mvp.01</span>: proposal + voting demo</div>
            <div><span className="text-cyan-300">mvp.02</span>: API + auth + database</div>
            <div><span className="text-cyan-300">mvp.03</span>: AI summaries + audit logs + testnet</div>
            <div className="text-slate-500">// big vision, honest status, buildable architecture</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              ['01', 'Architecture defined'],
              ['06', 'Core modules'],
              ['09', 'Skill domains'],
              ['∞', 'Long horizon vision'],
            ].map(([a, b]) => (
              <div key={b} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-2xl font-black">{a}</div>
                <div className="text-xs text-slate-400 mt-1">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
