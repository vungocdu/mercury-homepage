'use client'

import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { about, nav } from '@/lib/content'
import { aboutPage } from '@/lib/content-extra'
import PageHero from '@/components/site/PageHero'
import ClientsMarquee from '@/components/ClientsMarquee'
import CtaBand from '@/components/site/CtaBand'
import SectionHeading from '@/components/site/SectionHeading'
import Reveal from '@/components/site/Reveal'
import TiltCard from '@/components/site/TiltCard'
import Parallax from '@/components/site/Parallax'
import ImageSlot from '@/components/site/ImageSlot'
import { directionIcons } from '@/components/site/icons'

export default function AboutPage() {
  const { l } = useLanguage()
  const { story, team, capabilities } = aboutPage

  return (
    <>
      <PageHero
        eyebrow="about us"
        title={l(about.heroTitle)}
        text={l(about.heroText)}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[1].label) }]}
      />

      {/* 1. Wide team photo */}
      <section className="section-y">
        <div className="container-custom">
          <Reveal>
            <ImageSlot id="about.hero" label={l({ vi: 'Ảnh toàn đội ngũ Mercury', en: 'Mercury team photo', ja: 'Mercuryチーム全体の写真' })} ratio="aspect-[16/7]" size="1920×840" />
          </Reveal>
        </div>
      </section>

      {/* 2. Story */}
      <section className="section-y">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={l(story.eyebrow)} title={l(story.title)} />
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              {story.paras.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{l(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <ImageSlot id="about.story" label={l({ vi: 'Ảnh văn phòng / buổi làm việc', en: 'Office / working session photo', ja: 'オフィス／作業風景の写真' })} ratio="aspect-[4/3]" size="1200×900" contain />
          </Reveal>
        </div>
      </section>

      {/* 3. Vision / Mission / Action — editorial rows, alternating image side */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            eyebrow="about us"
            title={l({ vi: 'Định hướng của Mercury', en: 'Where Mercury is heading', ja: 'Mercuryの目指す姿' })}
            text={l({
              vi: 'Ba trụ cột dẫn dắt mọi quyết định, sản phẩm và cách chúng tôi đồng hành cùng khách hàng.',
              en: 'Three pillars that guide every decision, every product and the way we work alongside our clients.',
              ja: 'あらゆる意思決定、製品、お客様との向き合い方を導く3つの柱。',
            })}
          />
          <div className="space-y-20 lg:space-y-28">
            {about.direction.map((d, i) => {
              const Icon = directionIcons[d.icon as keyof typeof directionIcons]
              const flip = i % 2 === 1
              return (
                <div key={i} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal className={flip ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2047F4] text-white shadow-[0_10px_24px_-10px_rgb(32_71_244/0.7)]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </span>
                      <span className="font-display text-sm font-semibold tracking-[0.22em] text-[#2047F4]">0{i + 1} / 0{about.direction.length}</span>
                    </div>
                    <h3 className="mt-6 !text-2xl !leading-tight sm:!text-3xl">{l(d.title)}</h3>
                    <span aria-hidden className="mt-5 block h-[3px] w-14 rounded-full bg-gradient-to-r from-[#2047F4] to-[#96ABFB]" />
                    <p className="mt-6 max-w-xl text-lg leading-relaxed">{l(d.text)}</p>
                  </Reveal>
                  <Reveal delay={0.12} className={flip ? 'lg:order-1' : ''}>
                    <Parallax range={26}>
                      <ImageSlot
                        id={`about.direction.${i + 1}`}
                        label={l(d.title)}
                        ratio="aspect-[4/3]"
                        size="1200×900"
                                      />
                    </Parallax>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Team */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow={l(team.eyebrow)} title={l(team.title)} text={l(team.text)} />

          <h3 className="mb-6 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(team.leadersTitle)}</h3>
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.leaders.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <ImageSlot id={`about.leader.${i + 1}`} label={l({ vi: 'Ảnh chân dung', en: 'Portrait photo', ja: 'ポートレート写真' })} ratio="aspect-[4/5]" size="800×1000" />
                  <p className="mt-4 text-lg font-semibold text-slate-900">{l(p.name)}</p>
                  <p className="text-sm text-slate-500">{l(p.role)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mb-6 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(team.groupsTitle)}</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.groups.map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <TiltCard dark>
                  <div className="h-full glass-card min-h-[15rem] p-7">
                    <span className="text-4xl font-light text-[#2047F4]">0{i + 1}</span>
                    <h4 className="mb-3 mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(g.t)}</h4>
                    <p className="leading-relaxed text-slate-600">{l(g.d)}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow={l(capabilities.eyebrow)} title={l(capabilities.title)} />
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.items.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <TiltCard dark>
                  <div className="h-full glass-card p-7">
                    <span className="text-4xl font-light text-[#2047F4]">0{i + 1}</span>
                    <h3 className="mb-3 mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(c.t)}</h3>
                    <p className="mb-5 leading-relaxed text-slate-600">{l(c.d)}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-[#2047F4]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Markets */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="markets" title={l(about.marketsTitle)} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.markets.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <TiltCard dark>
                  <div className="h-full glass-card p-7">
                    <MapPin className="mb-5 h-8 w-8 text-[#2047F4]" strokeWidth={1.4} />
                    <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(m.name)}</h3>
                    <p className="leading-relaxed text-slate-600">{l(m.text)}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* 8. Values */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="values" title={l({ vi: 'Cách chúng tôi làm việc', en: 'How we operate', ja: '私たちの働き方' })} />
          <div className="grid gap-6 md:grid-cols-3">
            {about.values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <TiltCard dark>
                  <div className="h-full glass-card p-7">
                    <span className="text-4xl font-light text-[#2047F4]">0{i + 1}</span>
                    <h3 className="mb-3 mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(v.t)}</h3>
                    <p className="leading-relaxed text-slate-600">{l(v.d)}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
