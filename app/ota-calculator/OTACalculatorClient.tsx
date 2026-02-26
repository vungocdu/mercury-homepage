'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  FileDown,
  Globe,
  Hotel,
  Layers,
  LayoutDashboard,
  Percent,
  RotateCcw,
  Scale,
  Shield,
  Sparkles,
  SplitSquareVertical,
  Tags,
  TrendingUp,
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

const otaPlatforms = [
  { name: 'Booking.com', commission: '18%', method: 'Multiplicative', color: '#003580', discounts: 16 },
  { name: 'Agoda', commission: '20%', method: 'Additive', color: '#5C2D91', discounts: 12 },
  { name: 'Expedia', commission: '16%', method: 'Highest Only', color: '#FBAF18', discounts: 8 },
  { name: 'Traveloka', commission: '17%', method: 'Hybrid', color: '#0194F3', discounts: 10 },
  { name: 'Trip.com', commission: '18%', method: 'Additive', color: '#287DFA', discounts: 14 },
  { name: 'Airbnb', commission: '12%', method: 'Additive', color: '#FF5A5F', discounts: 6 },
  { name: 'Go2Joy', commission: '15%', method: 'Additive', color: '#FF6B35', discounts: 8 },
]

const calculationMethods = [
  {
    icon: Layers,
    name: 'Multiplicative',
    platform: 'Booking.com',
    formula: 'Price × (1-D₁) × (1-D₂) × ...',
    description: 'Discounts applied sequentially — each reduces the remaining price. Results in lower total discount than sum of individual rates.',
    color: '#003580',
  },
  {
    icon: CircleDollarSign,
    name: 'Additive',
    platform: 'Agoda, Airbnb, Trip.com, Go2Joy',
    formula: 'Price × (1 - ΣDiscounts)',
    description: 'All discount percentages summed, then applied once. Simple and transparent — total discount equals sum of all rates.',
    color: '#10B981',
  },
  {
    icon: TrendingUp,
    name: 'Highest Only',
    platform: 'Expedia',
    formula: 'Price × (1 - max(Discounts))',
    description: 'Only the single highest discount applies. Additional discounts are ignored — protects hotel margin.',
    color: '#FBAF18',
  },
  {
    icon: SplitSquareVertical,
    name: 'Hybrid',
    platform: 'Traveloka',
    formula: 'Σ max(D per category)',
    description: 'Best discount per category selected, then all categories summed. Balances flexibility with discount control.',
    color: '#0194F3',
  },
]

const coreFeatures = [
  {
    icon: Calculator,
    title: 'Multi-OTA Comparison',
    description: 'Calculate and compare net revenue across 7 OTA platforms simultaneously. Side-by-side view of commission impact and hotel receives.',
    color: '#3B82F6',
  },
  {
    icon: Tags,
    title: 'Discount Program Manager',
    description: '40+ discount types across all OTAs — Early Bird, Flash Sale, Genius, Mobile, Geography, and more. Enable/disable with custom percentages.',
    color: '#8B5CF6',
  },
  {
    icon: RotateCcw,
    title: 'Forward & Reverse Calculation',
    description: 'Forward: base price → display price → hotel receives. Reverse: start from display price and calculate back to base price and margins.',
    color: '#10B981',
  },
  {
    icon: Hotel,
    title: 'Room Type Management',
    description: 'Create room types with base prices. Calculate across all OTAs per room type for complete revenue matrix.',
    color: '#F59E0B',
  },
  {
    icon: FileDown,
    title: 'PDF Export',
    description: 'Generate comprehensive reports with room-OTA comparison tables, calculation steps, and session metadata. Multi-language PDF support.',
    color: '#EC4899',
  },
  {
    icon: Scale,
    title: 'Precision Calculations',
    description: 'Decimal.js-powered arithmetic ensures zero floating-point errors. Financial-grade accuracy for every calculation.',
    color: '#06B6D4',
  },
]

const techStack = [
  { label: 'Frontend', tech: 'Next.js 15 · React 19 · Tailwind · shadcn/ui' },
  { label: 'Backend API', tech: 'Go 1.23 · Gin Framework · Clean Architecture' },
  { label: 'Database', tech: 'PostgreSQL 16 · 10 tables · JSONB · GIN indexes' },
  { label: 'Precision', tech: 'Decimal.js (FE) · shopspring/decimal (BE)' },
  { label: 'Security', tech: 'JWT Auth · RBAC · Rate Limiting · Audit Trail' },
  { label: 'Export', tech: 'jsPDF · Multi-language · Auto-table generation' },
]

const whyChoose = [
  {
    title: 'Revenue Transparency',
    description: 'See exactly how much each OTA costs you. Compare commission + discount impact on your bottom line across every channel.',
  },
  {
    title: 'Informed Pricing Decisions',
    description: 'Test different discount combinations before activating them on OTA platforms. Prevent margin erosion from stacked promotions.',
  },
  {
    title: 'Multi-Property Support',
    description: 'Calculate for different room types, properties, and rate strategies. Save sessions and templates for repeatable analysis.',
  },
  {
    title: 'Compliance & Audit',
    description: 'Every calculation is logged with full audit trail. Export reports for management review and regulatory compliance.',
  },
]

/* ────────────────────────── Component ────────────────────────── */

export default function OTACalculatorClient() {
  const { t } = useLanguage()

  const tr = (key: string, fallback: string) => {
    const val = t(key)
    return val === key ? fallback : val
  }

  const methodKeys = ['multiplicative', 'additive', 'highestOnly', 'hybrid'] as const
  const localizedMethods = calculationMethods.map((m, i) => ({
    ...m,
    name: tr(`otaCalculator.methods.${methodKeys[i]}.name`, m.name),
    platform: tr(`otaCalculator.methods.${methodKeys[i]}.platform`, m.platform),
    description: tr(`otaCalculator.methods.${methodKeys[i]}.desc`, m.description),
  }))

  const featureKeys = ['comparison', 'discounts', 'direction', 'rooms', 'pdf', 'precision'] as const
  const localizedFeatures = coreFeatures.map((f, i) => ({
    ...f,
    title: tr(`otaCalculator.features.${featureKeys[i]}.title`, f.title),
    description: tr(`otaCalculator.features.${featureKeys[i]}.desc`, f.description),
  }))

  const whyKeys = ['revenue', 'pricing', 'multiProperty', 'compliance'] as const
  const localizedWhyChoose = whyChoose.map((w, i) => ({
    ...w,
    title: tr(`otaCalculator.whyChoose.${whyKeys[i]}.title`, w.title),
    description: tr(`otaCalculator.whyChoose.${whyKeys[i]}.desc`, w.description),
  }))

  return (
    <main className="min-h-screen font-ibm-plex-sans">
      <Header />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0f07 0%, #1f1408 30%, #1a1205 60%, #1a0f07 100%)' }}>
        <div className="absolute inset-0 z-0">
          <MovingDotsBackground />
        </div>

        {/* Accent glows */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-amber-500/8 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            <Badge variant="secondary" className="px-4 py-2 mb-8 rounded-full text-sm font-medium bg-orange-500/10 backdrop-blur-sm border border-orange-400/20 text-orange-200">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
              </span>
              {tr('otaCalculator.hero.badge', 'Revenue Optimization Tool')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl">
              <span className="text-white">OTA</span>{' '}
              <TextHighlight color="rgba(251, 146, 60, 0.3)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  {tr('otaCalculator.hero.title', 'Calculator')}
                </span>
              </TextHighlight>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-white/80">
              {tr('otaCalculator.hero.subtitle', 'Compare commission structures, discount stacking, and net revenue across 7+ OTA channels. Know exactly what your hotel receives — before you activate any promotion.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <a href="#features">
                  <Zap className="w-5 h-5 mr-2" />
                  {tr('otaCalculator.hero.cta.explore', 'Explore Features')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <a href="#contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {tr('otaCalculator.hero.cta.access', 'Request Access')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { num: '7', label: tr('otaCalculator.hero.stats.platforms', 'OTA Platforms') },
                { num: '40+', label: tr('otaCalculator.hero.stats.discounts', 'Discount Types') },
                { num: '4', label: tr('otaCalculator.hero.stats.methods', 'Calculation Methods') },
                { num: '3', label: tr('otaCalculator.hero.stats.languages', 'Languages') },
              ].map((s, i) => (
                <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{s.num}</div>
                    <div className="text-xs mt-1 text-white/60">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent z-10" />
      </section>

      {/* ═══════ Supported OTAs ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              {tr('otaCalculator.platforms.badge', 'Supported Platforms')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('otaCalculator.platforms.title', '7 Major')}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{tr('otaCalculator.platforms.titleAccent', 'OTA Channels')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {tr('otaCalculator.platforms.subtitle', 'Each platform uses a different discount calculation method. OTA Calculator handles all of them with precision.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
            {otaPlatforms.map((ota, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${ota.color}15` }}>
                      <Hotel className="w-5 h-5" style={{ color: ota.color }} />
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 mb-1">{ota.name}</h3>
                    <div className="text-[10px] text-gray-400 space-y-0.5">
                      <p>{ota.commission} commission</p>
                      <p>{ota.discounts} discounts</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Calculation Methods ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1008 50%, #0a0e1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(251,146,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Sparkles className="w-4 h-4 mr-2 text-orange-400" />
              {tr('otaCalculator.methods.badge', 'Calculation Engine')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('otaCalculator.methods.title', '4 Distinct')}{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{tr('otaCalculator.methods.titleAccent', 'Calculation Methods')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/60">
              {tr('otaCalculator.methods.subtitle', 'Each OTA stacks discounts differently. Our engine replicates their exact formulas so you see real numbers — not estimates.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {localizedMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${method.color}30` }}>
                          <Icon className="w-6 h-6" style={{ color: method.color }} />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white">{method.name}</CardTitle>
                          <p className="text-xs text-white/40 mt-0.5">{method.platform}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 font-mono text-sm text-orange-300">
                        {method.formula}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{method.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Core Features ═══════ */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              {tr('otaCalculator.features.badge', 'Features')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('otaCalculator.features.title', 'Everything You Need for')}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{tr('otaCalculator.features.titleAccent', 'Rate Intelligence')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {tr('otaCalculator.features.subtitle', 'From discount simulation to PDF export — built for revenue managers who need clarity across OTA channels.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {localizedFeatures.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Card className="h-full border-0 shadow-[0_4px_20px_-4px_rgb(0_0_0_/_0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                        style={{ backgroundColor: `${feat.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: feat.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{feat.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{feat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ How It Works ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              {tr('otaCalculator.howItWorks.badge', 'How It Works')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('otaCalculator.howItWorks.title', 'Simple')}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{tr('otaCalculator.howItWorks.titleAccent', '3-Step')}</span>{' '}
              {tr('otaCalculator.howItWorks.titleEnd', 'Process')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: tr('otaCalculator.howItWorks.s1.title', 'Set Base Price'),
                description: tr('otaCalculator.howItWorks.s1.desc', 'Enter your room base price and select room type. Choose forward or reverse calculation direction.'),
                color: '#3B82F6',
              },
              {
                step: '02',
                title: tr('otaCalculator.howItWorks.s2.title', 'Configure Discounts'),
                description: tr('otaCalculator.howItWorks.s2.desc', 'Select OTA platforms, enable discount programs, customize percentages, and adjust commission rates.'),
                color: '#F59E0B',
              },
              {
                step: '03',
                title: tr('otaCalculator.howItWorks.s3.title', 'Compare & Export'),
                description: tr('otaCalculator.howItWorks.s3.desc', 'View side-by-side results — display price, commission, and hotel receives. Export detailed PDF report.'),
                color: '#10B981',
              },
            ].map((wf, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg"
                      style={{ backgroundColor: wf.color }}>
                      {wf.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{wf.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{wf.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Why Choose ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0c1220 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Percent className="w-4 h-4 mr-2 text-orange-400" />
              {tr('otaCalculator.whyChoose.badge', 'Why OTA Calculator')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('otaCalculator.whyChoose.title', 'Stop Guessing,')}{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{tr('otaCalculator.whyChoose.titleAccent', 'Start Calculating')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {localizedWhyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Tech Stack ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              {tr('otaCalculator.tech.badge', 'Technology')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {tr('otaCalculator.tech.title', 'Built for')}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{tr('otaCalculator.tech.titleAccent', 'Precision & Scale')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">{item.label}</div>
                    <p className="text-sm text-gray-700 font-medium">{item.tech}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ i18n + Currency ═══════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tr('otaCalculator.i18n.title', 'Multi-Language & Multi-Currency')}</h3>
              <p className="text-gray-500">{tr('otaCalculator.i18n.subtitle', 'Supports Vietnamese, English, Chinese with VND, USD, EUR, JPY, CNY currencies.')}</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { flag: '🇻🇳', label: 'VND' },
                { flag: '🇺🇸', label: 'USD' },
                { flag: '🇪🇺', label: 'EUR' },
                { flag: '🇯🇵', label: 'JPY' },
                { flag: '🇨🇳', label: 'CNY' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1008 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-orange-400/20 flex items-center justify-center mx-auto mb-8">
              <Calculator className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {tr('otaCalculator.cta.title', 'Maximize Your')}{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{tr('otaCalculator.cta.titleAccent', 'Revenue Per Channel')}</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              {tr('otaCalculator.cta.subtitle', 'Stop losing margin to hidden discount stacking. Get OTA Calculator and take control of your channel pricing strategy.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                <a href="#contact">
                  {tr('otaCalculator.cta.access', 'Request Access')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <Link href="/">
                  {tr('otaCalculator.cta.viewAll', 'View All Solutions')}
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
