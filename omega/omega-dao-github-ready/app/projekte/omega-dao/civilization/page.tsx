import { OmegaShell } from '@/components/omega-shell'
import { civilizationTracks, omegaLayers } from '@/lib/omega-vision-data'

export default function CivilizationPage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Civilization Stack</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-6xl">
          Omega DAO as a prototype for future civilization infrastructure.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Diese Seite beschreibt die größte Vision: Omega DAO als Denkmodell für eine Zukunft, in der digitale Institutionen,
          KI, Blockchain, Schwarmintelligenz und Smart Infrastructure zusammenarbeiten, um große gesellschaftliche und technologische
          Probleme besser zu koordinieren.
        </p>
      </section>

      <section className="grid xl:grid-cols-[0.9fr_1.1fr] gap-6 py-8">
        <div className="lux-card-strong p-7 md:p-9">
          <p className="small-label mb-4">Post-Westphalian imagination</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            From territory-first institutions to networked coordination systems.
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            Ohne politische Versprechen zu machen, denkt Omega DAO darüber nach, wie Communities, Gründer, Forscher,
            Entwickler und Städte über digitale Werkzeuge koordinierter handeln könnten. Die Idee ist nicht, Staaten zu ersetzen,
            sondern neue digitale Koordinationsschichten zu erforschen.
          </p>
          <p className="mt-4 text-slate-400 leading-8">
            Diese Schichten könnten langfristig helfen, Public Goods, Energie, Bildung, Gesundheit, Forschung und Infrastruktur
            transparenter und effizienter zu organisieren.
          </p>
        </div>

        <div className="lux-card p-7 md:p-9">
          <p className="small-label mb-4">Civilization Domains</p>
          <div className="grid grid-cols-2 gap-3">
            {civilizationTracks.map((track) => (
              <div key={track} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-slate-200 font-semibold">
                {track}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <p className="small-label mb-4">Layered model</p>
        <div className="lux-card-strong p-5 md:p-7">
          <div className="space-y-3">
            {omegaLayers.map(([code, title, text]) => (
              <div key={code} className="grid md:grid-cols-[90px_280px_1fr] gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 card-hover">
                <div className="text-cyan-300 font-mono text-lg font-black">{code}</div>
                <div className="text-xl font-bold">{title}</div>
                <div className="text-slate-400 leading-7">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          ['Education Grid', 'Globale Lernpfade, Mentoring, Skill-Nachweise und dezentrale Bildungssysteme.'],
          ['Energy Commons', 'Koordination von erneuerbarer Energie, Microgrids, Speicher und regionaler Resilienz.'],
          ['Research Network', 'Offene Forschungsprojekte, Peer Review, Finanzierung und transparente Meilensteine.'],
          ['Civic OS', 'Digitale Bürgerdienste, öffentliche Dashboards, transparente Verwaltung und Feedback-Schleifen.'],
        ].map(([title, text]) => (
          <div key={title} className="lux-card p-6 card-hover">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Future Track</div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">{title}</h3>
            <p className="mt-4 text-slate-400 leading-7">{text}</p>
          </div>
        ))}
      </section>
    </OmegaShell>
  )
}
