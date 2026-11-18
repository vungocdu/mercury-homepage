'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/** Deterministic PRNG so server and client render identical markup (no hydration mismatch). */
function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const rand = rng(42)
const POINTS = Array.from({ length: 46 }, () => ({
  x: rand() * 100,
  y: rand() * 100,
  z: -380 + rand() * 760,
  s: 2 + rand() * 3.5,
  o: 0.35 + rand() * 0.55,
}))
const CUBES = [
  { x: 9, y: 26, s: 96, z: 140, d: 28 },
  { x: 86, y: 18, s: 64, z: -90, d: 34 },
  { x: 80, y: 66, s: 120, z: 220, d: 40 },
  { x: 20, y: 70, s: 54, z: -160, d: 31 },
  { x: 50, y: 8, s: 40, z: -260, d: 26 },
]
const FACES = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6']

/**
 * Real 3D backdrop for the CTA band: a perspective grid floor, drifting wireframe cubes and
 * depth-scattered particles. Everything lives in one preserve-3d scene that tilts toward the pointer,
 * so near objects slide further than far ones (true parallax from depth, not from layers).
 */
export default function CtaScene() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 45, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 45, damping: 18, mass: 0.6 })
  const rotY = useTransform(sx, [-0.5, 0.5], [-11, 11])
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7])

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ perspective: '1100px', perspectiveOrigin: '50% 45%' }}>
      <div className={reduce ? 'absolute inset-0' : 'cta-sway absolute inset-0'} style={{ transformStyle: 'preserve-3d' }}>
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d', rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY }}
        >
          {/* perspective floor */}
          <div className="cta-floor" />

          {/* depth-scattered particles */}
          {POINTS.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-[#DDE6FF]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.s,
                height: p.s,
                opacity: p.o,
                transform: `translateZ(${p.z}px)`,
                boxShadow: '0 0 12px rgb(195 208 253 / 0.9)',
              }}
            />
          ))}

          {/* wireframe cubes */}
          {CUBES.map((c, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                width: c.s,
                height: c.s,
                transformStyle: 'preserve-3d',
                transform: `translateZ(${c.z}px)`,
              }}
            >
              <div
                className={reduce ? 'cube' : 'cube cube-spin'}
                style={{ ['--s' as string]: `${c.s}px`, animationDuration: `${c.d}s` }}
              >
                {FACES.map((f) => (
                  <i key={f} className={`cube-face ${f}`} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
