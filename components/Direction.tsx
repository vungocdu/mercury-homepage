'use client'

import Link from '@/components/site/LocalizedLink'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { home, about } from '@/lib/content'
import SectionHeading from './site/SectionHeading'
import Reveal from './site/Reveal'
import TiltCard from './site/TiltCard'
import { directionIcons } from './site/icons'

/** Home: short About + Vision / Mission / Action */
export default function Direction({ withLink = true }: { withLink?: boolean }) {
  const { l } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-white section-y">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden />
      <div className="container-custom relative">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={l(home.about.eyebrow)} title={l(home.about.title)} text={l(home.about.text)} />
            {withLink && (
              <Reveal>
                <Link
                  href="/about"
                  className="group -mt-4 inline-flex items-center gap-2 font-semibold text-[#2047F4]"
                >
                  {l({ vi: 'Về Mercury', en: 'About Mercury', ja: 'Mercuryについて' })}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden glass-card overflow-hidden shadow-[0_0_60px_rgb(94_125_248/0.2)]">
              <Image src="/images/about/office.jpg" alt="Mercury Solutions office" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-[#5E7DF8]/10" />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {about.direction.map((d, i) => {
            const Icon = directionIcons[d.icon as keyof typeof directionIcons]
            return (
              <Reveal key={i} delay={i * 0.1}>
                <TiltCard className="h-full">
                  <div className="h-full glass-card p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        style={{ transform: 'translateZ(30px)' }}
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#2047F4]"
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm text-slate-500">0{i + 1}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(d.title)}</h3>
                    <p className="leading-relaxed text-slate-600">{l(d.text)}</p>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
