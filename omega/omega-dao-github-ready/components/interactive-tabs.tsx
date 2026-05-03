"use client"

import { useState } from 'react'

export function InteractiveTabs({
  items,
}: {
  items: { key: string; title: string; subtitle?: string; content: React.ReactNode }[]
}) {
  const [active, setActive] = useState(items[0]?.key)
  const current = items.find((x) => x.key === active) ?? items[0]

  return (
    <div className="grid lg:grid-cols-[290px_1fr] gap-5">
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`w-full text-left rounded-2xl border p-4 transition ${active === item.key ? 'border-cyan-400/30 bg-cyan-400/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-mono">{item.key}</div>
            <div className="mt-1 font-bold text-base">{item.title}</div>
            {item.subtitle && <div className="text-sm text-slate-400 mt-1">{item.subtitle}</div>}
          </button>
        ))}
      </div>

      <div className="glass rounded-[2rem] p-6 md:p-8 min-h-[24rem]">
        <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-mono">{current.key}</div>
        <h3 className="mt-2 text-3xl font-black tracking-tight">{current.title}</h3>
        {current.subtitle && <p className="mt-2 text-slate-400">{current.subtitle}</p>}
        <div className="mt-6 text-slate-300 leading-8">{current.content}</div>
      </div>
    </div>
  )
}
