'use client'

import Link from '@/components/site/LocalizedLink'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { home } from '@/lib/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ArchDiagram from './ArchDiagram'
import Parallax from './Parallax'

/** Home: about copy + live architecture diagram. Vision/Mission/Action live on /about. */
export default function HomeAbout() {
  const { l } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-white section-y">
      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={l(home.about.eyebrow)} title={l(home.about.title)} text={l(home.about.text)} />
            <Reveal>
              <Link href="/about" className="group -mt-4 inline-flex items-center gap-2 font-semibold text-[#2047F4]">
                {l({ vi: 'Về Mercury', en: 'About Mercury', ja: 'Mercuryについて' })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Parallax range={36}>
            <div className="glass-card p-4 shadow-[0_0_70px_rgb(94_125_248/0.2)] sm:p-8">
              <div className="mb-2 flex items-center gap-2 text-[11px] tracking-widest text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#5E7DF8]" />
                PLATFORM.LIVE
              </div>
              <ArchDiagram />
            </div>
          </Parallax></Reveal>
        </div>
      </div>
    </section>
  )
}
