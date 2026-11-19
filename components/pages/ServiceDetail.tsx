'use client'

import Link from '@/components/site/LocalizedLink'
import { Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, services, projects, ui } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { ServiceCard, ProjectCard } from '@/components/site/Cards'
import { serviceIcons } from '@/components/site/icons'
import CtaBand from '@/components/site/CtaBand'

export default function ServiceDetail({ slug }: { slug: string }) {
  const { l } = useLanguage()
  const s = services.find((x) => x.slug === slug)
  if (!s) return null
  const Icon = serviceIcons[s.icon]
  const related = projects.filter((p) => s.related.includes(p.slug))
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={s.tag.toLowerCase()}
        title={l(s.title)}
        text={l(s.short)}
        crumbs={[
          { label: l(nav[0].label), href: '/' },
          { label: l(nav[2].label), href: '/services' },
          { label: l(s.title) },
        ]}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#2047F4]">
          <Icon className="h-7 w-7" />
        </span>
      </PageHero>

      <section className="bg-white section-y">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <p className="text-xl leading-relaxed text-slate-800 lg:text-2xl">{l(s.intro)}</p>
            </Reveal>

            <h2 className="eyebrow mb-5 mt-14 text-[#2047F4]">
              <span className="opacity-60">{'// '}</span>
              {l(ui.capabilities)}
            </h2>
            <ul className="space-y-3">
              {s.items.map((it, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="flex items-start gap-4 glass-card p-6">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#2047F4]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-900">{l(it)}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <h2 className="eyebrow mb-5 mt-14 text-[#2047F4]">
              <span className="opacity-60">{'// '}</span>
              {l(ui.useCases)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {s.cases.map((c, i) => (
                <div key={i} className="glass-card p-6 font-medium text-slate-900">
                  {l(c)}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-lg bg-white p-8 text-slate-900 border border-slate-200 shadow-[0_24px_60px_-24px_rgb(32_71_244/0.25)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2047F4]/15 orb" aria-hidden />
              <h3 className="eyebrow relative text-[#2047F4]">{l(ui.stack)}</h3>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span key={t} className="rounded-md border border-mercury-blue-300/25 bg-slate-50 px-3 py-1.5 text-xs text-slate-800">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="group relative mt-8 flex items-center justify-center gap-2 rounded-full pill-grad border border-white/25 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                {l(ui.requestQuote)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white section-y">
          <div className="container-custom">
            <SectionHeading eyebrow="work" title={l(ui.relatedProjects)} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="services" title={l(ui.otherServices)} />
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <ServiceCard s={o} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
