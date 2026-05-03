import { OmegaShell } from '@/components/omega-shell'

const manifestoPoints = [
  {
    title: 'From institutions to protocols',
    text: 'A future civilization may increasingly rely on programmable systems to coordinate trust, contribution, reputation and public decision-making.'
  },
  {
    title: 'From hierarchy to swarm intelligence',
    text: 'Many problems are too complex for narrow centralized hierarchies. Networked intelligence can outperform isolated authority when well-designed.'
  },
  {
    title: 'From opacity to legibility',
    text: 'The future should not only be more intelligent. It should be more understandable, traceable and accountable.'
  },
  {
    title: 'From fragmented effort to coordinated moonshots',
    text: 'Science, energy, education, health, computation and planetary infrastructure all benefit from better coordination machinery.'
  },
]

export default function ManifestoPage() {
  return (
    <OmegaShell>
      <section className="py-8 md:py-14">
        <p className="small-label mb-4">Manifesto</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-5xl">A philosophical and technical manifesto for the future of coordination.</h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Omega DAO is based on one central question: if humanity is entering an era of planetary networks, AI systems,
          decentralized infrastructure and digitally-native communities, what should the operating system of collective action look like?
        </p>
      </section>

      <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8 py-8">
        <div className="glass rounded-[2rem] p-7 md:p-9">
          <p className="small-label mb-4">Core position</p>
          <div className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            Omega DAO imagines that the next leap in civilization may come not only from faster machines,
            but from better systems for humans to think, decide and build together.
          </div>
        </div>
        <div className="glass rounded-[2rem] p-7 md:p-9">
          <p className="small-label mb-4">Interpretive influences</p>
          <p className="text-slate-300 leading-8">
            The intellectual atmosphere of this page is inspired by themes often associated with Vitalik Buterin’s public
            reflections on governance, public goods and credible neutrality, as well as post-Westphalian thinking about how
            networked communities may organize beyond traditional geopolitical assumptions. It is deliberately interpretive,
            not a quotation project.
          </p>
          <p className="mt-4 text-slate-400 leading-8">
            Omega DAO therefore combines philosophy with systems design: not merely “what should the future be?”, but “what software,
            interfaces, data structures and governance processes would make that future legible and operable?”
          </p>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 gap-5">
        {manifestoPoints.map((item) => (
          <div key={item.title} className="glass rounded-[1.75rem] p-6 md:p-7 card-hover">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Thesis</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="mt-4 text-slate-400 leading-8">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="py-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_36%),rgba(255,255,255,0.04)] p-8 md:p-10">
          <p className="small-label mb-4">Future statement</p>
          <div className="text-3xl md:text-5xl font-black tracking-[-0.05em] leading-tight max-w-5xl">
            The future needs systems that can coordinate intelligence without suffocating freedom, scale collaboration without erasing individuality,
            and build trust without depending entirely on opaque power.
          </div>
          <p className="mt-6 text-slate-300 max-w-4xl text-lg leading-8">
            Omega DAO is where that ambition becomes software architecture.
          </p>
        </div>
      </section>
    </OmegaShell>
  )
}
