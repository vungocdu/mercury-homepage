'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Fingerprint,
  LaptopMinimal,
  Languages,
  Layers3,
  MapPinned,
  PanelTop,
  ReceiptText,
  Sparkles,
  TriangleAlert,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'
import { tnaContent, type TnaLocale, type TnaModule } from './tna-content'

const sectionMotion = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}

function LocaleSwitch({
  currentLocale,
  switchHref,
  switchLabel,
}: {
  currentLocale: string
  switchHref: string
  switchLabel: string
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-medium text-white/80 backdrop-blur-sm">
      <span className="rounded-full bg-white px-3 py-1.5 text-slate-950 shadow-sm">{currentLocale}</span>
      <Link
        href={switchHref}
        className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
      >
        {switchLabel}
      </Link>
    </div>
  )
}

function HeroBoard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-2 font-medium text-white/80">
            <Factory className="h-4 w-4 text-rose-300" />
            Operational snapshot
          </span>
          <span className="inline-flex items-center gap-2">
            <Languages className="h-3.5 w-3.5" />
            EN / JP ready
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Attendance</p>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-3xl font-semibold text-white">1,842</p>
                <p className="text-sm text-white/60">factory staff</p>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                93.1% present
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Payroll</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">Calculated</p>
                <p className="text-sm text-white/60">approval batch ready</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white/80">Workflow lane</p>
              <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] text-white/60">
                6-step close
              </span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                { title: 'Capture', value: 'Clock-in + leave', accent: 'from-rose-500 to-orange-400' },
                { title: 'Calculate', value: 'Policy + payroll', accent: 'from-blue-500 to-cyan-400' },
                { title: 'Connect', value: 'MISA sync + callback', accent: 'from-emerald-500 to-teal-400' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                  <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${item.accent}`} />
                  <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenCard({
  title,
  description,
  accent,
}: {
  title: string
  description: string
  accent: string
}) {
  return (
    <Card className="overflow-hidden border-slate-200/80 shadow-sm">
      <CardHeader className="space-y-3">
        <div className={`h-40 rounded-3xl bg-gradient-to-br ${accent} p-4 text-white shadow-inner`}>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span className="inline-flex items-center gap-2">
              <PanelTop className="h-3.5 w-3.5" />
              Mercury UI
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1">
              <CheckCircle2 className="h-3 w-3" />
              live
            </span>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
              <p className="text-[11px] text-white/70">KPI</p>
              <p className="mt-1 text-2xl font-semibold">92%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
              <p className="text-[11px] text-white/70">Queue</p>
              <p className="mt-1 text-2xl font-semibold">14</p>
            </div>
          </div>
          <div className="mt-3 h-12 rounded-2xl border border-white/10 bg-black/20 p-2">
            <div className="flex h-full items-end gap-1.5">
              <span className="h-4 w-2 rounded-full bg-white/40" />
              <span className="h-8 w-2 rounded-full bg-white/50" />
              <span className="h-10 w-2 rounded-full bg-white/70" />
              <span className="h-6 w-2 rounded-full bg-white/50" />
              <span className="h-12 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
        <CardTitle className="text-xl text-slate-950">{title}</CardTitle>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </CardHeader>
    </Card>
  )
}

function ModuleCard({
  module,
}: {
  module: TnaModule
}) {
  const Icon = module.icon
  return (
    <Card className="group h-full overflow-hidden border-slate-200/80 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-4">
        <div className={`rounded-3xl bg-gradient-to-br ${module.accent} p-[1px]`}>
          <div className="flex items-center justify-between rounded-3xl bg-slate-950 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">Module</p>
                <h3 className="text-lg font-semibold text-white">{module.title}</h3>
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white">
              {module.key}
            </span>
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-600">{module.description}</p>
        <ul className="space-y-2">
          {module.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardHeader>
    </Card>
  )
}

function TimelineStep({
  index,
  title,
  description,
  icon: Icon,
}: {
  index: number
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
          <Icon className="h-5 w-5" />
        </div>
        <div className="mt-3 h-full w-px bg-slate-200" />
      </div>
      <div className="pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</p>
        <h3 className="mt-1 text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
        <span className="text-base font-semibold text-slate-950">{question}</span>
        <ChevronIcon />
      </summary>
      <p className="mt-4 text-sm leading-6 text-slate-600">{answer}</p>
    </details>
  )
}

function ChevronIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition group-open:rotate-180">
      <ArrowRight className="h-4 w-4 rotate-90" />
    </div>
  )
}

export default function TNASystemClient({ locale }: { locale: TnaLocale }) {
  const content = tnaContent[locale]
  const router = useRouter()
  const { language } = useLanguage()
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const screenProofCopy = locale === 'ja'
      ? {
        screenProofTitle: 'この画面で伝えたいこと',
        selectedView: '表示中の画面',
        narrativeLabel: '読みどころ',
        proofPointsLabel: '確認ポイント',
        narratives: [
          '日々の運用を一目で把握。',
          '承認前の給与バッチを確認。',
          '現場端末と同期状態を見える化。',
        ],
        proofPoints: [
          '実運用の画面をそのまま見せる',
          '装飾だけのダッシュボードにしない',
          '導入判断に必要な情報量を確保する',
        ],
      }
    : {
        screenProofTitle: 'What this screen proves',
        selectedView: 'selected view',
        narrativeLabel: 'Narrative',
        proofPointsLabel: 'Proof points',
        narratives: [
          'Daily operations in one glance.',
          'Payroll batches before approval.',
          'Factory devices and sync state.',
        ],
        proofPoints: [
          'Real operational screens',
          'No filler dashboard mosaic',
          'Enough detail for buyers to evaluate',
        ],
      }

  useEffect(() => {
    const desiredLocale: TnaLocale = language === 'ja' ? 'ja' : 'en'
    if (desiredLocale !== locale) {
      router.replace(desiredLocale === 'ja' ? '/ja/tna-system' : '/tna-system')
    }
  }, [language, locale, router])

  useEffect(() => {
    const previousLang = document.documentElement.lang
    document.documentElement.lang = locale
    return () => {
      document.documentElement.lang = previousLang
    }
  }, [locale])

  useEffect(() => {
    document.body.classList.add('bg-[#0b0d10]')
    return () => {
      document.body.classList.remove('bg-[#0b0d10]')
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0d10] text-slate-100">
      <Header />

      <main className="pt-16 sm:pt-20">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#10131a_0%,#0b0d10_75%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                variants={sectionMotion}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-3xl"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white">
                    <Sparkles className="mr-2 h-4 w-4 text-rose-300" />
                    {content.hero.badge}
                  </Badge>
                  <LocaleSwitch
                    currentLocale={content.localeLabel}
                    switchHref={content.localeSwitchHref}
                    switchLabel={content.localeSwitchLabel}
                  />
                </div>

                <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block">{content.hero.titleLine1}</span>
                  <span className="block bg-gradient-to-r from-rose-200 via-amber-100 to-cyan-100 bg-clip-text text-transparent">
                    {content.hero.titleLine2}
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  {content.hero.subtitle}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-rose-500 px-6 text-white hover:bg-rose-400">
                    <a href="#modules">
                      {content.hero.primaryCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="#screens">
                      {content.hero.secondaryCta}
                      <Layers3 className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {content.hero.proof.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70"
                    >
                      <CheckCircle2 className="mr-2 h-3.5 w-3.5 text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {content.hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={sectionMotion}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
              >
                <HeroBoard />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.problem} />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {content.problem.items.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={sectionMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="h-full border-slate-200/80 shadow-sm">
                      <CardHeader className="space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-2xl text-slate-950">{item.title}</CardTitle>
                        <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.pillars} />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.pillars.items.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={sectionMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden border-slate-200 shadow-sm">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            pillar {index + 1}
                          </span>
                        </div>
                        <CardTitle className="text-2xl text-slate-950">{item.title}</CardTitle>
                        <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                        <div className="space-y-2 pt-1">
                          {item.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="modules" className="bg-[#f8fafc] py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.modules} />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {content.modules.items.map((module, index) => (
                <motion.div
                  key={module.key}
                  variants={sectionMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <ModuleCard module={module} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="screens" className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_30%)]" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">{content.screens.eyebrow}</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {content.screens.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
                  {content.screens.description}
                </p>

                <div className="mt-8 space-y-3">
                  {content.screens.items.map((screen, index) => {
                    const active = index === activeScreenIndex
                    return (
                      <button
                        key={screen.title}
                        type="button"
                        onClick={() => setActiveScreenIndex(index)}
                        className={`group flex w-full items-start gap-4 rounded-[1.5rem] border p-4 text-left transition-all duration-300 ${
                          active
                            ? 'border-white/20 bg-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.24)]'
                            : 'border-white/10 bg-white/5 hover:border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className={`mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${screen.accent} text-white`}>
                          <PanelTop className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-lg font-semibold text-white">{screen.title}</h3>
                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${active ? 'bg-white text-slate-950' : 'bg-white/10 text-white/65'}`}>
                              0{index + 1}
                            </span>
                          </div>
                          <p className="mt-2 max-w-lg text-sm leading-6 text-white/65">{screen.description}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <motion.div
                key={activeScreenIndex}
                initial={{ opacity: 0, y: 18, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative"
              >
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3 text-xs text-white/55">
                    <span className="inline-flex items-center gap-2 font-medium text-white/75">
                      <Factory className="h-4 w-4 text-rose-300" />
                      {activeScreenIndex === 0 ? 'Dashboard / Real-time' : activeScreenIndex === 1 ? 'Payroll / Approval' : 'AI Camera / Sync'}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-200">
                      <CheckCircle2 className="h-3 w-3" />
                      live production
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                            {activeScreenIndex === 0 ? 'Operational overview' : activeScreenIndex === 1 ? 'Monthly batch' : 'Device sync'}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">{content.screens.items[activeScreenIndex].title}</h3>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right">
                          <p className="text-[11px] text-white/55">status</p>
                          <p className="text-sm font-semibold text-white">{activeScreenIndex === 2 ? 'connected' : 'in review'}</p>
                        </div>
                      </div>

                      {activeScreenIndex === 0 && (
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Attendance today</p>
                            <div className="mt-2 flex items-end justify-between">
                              <div>
                                <p className="text-3xl font-semibold text-white">1,716</p>
                                <p className="text-sm text-white/55">present / 1,842</p>
                              </div>
                              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-200">93.1%</span>
                            </div>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Pending actions</p>
                            <div className="mt-3 space-y-2 text-sm text-white/72">
                              <div className="flex items-center justify-between"><span>Leave</span><span className="text-amber-200">14</span></div>
                              <div className="flex items-center justify-between"><span>Shift change</span><span className="text-sky-200">9</span></div>
                              <div className="flex items-center justify-between"><span>Late/Early</span><span className="text-violet-200">5</span></div>
                            </div>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:col-span-2">
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Attendance trend</p>
                              <span className="text-[11px] text-white/55">last 7 days</span>
                            </div>
                            <div className="mt-4 flex h-20 items-end gap-2">
                              {[22, 34, 28, 40, 46, 52, 44].map((h, idx) => (
                                <span
                                  key={idx}
                                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-rose-500/55 to-cyan-300/80"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeScreenIndex === 1 && (
                        <div className="mt-5 space-y-3">
                          {[
                            { period: 'Mar 2026', status: 'Calculated', dept: 'Assembly', count: '642' },
                            { period: 'Mar 2026', status: 'Approved', dept: 'QA', count: '221' },
                            { period: 'Mar 2026', status: 'Draft', dept: 'Warehouse', count: '153' },
                          ].map((row) => (
                            <div key={`${row.dept}-${row.status}`} className="grid grid-cols-12 items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm">
                              <span className="col-span-3 text-white/70">{row.period}</span>
                              <span className="col-span-3">
                                <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${
                                  row.status === 'Approved' ? 'bg-emerald-400/12 text-emerald-200' : row.status === 'Calculated' ? 'bg-sky-400/12 text-sky-200' : 'bg-white/10 text-white/70'
                                }`}>
                                  {row.status}
                                </span>
                              </span>
                              <span className="col-span-4 text-white/78">{row.dept}</span>
                              <span className="col-span-2 text-right font-semibold text-white">{row.count}</span>
                            </div>
                          ))}
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Gross payroll</p>
                              <p className="mt-2 text-3xl font-semibold text-white">$1,248,330</p>
                            </div>
                            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Net payroll</p>
                              <p className="mt-2 text-3xl font-semibold text-white">$1,104,582</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeScreenIndex === 2 && (
                        <div className="mt-5 grid gap-3">
                          {[
                            { title: 'Factory A - Gate 1', status: 'Connected', accent: 'text-emerald-200' },
                            { title: 'Factory A - Gate 2', status: 'Connected', accent: 'text-emerald-200' },
                            { title: 'Factory B - Loading Dock', status: 'Syncing', accent: 'text-amber-200' },
                          ].map((row) => (
                            <div key={row.title} className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-white">{row.title}</p>
                                <p className="text-xs text-white/50">Place ID / camera token mapped</p>
                              </div>
                              <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${row.accent} bg-white/10`}>
                                {row.status}
                              </span>
                            </div>
                          ))}
                          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Callback status</p>
                              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-200">live</span>
                            </div>
                            <div className="mt-4 h-2 rounded-full bg-white/10">
                              <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-300" />
                            </div>
                            <p className="mt-3 text-sm text-white/62">Payroll voucher queue is synchronized with the accounting callback channel.</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white/80">{screenProofCopy.screenProofTitle}</p>
                          <span className="text-[11px] text-white/45">{screenProofCopy.selectedView}</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/66">{content.screens.items[activeScreenIndex].description}</p>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">{screenProofCopy.narrativeLabel}</p>
                          <p className="mt-2 text-xl font-semibold text-white">
                            {screenProofCopy.narratives[activeScreenIndex]}
                          </p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">{screenProofCopy.proofPointsLabel}</p>
                          <div className="mt-3 space-y-2 text-sm text-white/70">
                            {screenProofCopy.proofPoints.map((point) => (
                              <div key={point} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.workflow} />
            <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              {content.workflow.steps.map((step, index) => (
                <TimelineStep key={step.title} index={index} title={step.title} description={step.description} icon={step.icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.compliance} />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl text-slate-950">{content.compliance.title}</CardTitle>
                  <p className="text-sm leading-6 text-slate-600">{content.compliance.description}</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {content.compliance.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="mt-4 text-sm font-semibold text-slate-950">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-slate-950 text-white shadow-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <TriangleAlert className="h-4 w-4 text-amber-300" />
                    Buyer checklist
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {locale === 'en'
                      ? 'The system should explain the math, not hide it.'
                      : '計算の中身が見えることが、製造業の給与では重要です。'}
                  </CardTitle>
                  <ul className="space-y-3 text-sm leading-6 text-white/70">
                    {content.compliance.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: ReceiptText, label: locale === 'en' ? 'Audit trail' : '監査証跡' },
                      { icon: MapPinned, label: locale === 'en' ? 'Factory mapping' : '工場ロケーション' },
                      { icon: LaptopMinimal, label: locale === 'en' ? 'Front-office view' : '管理画面' },
                      { icon: PanelTop, label: locale === 'en' ? 'Screen proof' : '画面証跡' },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <Icon className="h-5 w-5 text-rose-200" />
                          <p className="mt-2 text-sm text-white">{item.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...content.faq} />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {content.faq.items.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.1),transparent_35%),linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-8 shadow-sm lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">Conversion</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{content.cta.title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{content.cta.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Button asChild size="lg" className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
                    <a href="#contact">
                      {content.cta.primary}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 px-6 text-slate-900">
                    <Link href={content.localeSwitchHref}>{content.cta.secondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
