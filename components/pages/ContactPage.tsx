'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, contact, services } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'

const field =
  'w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#5E7DF8] focus:ring-4 focus:ring-[#5E7DF8]/20 [&>option]:bg-white'

export default function ContactPage() {
  const { l } = useLanguage()
  const f = contact.form
  const [done, setDone] = useState(false)

  // No backend yet: compose an email to the Mercury inbox with the entered data.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = [
      `${l(f.name)}: ${d.get('name')}`,
      `${l(f.company)}: ${d.get('company')}`,
      `${l(f.email)}: ${d.get('email')}`,
      `${l(f.phone)}: ${d.get('phone')}`,
      `${l(f.topic)}: ${d.get('topic')}`,
      '',
      String(d.get('message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Website enquiry — ' + d.get('name'))}&body=${encodeURIComponent(body)}`
    setDone(true)
  }

  const info = [
    { icon: MapPin, label: l(contact.address) },
    { icon: Phone, label: contact.phone },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: l(contact.hours) },
  ]

  return (
    <>
      <PageHero
        eyebrow="contact"
        title={l(contact.title)}
        text={l(contact.text)}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[6].label) }]}
      />

      <section className="bg-white section-y">
        <div className="container-custom grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <ul className="space-y-4">
              {info.map(({ icon: Icon, label, href }, i) => (
                <li key={i} className="flex items-start gap-4 glass-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#2047F4]">
                    <Icon className="h-5 w-5" />
                  </span>
                  {href ? (
                    <a href={href} className="self-center font-medium text-slate-900 hover:text-[#2047F4]">
                      {label}
                    </a>
                  ) : (
                    <span className="self-center font-medium text-slate-900">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-card p-7 shadow-[0_0_60px_rgb(94_125_248/0.12)] lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.name)}</span>
                  <input required name="name" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.company)}</span>
                  <input name="company" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.email)}</span>
                  <input required type="email" name="email" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.phone)}</span>
                  <input name="phone" className={field} />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.topic)}</span>
                <select name="topic" className={field} defaultValue={l(f.general)}>
                  <option>{l(f.general)}</option>
                  {services.map((s) => (
                    <option key={s.slug}>{l(s.title)}</option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-medium text-slate-800">{l(f.message)}</span>
                <textarea required name="message" rows={5} className={field} />
              </label>
              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full pill-grad border border-white/25 px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_rgb(94_125_248/0.35)] transition hover:-translate-y-0.5 sm:w-auto"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                {l(f.send)}
              </button>
              {done && (
                <p className="mt-5 flex items-center gap-2 text-[#2047F4]" role="status">
                  <CheckCircle2 className="h-5 w-5" />
                  {l(f.thanks)}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
