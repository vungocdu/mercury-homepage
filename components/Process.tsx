'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { home } from '@/lib/content'
import SectionHeading from './site/SectionHeading'
import Reveal from './site/Reveal'

/** 4-step delivery process as an open timeline: a rail that fills as you scroll, steps hang off it. */
export default function Process(_props: { dark?: boolean }) {
  const { l } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })

  return (
    <section className="relative section-y">
      <div className="container-custom relative z-10">
        <SectionHeading eyebrow="process" title={l(home.process.title)} />
        <div ref={ref} className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* rail (desktop) */}
          <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-slate-200 lg:block">
            <motion.div style={{ scaleX: reduce ? 1 : fill }} className="h-full origin-left bg-gradient-to-r from-[#2047F4] to-[#96ABFB]" />
          </div>
          {home.process.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pt-9 lg:pt-10">
                <span className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-[#2047F4] bg-white shadow-[0_0_0_4px_rgb(32_71_244/0.12)]" />
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-[#2047F4]">0{i + 1}</span>
                <h3 className="mb-3 mt-3 text-lg">{l(s.t)}</h3>
                <p className="max-w-[16rem] leading-relaxed">{l(s.d)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
