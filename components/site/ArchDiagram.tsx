'use client'

import { motion } from 'framer-motion'

/** Animated platform diagram: sources -> Mercury core -> outputs, with data particles flowing along the links. */
const nodes = {
  l1: { x: 40, y: 50, t: 'DATA' },
  l2: { x: 40, y: 150, t: 'ERP / CRM' },
  l3: { x: 40, y: 250, t: 'DEVICES' },
  r1: { x: 360, y: 50, t: 'WEB' },
  r2: { x: 360, y: 150, t: 'MOBILE' },
  r3: { x: 360, y: 250, t: 'AI AGENT' },
}
const core = { x: 200, y: 150 }

export default function ArchDiagram() {
  const links = [
    ...(['l1', 'l2', 'l3'] as const).map((k) => ({ from: nodes[k], to: core })),
    ...(['r1', 'r2', 'r3'] as const).map((k) => ({ from: core, to: nodes[k] })),
  ]
  return (
    <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="Mercury platform architecture">
      <defs>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="#2047F4" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2047F4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {links.map((ln, i) => {
        const d = `M${ln.from.x} ${ln.from.y} C ${(ln.from.x + ln.to.x) / 2} ${ln.from.y}, ${(ln.from.x + ln.to.x) / 2} ${ln.to.y}, ${ln.to.x} ${ln.to.y}`
        return (
          <g key={i}>
            <path d={d} fill="none" stroke="#5E7DF8" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 5" className="animate-dash" />
            <circle r="3" fill="#96ABFB">
              <animateMotion dur={`${2.4 + (i % 3) * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} path={d} />
            </circle>
          </g>
        )
      })}

      {/* core */}
      <circle cx={core.x} cy={core.y} r="70" fill="url(#core-glow)" />
      <motion.circle
        cx={core.x}
        cy={core.y}
        r="34"
        fill="none"
        stroke="#5E7DF8"
        strokeWidth="1"
        animate={{ r: [34, 46], opacity: [0.7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
      />
      <circle cx={core.x} cy={core.y} r="30" fill="#2047F4" />
      <circle cx={core.x} cy={core.y} r="30" fill="none" stroke="#96ABFB" strokeOpacity="0.6" />
      <text x={core.x} y={core.y + 3} textAnchor="middle" fontSize="9" fontFamily="var(--font-sans)" fill="#fff" letterSpacing="1.5">
        MERCURY
      </text>

      {Object.values(nodes).map((n, i) => (
        <g key={i}>
          <rect x={n.x - 36} y={n.y - 13} width="72" height="26" rx="7" fill="#FFFFFF" stroke="#2047F4" strokeOpacity="0.45" />
          <text x={n.x} y={n.y + 3.5} textAnchor="middle" fontSize="8.5" fontFamily="var(--font-sans)" fill="#122AA3" letterSpacing="1">
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  )
}
