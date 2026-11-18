'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui, contact } from '@/lib/content'
import Reveal from './Reveal'
import Parallax from './Parallax'
import CtaScene from './CtaScene'

/** Full-bleed, tall brand-blue closing band: the one saturated moment on a white page. */
export default function CtaBand({ title, text }: { title?: string; text?: string; brand?: boolean }) {
  const { l } = useLanguage()
  const accent = l({
    vi: 'Bắt đầu từ bài toán của bạn.',
    en: 'Starting with your challenge.',
    ja: 'まずは課題をお聞かせください。',
  })
  return (
    <section className="cta-band relative overflow-hidden py-28 text-white sm:py-36 lg:py-48">
      <CtaScene />
      <Parallax range={80} className="pointer-events-none absolute inset-0">
        <div className="orb absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#5E7DF8]/40" aria-hidden />
        <div className="orb absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#050C3A]/60" aria-hidden />
      </Parallax>

      <Reveal className="container-custom relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-[0.005em] sm:text-5xl lg:text-[3.4rem]">
          <span className="block">{title ?? l(ui.contactTitle)}</span>
          <span className="cta-accent block">{accent}</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">{text ?? l(ui.contactText)}</p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-9 py-4 text-lg font-semibold text-[#122AA3] shadow-[0_18px_40px_-14px_rgb(3_8_40/0.7)] transition duration-300 hover:-translate-y-1 hover:bg-[#EEF2FF] active:scale-[0.98]"
          >
            {l(ui.cta)}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-9 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 active:scale-[0.98]"
          >
            <Mail className="h-5 w-5" />
            {contact.email}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
