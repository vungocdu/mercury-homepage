'use client'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

/**
 * Hero artwork in the deck style: a glowing circular "platform" made of concentric ellipses
 * with light beams rising from it. Pointer movement tilts the platform for depth.
 */
export default function HeroVisual() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 16 })
  const sy = useSpring(my, { stiffness: 50, damping: 16 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4])
  const shiftX = useTransform(sx, [-0.5, 0.5], [-20, 20])
  const rings = [46, 38, 30, 22, 14]

  return (
    <div className="relative mx-auto aspect-[800/330] w-full max-w-5xl" aria-hidden>
      {/* soft glow under the platform */}
      <div className="fade-edges absolute inset-x-[4%] bottom-0 h-[85%] bg-[#2047F4]/10" />

      <motion.div style={reduce ? undefined : { rotateX, rotateY, x: shiftX, transformPerspective: 1200 }} className="absolute inset-0">
        <svg viewBox="0 100 800 330" className="h-full w-full">
          <defs>
            <radialGradient id="plat" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C3D0FD" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#5E7DF8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="beam" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#5E7DF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5E7DF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* beams */}
          {[190, 270, 340, 460, 530, 610].map((x, i) => (
            <g key={x}>
              <rect x={x} y={120 + (i % 3) * 26} width="1.2" height={110 - (i % 3) * 10} fill="url(#beam)" />
              <circle cx={x + 0.6} cy={118 + (i % 3) * 26} r="2" fill="#2047F4" className="beam" style={{ animationDelay: `${i * 0.6}s` }} />
            </g>
          ))}

          {/* platform: concentric ellipses */}
          <ellipse cx="400" cy="305" rx="330" ry="86" fill="none" stroke="#96ABFB" strokeOpacity="0.55" />
          <ellipse cx="400" cy="305" rx="290" ry="74" fill="none" stroke="#96ABFB" strokeOpacity="0.4" />
          <ellipse cx="400" cy="305" rx="215" ry="54" fill="url(#plat)" opacity="0.55" />
          {rings.map((r, i) => (
            <ellipse key={r} cx="400" cy="305" rx={r * 4.2} ry={r * 1.08} fill="none" stroke="#2047F4" strokeOpacity={0.35 + i * 0.12} strokeWidth={i === 2 ? 2.5 : 1.2} />
          ))}
          <ellipse cx="400" cy="305" rx="70" ry="17" fill="#DCE5FF" opacity="0.9" />
          <ellipse cx="400" cy="305" rx="150" ry="38" fill="none" stroke="#C3D0FD" strokeWidth="3" opacity="0.55" className="ring-pulse" style={{ transformOrigin: '400px 305px' }} />
          <ellipse cx="400" cy="305" rx="150" ry="38" fill="none" stroke="#C3D0FD" strokeWidth="2" opacity="0.4" className="ring-pulse" style={{ transformOrigin: '400px 305px', animationDelay: '2.5s' }} />
        </svg>
      </motion.div>
    </div>
  )
}
