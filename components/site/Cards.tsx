'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui, industries, projects, type Service, type Project } from '@/lib/content'
import { media, mediaFocus } from '@/lib/media'
import TiltCard from './TiltCard'
import { serviceIcons, projectIcons } from './icons'

export function ServiceCard({ s }: { s: Service; dark?: boolean }) {
  const { l } = useLanguage()
  const Icon = serviceIcons[s.icon]
  return (
    <TiltCard dark>
      <Link
        href={`/services/${s.slug}`}
        className="group flex h-full flex-col glass-card p-7"
      >
        <div className="mb-7 flex items-start justify-between">
          <span style={{ transform: 'translateZ(30px)' }} className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#2047F4]">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <span className="text-xs tracking-[0.15em] text-slate-500">{s.tag}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em] text-slate-900">{l(s.title)}</h3>
        <p className="mb-6 flex-1 leading-relaxed text-slate-600">{l(s.short)}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2047F4]">
          {l(ui.learnMore)}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </TiltCard>
  )
}

/** Cover image for a project card: explicit cover, else the first registered shot/photo. */
function coverFor(slug: string) {
  const id = ['cover', 'client', 'shot1', 'app.1', 'site.1'].map((k) => `work.${slug}.${k}`).find((k) => media[k])
  return id ? { src: media[id] as string, focus: mediaFocus[id] } : null
}

export function ProjectCard({ p }: { p: Project }) {
  const { l } = useLanguage()
  const Icon = projectIcons[p.icon]
  const industry = industries.find((i) => i.key === p.industry)
  const index = projects.findIndex((x) => x.slug === p.slug) + 1
  const cover = coverFor(p.slug)
  return (
    <TiltCard dark>
      <Link href={`/work/${p.slug}`} className="group flex h-full flex-col overflow-hidden glass-card">
        {/* image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#DCE5FF] to-[#C3D0FD]">
          {cover ? (
            <Image
              src={cover.src}
              alt={l(p.name)}
              fill
              sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              style={{ objectPosition: cover.focus }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#2047F4]">
              <Icon className="h-14 w-14 opacity-80" strokeWidth={1.2} />
              <span className="text-[11px] tracking-wider text-[#2047F4]/60">work.{p.slug}.cover</span>
            </div>
          )}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B1030]/25 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-[#0B1030]/80 px-4 py-2 font-display text-[11px] font-semibold tracking-[0.22em] text-white backdrop-blur-md">
            PROJECT / {String(index).padStart(2, '0')}
          </span>
        </div>

        {/* content */}
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-4 inline-flex w-fit rounded-full border border-[#C3D0FD] bg-[#EEF2FF] px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2047F4]">
            {industry ? l(industry.label) : ''}
          </span>
          <h3 className="mb-3 !text-xl !normal-case !leading-snug !tracking-normal font-bold">{l(p.name)}</h3>
          <p className="mb-5 flex-1 text-[1.02rem] leading-relaxed">{l(p.tagline)}</p>
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-xs text-slate-500">{l(p.region)}</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2047F4]">
              {l(ui.learnMore)}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  )
}
