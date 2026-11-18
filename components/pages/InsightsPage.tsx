'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { nav, insights } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import { InsightCard } from '@/components/Insights'
import CtaBand from '@/components/site/CtaBand'

export default function InsightsPage() {
  const { l } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow="insights"
        title={l(insights.title)}
        text={l(insights.text)}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[4].label) }]}
      />
      <section className="bg-white section-y">
        <div className="container-custom">
          <p className="mb-10 glass-card px-6 py-5 text-slate-600">{l(insights.note)}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.topics.map((t, i) => (
              <Reveal key={t.tag} delay={(i % 3) * 0.08}>
                <InsightCard tag={t.tag} title={l(t.t)} soon={l(insights.soon)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
