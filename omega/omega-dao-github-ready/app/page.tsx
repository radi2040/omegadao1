import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center glass rounded-3xl p-10">
        <p className="small-label mb-4">Amine Radi · Portfolio System</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight omega-gradient-text">Omega DAO Universe</h1>
        <p className="mt-6 text-slate-300 leading-8">
          Multi-page deep-tech concept site for Omega DAO. Start with the main landing page and explore architecture,
          manifesto, governance, roadmap and infographic sections.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/projekte/omega-dao" className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold">Open Omega DAO</Link>
        </div>
      </div>
    </main>
  )
}
