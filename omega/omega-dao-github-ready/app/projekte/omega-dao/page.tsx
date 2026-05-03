import Link from 'next/link'
import { OmegaShell } from '@/components/omega-shell'
import { OmegaHero } from '@/components/omega-hero'
import { omegaPillars, civilizationTracks, omegaLayers, smartCityModules } from '@/lib/omega-vision-data'

const principles = [
  ['Truth over hype', 'Große Zukunftsvision, aber ehrlich als Konzept, Prototyp und Engineering-Roadmap dargestellt.'],
  ['Build small, think civilization-scale', 'Omega DAO denkt groß, wird aber in kleinen, prüfbaren Software-Modulen umgesetzt.'],
  ['Human + AI + swarm coordination', 'Menschen, KI-Systeme und Schwarmintelligenz werden als koordinierte Entscheidungsarchitektur gedacht.'],
  ['Transparency by design', 'Entscheidungen, Rollen, Abstimmungen und Ausführungen sollen nachvollziehbar und auditierbar werden.'],
  ['Decentralized intelligence', 'Wissen soll nicht in einem Zentrum stecken, sondern über Netzwerke, KI und Community-Prozesse verteilt werden.'],
  ['Smart civilization infrastructure', 'Langfristig geht es um Werkzeuge für Bildung, Energie, Städte, Forschung, Gesundheit und große Zukunftsprojekte.'],
]

const quickLinks = [
  ['Live Dashboard', '/projekte/omega-dao/dashboard', 'Interaktives Command Center mit Governance Simulator.'],
  ['Manifesto', '/projekte/omega-dao/manifesto', 'Philosophische und technische Vision.'],
  ['Architecture', '/projekte/omega-dao/architecture', 'Layered Architecture für Governance, KI und Blockchain.'],
  ['Governance', '/projekte/omega-dao/governance', 'Mechanismen wie Delegation, Moral Veto und Forking.'],
  ['Civilization Stack', '/projekte/omega-dao/civilization', 'Zukunftsbereiche: Bildung, Energie, Gesundheit, Städte.'],
  ['Smart Cities', '/projekte/omega-dao/smart-cities', 'Digitale Infrastruktur für Städte und Regionen.'],
  ['Swarm AI', '/projekte/omega-dao/swarm-ai', 'Dezentrale KI und Schwarmintelligenz.'],
  ['Infographic', '/projekte/omega-dao/infographic', 'Visuelle Systemkarte.'],
  ['Modules', '/projekte/omega-dao/modules', 'Modularer Systemkatalog.'],
]

export default function OmegaDaoMainPage() {
  return (
    <OmegaShell>
      <OmegaHero />

      <section className="py-14 md:py-20">
        <p className="small-label mb-4">Strategic Thesis</p>
        <h2 className="section-title max-w-6xl">
          Omega DAO is a future coordination operating system for decentralized intelligence.
        </h2>
        <p className="mt-6 text-slate-300 leading-8 max-w-4xl text-lg">
          Omega DAO verbindet eine langfristige Vision mit einem konkreten Software-Ansatz: dezentrale Governance,
          Blockchain-Transparenz, KI-gestützte Koordination, Schwarmintelligenz, Smart-City-Infrastruktur und modulare digitale
          Systeme. Es ist kein fertiges Produkt und keine politische Organisation, sondern ein technisches Portfolio-Projekt,
          das zeigt, wie große Zukunftsideen in baubare Software-Architektur übersetzt werden können.
        </p>
      </section>

      <section className="py-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {omegaPillars.map((pillar) => (
          <div key={pillar.title} className="lux-card p-6 md:p-7 card-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="size-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 grid place-items-center text-xl">⬡</div>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-xs text-slate-300 font-mono">{pillar.status}</span>
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight">{pillar.title}</h3>
            <p className="mt-2 text-cyan-300 text-sm font-mono">{pillar.subtitle}</p>
            <p className="mt-4 text-slate-400 leading-7">{pillar.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pillar.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 md:py-20 grid lg:grid-cols-[1fr_0.9fr] gap-6 md:gap-8 items-start">
        <div className="glass rounded-[2rem] p-7 md:p-9">
          <p className="small-label mb-4">Civilization Frame</p>
          <h2 className="section-title">
            Inspired by network civilization, Ethereum-style public-goods thinking and post-Westphalian imagination.
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            Die Seite nutzt keine kopierten Texte und keine direkten Zitate. Sie interpretiert breite Ideen: glaubwürdige
            Neutralität, Public Goods, dezentrale Koordination, Netzwerk-Staaten, digitale Institutionen und die Frage,
            wie Menschen in einer globalen, KI-gestützten Zukunft besser zusammenarbeiten können.
          </p>
          <p className="mt-4 text-slate-400 leading-8">
            Omega DAO stellt diese Ideen als Engineering-Projekt dar: Interfaces, Datenmodelle, Smart Contracts,
            KI-Agenten, Governance-Mechanismen, Audit Logs und Roadmaps statt bloßer Rhetorik.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_36%)] p-7 md:p-9">
          <p className="small-label mb-4">Future Domains</p>
          <div className="grid grid-cols-2 gap-3">
            {civilizationTracks.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200 font-semibold">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Core formula</div>
            <div className="mt-3 text-lg md:text-xl font-semibold leading-8">
              Future Coordination = Governance + AI + Blockchain + Swarm Intelligence + Smart Infrastructure
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <p className="small-label mb-4">Omega Civilization Stack</p>
        <h2 className="section-title max-w-5xl">A layered model for future digital institutions.</h2>
        <div className="mt-8 lux-card-strong p-5 md:p-7">
          <div className="space-y-3">
            {omegaLayers.map(([code, title, text]) => (
              <div key={code} className="grid md:grid-cols-[90px_260px_1fr] gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 card-hover">
                <div className="text-cyan-300 font-mono text-lg font-black">{code}</div>
                <div className="text-xl font-bold">{title}</div>
                <div className="text-slate-400 leading-7">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <p className="small-label mb-4">Smart City Vision</p>
        <h2 className="section-title max-w-5xl">From digital governance to intelligent cities and regions.</h2>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {smartCityModules.map(([title, text]) => (
            <div key={title} className="lux-card p-6 card-hover">
              <div className="size-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 grid place-items-center text-xl">◉</div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {principles.map(([title, text]) => (
          <div key={title} className="glass rounded-[1.75rem] p-6 card-hover">
            <div className="size-11 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 grid place-items-center text-xl mb-4">⬡</div>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            <p className="mt-3 text-slate-400 leading-7">{text}</p>
          </div>
        ))}
      </section>

      <section className="py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div>
            <p className="small-label mb-3">Explore the expanded universe</p>
            <h2 className="section-title">Omega DAO multi-page system</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {quickLinks.map(([label, href, desc]) => (
            <Link key={href} href={href} className="glass rounded-[1.5rem] p-6 card-hover">
              <div className="text-cyan-300 font-mono text-xs uppercase tracking-[0.18em]">Page</div>
              <div className="mt-2 text-2xl font-bold tracking-tight">{label}</div>
              <div className="mt-4 text-slate-400 leading-7">{desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </OmegaShell>
  )
}
