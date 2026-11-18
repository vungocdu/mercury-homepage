'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin brand-blue reading-progress line on the header's bottom edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.3 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-[#2047F4] via-[#5E7DF8] to-[#AFC0FF]"
    />
  )
}
