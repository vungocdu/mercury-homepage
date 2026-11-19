'use client'

import Link from '@/components/site/LocalizedLink'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { home, ui } from '@/lib/content'
import GlowArc from './site/GlowArc'

export default function Hero() {
  const { l } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-white pt-28 text-slate-900">
      {/* volumetric glow rings, top right; masked so there is no hard edge anywhere */}
      <div className="fade-bottom pointer-events-none absolute -right-[18rem] -top-[22rem] h-[62rem] w-[62rem] max-w-none">
        <GlowArc className="h-full w-full" />
      </div>

      <div className="container-custom relative z-10 pt-10 lg:pt-16">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-4 text-slate-600">
          Mercury Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-[0.01em] sm:text-5xl xl:text-[3.6rem]"
        >
          <span className="text-gradient-silver">{l(home.title1)}</span>
          <br className="hidden sm:block" /> <span className="text-gradient-blue">{l(home.title2)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          {l(home.subtitle)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="group pill-grad inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white shadow-[0_0_34px_rgb(94_125_248/0.4)] transition hover:-translate-y-0.5"
          >
            {l(ui.cta)}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:border-[#2047F4] hover:text-[#2047F4]"
          >
            {l(ui.viewAllProjects)}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
