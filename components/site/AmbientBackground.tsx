'use client'

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Fixed, page-wide light layers that move at three different speeds while scrolling,
 * giving foreground / mid / background separation behind a continuous canvas.
 */
export default function AmbientBackground() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.5 })
  const a = useTransform(smooth, [0, 1], reduce ? [0, 0] : [0, -380])
  const b = useTransform(smooth, [0, 1], reduce ? [0, 0] : [0, 260])
  const c = useTransform(smooth, [0, 1], reduce ? [0, 0] : [0, -160])
  const grid = useTransform(smooth, [0, 1], reduce ? [0, 0] : [0, -90])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: grid }} className="absolute inset-[-10%] bg-grid-dark opacity-70" />
      <motion.div style={{ y: a }} className="orb absolute -right-40 top-[10%] h-[34rem] w-[34rem] rounded-full bg-[#2047F4]/12" />
      <motion.div style={{ y: b }} className="orb absolute -left-48 top-[45%] h-[30rem] w-[30rem] rounded-full bg-[#3F63F6]/9" />
      <motion.div style={{ y: c }} className="orb absolute right-[12%] top-[85%] h-[26rem] w-[26rem] rounded-full bg-[#5E7DF8]/10" />
    </div>
  )
}
