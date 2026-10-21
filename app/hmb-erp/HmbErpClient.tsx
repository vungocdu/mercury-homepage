'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  BadgePercent,
  Boxes,
  Building2,
  Check,
  Database,
  FileCheck2,
  Layers3,
  Network,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { hmbErpContent, type HmbLocale } from './hmb-erp-content'

const icons: LucideIcon[] = [Building2, Boxes, UsersRound, BadgePercent, FileCheck2, ArrowLeftRight, ShieldCheck]
const rise = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }
const sectionMotion = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700"><span className="h-px w-7 bg-blue-600" />{children}</p>
}

export default function HmbErpClient() {
  const { language } = useLanguage()
  const locale: HmbLocale = language === 'vi' || language === 'ja' || language === 'ko' ? language : 'en'
  const content = hmbErpContent[locale]
  const [activeLayer, setActiveLayer] = useState<'control' | 'tenant'>('tenant')
  const selectedLayer = content.architecture[activeLayer]

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-slate-900">
      <Header />

      <section className="relative isolate border-b border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f3f7fc_100%)] pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,.06) 1px,transparent 1px)', backgroundSize: '44px 44px', maskImage: 'linear-gradient(to bottom,black,transparent 85%)' }} />
        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-xs font-semibold tracking-wide text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />{content.hero.eyebrow}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }} className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.14 }} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {content.hero.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-blue-700 px-6 text-white hover:bg-blue-800"><a href="#contact">{content.hero.primaryCta}<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white/70 px-6 text-slate-800"><a href="#capabilities">{content.hero.secondaryCta}<ArrowDown className="ml-2 h-4 w-4" /></a></Button>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2">
              {content.hero.tags.map((tag) => <span key={tag} className="rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 font-mono text-[11px] tracking-wide text-slate-600">{tag}</span>)}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.16 }} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-200/35 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-blue-200/80 bg-white/90 p-5 shadow-[0_28px_90px_rgba(30,64,175,.12)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-700 text-white"><Layers3 className="h-5 w-5" /></div>
                  <div><p className="text-sm font-semibold text-slate-900">HMB ERP</p><p className="text-xs text-slate-500">Modular monolith</p></div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">Company scoped</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/75 p-4">
                  <div className="mb-3 flex items-center gap-2 text-indigo-800"><Database className="h-4 w-4" /><span className="text-xs font-semibold">Control plane</span></div>
                  <p className="text-sm font-semibold text-slate-900">Identity & access</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Companies · Memberships · Roles</p>
                </div>
                <div className="hidden text-blue-500 sm:block"><ArrowLeftRight className="h-5 w-5" /></div>
                <div className="rounded-2xl border border-sky-100 bg-sky-50/75 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sky-800"><Building2 className="h-4 w-4" /><span className="text-xs font-semibold">Tenant context</span></div>
                  <p className="text-sm font-semibold text-slate-900">Business workflows</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Catalog · CRM · Sales · AR</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500"><span>Request context</span><span className="font-mono text-blue-700">identity → scope → workflow → audit</span></div>
              </div>
              <div className="pointer-events-none absolute -bottom-5 -right-3 hidden rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700"><ShieldCheck className="h-4 w-4 text-emerald-600" />Permission checked per company</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="capabilities" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={sectionMotion} className="container-custom scroll-mt-24 py-20 sm:py-24">
        <motion.div variants={rise} className="mb-10 max-w-3xl">
          <SectionEyebrow>{content.catalog.eyebrow}</SectionEyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">{content.catalog.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{content.catalog.description}</p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.capabilities.map((capability, index) => {
            const Icon = icons[index] ?? Network
            return <motion.article variants={rise} key={capability.eyebrow} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(30,64,175,.09)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-300 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{capability.eyebrow}</span><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></span></div>
              <h3 className="text-lg font-semibold text-slate-950">{capability.title}</h3>
              <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-600">{capability.description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                {capability.details.map((detail) => <li key={detail} className="flex gap-2.5 text-xs leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" /><span>{detail}</span></li>)}
              </ul>
            </motion.article>
          })}
        </div>
        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs leading-6 text-amber-900">{content.catalog.note}</p>
      </motion.section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <SectionEyebrow>{content.architecture.eyebrow}</SectionEyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">{content.architecture.title}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{content.architecture.description}</p>
            <div className="mt-7 flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              {(['control', 'tenant'] as const).map((layer) => <button key={layer} type="button" onClick={() => setActiveLayer(layer)} aria-pressed={activeLayer === layer} className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition ${activeLayer === layer ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-600 hover:bg-white'}`}>
                {layer === 'control' ? content.architecture.controlLabel : content.architecture.tenantLabel}
              </button>)}
            </div>
            <motion.div key={activeLayer} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <h3 className="text-base font-semibold text-slate-950">{selectedLayer.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{selectedLayer.description}</p>
              <ul className="mt-4 space-y-2">{selectedLayer.records.map((record) => <li key={record} className="flex items-start gap-2 text-xs leading-5 text-slate-700"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />{record}</li>)}</ul>
            </motion.div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-[#f7faff] p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-3"><h3 className="text-sm font-semibold text-slate-900">{content.architecture.flowLabel}</h3><span className="font-mono text-[10px] text-slate-400">API → tenant context</span></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.architecture.flow.map((step, index) => <div key={step} className="relative rounded-xl border border-slate-200 bg-white p-4">
                <span className="mb-3 grid h-7 w-7 place-items-center rounded-lg bg-slate-900 font-mono text-[11px] font-semibold text-white">0{index + 1}</span>
                <p className="text-sm font-medium leading-6 text-slate-800">{step}</p>
                {index < content.architecture.flow.length - 1 ? <span className="absolute -bottom-3 right-4 z-10 hidden rounded-full bg-blue-50 p-1 text-blue-600 sm:block"><ArrowRight className="h-3 w-3" /></span> : null}
              </div>)}
            </div>
            <div className="mt-6 rounded-xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-2"><Network className="h-4 w-4 text-cyan-300" /><h4 className="text-sm font-semibold">{content.architecture.guardrailTitle}</h4></div>
              <ul className="mt-4 space-y-3">{content.architecture.guardrails.map((guardrail) => <li key={guardrail} className="flex gap-2.5 text-xs leading-5 text-slate-300"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" /><span>{guardrail}</span></li>)}</ul>
            </div>
            <p className="mt-4 text-[11px] leading-5 text-slate-500">{content.architecture.availabilityNote}</p>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-blue-700 p-7 text-white shadow-[0_22px_60px_rgba(30,64,175,.2)] sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">{content.contact.eyebrow}</p><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{content.contact.title}</h2><p className="mt-3 text-sm leading-6 text-blue-100">{content.contact.description}</p></div>
          <Button asChild variant="secondary" className="shrink-0 rounded-full bg-white px-5 text-blue-800 hover:bg-blue-50"><a href="#contact">{content.contact.button}<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
