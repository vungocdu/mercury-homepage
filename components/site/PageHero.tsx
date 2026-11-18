'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import GlowArc from './GlowArc'
import { useLanguage } from '@/contexts/LanguageContext'
import { eyebrows } from '@/lib/content'

export type Crumb = { label: string; href?: string }

/** Dark blueprint hero used by every inner page. Orbs move at different speeds on scroll (depth). */
export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  children,
}: {
  eyebrow: string
  title: ReactNode
  text?: string
  crumbs?: Crumb[]
  children?: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const { l } = useLanguage()
  const label = eyebrows[eyebrow] ? l(eyebrows[eyebrow]) : eyebrow
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const slow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const fast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 240])
  const fade = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.2])

  return (
    <section ref={ref} className="page-hero relative overflow-hidden bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 text-slate-900">
      <div className="fade-bottom absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-dark" />
      <motion.div style={{ y: slow }} className="absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-[#5E7DF8]/16 orb animate-orb" aria-hidden />
      <motion.div style={{ y: fast }} className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-[#2047F4]/8 orb" aria-hidden />
      <GlowArc className="absolute -right-52 -top-56 h-[40rem] w-[40rem] max-w-none" />
      </div>
      <motion.div style={{ opacity: fade }} className="container-custom relative z-10">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1 text-sm text-slate-500">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="text-[#2047F4] hover:text-slate-900 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-900">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-4 h-4 opacity-50" />}
              </span>
            ))}
          </nav>
        )}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4 text-slate-600"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-3xl sm:text-4xl lg:text-[3.4rem] font-bold tracking-[0.01em] leading-[1.15] text-gradient-silver"
        >
          {title}
        </motion.h1>
        <span className="heading-bar mt-6" aria-hidden />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg lg:text-xl leading-relaxed text-slate-600"
          >
            {text}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </motion.div>
    </section>
  )
}
