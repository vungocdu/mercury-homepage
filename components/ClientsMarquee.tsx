'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { home } from '@/lib/content'
import { clients } from '@/lib/clients'
import SectionHeading from './site/SectionHeading'

export default function ClientsMarquee() {
  const { l } = useLanguage()
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...clients, ...clients]

  return (
    <section className="bg-white section-y">
      <div className="container-custom">
        <SectionHeading center eyebrow="clients" title={l(home.clientsTitle)} text={l(home.clientsText)} />
      </div>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track items-center">
          {loop.map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length} className="mx-3 flex h-32 w-60 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 px-3">
              <Image
                src={c.logo}
                alt={i >= clients.length ? '' : c.name}
                width={480}
                height={240}
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
