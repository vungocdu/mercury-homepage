'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { home } from '@/lib/content'
import Counter from './Counter'
import SectionHeading from './SectionHeading'

/** Circular progress stats (deck "goals" slide) */
export default function StatsRings() {
  const { l } = useLanguage()
  const R = 88
  const C = 2 * Math.PI * R
  return (
    <section className="section-glow relative overflow-hidden bg-white section-y">
      <div className="container-custom relative z-10">
        <SectionHeading eyebrow="numbers" title={l({ vi: 'Mercury trong một cái nhìn', en: 'Mercury at a glance', ja: '数字で見るMercury' })} />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {home.stats.map((s, i) => (
            <div key={i} className="relative mx-auto aspect-square w-full max-w-[16rem]">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                <circle cx="100" cy="100" r={R} fill="none" stroke="#E1E4EF" strokeWidth="14" />
                <motion.circle
                  cx="100" cy="100" r={R} fill="none" stroke="#2047F4" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={C}
                  initial={{ strokeDashoffset: C }}
                  whileInView={{ strokeDashoffset: C * (1 - [0.75, 0.6, 0.8, 0.9][i % 4]) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: i * 0.12, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-gradient-silver text-5xl font-bold">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-1 max-w-[9rem] text-xs font-medium tracking-wide text-slate-600">{l(s.label)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
