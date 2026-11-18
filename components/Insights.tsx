'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { home, insights } from '@/lib/content'
import SectionHeading from './site/SectionHeading'
import Reveal from './site/Reveal'
import TiltCard from './site/TiltCard'

export function InsightCard({ tag, title, soon }: { tag: string; title: string; soon: string }) {
  return (
    <TiltCard dark>
      <article className="flex h-full flex-col glass-card p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="eyebrow rounded-md bg-slate-50 px-2.5 py-1 text-[#2047F4]">{tag}</span>
          <span className="text-[11px] text-slate-500">{soon}</span>
        </div>
        <h3 className="flex-1 text-lg font-semibold normal-case leading-snug text-slate-900">{title}</h3>
      </article>
    </TiltCard>
  )
}

/** Home: 3 planned topics + link to /insights */
export default function Insights() {
  const { l } = useLanguage()
  return (
    <section className="bg-white section-y">
      <div className="container-custom">
        <SectionHeading eyebrow="insights" title={l(home.insightsTitle)} text={l(home.insightsText)} />
        <div className="grid gap-6 md:grid-cols-3">
          {insights.topics.slice(0, 3).map((t, i) => (
            <Reveal key={t.tag} delay={i * 0.08}>
              <InsightCard tag={t.tag} title={l(t.t)} soon={l(insights.soon)} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/insights" className="group inline-flex items-center gap-2 font-semibold text-[#2047F4]">
            Insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
