'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Box,
  CheckCircle2,
  Cpu,
  FileSpreadsheet,
  Globe,
  GripVertical,
  Layers,
  LayoutDashboard,
  Move3d,
  Package,
  Ruler,
  Scale,
  Shield,
  Sparkles,
  Timer,
  Truck,
  Weight,
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

/* ────────────────────────── Constants ────────────────────────── */

const featureIcons = [Cpu, Move3d, Shield, GripVertical, Scale, FileSpreadsheet]
const featureColors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#06B6D4']
const featureKeys = ['beamSearch', 'visualization', 'rulesEngine', 'priority', 'weightDist', 'export']

const containerTypeKeys = ['20std', '40std', '40hc']
const ruleKeys = ['mattress', 'dining', 'safety', 'weight']
const whyKeys = ['cost', 'time', 'damage', 'roi']
const stepColors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B']
const techKeys = ['frontend', 'engine3d', 'backend', 'algorithm', 'database', 'exportTech']

/* ────────────────────────── Component ────────────────────────── */

export default function ContainerCalculatorClient() {
  const { t } = useLanguage()

  const containerTypes = containerTypeKeys.map(key => ({
    name: t(`contcal.containers.types.${key}.name`),
    dimensions: t(`contcal.containers.types.${key}.dimensions`),
    capacity: t(`contcal.containers.types.${key}.capacity`),
    weight: t(`contcal.containers.types.${key}.weight`),
  }))

  const businessRules = ruleKeys.map(key => ({
    category: t(`contcal.rules.categories.${key}.name`),
    rules: [
      t(`contcal.rules.categories.${key}.rules.0`),
      t(`contcal.rules.categories.${key}.rules.1`),
      t(`contcal.rules.categories.${key}.rules.2`),
    ],
  }))

  const coreFeatures = featureKeys.map((key, i) => ({
    icon: featureIcons[i],
    title: t(`contcal.features.${key}.title`),
    description: t(`contcal.features.${key}.desc`),
    color: featureColors[i],
  }))

  const whyChoose = whyKeys.map(key => ({
    title: t(`contcal.whyChoose.${key}.title`),
    description: t(`contcal.whyChoose.${key}.desc`),
  }))

  const techStack = techKeys.map(key => ({
    label: t(`contcal.tech.items.${key}.label`),
    tech: t(`contcal.tech.items.${key}.tech`),
  }))

  return (
    <main className="min-h-screen font-ibm-plex-sans">
      <Header />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0 z-0">
          <MovingDotsBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            <Badge variant="secondary" className="px-4 py-2 mb-8 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/10 text-white/90">
              <Box className="w-4 h-4 mr-2 text-violet-400" />
              {t('contcal.hero.badge')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl">
              <span className="text-white">{t('contcal.hero.title1')}</span>{' '}
              <TextHighlight color="rgba(139, 92, 246, 0.3)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                  {t('contcal.hero.title2')}
                </span>
              </TextHighlight>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-white/60">
              {t('contcal.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold">
                <a href="#features">
                  <Zap className="w-5 h-5 mr-2" />
                  {t('contcal.hero.cta.explore')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <a href="#contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('contcal.hero.cta.demo')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { num: '90%+', label: t('contcal.hero.stats.utilization') },
                { num: '10-15%', label: t('contcal.hero.stats.savings') },
                { num: '<10s', label: t('contcal.hero.stats.speed') },
                { num: '20+', label: t('contcal.hero.stats.rules') },
              ].map((s, i) => (
                <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{s.num}</div>
                    <div className="text-xs mt-1 text-white/50">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent z-10" />
      </section>

      {/* ═══════ Container Types ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Package className="w-4 h-4 mr-2" />
              {t('contcal.containers.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t('contcal.containers.title')}{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{t('contcal.containers.titleAccent')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {t('contcal.containers.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {containerTypes.map((ct, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-violet-50">
                      <Truck className="w-7 h-7 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{ct.name}</h3>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <Ruler className="w-3.5 h-3.5 text-gray-400" />
                        {ct.dimensions}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Box className="w-3.5 h-3.5 text-gray-400" />
                        {ct.capacity}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Weight className="w-3.5 h-3.5 text-gray-400" />
                        {ct.weight}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Business Rules ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0a20 50%, #0a0e1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
              {t('contcal.rules.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {t('contcal.rules.title')}{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t('contcal.rules.titleAccent')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/50">
              {t('contcal.rules.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {businessRules.map((group, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-0 bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-violet-300">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {group.rules.map((rule, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/60">{rule}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Core Features ═══════ */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              {t('contcal.features.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t('contcal.features.title')}{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{t('contcal.features.titleAccent')}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-500">
              {t('contcal.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreFeatures.map((feat, i) => {
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
              {t('contcal.howItWorks.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t('contcal.howItWorks.title')}{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{t('contcal.howItWorks.titleAccent')}</span>{' '}
              {t('contcal.howItWorks.titleEnd')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['s1', 's2', 's3', 's4'].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg"
                      style={{ backgroundColor: stepColors[i] }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`contcal.howItWorks.${step}.title`)}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t(`contcal.howItWorks.${step}.desc`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Why Choose ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0c0a20 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 mb-6 bg-white/10 border-white/10 text-white/90">
              <Timer className="w-4 h-4 mr-2 text-violet-400" />
              {t('contcal.whyChoose.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {t('contcal.whyChoose.title')}{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t('contcal.whyChoose.titleAccent')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
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
              <Layers className="w-4 h-4 mr-2" />
              {t('contcal.tech.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t('contcal.tech.title')}{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{t('contcal.tech.titleAccent')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-2">{item.label}</div>
                    <p className="text-sm text-gray-700 font-medium">{item.tech}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Product Categories ═══════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contcal.categories.title')}</h3>
              <p className="text-gray-500">{t('contcal.categories.subtitle')}</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { icon: '🪑', label: t('contcal.categories.dining') },
                { icon: '🛏️', label: t('contcal.categories.mattress') },
                { icon: '🏠', label: t('contcal.categories.hfa') },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0a20 50%, #0a0e1a 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-violet-400/20 flex items-center justify-center mx-auto mb-8">
              <Box className="w-8 h-8 text-violet-400" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {t('contcal.cta.title')}{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t('contcal.cta.titleAccent')}</span>
            </h2>
            <p className="text-xl text-white/50 mb-10 leading-relaxed">
              {t('contcal.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8">
                <a href="#contact">
                  {t('contcal.cta.demo')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10">
                <Link href="/">
                  {t('contcal.cta.viewAll')}
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
