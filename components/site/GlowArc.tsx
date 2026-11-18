'use client'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

/**
 * Volumetric glowing ring (torus-like). Each ring is painted in four layers — wide soft bloom, mid glow,
 * hot core and a hairline highlight — with a gradient along the stroke so light "wraps" the shape.
 * A second ring sits behind and moves slightly differently with the pointer for parallax depth.
 *
 * Performance: each ring lives in its own absolutely-positioned layer and the pointer parallax moves
 * that layer with a CSS transform (percent of its own box = the same distance as the SVG-unit offsets
 * on the 1200-unit viewBox). Moving a layer is compositor-only, so the blurred SVG is not re-rasterized
 * on every mouse move.
 */

// Defined at module scope so React does not remount the rings on every render.
function Ring({ r, w, id }: { r: number; w: number; id: string }) {
  return (
    <g fill="none">
      <circle cx="600" cy="600" r={r} stroke={`url(#${id})`} strokeWidth={w * 5} filter="url(#blur-xl)" opacity="0.45" />
      <circle cx="600" cy="600" r={r} stroke={`url(#${id})`} strokeWidth={w * 2.2} filter="url(#blur-md)" opacity="0.8" />
      <circle cx="600" cy="600" r={r} stroke={`url(#${id})`} strokeWidth={w} filter="url(#blur-sm)" />
      <circle cx="600" cy="600" r={r} stroke={`url(#${id}-hi)`} strokeWidth="1.6" />
    </g>
  )
}

export default function GlowArc({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 18 })
  const sy = useSpring(my, { stiffness: 40, damping: 18 })
  useEffect(() => {
    if (reduce) return
    const on = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', on, { passive: true })
    return () => window.removeEventListener('mousemove', on)
  }, [mx, my, reduce])
  // Offsets in percent of the layer box (1200 viewBox units -> 1200 units = 100%).
  // bx: 14 units -> 1.1667%, by: 10 units -> 0.8333%, fx: 26 units -> 2.1667%, fy: 18 units -> 1.5%.
  const bx = useTransform(sx, [-0.5, 0.5], ['1.1667%', '-1.1667%'])
  const by = useTransform(sy, [-0.5, 0.5], ['0.8333%', '-0.8333%'])
  const fx = useTransform(sx, [-0.5, 0.5], ['-2.1667%', '2.1667%'])
  const fy = useTransform(sy, [-0.5, 0.5], ['-1.5%', '1.5%'])

  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden>
      {/* shared gradients + blur filters (0x0 svg, referenced by url(#id) from the layers below) */}
      <svg width="0" height="0" className="absolute" focusable="false" aria-hidden>
        <defs>
          <filter id="blur-xl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="46" /></filter>
          <filter id="blur-md" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="16" /></filter>
          <filter id="blur-sm" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4" /></filter>
          {/* light wraps the ring: transparent top-left → steel → white-hot bottom-right → fades */}
          <linearGradient id="arc-a" gradientUnits="userSpaceOnUse" x1="150" y1="250" x2="1050" y2="950">
            <stop offset="0" stopColor="#5E7DF8" stopOpacity="0" />
            <stop offset="0.35" stopColor="#2047F4" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#5E7DF8" stopOpacity="1" />
            <stop offset="1" stopColor="#96ABFB" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="arc-a-hi" gradientUnits="userSpaceOnUse" x1="150" y1="250" x2="1050" y2="950">
            <stop offset="0.3" stopColor="#2047F4" stopOpacity="0" />
            <stop offset="0.8" stopColor="#2047F4" stopOpacity="0.9" />
            <stop offset="1" stopColor="#2047F4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="arc-b" gradientUnits="userSpaceOnUse" x1="150" y1="200" x2="1050" y2="1000">
            <stop offset="0.2" stopColor="#122AA3" stopOpacity="0" />
            <stop offset="0.7" stopColor="#2047F4" stopOpacity="0.8" />
            <stop offset="1" stopColor="#5E7DF8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="arc-b-hi" gradientUnits="userSpaceOnUse" x1="150" y1="200" x2="1050" y2="1000">
            <stop offset="0.5" stopColor="#96ABFB" stopOpacity="0" />
            <stop offset="1" stopColor="#96ABFB" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { x: bx, y: by, willChange: 'transform' }}
      >
        <svg viewBox="0 0 1200 1200" className="h-full w-full overflow-visible">
          <Ring r={470} w={12} id="arc-b" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { x: fx, y: fy, willChange: 'transform' }}
      >
        <svg viewBox="0 0 1200 1200" className="h-full w-full overflow-visible">
          <Ring r={380} w={16} id="arc-a" />
        </svg>
      </motion.div>
    </div>
  )
}
