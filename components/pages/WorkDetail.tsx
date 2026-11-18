'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, LayoutDashboard, Clock, ClipboardCheck, Calculator, Gift, ReceiptText, UserSquare, ShieldCheck, Building2, Lock, Smartphone, Cloud, FileSignature } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, projects, industries, ui } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { ProjectCard } from '@/components/site/Cards'
import CtaBand from '@/components/site/CtaBand'
import ImageSlot from '@/components/site/ImageSlot'
import { media, mediaFocus } from '@/lib/media'
import { projectClients, workExtra, projectModules, moduleGroups, workGallery, workGalleryExtra, workMobile } from '@/lib/content-extra'
import TiltCard from '@/components/site/TiltCard'
import PhoneShowcase from '@/components/site/PhoneShowcase'

export default function WorkDetail({ slug }: { slug: string }) {
  const { l } = useLanguage()
  const idx = projects.findIndex((p) => p.slug === slug)
  const p = projects[idx]
  if (!p) return null
  const industry = industries.find((i) => i.key === p.industry)
  const client = projectClients[p.slug]
  const logoSrc = media[`work.${p.slug}.logo`]
  const clientPhoto = media[`work.${p.slug}.client`]
  const webShots = ['actiwell', 'tna-fujikin', 'casa-lsm', 'icommune', 'careearth-life', 'hmb-erp'].includes(p.slug) // wide web screenshots: stack full-width so the UI stays legible
  const shotRatio = p.slug === 'actiwell' ? 'aspect-[2.2/1]' : p.slug === 'icommune' ? 'aspect-[2/1]' : 'aspect-[2.07/1]'
  const modules = projectModules[p.slug]
  const groups = moduleGroups[p.slug]
  const moduleIcons = [LayoutDashboard, Clock, ClipboardCheck, Calculator, Gift, ReceiptText, UserSquare, ShieldCheck, Building2, Lock, Smartphone, Cloud, FileSignature]
  const gallery = workGallery[p.slug]
  const mobile = workMobile[p.slug]
  const more = [1, 2, 3].map((o) => projects[(idx + o) % projects.length])

  const steps = [
    { k: ui.overview, v: p.overview },
    { k: ui.challenge, v: p.challenge },
    { k: ui.solution, v: p.solution },
    { k: ui.results, v: p.result },
  ]

  return (
    <>
      <PageHero
        eyebrow={l(p.cluster)}
        title={l(p.name)}
        text={l(p.tagline)}
        crumbs={[
          { label: l(nav[0].label), href: '/' },
          { label: l(nav[3].label), href: '/work' },
          { label: l(p.name) },
        ]}
      />

      <section className="bg-white">
        <dl className="container-custom grid grid-cols-2 gap-6 py-8 md:grid-cols-3">
          <div>
            <dt className="eyebrow text-slate-500">{l(ui.industry)}</dt>
            <dd className="mt-1 font-semibold text-slate-900">{industry ? l(industry.label) : l(p.cluster)}</dd>
          </div>
          <div>
            <dt className="eyebrow text-slate-500">{l(ui.region)}</dt>
            <dd className="mt-1 font-semibold text-slate-900">{l(p.region)}</dd>
          </div>
          <div className="col-span-2 md:col-span-1">
            <dt className="eyebrow text-slate-500">{l(ui.stack)}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-[#2047F4]">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="bg-white section-y">
        <div className="container-custom grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative space-y-10 border-l-2 border-slate-200 pl-8">
            {steps.map((s, i) => (
              <Reveal key={i}>
                <li className="relative">
                  <span className="absolute -left-[2.9rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-[#2047F4]">
                    {i + 1}
                  </span>
                  <h2 className="eyebrow mb-3 text-[#2047F4]">{l(s.k)}</h2>
                  <p className="text-lg leading-relaxed text-slate-900">{l(s.v)}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-white p-8 text-slate-900 border border-slate-200 shadow-[0_24px_60px_-24px_rgb(32_71_244/0.25)]">
              <ul className="space-y-3">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5E7DF8]" />
                    <span className="font-medium text-[#0B1030]">{l(h)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group mt-7 flex items-center justify-center gap-2 rounded-full pill-grad border border-white/25 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                {l(ui.similarCta)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <Link href="/work" className="group inline-flex items-center gap-2 font-semibold text-[#2047F4]">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {l(ui.backToProjects)}
            </Link>
          </aside>
        </div>
      </section>

      {modules && (
        <section className="section-y">
          <div className="container-custom">
            <SectionHeading eyebrow="work" title={l(workGalleryExtra.modulesTitle)} />
            {groups ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {groups.map((g, gi) => (
                  <Reveal key={gi} delay={(gi % 2) * 0.1}>
                    <div className="h-full glass-card p-7">
                      <div className="mb-2 flex items-baseline gap-4 border-b border-slate-200 pb-5">
                        <span className="text-4xl font-light text-[#2047F4]">{String(gi + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(g.title)}</h3>
                      </div>
                      <ul className="divide-y divide-white/10">
                        {g.items.map((mi) => {
                          const m = modules[mi]
                          const Icon = moduleIcons[mi % moduleIcons.length]
                          return (
                            <li key={mi} className="flex gap-4 py-4">
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-[#2047F4]">
                                <Icon className="h-5 w-5" strokeWidth={1.6} />
                              </span>
                              <div>
                                <h4 className="text-base font-semibold normal-case leading-snug tracking-normal text-slate-900">{l(m.t)}</h4>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">{l(m.d)}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((m, i) => (
                  <Reveal key={i} delay={(i % 3) * 0.08}>
                    <TiltCard dark>
                      <div className="h-full glass-card p-7">
                        <span className="text-4xl font-light text-[#2047F4]">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="mb-3 mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(m.t)}</h3>
                        <p className="leading-relaxed text-slate-600">{l(m.d)}</p>
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {client && (
        <section className="section-y">
          <div className="container-custom">
            <SectionHeading eyebrow="clients" title={l(workExtra.clientTitle)} />
            <Reveal>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col">
                  {client.logo ? (
                    <Image src={client.logo} alt={l(client.name)} width={240} height={140} className="mb-8 h-auto max-h-20 w-auto max-w-[12rem] self-start object-contain" />
                  ) : logoSrc ? (
                    <Image src={logoSrc} alt={l(client.name)} width={240} height={240} className="mb-8 h-auto max-h-24 w-auto max-w-[12rem] self-start object-contain" />
                  ) : null}
                  <p className="text-sm tracking-[0.08em] text-[#2047F4]">{l(client.kind)}</p>
                  <h3 className="mb-4 mt-2 text-2xl font-semibold tracking-[-0.01em] text-slate-900">{l(client.name)}</h3>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-600">{l(client.about)}</p>
                </div>
                {clientPhoto ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_30px_60px_-28px_rgb(11_16_48/0.45)]">
                    <Image src={clientPhoto} alt={l(client.name)} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" style={{ objectPosition: mediaFocus[`work.${p.slug}.client`] }} />
                  </div>
                ) : (
                  <ImageSlot id={`work.${p.slug}.client`} label={l(workExtra.clientPhoto)} ratio="aspect-[4/3]" size="1200×900" />
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {gallery && (
        <section className="section-y">
          <div className="container-custom">
            <SectionHeading eyebrow="work" title={l(workGalleryExtra.title)} text={l(workGalleryExtra.text)} />
            <div className={`grid gap-6 md:grid-cols-2 ${gallery.length === 3 ? 'lg:grid-cols-3' : ''}`}>
              {gallery.map((g, i) => (
                <Reveal key={g.id} delay={(i % 2) * 0.08}>
                  <ImageSlot id={`work.${p.slug}.${g.id}`} label={l(g.label)} ratio="aspect-[4/3]" size="1200×900" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="work" title={l(workExtra.systemTitle)} text={l(workExtra.systemText)} />
          <div className={`grid gap-6 ${webShots ? '' : 'md:grid-cols-2'}`}>
            <Reveal className={webShots ? undefined : 'md:col-span-2'}>
              <ImageSlot id={`work.${p.slug}.shot1`} label={l(workExtra.shots[0])} ratio={webShots ? shotRatio : 'aspect-[16/8]'} size="1920×960" />
            </Reveal>
            <Reveal delay={0.08}>
              <ImageSlot id={`work.${p.slug}.shot2`} label={l(workExtra.shots[1])} ratio={webShots ? shotRatio : 'aspect-[16/10]'} size="1600×1000" />
            </Reveal>
            <Reveal delay={0.16}>
              <ImageSlot id={`work.${p.slug}.shot3`} label={l(workExtra.shots[2])} ratio={webShots ? shotRatio : 'aspect-[16/10]'} size="1600×1000" />
            </Reveal>
            {media[`work.${p.slug}.shot4`] && (
              <Reveal className={webShots ? undefined : 'md:col-span-2'}>
                <ImageSlot id={`work.${p.slug}.shot4`} label={l(workExtra.shots[1])} ratio="aspect-[2.2/1]" size="1920×880" />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {mobile && (
        <section className="section-y">
          <div className="container-custom">
            <SectionHeading eyebrow="work" title={l(mobile.title)} text={l(mobile.text)} />
            <PhoneShowcase initial={p.slug === 'actiwell' ? 0 : undefined} items={mobile.screens.map((s, i) => ({ id: `work.${p.slug}.app.${i + 1}`, title: l(s.t), text: l(s.d) }))} />
          </div>
        </section>
      )}

      <section className="bg-white section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="work" title={l(ui.moreProjects)} />
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((m) => (
              <Reveal key={m.slug}>
                <ProjectCard p={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
