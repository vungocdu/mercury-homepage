'use client'

import Link from '@/components/site/LocalizedLink'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, services, projects, footer, contact } from '@/lib/content'
import Logo from './site/Logo'
import { LINKEDIN_COMPANY_URL } from '@/lib/brand'

export default function Footer() {
  const { l } = useLanguage()
  const year = new Date().getFullYear()

  const col = 'text-sm text-slate-400 transition-colors hover:text-white'
  const head = 'eyebrow mb-5 text-slate-200'

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5E7DF8]/60 to-transparent" aria-hidden />
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark className="h-14" />
            <p className="mt-6 max-w-xs text-slate-400 leading-relaxed">{l(footer.blurb)}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5E7DF8]" />
                {l(contact.address)}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#5E7DF8]" />
                {contact.phone}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#5E7DF8]" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li><a href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-white">Mercury Solutions · LinkedIn ↗</a></li>
            </ul>
          </div>

          <div>
            <h4 className={head}>{l(footer.company)}</h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={col}>
                    {l(n.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={head}>{l(footer.services)}</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={col}>
                    {l(s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={head}>{l(footer.projects)}</h4>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className={col}>
                    {l(p.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <p>
            © {year} Mercury Solutions. {l(footer.rights)}
          </p>
          <p className="text-xs">mercurysolutions.vn</p>
        </div>
      </div>
    </footer>
  )
}
