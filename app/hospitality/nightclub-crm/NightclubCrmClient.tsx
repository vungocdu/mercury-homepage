'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarCheck,
  Clock3,
  Database,
  Gauge,
  Globe,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  Table2,
  Tags,
  Users,
  Workflow,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import MovingDotsBackground from '@/components/MovingDotsBackground'
import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'

type SignalItem = {
  icon: LucideIcon
  label: string
  value: string
}

type CapabilityItem = {
  icon: LucideIcon
  title: string
  detail: string
}

const productionSignals: SignalItem[] = [
  { icon: Gauge, label: 'API latency (p95)', value: '< 400ms' },
  { icon: Users, label: 'Concurrent operators', value: '2,000+' },
  { icon: ShieldCheck, label: 'Target uptime', value: '99.9%' },
  { icon: Globe, label: 'Tenant model', value: 'Multi-venue SaaS' },
]

const capabilities: CapabilityItem[] = [
  {
    icon: Database,
    title: 'Unified guest profile',
    detail: 'Identity resolution across phone, email, reservation, and visit timeline.',
  },
  {
    icon: Tags,
    title: 'Smart segmentation',
    detail: 'Auto-tags and saved audiences for no-show recovery, VIP return, and high-value cohorts.',
  },
  {
    icon: MessageSquare,
    title: 'Channel-safe outreach',
    detail: 'Email, SMS, and WhatsApp campaigns with per-channel consent and suppression controls.',
  },
]

const operationsFlow = [
  {
    icon: Search,
    title: 'Desk intake',
    detail: 'Host finds profile in seconds and sees spend, preferences, and prior outcomes.',
  },
  {
    icon: CalendarCheck,
    title: 'Reservation + waitlist',
    detail: 'Booked and walk-in flows run in one queue with live status and no-show handling.',
  },
  {
    icon: Table2,
    title: 'Floor assignment',
    detail: 'Table and bottle operations stay synced in real time across web and mobile staff views.',
  },
  {
    icon: Bell,
    title: 'Post-visit automation',
    detail: 'Event-driven messages trigger with campaign attribution and delivery telemetry.',
  },
]

const compliancePoints = [
  'Tenant isolation scoped by organization and venue',
  'Role-based access with audit logs on sensitive actions',
  'Consent, export, and deletion workflows aligned to GDPR/CCPA/PDPA',
  'OpenAPI-first integration and webhook event delivery',
]

// visual thesis: cinematic midnight operations with one photographic anchor and restrained neon accents.
// content plan: hero poster -> production proof -> workflow depth -> final conversion.
// interaction thesis: staged hero entrance, scroll-linked image depth, and tactile CTA/row hover shifts.
export default function NightclubCrmClient() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])
  const heroImageY = useTransform(scrollYProgress, [0, 0.35], [0, 72])
  const heroImageScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08])

  return (
    <div className="min-h-screen bg-[#050A1A] text-slate-100">
      <Header />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400 z-50"
        style={{ scaleX: progressScale }}
      />

      <section className="relative min-h-[100svh] overflow-hidden pt-20">
        <div className="opacity-15">
          <MovingDotsBackground />
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=2200&q=80"
          alt="Night venue operations"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ y: heroImageY, scale: heroImageScale }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(1,8,26,0.86)_22%,rgba(2,10,30,0.58)_48%,rgba(3,11,32,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_44%,rgba(125,211,252,0.2),transparent_43%),radial-gradient(circle_at_82%_72%,rgba(245,158,11,0.16),transparent_42%)]" />

        <div className="container-custom relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-300/90">
              Mercury Solutions
            </p>
            <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.92] text-slate-50">
              Night Life CRM
              <span className="block text-[clamp(1.1rem,2.2vw,1.7rem)] font-normal tracking-wide text-slate-300 mt-5">
                Production-grade guest intelligence for clubs, lounges, and bars.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              One operating surface for guest data, segmentation, reservations, waitlist, and floor execution,
              mapped to strict compliance and measurable SLA targets.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-sky-500 px-8 text-base font-semibold text-[#021227] hover:bg-sky-400 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">
                  Request Production Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-400/50 bg-transparent px-8 text-base text-slate-100 hover:bg-slate-100/10 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <a href="#flow">See Service Flow</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="container-custom relative z-10 pb-8"
        >
          <div className="grid gap-4 border-t border-slate-300/25 pt-5 text-xs uppercase tracking-[0.14em] text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Live waitlist', '22 parties'],
              ['Floor seat time', '13 minutes'],
              ['No-show risk', '4 bookings'],
              ['Campaign state', 'Post-visit sequence'],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1.5">
                <p className="mb-0 text-slate-400">{label}</p>
                <p className="mb-0 text-sm font-semibold text-slate-100">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-slate-800 bg-[#060F26] py-16">
        <div className="container-custom">
          <p className="mb-10 text-xs uppercase tracking-[0.18em] text-slate-400">Production Signals</p>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {productionSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="border-l border-slate-700 pl-5"
              >
                <signal.icon className="mb-4 h-5 w-5 text-sky-300" />
                <div className="text-4xl font-semibold leading-none text-slate-100">{signal.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{signal.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081430] py-20">
        <div className="container-custom grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl lg:pr-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Guest intelligence</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 md:text-5xl">
              Know every guest before the first greeting.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Mercury Night Life CRM centralizes identity, intent, and engagement so hosts and marketers act from one source of truth.
            </p>
          </motion.div>

          <div className="mt-12 divide-y divide-slate-700/70 border-y border-slate-700/70">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group grid gap-6 py-8 lg:grid-cols-[280px_1fr]"
              >
                <div className="flex items-start gap-3">
                  <cap.icon className="mt-1 h-5 w-5 text-sky-300 transition-transform duration-300 group-hover:translate-x-1" />
                  <h3 className="text-2xl font-semibold leading-snug text-slate-100">{cap.title}</h3>
                </div>
                <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">{cap.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-700/70"
          >
            <img
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=1600&q=80"
              alt="Nightclub host desk and service floor"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A1A] via-[#050A1A]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-sky-300">Service context</p>
              <p className="mb-0 max-w-md text-sm leading-relaxed text-slate-200">
                FOH teams see identity, visit history, and campaign intent at the same moment they seat guests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="flow" className="bg-[#050A1A] py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Operations flow</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 md:text-5xl">
              Built for the rush window.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              One continuous service loop from profile lookup to post-visit campaign, designed for nightly execution without context switching.
            </p>
          </motion.div>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-slate-700 md:block" />
            <div className="space-y-8">
              {operationsFlow.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group grid items-start gap-5 md:grid-cols-[56px_1fr]"
                >
                  <div className="relative">
                    <div className="hidden h-7 w-7 items-center justify-center rounded-full border border-sky-300/60 bg-sky-400/10 md:flex">
                      <step.icon className="h-3.5 w-3.5 text-sky-200" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-900/35 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-slate-900/55 md:p-7">
                    <div className="mb-2 text-sm uppercase tracking-[0.14em] text-slate-400">Step {index + 1}</div>
                    <h3 className="text-2xl font-semibold text-slate-100">{step.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081430] py-20">
        <div className="container-custom grid gap-16 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Security and compliance</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 md:text-5xl">
              Controls that satisfy enterprise procurement.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              The SRS baseline drives tenant isolation, auditability, and privacy rights handling across all guest and campaign workflows.
            </p>
            <div className="mt-8 space-y-4">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <LockKeyhole className="mt-1 h-4 w-4 text-amber-300" />
                  <p className="mb-0 text-sm leading-relaxed text-slate-300 md:text-base">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border border-slate-700/80 bg-slate-900/40 p-6 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <Workflow className="h-5 w-5 text-sky-300" />
              <h3 className="text-2xl font-semibold text-slate-100">Production stack</h3>
            </div>
            <div className="space-y-4">
              {[
                ['Web console', 'Next.js + React'],
                ['Mobile operations', 'Flutter iOS/Android'],
                ['Data layer', 'MySQL/MariaDB 10.6+'],
                ['Comms channels', 'Email / SMS / WhatsApp'],
                ['Realtime updates', 'WebSocket / SSE'],
                ['Spec discipline', 'OpenAPI 3.0 + Webhooks'],
              ].map(([key, value]) => (
                <div key={key} className="flex items-center justify-between gap-3 border-b border-slate-700/70 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-sm text-slate-400">{key}</span>
                  <span className="text-sm font-medium text-slate-100">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#09112A] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(125,211,252,0.18),transparent_42%),radial-gradient(circle_at_78%_68%,rgba(245,158,11,0.16),transparent_44%)]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Launch path</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-100 md:text-5xl">
              Move from pilot to production with one implementation plan.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Align guest data model, operating workflows, and compliance controls before go-live. Mercury team can map this page’s baseline to your venue rollout in one discovery sprint.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-amber-400 px-8 text-base font-semibold text-[#1E293B] hover:bg-amber-300 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">
                  Start Production Planning <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-400/60 bg-transparent px-8 text-base text-slate-100 hover:bg-slate-100/10 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Link href="/about">Talk To Mercury Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#050A1A] py-14">
        <div className="container-custom">
          <div className="grid gap-4 border-t border-slate-800 pt-10 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, text: 'Guest profiles and identity graph' },
              { icon: Tags, text: 'Rule-based segmentation and campaigns' },
              { icon: CalendarCheck, text: 'Reservation, waitlist, and floor loop' },
              { icon: Clock3, text: 'SLA and compliance-ready operations' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-sky-300" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
