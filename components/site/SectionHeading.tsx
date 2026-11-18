'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { eyebrows } from '@/lib/content'
import Reveal from './Reveal'

/** Section title in the deck style: light grey label, then a steel→silver gradient heading. */
export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string
  title: ReactNode
  text?: string
  dark?: boolean
  center?: boolean
}) {
  const { l } = useLanguage()
  const label = eyebrows[eyebrow] ? l(eyebrows[eyebrow]) : eyebrow
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow mb-3 text-slate-600">{label}</p>
      <h2 className="text-gradient-silver text-2xl font-bold leading-[1.15] tracking-[0.01em] sm:text-3xl lg:text-[2.6rem]">{title}</h2>
      <span className={`heading-bar mt-5 ${center ? 'mx-auto' : ''}`} aria-hidden />
      {text && <p className="mt-5 text-lg leading-relaxed text-slate-600">{text}</p>}
    </Reveal>
  )
}
