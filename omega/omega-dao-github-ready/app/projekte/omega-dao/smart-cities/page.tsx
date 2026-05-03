import { OmegaShell } from '@/components/omega-shell'
import { smartCityModules } from '@/lib/omega-vision-data'

export default function SmartCitiesPage() {
  return (
    <OmegaShell>
      <section className="py-10">
        <p className="small-label mb-4">Smart Cities</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] max-w-6xl">
          Future cities need coordination intelligence, not only sensors.
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          Smart Cities in der Omega-DAO-Vision sind keine kalten Überwachungsmaschinen. Sie sind transparente, menschenorientierte
          Systeme, die Energie, Mobilität, Bildung, Gesundheit, Ressourcen und Verwaltung besser koordinieren können.
        </p>
      </section>

      <section className="lux-card-strong p-7 md:p-9 relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="relative grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
          <div>
            <p className="small-label mb-4">City Operating Layer</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              A city becomes intelligent when decisions, data and infrastructure become legible.
            </h2>
            <p className="mt-6 text-slate-300 leading-8">
              Omega DAO denkt Smart Cities als modulare Infrastruktur: öffentliche Dashboards, Energiekoordination,
              digitale Bürgerdienste, transparente Beschlüsse, offene Daten und KI-gestützte Planung.
            </p>
          </div>
          <div className="relative aspect-square rounded-full border border-cyan-400/20 bg-cyan-400/5 grid place-items-center">
            <div className="absolute inset-8 rounded-full border border-violet-400/20" />
            <div className="absolute inset-20 rounded-full border border-emerald-400/20" />
            <div className="text-center">
              <div className="text-6xl">◉</div>
              <div className="mt-3 text-cyan-300 font-mono uppercase tracking-[0.18em] text-xs">Smart Region Core</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {smartCityModules.map(([title, text]) => (
          <div key={title} className="lux-card p-6 md:p-7 card-hover">
            <div className="size-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 grid place-items-center text-xl">◉</div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight">{title}</h3>
            <p className="mt-4 text-slate-400 leading-7">{text}</p>
          </div>
        ))}
      </section>

      <section className="py-8 grid xl:grid-cols-4 gap-4">
        {[
          ['Sense', 'Daten aus Energie, Mobilität, Umwelt, Verwaltung und Versorgung werden sichtbar.'],
          ['Understand', 'KI und Analyse helfen, Zusammenhänge, Risiken und Engpässe zu erkennen.'],
          ['Decide', 'Governance-Prozesse machen Prioritäten, Kompromisse und Entscheidungen nachvollziehbar.'],
          ['Execute', 'Projekte, Teams, Budgets und Meilensteine werden transparent koordiniert.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">{title}</div>
            <p className="mt-4 text-slate-300 leading-7">{text}</p>
          </div>
        ))}
      </section>
    </OmegaShell>
  )
}
