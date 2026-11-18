'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Scroll-reveal that "arrives from depth": rises, de-blurs and scales up from slightly
 * behind. Critically damped spring (no overshoot); reduced motion gets a plain fade.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, scale: 0.97, filter: 'blur(10px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        reduce
          ? { duration: 0.2 }
          : { type: 'spring', bounce: 0, duration: 0.9, delay, opacity: { duration: 0.5, delay }, filter: { duration: 0.6, delay } }
      }
    >
      {children}
    </motion.div>
  )
}
