'use client'

import { Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, careers, contact } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import TiltCard from '@/components/site/TiltCard'
import SectionHeading from '@/components/site/SectionHeading'

export default function CareersPage() {
  const { l } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow="careers"
        title={l(careers.title)}
        text={l(careers.text)}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[5].label) }]}
      />

      <section className="bg-white section-y">
        <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careers.perks.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <TiltCard dark>
                <div className="h-full glass-card p-7">
                  <span className="text-4xl font-light text-[#2047F4]">0{i + 1}</span>
                  <h3 className="mb-3 mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(p.t)}</h3>
                  <p className="leading-relaxed text-slate-600">{l(p.d)}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white section-y text-slate-900">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden />
        <div className="container-custom relative">
          <SectionHeading dark eyebrow="open roles" title={l(careers.openTitle)} text={l(careers.openText)} />
          <Reveal>
            <a
              href={`mailto:${contact.email}?subject=CV`}
              className="group inline-flex items-center gap-2 rounded-full pill-grad border border-white/25 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              {l(careers.send)} · {contact.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
