'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { erpContent, type ErpLocale, type ErpModule } from './erpnext-content'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#2E5BFF]">
      <span className="h-px w-6 bg-[#2E5BFF]" />
      {children}
    </span>
  )
}

function ModuleCard({ mod, index }: { mod: ErpModule; index: number }) {
  const Icon = mod.icon
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${mod.bgGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div
          className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-white group-hover:ring-white ${mod.accent}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-base font-semibold text-slate-900">{mod.title}</h3>
        <p className="mb-4 text-sm leading-6 text-slate-500">{mod.description}</p>
        <ul className="space-y-1.5">
          {mod.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-slate-500">
              <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${mod.accent}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ProcessStep({
  step,
}: {
  step: { number: string; title: string; body: string; duration: string }
}) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2E5BFF] text-sm font-bold text-white shadow-lg shadow-blue-500/25">
          {step.number}
        </div>
        <div className="mt-2 h-full w-px bg-gradient-to-b from-blue-200 to-transparent" />
      </div>
      <div className="pb-10">
        <div className="mb-1 inline-flex items-center gap-2">
          <span className="text-xs font-medium text-[#2E5BFF]">{step.duration}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-500">{step.body}</p>
      </div>
    </motion.div>
  )
}

function WhyCard({ point }: { point: { icon: LucideIcon; title: string; body: string } }) {
  const Icon = point.icon
  return (
    <motion.div variants={fadeUp} className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2E5BFF]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{point.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{point.body}</p>
      </div>
    </motion.div>
  )
}

function CapabilityCard({ cap }: { cap: { icon: LucideIcon; title: string; body: string } }) {
  const Icon = cap.icon
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-200 hover:border-blue-500/40"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-[#2E5BFF]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-sm font-semibold text-white">{cap.title}</h3>
      <p className="text-sm leading-6 text-slate-400">{cap.body}</p>
    </motion.div>
  )
}

export default function ERPNextClient({ locale }: { locale: ErpLocale }) {
  const c = erpContent[locale]
  const altLocale: ErpLocale = locale === 'en' ? 'vi' : 'en'
  const altHref = locale === 'en' ? '/vi/erpnext' : '/erpnext'
  const altLabel = locale === 'en' ? 'Tiếng Việt' : 'English'

  return (
    <div className="min-h-screen bg-[#F1F3F8]">
      <Header />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32">
        {/* Layered background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(46,91,255,0.22),transparent)]" />
          <div className="absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-500/6 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Locale switch */}
          <div className="mb-10 flex justify-end">
            <Link
              href={altHref}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            >
              {altLabel}
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
                {c.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">{c.hero.titleLine1}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                {c.hero.titleLine2}
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {c.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="rounded-full bg-[#2E5BFF] px-8 text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  {c.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#modules">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/10"
                >
                  {c.hero.secondaryCta}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {c.hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="mt-8 text-xs text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {c.hero.trusted}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>{c.problem.eyebrow}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              {c.problem.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
              {c.problem.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {c.problem.pains.map((pain, i) => (
              <motion.div
                key={pain.title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-1 text-2xl font-bold text-red-100">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">{pain.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{pain.body}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-red-500/40 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MODULES ───────────────────────────────────────── */}
      <section id="modules" className="scroll-mt-20 bg-slate-50/70 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>{c.modules.eyebrow}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              {c.modules.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
              {c.modules.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {c.modules.items.map((mod, i) => (
              <ModuleCard key={mod.key} mod={mod} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CUSTOMIZATION ─────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>{c.customization.eyebrow}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {c.customization.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              {c.customization.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {c.customization.capabilities.map((cap) => (
              <CapabilityCard key={cap.title} cap={cap} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: heading */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>{c.process.eyebrow}</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                {c.process.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
                {c.process.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6"
              >
                <p className="text-sm font-semibold text-[#2E5BFF]">
                  {locale === 'en' ? 'Average project duration' : 'Thời gian triển khai trung bình'}
                </p>
                <p className="mt-1 text-4xl font-bold text-slate-900">
                  {locale === 'en' ? '12 Weeks' : '12 Tuần'}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {locale === 'en'
                    ? 'From signed contract to production go-live'
                    : 'Từ hợp đồng đã ký đến khi đưa vào production'}
                </p>
              </motion.div>
            </motion.div>

            {/* Right: steps */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
              className="mt-2"
            >
              {c.process.steps.map((step) => (
                <ProcessStep key={step.number} step={step} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY MERCURY ───────────────────────────────────── */}
      <section className="bg-slate-50/70 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>{c.whyMercury.eyebrow}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              {c.whyMercury.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
              {c.whyMercury.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {c.whyMercury.points.map((point) => (
              <WhyCard key={point.title} point={point} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OPEN SOURCE BANNER ────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#2E5BFF] to-indigo-600 py-16">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
            {locale === 'en' ? 'Open Source Advantage' : 'Lợi Thế Mã Nguồn Mở'}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            {locale === 'en'
              ? 'No Per-seat Licensing. No Vendor Lock-in. Ever.'
              : 'Không Phí Bản Quyền Theo Người Dùng. Không Phụ Thuộc Nhà Cung Cấp.'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100">
            {locale === 'en'
              ? 'ERPNext is MIT-licensed open source software. You own your data and your deployment. Mercury charges only for implementation and support — not for using the software.'
              : 'ERPNext là phần mềm mã nguồn mở theo giấy phép MIT. Bạn sở hữu dữ liệu và hạ tầng của mình. Mercury chỉ tính phí triển khai và hỗ trợ — không tính phí sử dụng phần mềm.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
            {['Frappe Framework', 'Python + JavaScript', 'Self-hosted or Cloud', 'MIT License'].map(
              (tag) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-300" />
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              {c.cta.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              {c.cta.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="rounded-full bg-[#2E5BFF] px-10 text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/35"
                >
                  {c.cta.primaryBtn}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-slate-200 px-10 text-slate-700 hover:bg-slate-50"
              >
                {c.cta.secondaryBtn}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
