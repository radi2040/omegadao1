"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/projekte/omega-dao', label: 'Overview' },
  { href: '/projekte/omega-dao/dashboard', label: 'Dashboard' },
  { href: '/projekte/omega-dao/manifesto', label: 'Manifesto' },
  { href: '/projekte/omega-dao/architecture', label: 'Architecture' },
  { href: '/projekte/omega-dao/governance', label: 'Governance' },
  { href: '/projekte/omega-dao/roadmap', label: 'Roadmap' },
  { href: '/projekte/omega-dao/infographic', label: 'Infographic' },
  { href: '/projekte/omega-dao/modules', label: 'Modules' },
  { href: '/projekte/omega-dao/civilization', label: 'Civilization' },
  { href: '/projekte/omega-dao/smart-cities', label: 'Smart Cities' },
  { href: '/projekte/omega-dao/swarm-ai', label: 'Swarm AI' },
]

export function OmegaShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_95%_15%,rgba(139,92,246,0.10),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/projekte/omega-dao" className="flex items-center gap-3 shrink-0 group">
            <div className="size-9 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 grid place-items-center shadow-[0_0_35px_rgba(34,211,238,0.18)] group-hover:scale-105 transition">⬡</div>
            <div>
              <div className="font-black tracking-wide">OMEGA <span className="text-cyan-400">DAO</span></div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.18em]">Vision OS for Civilization</div>
            </div>
          </Link>

          <nav className="hidden 2xl:flex items-center gap-2">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm transition ${active ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 shadow-[0_0_24px_rgba(34,211,238,0.10)]' : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Prototype Universe · Premium Build
          </div>
        </div>

        <div className="2xl:hidden overflow-x-auto border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex gap-2 py-2 min-w-max">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs transition ${active ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/20' : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 relative z-10">{children}</div>

      <footer className="border-t border-white/10 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="text-2xl font-black">Omega DAO</div>
            <p className="mt-2 text-slate-400 max-w-xl leading-7">
              A cinematic, technical portfolio universe by Amine Radi: decentralized coordination, AI-assisted governance,
              swarm intelligence, transparent execution and modular infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
