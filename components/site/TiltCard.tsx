'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/** 3D tilt card with a pointer-following spotlight (adds depth on hover). */
export default function TiltCard({
  children,
  className = '',
  dark = false,
  max = 2,
}: {
  children: ReactNode
  className?: string
  dark?: boolean
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), { stiffness: 220, damping: 20 })
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), { stiffness: 220, damping: 20 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={reduce ? undefined : onMove}
        onMouseLeave={reduce ? undefined : onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className={`spot ${dark ? 'spot-dark' : ''} h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}
