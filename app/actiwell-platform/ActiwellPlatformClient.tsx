'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Dumbbell,
  Smartphone,
  LayoutDashboard,
  Brain,
  Users,
  CalendarCheck,
  BarChart3,
  Bell,
  Shield,
  Zap,
  TrendingUp,
  Heart,
  Star,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Activity,
  Target,
  CreditCard,
  FileText,
  MapPin,
  Clock,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import MovingDotsBackground from '@/components/MovingDotsBackground'
import { Fitness32 } from '@/components/beste/fitness32'
import { TextHighlight } from '@/components/text-highlight'
import { TextWordCarousel } from '@/components/word-carousel'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ActiwellPlatformClient() {
  const { t } = useLanguage()

  const memberFeatures = [
    { icon: CalendarCheck, key: 'booking' },
    { icon: Activity, key: 'checkin' },
    { icon: Dumbbell, key: 'classes' },
    { icon: BarChart3, key: 'measurement' },
    { icon: Star, key: 'reviews' },
    { icon: Bell, key: 'notifications' },
  ]

  const cmsFeatures = [
    { icon: Users, key: 'customerMgmt' },
    { icon: CalendarCheck, key: 'scheduleMgmt' },
    { icon: TrendingUp, key: 'analytics' },
    { icon: CreditCard, key: 'salesPackages' },
    { icon: FileText, key: 'contracts' },
    { icon: MapPin, key: 'multiLocation' },
  ]

  const aiFeatures = [
    { icon: Brain, key: 'smartBooking', color: 'from-blue-500 to-indigo-600' },
    { icon: Target, key: 'retention', color: 'from-emerald-500 to-teal-600' },
    { icon: TrendingUp, key: 'revenueOptimize', color: 'from-amber-500 to-orange-600' },
    { icon: Clock, key: 'capacityPlanning', color: 'from-purple-500 to-violet-600' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1218 0%, #0c1f1a 30%, #0d1b2a 60%, #0a1218 100%)' }}>
        {/* Moving Dots Particle Background — Actiwell Emerald/Teal brand */}
        <div className="absolute inset-0">
          <MovingDotsBackground />
        </div>

        {/* Subtle accent glows for depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-teal-500/8 blur-[120px]" />
          <div className="absolute top-1/2 right-1/6 h-64 w-64 rounded-full bg-blue-500/6 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 text-emerald-200 rounded-full text-sm font-semibold mb-10"
            >
              <span className="relative mr-2.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t('actiwell.hero.badge')}
              <Sparkles className="w-4 h-4 ml-3 text-emerald-300 animate-pulse" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              <span className="text-white">
                {t('actiwell.hero.title1')}
              </span>
              <br />
              <TextHighlight color="rgba(16, 185, 129, 0.25)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {t('actiwell.hero.title2')}
                </span>
              </TextHighlight>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              {t('actiwell.hero.subtitle')}{' '}
              <TextWordCarousel
                words={['Customer App', 'Business App', 'Management CMS', 'AI Intelligence']}
                interval={2.5}
                className="text-emerald-300 font-semibold"
              />
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto w-full"
            >
              {[
                { number: '2', label: t('actiwell.hero.stats.apps') },
                { number: '80+', label: t('actiwell.hero.stats.features') },
                { number: '20+', label: t('actiwell.hero.stats.experience') },
                { number: 'AI', label: t('actiwell.hero.stats.powered') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="group rounded-xl border border-emerald-500/15 bg-white/[0.03] backdrop-blur-sm px-4 py-5 text-center transition-colors hover:bg-white/[0.06] hover:border-emerald-400/25"
                >
                  <div className="text-3xl font-bold bg-gradient-to-b from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="cursor-pointer"
            onClick={() => {
              document.querySelector('#partnership')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-8 h-8 text-white/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-100"
              >
                <Heart className="w-4 h-4 mr-2" />
                {t('actiwell.partnership.badge')}
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('actiwell.partnership.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('actiwell.partnership.description')}
              </p>
            </div>

            {/* Two Partners */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mercury Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl" />
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mercury Solutions</h3>
                    <p className="text-sm text-gray-500">{t('actiwell.partnership.mercury.role')}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('actiwell.partnership.mercury.description')}
                </p>
              </motion.div>

              {/* Attivo International */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-3xl" />
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                    <Dumbbell className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Attivo International</h3>
                    <p className="text-sm text-gray-500">{t('actiwell.partnership.attivo.role')}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('actiwell.partnership.attivo.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              {t('actiwell.ecosystem.badge')}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('actiwell.ecosystem.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('actiwell.ecosystem.description')}
            </p>
          </motion.div>

          {/* Member Mobile App Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center"
              >
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-blue-500/20">
                    {/* Screen Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-10" />
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-12 bg-white px-6 flex items-end justify-between pb-1">
                        <span className="text-[10px] font-semibold text-gray-800">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-gray-600 rounded-sm relative">
                            <div className="absolute inset-0.5 bg-gray-600 rounded-[1px]" style={{ width: '70%' }} />
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="px-4 pt-2 pb-16 overflow-hidden">
                        {/* Greeting */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-[11px] text-gray-400 mb-0.5">Good morning</p>
                          <p className="text-[15px] font-bold text-gray-900 mb-4">Hi, Sarah Johnson</p>
                        </motion.div>

                        {/* AI Suggestions Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 rounded-xl p-3 mb-3"
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <Sparkles className="w-3 h-3 text-blue-500" />
                            <span className="text-[10px] font-semibold text-gray-800">AI Booking Suggestions</span>
                          </div>
                          {/* Suggestion Item */}
                          <div className="bg-white rounded-lg p-2.5 mb-1.5 shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-semibold text-gray-900">Nguyen Van A</span>
                              <span className="text-[7px] px-1.5 py-0.5 bg-red-50 text-red-600 rounded-full font-medium">Expiring</span>
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <Dumbbell className="w-2.5 h-2.5 text-gray-400" />
                              <span className="text-[8px] text-gray-500">PT Premium - 3 sessions left</span>
                            </div>
                            <div className="flex items-center gap-1 mb-1.5">
                              <CalendarCheck className="w-2.5 h-2.5 text-blue-500" />
                              <span className="text-[8px] text-blue-600 font-medium">Today - 10:00 AM</span>
                            </div>
                            <div className="w-full h-6 bg-blue-500 rounded-md flex items-center justify-center">
                              <span className="text-[8px] text-white font-semibold">Book Now</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Upcoming Schedule */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 rounded-xl p-3"
                        >
                          <p className="text-[10px] font-semibold text-gray-800 mb-2">Upcoming Schedule</p>
                          <div className="bg-white rounded-lg p-2.5 mb-1.5 shadow-sm">
                            <div className="flex gap-2">
                              <div className="text-center">
                                <p className="text-[10px] font-bold text-blue-600">10:00</p>
                                <p className="text-[7px] text-gray-400">60 mins</p>
                              </div>
                              <div className="w-px bg-gray-200" />
                              <div>
                                <p className="text-[10px] font-semibold text-gray-900">Yoga Flow</p>
                                <p className="text-[8px] text-gray-500">Studio A - Coach Linh</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 shadow-sm">
                            <div className="flex gap-2">
                              <div className="text-center">
                                <p className="text-[10px] font-bold text-blue-600">14:30</p>
                                <p className="text-[7px] text-gray-400">45 mins</p>
                              </div>
                              <div className="w-px bg-gray-200" />
                              <div>
                                <p className="text-[10px] font-semibold text-gray-900">PT Session</p>
                                <p className="text-[8px] text-gray-500">Gym Floor - Coach Minh</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Bottom Nav Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-100 rounded-b-[2.3rem] flex items-center justify-around px-4">
                        {[
                          { icon: '🏠', label: 'Home', active: true },
                          { icon: '✅', label: 'Check-in', active: false },
                          { icon: '🔔', label: 'Alerts', active: false },
                          { icon: '👤', label: 'Profile', active: false },
                        ].map((nav) => (
                          <div key={nav.label} className="flex flex-col items-center gap-0.5">
                            <span className="text-[12px]">{nav.icon}</span>
                            <span className={`text-[7px] font-medium ${nav.active ? 'text-blue-600' : 'text-gray-400'}`}>{nav.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Floating label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap"
                  >
                    Customer App
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('actiwell.ecosystem.memberApp.title')}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {t('actiwell.ecosystem.memberApp.subtitle')}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {memberFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 bg-gradient-to-r from-blue-50/80 to-transparent rounded-xl p-3.5 hover:from-blue-50 transition-colors duration-300"
                    >
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4.5 h-4.5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {t(`actiwell.ecosystem.memberApp.features.${feature.key}.title`)}
                        </h4>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          {t(`actiwell.ecosystem.memberApp.features.${feature.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Business App + CMS Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/25">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('actiwell.ecosystem.cms.title')}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {t('actiwell.ecosystem.cms.subtitle')}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {cmsFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 bg-gradient-to-r from-emerald-50/80 to-transparent rounded-xl p-3.5 hover:from-emerald-50 transition-colors duration-300"
                    >
                      <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4.5 h-4.5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {t(`actiwell.ecosystem.cms.features.${feature.key}.title`)}
                        </h4>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          {t(`actiwell.ecosystem.cms.features.${feature.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CMS Browser Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center order-1 lg:order-2"
              >
                <div className="relative w-full max-w-[360px]">
                  {/* Browser Frame */}
                  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/15">
                    {/* Browser Title Bar */}
                    <div className="h-8 bg-slate-700 flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="flex-1 mx-3">
                        <div className="bg-slate-600 rounded-md h-4 flex items-center px-2">
                          <span className="text-[7px] text-slate-400">actiwell-cms.minova.vn/dashboard</span>
                        </div>
                      </div>
                    </div>

                    {/* Browser Content */}
                    <div className="bg-gray-100 flex" style={{ minHeight: '280px' }}>
                      {/* Sidebar */}
                      <div className="w-14 bg-slate-800 py-3 flex flex-col items-center gap-2.5">
                        <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-white text-[8px] font-bold">A</span>
                        </div>
                        {[BarChart3, Users, CalendarCheck, Dumbbell, CreditCard, FileText, MapPin, Bell].map((Icon, i) => (
                          <div key={i} className={`w-7 h-7 rounded-md flex items-center justify-center ${i === 0 ? 'bg-emerald-500/20' : 'hover:bg-slate-700'}`}>
                            <Icon className={`w-3.5 h-3.5 ${i === 0 ? 'text-emerald-400' : 'text-slate-500'}`} />
                          </div>
                        ))}
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-3">
                        {/* Header */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between mb-3"
                        >
                          <div>
                            <p className="text-[9px] font-bold text-gray-800">Dashboard</p>
                            <p className="text-[7px] text-gray-500">Today&apos;s Overview</p>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-5 h-5 bg-white rounded-md border border-gray-200 flex items-center justify-center">
                              <Bell className="w-2.5 h-2.5 text-gray-400" />
                            </div>
                            <div className="w-5 h-5 bg-emerald-500 rounded-md flex items-center justify-center">
                              <span className="text-[7px] text-white font-bold">M</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                          className="grid grid-cols-3 gap-1.5 mb-3"
                        >
                          {[
                            { label: 'Revenue', value: '₫128.5M', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            { label: 'Members', value: '1,247', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { label: 'Check-ins', value: '89', color: 'text-amber-600', bg: 'bg-amber-50' },
                          ].map((stat) => (
                            <div key={stat.label} className={`${stat.bg} rounded-lg p-2`}>
                              <p className="text-[6px] text-gray-500 mb-0.5">{stat.label}</p>
                              <p className={`text-[10px] font-bold ${stat.color}`}>{stat.value}</p>
                            </div>
                          ))}
                        </motion.div>

                        {/* Chart Area */}
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-2 mb-2 shadow-sm"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[8px] font-semibold text-gray-700">Revenue Analytics</p>
                            <div className="flex gap-2">
                              <div className="flex items-center gap-0.5">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                <span className="text-[6px] text-gray-500">This month</span>
                              </div>
                              <div className="flex items-center gap-0.5">
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                <span className="text-[6px] text-gray-500">Last month</span>
                              </div>
                            </div>
                          </div>
                          {/* SVG Chart */}
                          <svg viewBox="0 0 200 50" className="w-full h-12">
                            <polyline fill="none" stroke="#10b981" strokeWidth="1.5" points="0,40 25,35 50,28 75,30 100,20 125,15 150,18 175,10 200,12" />
                            <polyline fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3,3" points="0,42 25,38 50,35 75,36 100,30 125,28 150,32 175,25 200,28" />
                          </svg>
                        </motion.div>

                        {/* Recent Bookings */}
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-2 shadow-sm"
                        >
                          <p className="text-[8px] font-semibold text-gray-700 mb-1.5">Recent Bookings</p>
                          {[
                            { name: 'Tran Minh', cls: 'PT Session', time: '10:00', status: 'Confirmed' },
                            { name: 'Le Thao', cls: 'Yoga Flow', time: '11:30', status: 'Pending' },
                          ].map((booking, i) => (
                            <div key={i} className={`flex items-center justify-between py-1 ${i === 0 ? 'border-b border-gray-100' : ''}`}>
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-[6px] font-bold text-gray-500">{booking.name[0]}</span>
                                </div>
                                <div>
                                  <p className="text-[7px] font-medium text-gray-800">{booking.name}</p>
                                  <p className="text-[6px] text-gray-500">{booking.cls}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-[7px] text-gray-600">{booking.time}</p>
                                <p className={`text-[6px] font-medium ${booking.status === 'Confirmed' ? 'text-emerald-600' : 'text-amber-600'}`}>{booking.status}</p>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  {/* Floating label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap"
                  >
                    Management CMS
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Business App Phone Mockup - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-4">
                <Smartphone className="w-4 h-4 mr-2" />
                {t('actiwell.screens.businessApp.badge')}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('actiwell.screens.businessApp.title')}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('actiwell.screens.businessApp.description')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {/* Business App - Schedule Screen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-[220px] h-[460px] bg-slate-900 rounded-[2.4rem] p-2.5 shadow-xl shadow-purple-500/15">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-xl z-10" />
                  <div className="w-full h-full bg-white rounded-[1.9rem] overflow-hidden relative">
                    <div className="h-10 bg-white px-5 flex items-end justify-between pb-0.5">
                      <span className="text-[8px] font-semibold text-gray-800">9:41</span>
                      <div className="w-3 h-1.5 border border-gray-600 rounded-[2px]" />
                    </div>
                    <div className="px-3 pt-1">
                      <p className="text-[8px] text-gray-400">Schedule</p>
                      <p className="text-[11px] font-bold text-gray-900 mb-2">Today&apos;s Sessions</p>

                      {/* Calendar Mini */}
                      <div className="bg-purple-50 rounded-lg p-2 mb-2">
                        <div className="grid grid-cols-7 gap-0.5 text-center">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                            <span key={i} className="text-[6px] text-gray-400">{d}</span>
                          ))}
                          {[12, 13, 14, 15, 16, 17, 18].map((d, i) => (
                            <div key={i} className={`text-[7px] w-4 h-4 flex items-center justify-center rounded-full mx-auto ${d === 14 ? 'bg-purple-600 text-white font-bold' : 'text-gray-700'}`}>{d}</div>
                          ))}
                        </div>
                      </div>

                      {/* Sessions */}
                      {[
                        { time: '08:00', name: 'PT - Le Hoang', type: 'Private', color: 'border-l-blue-500' },
                        { time: '09:30', name: 'Body Pump', type: 'Group · 12/20', color: 'border-l-emerald-500' },
                        { time: '11:00', name: 'PT - Nguyen Thi', type: 'Private', color: 'border-l-purple-500' },
                        { time: '14:00', name: 'Spinning', type: 'Group · 8/15', color: 'border-l-amber-500' },
                        { time: '16:30', name: 'PT - Tran Van', type: 'Private', color: 'border-l-blue-500' },
                      ].map((session, i) => (
                        <div key={i} className={`bg-gray-50 rounded-md p-1.5 mb-1 border-l-2 ${session.color}`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[8px] font-semibold text-gray-800">{session.name}</p>
                              <p className="text-[6px] text-gray-500">{session.type}</p>
                            </div>
                            <span className="text-[7px] font-bold text-gray-600">{session.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-11 bg-white border-t border-gray-100 rounded-b-[1.9rem] flex items-center justify-around px-2">
                      {['🏠', '📅', '💰', '🔔', '👤'].map((icon, i) => (
                        <span key={i} className={`text-[10px] ${i === 1 ? 'opacity-100' : 'opacity-40'}`}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 text-xs font-semibold text-purple-600">Schedule</p>
              </motion.div>

              {/* Business App - Sale Screen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-[220px] h-[460px] bg-slate-900 rounded-[2.4rem] p-2.5 shadow-xl shadow-purple-500/15">
                  <div className="w-full h-full bg-white rounded-[1.9rem] overflow-hidden relative">
                    <div className="h-10 bg-white px-5 flex items-end justify-between pb-0.5">
                      <span className="text-[8px] font-semibold text-gray-800">9:41</span>
                      <div className="w-3 h-1.5 border border-gray-600 rounded-[2px]" />
                    </div>
                    <div className="px-3 pt-1">
                      <p className="text-[8px] text-gray-400">Sales</p>
                      <p className="text-[11px] font-bold text-gray-900 mb-2">Sale Orders</p>

                      {/* Sales Summary */}
                      <div className="grid grid-cols-2 gap-1.5 mb-2">
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <p className="text-[6px] text-gray-500">Today</p>
                          <p className="text-[10px] font-bold text-emerald-600">₫32.5M</p>
                          <div className="flex items-center gap-0.5">
                            <TrendingUp className="w-2 h-2 text-emerald-500" />
                            <span className="text-[6px] text-emerald-600">+12%</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2">
                          <p className="text-[6px] text-gray-500">Orders</p>
                          <p className="text-[10px] font-bold text-blue-600">8</p>
                          <div className="flex items-center gap-0.5">
                            <TrendingUp className="w-2 h-2 text-blue-500" />
                            <span className="text-[6px] text-blue-600">+3</span>
                          </div>
                        </div>
                      </div>

                      {/* Order List */}
                      {[
                        { name: 'Pham Thi B', pkg: 'Premium 6M', amount: '₫15.0M', status: 'Paid' },
                        { name: 'Vo Van C', pkg: 'PT 10 Sessions', amount: '₫8.5M', status: 'Paid' },
                        { name: 'Hoang D', pkg: 'Basic 3M', amount: '₫4.5M', status: 'Pending' },
                        { name: 'Nguyen E', pkg: 'PT 5 Sessions', amount: '₫4.5M', status: 'Paid' },
                      ].map((order, i) => (
                        <div key={i} className="bg-gray-50 rounded-md p-2 mb-1">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[8px] font-semibold text-gray-800">{order.name}</span>
                            <span className={`text-[6px] px-1 py-0.5 rounded-full font-medium ${order.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{order.status}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[7px] text-gray-500">{order.pkg}</span>
                            <span className="text-[8px] font-bold text-gray-700">{order.amount}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-11 bg-white border-t border-gray-100 rounded-b-[1.9rem] flex items-center justify-around px-2">
                      {['🏠', '📅', '💰', '🔔', '👤'].map((icon, i) => (
                        <span key={i} className={`text-[10px] ${i === 2 ? 'opacity-100' : 'opacity-40'}`}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 text-xs font-semibold text-purple-600">Sales</p>
              </motion.div>

              {/* Business App - Profile/Measurement Screen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="hidden md:block"
              >
                <div className="w-[220px] h-[460px] bg-slate-900 rounded-[2.4rem] p-2.5 shadow-xl shadow-purple-500/15">
                  <div className="w-full h-full bg-white rounded-[1.9rem] overflow-hidden relative">
                    <div className="h-10 bg-white px-5 flex items-end justify-between pb-0.5">
                      <span className="text-[8px] font-semibold text-gray-800">9:41</span>
                      <div className="w-3 h-1.5 border border-gray-600 rounded-[2px]" />
                    </div>

                    {/* Profile Header */}
                    <div className="h-28 bg-gradient-to-br from-blue-500 to-indigo-600 relative flex flex-col items-center justify-center">
                      <p className="text-[8px] text-white/80 mb-1">Your Profile</p>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <p className="text-[9px] font-semibold text-white mt-1">Coach Minh Tran</p>
                    </div>

                    {/* Menu Items */}
                    <div className="px-3 pt-3">
                      {[
                        { icon: '👤', label: 'Personal Information' },
                        { icon: '📋', label: 'Booking History' },
                        { icon: '💳', label: 'Subscriptions' },
                        { icon: '📊', label: 'Body Measurement' },
                        { icon: '⚙️', label: 'Settings' },
                        { icon: '🚪', label: 'Logout' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-50">
                          <span className="text-[10px]">{item.icon}</span>
                          <span className="text-[8px] text-gray-700">{item.label}</span>
                          <ArrowRight className="w-2 h-2 text-gray-400 ml-auto" />
                        </div>
                      ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-11 bg-white border-t border-gray-100 rounded-b-[1.9rem] flex items-center justify-around px-2">
                      {['🏠', '📅', '💰', '🔔', '👤'].map((icon, i) => (
                        <span key={i} className={`text-[10px] ${i === 4 ? 'opacity-100' : 'opacity-40'}`}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 text-xs font-semibold text-purple-600">Profile</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4 mr-2" />
              {t('actiwell.ai.badge')}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('actiwell.ai.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('actiwell.ai.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />

                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`actiwell.ai.features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t(`actiwell.ai.features.${feature.key}.desc`)}
                </p>

                {/* AI Reason Tags */}
                {feature.key === 'smartBooking' && (
                  <div className="flex flex-wrap gap-2">
                    {['expiringPackage', 'inactiveCustomer', 'regularSlot', 'lowCapacity'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {t(`actiwell.ai.features.smartBooking.tags.${tag}`)}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1218 0%, #0c1f1a 30%, #0d1b2a 60%, #0a1218 100%)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)',
              top: '20%',
              right: '10%',
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t('actiwell.value.title')}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {t('actiwell.value.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Zap, key: 'operations', gradient: 'from-blue-500 to-blue-600' },
              { icon: Heart, key: 'experience', gradient: 'from-emerald-500 to-emerald-600' },
              { icon: TrendingUp, key: 'revenue', gradient: 'from-amber-500 to-amber-600' },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(`actiwell.value.items.${item.key}.title`)}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t(`actiwell.value.items.${item.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('actiwell.tech.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('actiwell.tech.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Flutter', desc: t('actiwell.tech.stack.flutter'), color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { name: 'Laravel', desc: t('actiwell.tech.stack.laravel'), color: 'bg-red-50 border-red-200 text-red-700' },
              { name: 'React', desc: t('actiwell.tech.stack.react'), color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
              { name: 'MySQL', desc: t('actiwell.tech.stack.mysql'), color: 'bg-orange-50 border-orange-200 text-orange-700' },
              { name: 'Firebase', desc: t('actiwell.tech.stack.firebase'), color: 'bg-amber-50 border-amber-200 text-amber-700' },
              { name: 'Docker', desc: t('actiwell.tech.stack.docker'), color: 'bg-sky-50 border-sky-200 text-sky-700' },
              { name: 'AI/ML', desc: t('actiwell.tech.stack.ai'), color: 'bg-purple-50 border-purple-200 text-purple-700' },
              { name: 'REST API', desc: t('actiwell.tech.stack.api'), color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`${tech.color} border rounded-2xl p-5 text-center hover:shadow-md transition-shadow duration-300`}
              >
                <div className="font-bold text-lg mb-1">{tech.name}</div>
                <div className="text-xs opacity-70">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Center / Visit Us */}
      <Fitness32
        badge={t('actiwell.demo.badge')}
        heading={t('actiwell.demo.heading')}
        map={{
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop',
          url: 'https://maps.google.com/?q=105+Lang+Ha,+Dong+Da,+Hanoi',
          directionsLabel: t('actiwell.demo.directions'),
        }}
        items={[
          {
            icon: MapPin,
            label: t('actiwell.demo.items.address.label'),
            value: [
              t('actiwell.demo.items.address.line1'),
              t('actiwell.demo.items.address.line2'),
            ],
          },
          {
            icon: Clock,
            label: t('actiwell.demo.items.hours.label'),
            value: t('actiwell.demo.items.hours.value'),
          },
          {
            icon: Smartphone,
            label: t('actiwell.demo.items.platforms.label'),
            value: [
              t('actiwell.demo.items.platforms.line1'),
              t('actiwell.demo.items.platforms.line2'),
            ],
          },
          {
            icon: Shield,
            label: t('actiwell.demo.items.security.label'),
            value: t('actiwell.demo.items.security.value'),
          },
          {
            icon: Users,
            label: t('actiwell.demo.items.support.label'),
            value: [
              t('actiwell.demo.items.support.line1'),
              t('actiwell.demo.items.support.line2'),
            ],
          },
        ]}
        className="bg-gradient-to-b from-gray-50 to-white"
      />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('actiwell.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t('actiwell.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                {t('actiwell.cta.contact')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:shadow-md transition-all duration-300"
              >
                {t('actiwell.cta.solutions')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
