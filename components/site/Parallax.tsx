'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Scroll-linked depth: the child drifts at a different speed than the page.
 * Position is a pure function of scroll (always from the live value), smoothed by a
 * critically-damped spring so it never jitters or lags behind the finger/wheel.
 */
export default function Parallax({
  children,
  range = 60,
  start = false,
  className,
}: {
  children: ReactNode
  /** px travelled from one end of the viewport pass to the other */
  range?: number
  /** true for elements that begin at the top of the page (progress starts at 0) */
  start?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: start ? ['start start', 'end start'] : ['start end', 'end start'],
  })
  const raw = useTransform(scrollYProgress, [0, 1], start ? [0, range] : [range, -range])
  const y = useSpring(raw, { stiffness: 140, damping: 26, mass: 0.4 })
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  )
}
