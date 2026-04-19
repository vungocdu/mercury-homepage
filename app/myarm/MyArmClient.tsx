'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  AppWindow,
  ArrowRight,
  Bell,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  FileStack,
  Globe,
  Layers3,
  MessagesSquare,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextHighlight } from '@/components/text-highlight'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const OFFICIAL_SITE = 'https://myarms.jp/'
const APP_STORE_URL = 'https://apps.apple.com/jp/app/my-arms/id6448011109'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.criteria.myarms'

const sections = [
  { key: 'jobs', icon: ClipboardList },
  { key: 'missions', icon: Layers3 },
  { key: 'meetings', icon: CalendarRange },
  { key: 'library', icon: FileStack },
] as const

const workflows = [
  { key: 'capture', icon: ClipboardList },
  { key: 'coordinate', icon: Users },
  { key: 'communicate', icon: MessagesSquare },
  { key: 'confirm', icon: CheckCircle2 },
] as const

const stack = [
  { key: 'mobile', icon: Smartphone },
  { key: 'backend', icon: ShieldCheck },
  { key: 'common', icon: AppWindow },
  { key: 'notifications', icon: Bell },
] as const

function getNestedValue(source: unknown, path: string): string | undefined {
  const keys = path.split('.')
  let current = source

  for (const key of keys) {
    if (!current || typeof current !== 'object' || !(key in current)) {
      return undefined
    }
    current = (current as Record<string, unknown>)[key]
  }

  return typeof current === 'string' ? current : undefined
}

function PhoneFrame({
  src,
  alt,
  badge,
}: {
  src: string
  alt: string
  badge: string
}) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="absolute inset-0 rounded-[3rem] bg-cyan-400/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-950/80 p-3 shadow-[0_24px_120px_rgba(12,181,227,0.22)] backdrop-blur">
        <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-900/90" />
        <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-950 pt-8">
          <Image
            src={src}
            alt={alt}
            width={960}
            height={960}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-cyan-300/25 bg-slate-900/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
        {badge}
      </div>
    </div>
  )
}

export default function MyArmClient() {
  const { t, translations } = useLanguage()

  const tr = (key: string, fallback: string) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const trDirect = (path: string, fallback: string) =>
    getNestedValue(translations, path) ?? fallback

  return (
    <main className="min-h-screen font-ibm-plex-sans">
      <Header />

      <section className="relative overflow-hidden bg-[#07111d] pb-20 pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(12,181,227,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_38%),linear-gradient(140deg,#07111d_0%,#0c1729_50%,#050913_100%)]" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/8" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge variant="secondary" className="mb-8 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              {tr('myarmPage.hero.badge', 'Mobile-first workflow platform')}
            </Badge>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
              MyARM
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] text-white md:text-6xl">
              <span className="block">MyARM</span>
              <TextHighlight color="rgba(12,181,227,0.28)" delay={0.5} duration={0.7}>
                <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-slate-50 bg-clip-text text-transparent">
                  {tr('myarmPage.hero.title', 'Japanese workflow discipline for teams in motion.')}
                </span>
              </TextHighlight>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              {tr(
                'myarmPage.hero.subtitle',
                'MyARM brings jobs, missions, meetings, documents, and updates into one mobile-first operating surface so field teams and office teams move in sync.'
              )}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href="#contact">
                  {tr('myarmPage.hero.primaryCta', 'Talk to Mercury Solutions')}
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer">
                  {tr('myarmPage.hero.secondaryCta', 'Visit official website')}
                  <Globe className="ml-1" />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {stack.map(({ key, icon: Icon }) => (
                <div key={key} className="border-l border-white/10 pl-4">
                  <Icon className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-medium text-white">
                    {trDirect(`myarmPage.stack.${key}.title`, key)}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {trDirect(`myarmPage.stack.${key}.desc`, '')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col justify-center gap-6"
          >
            <PhoneFrame
              src="/images/products/myarm/splash.png"
              alt="MyARM mobile app splash"
              badge={tr('myarmPage.hero.deviceBadge', 'iOS + Android')}
            />

            <div className="mx-auto flex max-w-sm items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                <img src="/images/products/myarm/icon-app.svg" alt="MyARM icon" className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {tr('myarmPage.hero.posterLabel', 'Built from the real MyARM production app')}
                </p>
                <p className="text-xs text-slate-400">
                  {tr(
                    'myarmPage.hero.posterSubtext',
                    'Flutter mobile app, Laravel API, and shared service layer verified from the live codebase.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
              {tr('myarmPage.overview.eyebrow', 'Why teams adopt MyARM')}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
              {tr(
                'myarmPage.overview.title',
                'One operating rhythm for jobs, meetings, deadlines, and team communication.'
              )}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {tr(
                'myarmPage.overview.body',
                'The MyARM product family connects field work and office planning into one disciplined flow instead of scattering work across chats, spreadsheets, and status meetings.'
              )}
            </p>
          </div>

          <div className="mt-12 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {sections.map(({ key, icon: Icon }) => (
              <div key={key} className="grid gap-4 px-6 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:px-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {trDirect(`myarmPage.sections.${key}.title`, key)}
                  </h3>
                </div>
                <p className="max-w-3xl text-base leading-7 text-slate-600">
                  {trDirect(`myarmPage.sections.${key}.desc`, '')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-700">
              {tr('myarmPage.workflow.eyebrow', 'Operational flow')}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
              {tr(
                'myarmPage.workflow.title',
                'From assignment to confirmation, the workflow stays legible.'
              )}
            </h2>
            <div className="mt-10 space-y-6">
              {workflows.map(({ key, icon: Icon }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="grid gap-4 border-b border-slate-200 pb-6 md:grid-cols-[64px_minmax(0,1fr)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">
                      {trDirect(`myarmPage.workflow.steps.${key}.title`, key)}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {trDirect(`myarmPage.workflow.steps.${key}.desc`, '')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_100px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {tr('myarmPage.architecture.eyebrow', 'Delivery architecture')}
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              {tr(
                'myarmPage.architecture.title',
                'A mobile product anchored by two Laravel services.'
              )}
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-300">
              {tr(
                'myarmPage.architecture.body',
                'The codebase shows a Flutter mobile client, a dedicated Laravel backend, and a shared Laravel common service. That split lets MyARM handle daily operational traffic, shared business logic, and future product expansion without collapsing everything into one runtime.'
              )}
            </p>

            <div className="mt-8 space-y-4">
              {stack.map(({ key, icon: Icon }) => (
                <div key={key} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {trDirect(`myarmPage.stack.${key}.title`, key)}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {trDirect(`myarmPage.stack.${key}.desc`, '')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {tr('myarmPage.cta.eyebrow', 'See the product in market')}
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-5xl">
                {tr(
                  'myarmPage.cta.title',
                  'Bring MyARM into Mercury Solution Homepage as a serious business platform, not a placeholder card.'
                )}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {tr(
                  'myarmPage.cta.body',
                  'The official site and store distribution already exist. Mercury can now present MyARM with the same product depth as QuickShift and Minova PMS.'
                )}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                  <a href="#contact">
                    {tr('myarmPage.cta.primary', 'Request project consultation')}
                    <ArrowRight className="ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer">
                    {tr('myarmPage.cta.secondary', 'Open myarms.jp')}
                    <Globe className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <Image src="/images/products/myarm/qr-ios.png" alt="MyARM App Store QR" width={84} height={84} className="rounded-xl bg-white p-2" />
                  <div>
                    <p className="text-sm font-semibold text-white">{tr('myarmPage.cta.iosTitle', 'App Store')}</p>
                    <p className="mt-1 text-sm text-slate-400">{tr('myarmPage.cta.iosBody', 'Scan or open the iPhone distribution page.')}</p>
                  </div>
                </div>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <Image src="/images/products/myarm/qr-android.png" alt="MyARM Play Store QR" width={84} height={84} className="rounded-xl bg-white p-2" />
                  <div>
                    <p className="text-sm font-semibold text-white">{tr('myarmPage.cta.androidTitle', 'Google Play')}</p>
                    <p className="mt-1 text-sm text-slate-400">{tr('myarmPage.cta.androidBody', 'Scan or open the Android distribution page.')}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
