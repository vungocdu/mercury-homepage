'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, projects, industries, ui, work, type IndustryKey } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import { ProjectCard } from '@/components/site/Cards'
import CtaBand from '@/components/site/CtaBand'

export default function WorkPage() {
  const { l } = useLanguage()
  const [filter, setFilter] = useState<'all' | IndustryKey>('all')
  const list = filter === 'all' ? projects : projects.filter((p) => p.industry === filter)

  const pill = (active: boolean) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active ? 'text-slate-900' : 'text-slate-800 hover:text-[#2047F4]'
    }`

  return (
    <>
      <PageHero
        eyebrow="work"
        title={l(work.title)}
        text={l(work.text)}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[3].label) }]}
      />
      <section className="bg-white section-y">
        <div className="container-custom">
          <div className="mb-10 flex flex-wrap gap-2" role="tablist">
            {[{ key: 'all' as const, label: ui.all }, ...industries].map((f) => {
              const active = filter === f.key
              return (
                <button key={f.key} role="tab" aria-selected={active} onClick={() => setFilter(f.key)} className={pill(active)}>
                  {active && (
                    <motion.span
                      layoutId="work-filter"
                      className="absolute inset-0 rounded-full pill-grad"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {!active && <span className="absolute inset-0 rounded-full glass-card" />}
                  <span className="relative">{l(f.label)}</span>
                </button>
              )
            })}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
