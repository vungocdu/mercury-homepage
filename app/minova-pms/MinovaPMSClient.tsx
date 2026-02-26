'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BedDouble,
  Bell,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  DoorOpen,
  FileText,
  Globe,
  Hotel,
  KeyRound,
  Layers,
  LayoutDashboard,
  Moon,
  QrCode,
  ScanFace,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Wifi,
  Zap,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextHighlight } from '@/components/text-highlight'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MovingDotsBackground from '@/components/MovingDotsBackground'

/* ────────────────────────── Data ────────────────────────── */

const coreModules = [
  {
    icon: CalendarCheck,
    title: 'Reservation Management',
    description: 'Full booking lifecycle — create, modify, cancel, waitlist. Calendar view, folio tracking, and group reservations with multi-room support.',
    color: '#3B82F6',
  },
  {
    icon: DoorOpen,
    title: 'Front Desk Operations',
    description: 'Today\'s check-ins, check-outs, in-house guests, and walk-in registration. One-click room assignment and real-time guest status.',
    color: '#10B981',
  },
  {
    icon: BedDouble,
    title: 'Housekeeping',
    description: 'Visual room status grid — occupancy, cleanliness tracking, floor/wing assignment. Real-time updates between front desk and housekeeping staff.',
    color: '#8B5CF6',
  },
  {
    icon: Moon,
    title: 'Night Audit',
    description: 'End-of-day reconciliation — no-show handling, daily charge posting, business date advancement, and facility-level closing procedures.',
    color: '#F59E0B',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Multi-gateway payments: VNPay QR, MoMo e-wallet, cash, credit card, bank transfer. Deposit tracking, invoicing, and monthly billing.',
    color: '#EC4899',
  },
  {
    icon: Users,
    title: 'Guest CRM',
    description: 'Complete guest profiles — stay history, preferences, allergies, loyalty tiers, language preferences. Family and group tracking with VIP management.',
    color: '#06B6D4',
  },
  {
    icon: Globe,
    title: 'Channel Manager',
    description: 'OTA integration via Beds24 — real-time rate and availability sync across Booking.com, Agoda, Expedia, and other channels.',
    color: '#EF4444',
  },
  {
    icon: FileText,
    title: 'Reports & Documents',
    description: 'Occupancy, sales, deposit, and receivable reports. Auto-generate PDF invoices, registration cards, confirmation emails, and DOCX exports.',
    color: '#F97316',
  },
]

const guestFeatures = [
  {
    icon: QrCode,
    title: 'Self Check-in Wizard',
    description: 'Step-by-step guest check-in — room selection, ID upload with OCR, booking confirmation, and payment. QR code powered.',
  },
  {
    icon: ScanFace,
    title: 'AI Document OCR',
    description: 'Tesseract.js-powered passport/ID scanning that auto-extracts guest information. Reduce front desk wait times by 60%.',
  },
  {
    icon: Smartphone,
    title: 'Express Checkout',
    description: 'Guests pay from their room via QR code — VNPay or MoMo. No front desk queue required.',
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    description: 'Pusher-powered live updates for staff — new bookings, check-in alerts, room status changes, payment confirmations.',
  },
]

const workflows = [
  {
    step: '01',
    title: 'Reservation Created',
    description: 'Guest books via OTA or direct. System generates folio, assigns room, calculates rates, sends confirmation email.',
    color: '#3B82F6',
  },
  {
    step: '02',
    title: 'Guest Check-in',
    description: 'Front desk or self-service kiosk. ID scan, room key issued, room status updated to occupied. Registration card generated.',
    color: '#10B981',
  },
  {
    step: '03',
    title: 'In-house Management',
    description: 'Housekeeping tracks room status. Mini-bar charges, service items added. Real-time room inventory across all floors.',
    color: '#8B5CF6',
  },
  {
    step: '04',
    title: 'Night Audit',
    description: 'End-of-day: post room charges, handle no-shows, reconcile payments, advance business date. Automated and auditable.',
    color: '#F59E0B',
  },
  {
    step: '05',
    title: 'Check-out & Invoice',
    description: 'Final charges calculated, payment processed, invoice generated (PDF). Room released to housekeeping for cleaning.',
    color: '#EC4899',
  },
  {
    step: '06',
    title: 'Reports & Analytics',
    description: 'Daily occupancy, revenue, receivables reports in Excel. Channel performance tracking. Financial reconciliation.',
    color: '#06B6D4',
  },
]

const techStack = [
  { label: 'Frontend', tech: 'React 17 · Redux Saga · Ant Design · Styled Components' },
  { label: 'Backend API', tech: 'Laravel 10 · PHP 8.1 · Eloquent ORM · JWT Auth' },
  { label: 'Database', tech: 'MySQL 8.1 · Multi-tenant schema · Branch isolation' },
  { label: 'Payments', tech: 'VNPay · MoMo · QR Code generation · Multi-gateway' },
  { label: 'Integrations', tech: 'Beds24 OTA · Pusher real-time · Hanet face recognition' },
  { label: 'Documents', tech: 'DomPDF · PHPSpreadsheet · PHPWord · QR Code' },
]

const permissions = [
  {
    title: 'Admin / Manager',
    description: 'Full system access — reservations, payments, reports, night audit, housekeeping, and user management.',
    color: '#1E3A5F',
  },
  {
    title: 'Front Desk',
    description: 'Check-in/out operations, walk-in registration, room assignments, guest management, and payment processing.',
    color: '#3B82F6',
  },
  {
    title: 'Housekeeping',
    description: 'Room status updates, cleaning assignments, floor/wing management, and equipment tracking.',
    color: '#10B981',
  },
  {
    title: 'Receptionist',
    description: 'Reservation viewing, calendar management, guest check-in, and customer lookup.',
    color: '#F59E0B',
  },
]

/* ────────────────────────── Component ────────────────────────── */

export default function MinovaPMSClient() {
  const { t } = useLanguage()

  const tr = (key: string, fallback: string) => {
    const val = t(key)
    return val === key ? fallback : val
  }

  const moduleKeys = ['reservation', 'frontDesk', 'housekeeping', 'nightAudit', 'payment', 'guestCrm', 'channel', 'reports'] as const
  const localizedModules = coreModules.map((mod, i) => ({
    ...mod,
    title: tr(`minovaPms.modules.${moduleKeys[i]}.title`, mod.title),
    description: tr(`minovaPms.modules.${moduleKeys[i]}.desc`, mod.description),
  }))

  const guestKeys = ['selfCheckin', 'ocr', 'expressCheckout', 'notifications'] as const
  const localizedGuest = guestFeatures.map((feat, i) => ({
    ...feat,
    title: tr(`minovaPms.guest.${guestKeys[i]}.title`, feat.title),
    description: tr(`minovaPms.guest.${guestKeys[i]}.desc`, feat.description),
  }))

  const stepKeys = ['s1', 's2', 's3', 's4', 's5', 's6'] as const
  const localizedWorkflows = workflows.map((wf, i) => ({
    ...wf,
    title: tr(`minovaPms.workflow.steps.${stepKeys[i]}.title`, wf.title),
    description: tr(`minovaPms.workflow.steps.${stepKeys[i]}.desc`, wf.description),
  }))

  const roleKeys = ['admin', 'frontDesk', 'housekeeping', 'receptionist'] as const
  const localizedRoles = permissions.map((role, i) => ({
    ...role,
    title: tr(`minovaPms.roles.${roleKeys[i]}.title`, role.title),
    description: tr(`minovaPms.roles.${roleKeys[i]}.desc`, role.description),
  }))

  return (
    <main className="min-h-screen font-ibm-plex-sans">
      <Header />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #070d1a 0%, #0a1628 30%, #0d1f35 60%, #070d1a 100%)' }}>
        <div className="absolute inset-0 z-0">
          <MovingDotsBackground />
        </div>

        {/* Accent glows */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            <Badge variant="secondary" className="px-4 py-2 mb-8 rounded-full text-sm font-medium bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-200">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              {tr('minovaPms.hero.badge', 'Cloud Property Management System')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl">
              <span className="text-white">Minova</span>{' '}
              <TextHighlight color="rgba(56, 189, 248, 0.3)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {tr('minovaPms.hero.title', 'PMS')}
                </span>
              </TextHighlight>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-white/80">
              {tr('minovaPms.hero.subtitle', 'Enterprise-grade hotel property management — from reservation to checkout. Multi-property support, OTA channel integration, real-time housekeeping, night audit, and multi-gateway payments.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold">
                <a href="#modules">
                  <Zap className="w-5 h-5 mr-2" />
                  {tr('minovaPms.hero.cta.explore', 'Explore Modules')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <a href="#contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {tr('minovaPms.hero.cta.demo', 'Request Demo')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { num: '8+', label: tr('minovaPms.hero.stats.modules', 'Core Modules') },
                { num: '71', label: tr('minovaPms.hero.stats.models', 'Data Models') },
                { num: '5+', label: tr('minovaPms.hero.stats.properties', 'Properties Live') },
                { num: '4', label: tr('minovaPms.hero.stats.languages', 'Languages') },
              ].map((s, i) => (
                <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{s.num}</div>
                    <div className="text-xs mt-1 text-white/60">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent z-10" />
      </section>

      {/* ═══════ Core Modules ═══════ */}
      <section id="modules" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Layers className="w-4 h-4 mr-2" />
              {tr('minovaPms.modules.badge', 'Platform Modules')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('minovaPms.modules.title', 'Complete Hotel')}{' '}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">{tr('minovaPms.modules.titleAccent', 'Operations Suite')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {tr('minovaPms.modules.subtitle', '8 integrated modules covering the full hotel management lifecycle — from the first booking to the final invoice.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localizedModules.map((mod, i) => {
              const Icon = mod.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Card className="h-full border-0 shadow-[0_4px_20px_-4px_rgb(0_0_0_/_0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                        style={{ backgroundColor: `${mod.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: mod.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{mod.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{mod.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Guest Experience ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0a1628 50%, #0a0e1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Sparkles className="w-4 h-4 mr-2 text-sky-400" />
              {tr('minovaPms.guest.badge', 'Guest Experience')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('minovaPms.guest.title', 'Smart Guest')}{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{tr('minovaPms.guest.titleAccent', 'Technology')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/60">
              {tr('minovaPms.guest.subtitle', 'Self-service check-in, AI document scanning, express QR checkout, and real-time notifications for modern hospitality.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {localizedGuest.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-sky-400/20">
                        <Icon className="w-7 h-7 text-sky-400" />
                      </div>
                      <CardTitle className="text-xl text-white">{feat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/60 leading-relaxed">{feat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Booking Workflow ═══════ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <ClipboardList className="w-4 h-4 mr-2" />
              {tr('minovaPms.workflow.badge', 'Booking Lifecycle')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('minovaPms.workflow.title', 'End-to-End')}{' '}
              <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">{tr('minovaPms.workflow.titleAccent', 'Guest Journey')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {tr('minovaPms.workflow.subtitle', 'From the moment a guest books to the final invoice — every step is tracked, automated, and auditable.')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {localizedWorkflows.map((wf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    style={{ backgroundColor: wf.color }}
                  >
                    {wf.step}
                  </div>
                  {i < localizedWorkflows.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-gray-300 to-transparent" />
                  )}
                </div>
                <Card className="flex-1 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{wf.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{wf.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Multi-Property & Roles ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Multi-Property */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge variant="outline" className="px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                {tr('minovaPms.multiProperty.badge', 'Multi-Property')}
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {tr('minovaPms.multiProperty.title', 'One Platform,')}{' '}
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">{tr('minovaPms.multiProperty.titleAccent', 'Multiple Properties')}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                {tr('minovaPms.multiProperty.description', 'Minova PMS supports a hierarchical multi-tenant architecture: Operator → Branch → Facility. Manage boutique hotels, resorts, and hotel chains from a single dashboard with branch-level data isolation and role-based access control.')}
              </p>

              <div className="space-y-4">
                {(() => {
                  const featuresVal = t('minovaPms.multiProperty.features')
                  const features = Array.isArray(featuresVal) ? featuresVal : [
                    'Centralized dashboard across all properties',
                    'Branch-level data isolation and security',
                    'Staff can switch between properties',
                    'Consolidated reporting across branches',
                    'Per-facility night audit and business date',
                  ]
                  return features
                })().map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Roles */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge variant="outline" className="px-4 py-2 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                {tr('minovaPms.roles.badge', 'Role-Based Access')}
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {tr('minovaPms.roles.title', 'Granular')}{' '}
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{tr('minovaPms.roles.titleAccent', 'Permissions')}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                {tr('minovaPms.roles.description', 'Spatie Permission-based RBAC with module-level access control. Each role gets exactly the permissions they need — no more, no less.')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localizedRoles.map((role, i) => (
                  <Card key={i} className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: role.color }} />
                      <h4 className="font-bold text-gray-900 mb-1">{role.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Integrations & Payments ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0c1220 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Wifi className="w-4 h-4 mr-2 text-sky-400" />
              {tr('minovaPms.integrations.badge', 'Integrations')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('minovaPms.integrations.title', 'Connected')}{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{tr('minovaPms.integrations.titleAccent', 'Ecosystem')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* OTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-blue-400/20">
                    <Globe className="w-7 h-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tr('minovaPms.integrations.ota.title', 'OTA Channels')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed mb-4">{tr('minovaPms.integrations.ota.desc', 'Beds24 integration for real-time sync with major OTAs.')}</p>
                  <ul className="space-y-2">
                    {['Booking.com', 'Agoda', 'Expedia', 'Airbnb', 'Direct Booking'].map((ch, i) => (
                      <li key={i} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-green-400/20">
                    <CreditCard className="w-7 h-7 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tr('minovaPms.integrations.payment.title', 'Payment Gateways')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed mb-4">{tr('minovaPms.integrations.payment.desc', 'Multi-gateway payment with QR code support for Vietnam market.')}</p>
                  <ul className="space-y-2">
                    {['VNPay QR Code', 'MoMo E-wallet', 'Cash & Credit Card', 'Bank Transfer', 'Virtual Card (VCC)'].map((pm, i) => (
                      <li key={i} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        {pm}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smart Tech */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-violet-400/20">
                    <Sparkles className="w-7 h-7 text-violet-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tr('minovaPms.integrations.smart.title', 'Smart Technology')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed mb-4">{tr('minovaPms.integrations.smart.desc', 'AI and IoT integrations for modern hotel operations.')}</p>
                  <ul className="space-y-2">
                    {['Hanet Face Recognition', 'Tesseract OCR (ID Scan)', 'Pusher Real-time Events', 'Google/Facebook SSO', 'Power Monitoring (IoT)'].map((tech, i) => (
                      <li key={i} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-violet-400 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Tech Stack ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              {tr('minovaPms.tech.badge', 'Technology')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('minovaPms.tech.title', 'Built With')}{' '}
              <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">{tr('minovaPms.tech.titleAccent', 'Modern Stack')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">{item.label}</div>
                    <p className="text-sm text-gray-700 font-medium">{item.tech}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ i18n ═══════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tr('minovaPms.i18n.title', 'Multi-Language Support')}</h3>
              <p className="text-gray-500">{tr('minovaPms.i18n.subtitle', 'Full internationalization for global hotel operations.')}</p>
            </div>
            <div className="flex gap-3">
              {[
                { flag: '🇻🇳', lang: 'Vietnamese' },
                { flag: '🇺🇸', lang: 'English' },
                { flag: '🇯🇵', lang: 'Japanese' },
                { flag: '🇰🇷', lang: 'Korean' },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="text-xl">{l.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{l.lang}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0a1628 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-sky-400/20 flex items-center justify-center mx-auto mb-8">
              <KeyRound className="w-8 h-8 text-sky-400" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('minovaPms.cta.title', 'Ready to Modernize Your')}{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{tr('minovaPms.cta.titleAccent', 'Hotel Operations?')}</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              {tr('minovaPms.cta.subtitle', 'Get a personalized demo of Minova PMS tailored to your property size and requirements.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8">
                <a href="#contact">
                  {tr('minovaPms.cta.demo', 'Request Demo')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <Link href="/">
                  {tr('minovaPms.cta.viewAll', 'View All Solutions')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ Contact ═══════ */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
