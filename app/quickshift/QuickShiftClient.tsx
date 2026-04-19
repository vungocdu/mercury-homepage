'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Layers,
  LayoutDashboard,
  MessageSquare,
  ScanLine,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextHighlight } from '@/components/text-highlight'
import { TextWordCarousel } from '@/components/word-carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/* ────────────────────────── Data ────────────────────────── */

const coreModules = [
  {
    icon: ScanLine,
    title: 'Timecard OCR',
    description: 'AI-powered timecard scanning using Gemini AI. Automatically extracts hours, overtime, and break data from paper timecards with high accuracy.',
    color: '#FFA31A',
  },
  {
    icon: CalendarClock,
    title: 'Auto Shifter',
    description: 'AI scheduling engine that auto-generates optimal shift assignments based on worker availability, skills, location, and labor regulations.',
    color: '#3B82F6',
  },
  {
    icon: ClipboardList,
    title: 'Work Orders',
    description: 'Complete work order lifecycle management — create, assign, track, and close. Supports recurring orders, templates, and multi-site operations.',
    color: '#10B981',
  },
  {
    icon: Users,
    title: 'Worker Management',
    description: 'Comprehensive worker profiles with skills, certifications, availability calendars, contract history, and performance tracking.',
    color: '#8B5CF6',
  },
  {
    icon: Briefcase,
    title: 'Customer Management',
    description: 'CRM for staffing clients — contracts, billing preferences, site locations, required skill sets, and relationship history.',
    color: '#EC4899',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Analytics',
    description: 'Four specialized sub-dashboards: Operations Overview, Financial Summary, Worker Utilization, and Customer Insights with real-time KPIs.',
    color: '#F59E0B',
  },
  {
    icon: CreditCard,
    title: 'Invoicing & Billing',
    description: 'Automated invoice generation from timecards, customizable billing templates, payment tracking, and integration with accounting systems.',
    color: '#06B6D4',
  },
  {
    icon: Bell,
    title: 'Multi-Channel Notifications',
    description: 'Push notifications via FCM/APNs, plus integration with LINE, Zalo, and WhatsApp for worker and customer communication.',
    color: '#EF4444',
  },
]

const roles = [
  {
    title: 'Super Admin',
    description: 'Full system access with organization settings, user management, and audit logs.',
    permissions: 'All 63 permissions',
    color: '#1E3A5F',
  },
  {
    title: 'Admin',
    description: 'Manage workers, customers, work orders, and invoicing across all branches.',
    permissions: '50+ permissions',
    color: '#FFA31A',
  },
  {
    title: 'Manager',
    description: 'Oversee daily operations, approve timecards, manage schedules, and generate reports.',
    permissions: '35+ permissions',
    color: '#3B82F6',
  },
  {
    title: 'Staff',
    description: 'Create and update work orders, process timecards, and handle worker assignments.',
    permissions: '20+ permissions',
    color: '#10B981',
  },
  {
    title: 'Viewer',
    description: 'Read-only access to dashboards, reports, and operational data.',
    permissions: 'View-only',
    color: '#6B7280',
  },
]

/* mobileApps data removed — detailed mockups are rendered inline */

const integrations = [
  { name: 'Odoo ERP', description: 'Two-way sync for accounting, HR, and inventory' },
  { name: 'Payment Gateways', description: 'Stripe, PayPay, bank transfer automation' },
  { name: 'LINE / Zalo / WhatsApp', description: 'Multi-channel messaging and notifications' },
  { name: 'AWS Infrastructure', description: 'EC2, RDS, S3, CloudFront, Lambda, ALB' },
]

const techStack = [
  { label: 'CMS Frontend', tech: 'Next.js 16 · React 19 · Tailwind v4 · shadcn/ui' },
  { label: 'Mobile Apps', tech: 'Flutter · Melos monorepo · 3 apps' },
  { label: 'Backend API', tech: 'Go (Chi router) · DDD architecture · PostgreSQL' },
  { label: 'AI / ML', tech: 'Google Gemini AI · OCR · Auto Scheduling' },
  { label: 'Infrastructure', tech: 'AWS · Docker · Supabase Auth · S3' },
  { label: 'Database', tech: 'PostgreSQL · 110+ migrations · Redis cache' },
]

/* ────────────────────────── Helpers ────────────────────────── */

function PhoneMockup({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="mx-auto w-[240px]">
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800" />
        {/* Screen */}
        <div className="relative pt-7 pb-5 px-3 bg-white min-h-[420px]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/40" />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-gray-500">{title}</p>
    </div>
  )
}

/* ────────────────────────── Component ────────────────────────── */

export default function QuickShiftClient() {
  const { t, translations } = useLanguage()

  const tr = (key: string, fallback: string) => {
    const val = t(key)
    return val === key ? fallback : val
  }

  const moduleKeys = ['timecardOcr', 'autoShifter', 'workOrders', 'workerMgmt', 'customerMgmt', 'dashboard', 'invoicing', 'notifications'] as const
  const roleKeys = ['superAdmin', 'admin', 'manager', 'staff', 'viewer'] as const
  const integrationKeys = ['odoo', 'payment', 'messaging', 'aws'] as const
  const techKeys = ['cms', 'mobile', 'backend', 'ai', 'infra', 'db'] as const

  const getRaw = (key: string): unknown => {
    const keys = key.split('.')
    let value: unknown = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return undefined
      }
    }

    return value
  }

  const trArr = (key: string): string[] => {
    const val = getRaw(key)
    return Array.isArray(val) ? (val.filter(v => typeof v === 'string') as string[]) : []
  }

  const heroCarouselWords = trArr('quickshift.hero.carouselWords')
  const heroCarouselWordsFallback = ['AI Timecard Scanning', 'Auto Scheduling', 'Smart Invoicing', 'Multi-channel Alerts']

  const mobileWorkerTitleShort = tr('quickshift.mobile.worker.titleShort', tr('quickshift.mobile.worker.title', 'Worker Application'))
  const mobileCustomerTitleShort = tr('quickshift.mobile.customer.titleShort', tr('quickshift.mobile.customer.title', 'Customer Application'))
  const mobileBusinessTitleShort = tr('quickshift.mobile.business.titleShort', tr('quickshift.mobile.business.title', 'Business / HR Application'))

  return (
    <main className="min-h-screen font-ibm-plex-sans">
      <Header />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0e1a]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/mercury/qs-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Accent glows */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#FFA31A]/8 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-amber-500/6 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            {/* Badge */}
            <Badge variant="secondary" className="px-4 py-2 mb-8 rounded-full text-sm font-medium bg-[#FFA31A]/15 backdrop-blur-sm border border-[#FFA31A]/25 text-amber-200">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFA31A] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFA31A]" />
              </span>
              {tr('quickshift.hero.badge', 'AI-Powered Workforce Management')}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl">
              <span className="text-white">QuickShift</span>
              <br />
              <TextHighlight color="rgba(255, 163, 26, 0.3)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  {tr('quickshift.hero.title', 'Task Force Management Platform')}
                </span>
              </TextHighlight>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-white/70">
              {tr('quickshift.hero.subtitle', 'End-to-end temporary staffing solution — from AI timecard scanning and auto scheduling to invoicing and multi-channel notifications. Built for Japanese staffing agencies.')}{' '}
              <TextWordCarousel
                words={heroCarouselWords.length > 0 ? heroCarouselWords : heroCarouselWordsFallback}
                interval={2.5}
                className="text-amber-400 font-semibold"
              />
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="bg-[#FFA31A] hover:bg-[#E8930F] text-gray-900 font-semibold">
                <a href="#modules">
                  <Zap className="w-5 h-5 mr-2" />
                  {tr('quickshift.hero.cta.explore', 'Explore Modules')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <a href="#mobile">
                  <Smartphone className="w-5 h-5 mr-2" />
                  {tr('quickshift.hero.cta.apps', 'Mobile Apps')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { num: '8+', label: tr('quickshift.hero.stats.modules', 'Core Modules') },
                { num: '3', label: tr('quickshift.hero.stats.apps', 'Mobile Apps') },
                { num: '63', label: tr('quickshift.hero.stats.permissions', 'RBAC Permissions') },
                { num: '110+', label: tr('quickshift.hero.stats.migrations', 'DB Migrations') },
              ].map((s, i) => (
                <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">{s.num}</div>
                    <div className="text-xs mt-1 text-white/50">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFA31A]/40 to-transparent" />
      </section>

      {/* ═══════ Core Modules ═══════ */}
      <section id="modules" className="py-24 relative" style={{ backgroundColor: 'hsl(var(--section-bg, 0 0% 100%))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Layers className="w-4 h-4 mr-2" />
              {tr('quickshift.modules.badge', 'Platform Modules')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              {tr('quickshift.modules.title1', 'Everything You Need to')}{' '}
              <span className="text-[#FFA31A]">{tr('quickshift.modules.title2', 'Manage Your Workforce')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              {tr('quickshift.modules.subtitle', '8 integrated modules covering the complete temporary staffing lifecycle, from onboarding to invoicing.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((mod, i) => {
              const Icon = mod.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Card className="h-full border-0 shadow-[0_4px_20px_-4px_rgb(0_0_0_/_0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: 'hsl(var(--card-bg))' }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                        style={{ backgroundColor: `${mod.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: mod.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>{tr(`quickshift.modules.items.${moduleKeys[i]}.title`, mod.title)}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>{tr(`quickshift.modules.items.${moduleKeys[i]}.desc`, mod.description)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ AI Features Spotlight ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1408 50%, #0a0e1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,163,26,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,163,26,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Sparkles className="w-4 h-4 mr-2 text-[#FFA31A]" />
              {tr('quickshift.ai.badge', 'AI-Powered')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('quickshift.ai.title1', 'Intelligence Built Into')}{' '}
              <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">{tr('quickshift.ai.title2', 'Every Step')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* OCR Card */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[#FFA31A]/20">
                    <ScanLine className="w-7 h-7 text-[#FFA31A]" />
                  </div>
                  <CardTitle className="text-2xl text-white">{tr('quickshift.ai.ocr.title', 'Timecard OCR')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/60 leading-relaxed">
                    {tr('quickshift.ai.ocr.desc', 'Powered by Google Gemini AI, the OCR engine scans paper timecards and automatically extracts:')}
                  </p>
                  <ul className="space-y-2">
                    {(trArr('quickshift.ai.ocr.items').length > 0 ? trArr('quickshift.ai.ocr.items') : ['Work hours & overtime', 'Break periods', 'Start/end timestamps', 'Worker identification', 'Anomaly detection']).map((item, i) => (
                      <li key={i} className="flex items-center text-white/70">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-[#FFA31A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Auto Shifter Card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-blue-500/20">
                    <CalendarClock className="w-7 h-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{tr('quickshift.ai.shifter.title', 'Auto Shifter')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/60 leading-relaxed">
                    {tr('quickshift.ai.shifter.desc', 'AI scheduling engine that considers multiple factors to generate optimal shift assignments:')}
                  </p>
                  <ul className="space-y-2">
                    {(trArr('quickshift.ai.shifter.items').length > 0 ? trArr('quickshift.ai.shifter.items') : ['Worker skills & certifications', 'Location proximity', 'Labor law compliance', 'Availability preferences', 'Fair distribution algorithms']).map((item, i) => (
                      <li key={i} className="flex items-center text-white/70">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ RBAC Roles ═══════ */}
      <section id="roles" className="py-24" style={{ backgroundColor: 'hsl(var(--section-bg, 0 0% 100%))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              {tr('quickshift.roles.badge', 'Role-Based Access')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              {tr('quickshift.roles.title1', '5 Roles,')}{' '}
              <span className="text-[#FFA31A]">{tr('quickshift.roles.title2', '63 Granular Permissions')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              {tr('quickshift.roles.subtitle', 'Fine-grained access control ensures every team member sees exactly what they need — nothing more, nothing less.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {roles.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  style={{ backgroundColor: 'hsl(var(--card-bg))' }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${role.color}18` }}>
                      <Shield className="w-6 h-6" style={{ color: role.color }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>{tr(`quickshift.roles.items.${roleKeys[i]}.title`, role.title)}</h3>
                    <p className="text-sm mb-3 leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>{tr(`quickshift.roles.items.${roleKeys[i]}.desc`, role.description)}</p>
                    <Badge variant="secondary" className="text-xs">{tr(`quickshift.roles.items.${roleKeys[i]}.permissions`, role.permissions)}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Mobile Apps ═══════ */}
      <section id="mobile" className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(var(--section-alt-bg, 0 0% 97%))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">{tr('quickshift.mobile.badge', 'Mobile Applications')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(var(--text-primary))' }}>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">{mobileWorkerTitleShort}</span>
              {' · '}
              <span className="bg-gradient-to-r from-[#FFA31A] to-amber-500 bg-clip-text text-transparent">{mobileCustomerTitleShort}</span>
              {' · '}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">{mobileBusinessTitleShort}</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'hsl(var(--text-secondary))' }}>
              {tr('quickshift.mobile.flutterBadge', 'Built with Flutter · Melos monorepo · iOS & Android')}
            </p>
          </div>

          <div className="space-y-10">
            {/* ── Worker App ── */}
            <Card className="border-blue-200/50 shadow-sm" style={{ backgroundColor: 'rgba(59,130,246,0.03)' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  <PhoneMockup title={tr('quickshift.mobile.mock.worker.phoneTitle', 'Worker App')}>
                    {/* Status bar */}
                    <div className="mb-3 flex items-center justify-between text-[9px] text-gray-400">
                      <span>9:41</span>
                      <span className="font-semibold text-blue-600">{tr('quickshift.mobile.mock.brand', 'QuickShift')}</span>
                      <span>100%</span>
                    </div>
                    {/* Profile header */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white font-bold">TN</div>
                        <div>
                          <p className="text-xs font-bold text-white">Tanaka Naoki</p>
                          <p className="text-[9px] text-white/80">{tr('quickshift.mobile.mock.worker.profileMeta', 'Warehouse · Full-time')}</p>
                        </div>
                      </div>
                    </div>
                    {/* Today's shift */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.worker.todayShift', "Today's Shift")}</p>
                    <div className="mb-3 rounded-lg border border-blue-200 bg-blue-50/50 px-2.5 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-gray-800">ABC Logistics</span>
                        <span className="text-[8px] rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-700 font-medium">{tr('quickshift.mobile.mock.worker.statusActive', 'Active')}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[9px] text-gray-500">
                        <span>08:00 — 17:00</span>
                        <span>|</span>
                        <span>{tr('quickshift.mobile.mock.worker.location', 'Warehouse A')}</span>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-1.5 flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-gray-200">
                          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                        </div>
                        <span className="text-[9px] text-blue-600 font-medium">65%</span>
                      </div>
                    </div>
                    {/* Upcoming shifts */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.worker.upcoming', 'Upcoming')}</p>
                    <div className="space-y-1.5 mb-3">
                      {[
                        { day: tr('quickshift.mobile.mock.worker.upcomingDay1', 'Tomorrow'), site: 'XYZ Factory', time: '07:00–16:00' },
                        { day: tr('quickshift.mobile.mock.worker.upcomingDay2', 'Wed'), site: 'ABC Logistics', time: '08:00–17:00' },
                      ].map((s, si) => (
                        <div key={si} className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-2.5 py-1.5">
                          <div>
                            <span className="text-[10px] font-medium text-gray-800">{s.day}</span>
                            <span className="text-[9px] text-gray-400 ml-1.5">{s.site}</span>
                          </div>
                          <span className="text-[9px] text-gray-500">{s.time}</span>
                        </div>
                      ))}
                    </div>
                    {/* Timecard submit */}
                    <div className="rounded-lg border border-blue-200 bg-white p-2">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.worker.timecard', 'Timecard')}</span>
                        <span className="text-[8px] text-gray-400">{tr('quickshift.mobile.mock.worker.timecardDate', 'Feb 14')}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="rounded bg-gray-50 py-1">
                          <p className="text-[10px] font-bold text-gray-800">8:02</p>
                          <p className="text-[7px] text-gray-400">{tr('quickshift.mobile.mock.worker.clockIn', 'Clock In')}</p>
                        </div>
                        <div className="rounded bg-gray-50 py-1">
                          <p className="text-[10px] font-bold text-gray-800">—</p>
                          <p className="text-[7px] text-gray-400">{tr('quickshift.mobile.mock.worker.clockOut', 'Clock Out')}</p>
                        </div>
                        <div className="rounded bg-blue-50 py-1">
                          <p className="text-[10px] font-bold text-blue-600">5.9h</p>
                          <p className="text-[7px] text-blue-500">{tr('quickshift.mobile.mock.worker.worked', 'Worked')}</p>
                        </div>
                      </div>
                    </div>
                    {/* Submit button */}
                    <div className="mt-2.5 rounded-lg bg-blue-600 py-2 text-center">
                      <span className="text-[10px] font-semibold text-white">{tr('quickshift.mobile.mock.worker.submit', 'Submit Timecard')}</span>
                    </div>
                  </PhoneMockup>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{tr('quickshift.mobile.worker.title', 'Worker Application')}</h3>
                        <p className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.worker.subtitle', 'Schedule, timecards & availability')}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {(trArr('quickshift.mobile.worker.features').length > 0 ? trArr('quickshift.mobile.worker.features') : [
                        'View assigned shifts with real-time status and location details',
                        'Submit timecards with clock-in/out and break tracking',
                        'Set weekly availability and request time off',
                        'Receive push notifications for new assignments and schedule changes',
                        'View earnings history and payment status',
                      ]).map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-blue-500/10 p-3">
                      <div className="text-center">
                        <p className="text-blue-600 text-lg font-bold">{'<'}2s</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.worker.stats.loadTime', 'Load time')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-600 text-lg font-bold">1-tap</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.worker.stats.clockIn', 'Clock in/out')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-600 text-lg font-bold">24/7</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.worker.stats.pushAlerts', 'Push alerts')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── Customer App ── */}
            <Card className="border-orange-200/50 shadow-sm" style={{ backgroundColor: 'rgba(255,163,26,0.03)' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  <PhoneMockup title={tr('quickshift.mobile.mock.customer.phoneTitle', 'Customer App')}>
                    {/* Status bar */}
                    <div className="mb-3 flex items-center justify-between text-[9px] text-gray-400">
                      <span>9:41</span>
                      <span className="font-semibold text-[#FFA31A]">{tr('quickshift.mobile.mock.brand', 'QuickShift')}</span>
                      <span>100%</span>
                    </div>
                    {/* Company header */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-[#FFA31A] to-amber-500 px-3 py-2.5">
                      <p className="text-[10px] text-white/80">{tr('quickshift.mobile.mock.customer.companyDashboard', 'Company Dashboard')}</p>
                      <p className="text-xs font-bold text-white">ABC Logistics Co., Ltd.</p>
                    </div>
                    {/* Active work orders */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.customer.activeWorkOrders', 'Active Work Orders')}</p>
                    <div className="space-y-2 mb-3">
                      <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium text-gray-800">WO-2024-0847</span>
                          <span className="text-[8px] rounded-full bg-green-100 px-1.5 py-0.5 text-green-700 font-medium">{tr('quickshift.mobile.mock.customer.status.inProgress', 'In Progress')}</span>
                        </div>
                        <p className="text-[9px] text-gray-500 mb-1">{tr('quickshift.mobile.mock.customer.wo1Desc', 'Warehouse sorting · 5 workers')}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                            <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-[#FFA31A] to-amber-400" />
                          </div>
                          <span className="text-[9px] text-[#FFA31A] font-medium">4/5</span>
                        </div>
                      </div>
                      <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium text-gray-800">WO-2024-0852</span>
                          <span className="text-[8px] rounded-full bg-amber-100 px-1.5 py-0.5 text-amber-700 font-medium">{tr('quickshift.mobile.mock.customer.status.pending', 'Pending')}</span>
                        </div>
                        <p className="text-[9px] text-gray-500">{tr('quickshift.mobile.mock.customer.wo2Desc', 'Factory assembly · 8 workers')}</p>
                      </div>
                    </div>
                    {/* Timecard approvals */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.customer.pendingApprovals', 'Pending Approvals')}</p>
                    <div className="rounded-md border border-orange-200 bg-orange-50/50 px-2.5 py-2 mb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] text-gray-800 font-medium">{tr('quickshift.mobile.mock.customer.timecards', 'Timecards')}</span>
                        <span className="text-[10px] font-bold text-[#FFA31A]">12</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 rounded bg-white py-1.5 text-center border border-green-200">
                          <span className="text-[9px] text-green-600 font-medium">{tr('quickshift.mobile.mock.customer.approveAll', 'Approve All')}</span>
                        </div>
                        <div className="flex-1 rounded bg-white py-1.5 text-center border border-gray-200">
                          <span className="text-[9px] text-gray-600 font-medium">{tr('quickshift.mobile.mock.customer.review', 'Review')}</span>
                        </div>
                      </div>
                    </div>
                    {/* Invoice summary */}
                    <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                      <p className="text-[9px] font-semibold text-gray-700 mb-1">{tr('quickshift.mobile.mock.customer.thisMonth', 'This Month')}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                          <p className="text-[11px] font-bold text-[#FFA31A]">¥2.4M</p>
                          <p className="text-[7px] text-gray-400">{tr('quickshift.mobile.mock.customer.invoiceTotal', 'Invoice Total')}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[11px] font-bold text-emerald-500">¥1.8M</p>
                          <p className="text-[7px] text-gray-400">{tr('quickshift.mobile.mock.customer.paid', 'Paid')}</p>
                        </div>
                      </div>
                    </div>
                  </PhoneMockup>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFA31A] to-amber-500 shadow-lg">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{tr('quickshift.mobile.customer.title', 'Customer Application')}</h3>
                        <p className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.customer.subtitle', 'Work orders, approvals & billing')}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {(trArr('quickshift.mobile.customer.features').length > 0 ? trArr('quickshift.mobile.customer.features') : [
                        'Create and manage work orders with worker skill requirements',
                        'Track real-time status of all assigned workers and sites',
                        'Approve or dispute timecards with one-tap bulk actions',
                        'View invoices, payment history, and outstanding balances',
                        'Rate worker performance and request preferred workers',
                      ]).map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFA31A]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-[#FFA31A]/10 p-3">
                      <div className="text-center">
                        <p className="text-[#FFA31A] text-lg font-bold">1-tap</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.customer.stats.bulkApprove', 'Bulk approve')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#FFA31A] text-lg font-bold">Live</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.customer.stats.orderTracking', 'Order tracking')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#FFA31A] text-lg font-bold">Auto</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.customer.stats.invoicing', 'Invoicing')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── Business / Manager App ── */}
            <Card className="border-emerald-200/50 shadow-sm" style={{ backgroundColor: 'rgba(16,185,129,0.03)' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  <PhoneMockup title={tr('quickshift.mobile.mock.business.phoneTitle', 'Business App')}>
                    {/* Status bar */}
                    <div className="mb-3 flex items-center justify-between text-[9px] text-gray-400">
                      <span>9:41</span>
                      <span className="font-semibold text-emerald-600">{tr('quickshift.mobile.mock.brand', 'QuickShift')}</span>
                      <span>100%</span>
                    </div>
                    {/* Dashboard header */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-3 py-2.5">
                      <p className="text-[10px] text-white/80">{tr('quickshift.mobile.mock.business.operationsDashboard', 'Operations Dashboard')}</p>
                      <p className="text-xs font-bold text-white">{tr('quickshift.mobile.mock.business.date', 'Feb 14, 2026')}</p>
                    </div>
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 gap-1.5 mb-3">
                      <div className="rounded-md bg-emerald-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-emerald-600">247</p>
                        <p className="text-[7px] text-gray-500">{tr('quickshift.mobile.mock.business.kpi.activeWorkers', 'Active Workers')}</p>
                      </div>
                      <div className="rounded-md bg-blue-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-blue-600">38</p>
                        <p className="text-[7px] text-gray-500">{tr('quickshift.mobile.mock.business.kpi.workOrders', 'Work Orders')}</p>
                      </div>
                      <div className="rounded-md bg-orange-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-[#FFA31A]">96%</p>
                        <p className="text-[7px] text-gray-500">{tr('quickshift.mobile.mock.business.kpi.fillRate', 'Fill Rate')}</p>
                      </div>
                      <div className="rounded-md bg-purple-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-purple-600">¥18.2M</p>
                        <p className="text-[7px] text-gray-500">{tr('quickshift.mobile.mock.business.kpi.revenueMtd', 'Revenue MTD')}</p>
                      </div>
                    </div>
                    {/* Shift Overview */}
                    <p className="mb-1.5 text-[10px] font-semibold text-gray-700">{tr('quickshift.mobile.mock.business.todaysDispatches', "Today's Dispatches")}</p>
                    <div className="space-y-1.5 mb-3">
                      {[
                        { site: 'ABC Logistics', workers: '5/5', status: tr('quickshift.mobile.mock.business.dispatch.statusComplete', 'Complete'), color: 'text-emerald-600 bg-emerald-100' },
                        { site: 'XYZ Factory', workers: '7/8', status: tr('quickshift.mobile.mock.business.dispatch.statusOpen', '1 Open'), color: 'text-amber-600 bg-amber-100' },
                        { site: 'DEF Retail', workers: '3/3', status: tr('quickshift.mobile.mock.business.dispatch.statusComplete', 'Complete'), color: 'text-emerald-600 bg-emerald-100' },
                      ].map((d, di) => (
                        <div key={di} className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-2 py-1.5">
                          <div>
                            <p className="text-[10px] font-medium text-gray-800">{d.site}</p>
                            <p className="text-[8px] text-gray-400">
                              {d.workers} {tr('quickshift.mobile.mock.business.dispatch.workersSuffix', 'workers')}
                            </p>
                          </div>
                          <span className={`text-[8px] rounded-full px-1.5 py-0.5 font-medium ${d.color}`}>{d.status}</span>
                        </div>
                      ))}
                    </div>
                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="rounded-lg bg-emerald-600 py-1.5 text-center">
                        <span className="text-[9px] font-semibold text-white">{tr('quickshift.mobile.mock.business.actions.dispatch', 'Dispatch')}</span>
                      </div>
                      <div className="rounded-lg border border-emerald-200 bg-white py-1.5 text-center">
                        <span className="text-[9px] font-semibold text-emerald-600">{tr('quickshift.mobile.mock.business.actions.reports', 'Reports')}</span>
                      </div>
                    </div>
                  </PhoneMockup>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{tr('quickshift.mobile.business.title', 'Business / HR Application')}</h3>
                        <p className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.business.subtitle', 'Operations, dispatch & analytics')}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {(trArr('quickshift.mobile.business.features').length > 0 ? trArr('quickshift.mobile.business.features') : [
                        'Real-time operations dashboard with KPIs and fill rates',
                        'One-click worker dispatch to open positions across sites',
                        'Auto Shifter integration for AI-generated schedules',
                        'Financial overview with revenue tracking and invoice status',
                        'Generate daily, weekly, and monthly operational reports',
                      ]).map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-emerald-500/10 p-3">
                      <div className="text-center">
                        <p className="text-emerald-600 text-lg font-bold">Live</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.business.stats.dashboard', 'Dashboard')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-emerald-600 text-lg font-bold">AI</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.business.stats.autoShifter', 'Auto Shifter')}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-emerald-600 text-lg font-bold">PDF</p>
                        <p className="text-[10px]" style={{ color: 'hsl(var(--text-secondary))' }}>{tr('quickshift.mobile.business.stats.export', 'Export')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Flutter tech badge */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border px-6 py-3 shadow-sm" style={{ borderColor: 'hsl(var(--border))', backgroundColor: 'hsl(var(--card-bg))' }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA31A]/10">
                <Smartphone className="h-4 w-4 text-[#FFA31A]" />
              </div>
              <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-secondary))' }}>
                {tr('quickshift.mobile.flutterBadge', 'Built with Flutter · Melos monorepo · iOS & Android')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Integration Hub ═══════ */}
      <section className="py-24" style={{ backgroundColor: 'hsl(var(--section-bg, 0 0% 100%))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Settings className="w-4 h-4 mr-2" />
              {tr('quickshift.integrations.badge', 'Integration Hub')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              {tr('quickshift.integrations.title1', 'Connects With Your')}{' '}
              <span className="text-[#FFA31A]">{tr('quickshift.integrations.title2', 'Existing Tools')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {integrations.map((integ, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: 'hsl(var(--card-bg))' }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-[#FFA31A]" />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>{tr(`quickshift.integrations.items.${integrationKeys[i]}.name`, integ.name)}</h3>
                    <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>{tr(`quickshift.integrations.items.${integrationKeys[i]}.desc`, integ.description)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Tech Stack ═══════ */}
      <section className="py-24" style={{ backgroundColor: 'hsl(var(--section-alt-bg, 0 0% 97%))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {tr('quickshift.tech.badge', 'Technology')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              {tr('quickshift.tech.title1', 'Built With')}{' '}
              <span className="text-[#FFA31A]">{tr('quickshift.tech.title2', 'Modern Technology')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {techStack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300" style={{ backgroundColor: 'hsl(var(--card-bg))' }}>
                  <CardContent className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1 text-[#FFA31A]">{tr(`quickshift.tech.items.${techKeys[i]}.label`, item.label)}</div>
                    <div className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{tr(`quickshift.tech.items.${techKeys[i]}.tech`, item.tech)}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0e00 0%, #2a1600 50%, #1a0e00 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFA31A 0%, transparent 50%), radial-gradient(circle at 70% 50%, #3B82F6 0%, transparent 50%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('quickshift.cta.title', 'Ready to Digitize Your')}{' '}
              <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">{tr('quickshift.cta.titleAccent', 'Staffing Operations?')}</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/60 leading-relaxed">
              {tr('quickshift.cta.subtitle', "Let's discuss how QuickShift can streamline your workforce management and eliminate manual processes.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FFA31A] hover:bg-[#E8930F] text-gray-900 font-semibold">
                <a href="#contact">
                  <Zap className="w-5 h-5 mr-2" />
                  {tr('quickshift.cta.getStarted', 'Get Started')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <Link href="/">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {tr('quickshift.cta.viewAll', 'View All Projects')}
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <Button asChild variant="link" className="text-white/40 hover:text-white/70">
                <Link href="/quickshift/privacy">
                  <Shield className="w-4 h-4 mr-2" />
                  {tr('quickshift.cta.privacyLink', 'Privacy Policy & User Privacy Choices')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
