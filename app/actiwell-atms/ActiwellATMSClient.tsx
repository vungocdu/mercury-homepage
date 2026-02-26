'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Flame,
  GraduationCap,
  Heart,
  Move,
  Ruler,
  Scale,
  Shield,
  Sparkles,
  Timer,
  Users,
  XCircle,
  Zap,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import MovingDotsBackground from '@/components/MovingDotsBackground'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextHighlight } from '@/components/text-highlight'
import { TextWordCarousel } from '@/components/word-carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/* ────────────────────────── Data ────────────────────────── */

const mainFeatures = [
  {
    title: 'NSCA Standardized Testing',
    description: '30+ fitness tests following NSCA v3.0 standards with CV% reliability, 5-level classification, and normative data comparison.',
  },
  {
    title: '360° Athlete Management',
    description: 'Comprehensive management from personal profiles, fitness, psychology, nutrition to career planning and LTAD (Long-Term Athlete Development).',
  },
  {
    title: 'Smart Periodization',
    description: 'Training plan design at macro/meso/micro cycle levels with volume-intensity tracking, ACWR monitoring, and overload detection.',
  },
  {
    title: 'Session Management',
    description: 'Schedule training sessions, take attendance, record RPE/sRPE, and track attendance trends by training plan.',
  },
  {
    title: 'Health & Injury Tracking',
    description: 'PAR-Q+ screening, injury tracking with recovery milestones, contraindication checks, and return-to-play protocols.',
  },
  {
    title: 'Nutrition Management',
    description: 'Goal-based meal templates (Muscle Gain / Fat Loss / Recovery), macronutrient tracking, sport-specific profiles, and compliance monitoring.',
  },
  {
    title: 'Coach Workload Management',
    description: 'Coach assignment with role-based workload (Head/Assistant/Specialist), smart suggestions, and overload prevention.',
  },
  {
    title: 'Testing Campaigns',
    description: 'Organize mass testing with venue scheduling, attendance tracking, batch result recording, and report generation.',
  },
  {
    title: 'Analytics & Reports',
    description: 'Multi-dimensional dashboards (attendance, performance, nutrition, health), KPI tracking, trend analysis, and PDF/Excel export.',
  },
]

const testCategories = [
  { icon: Ruler, title: 'Anthropometrics', tests: ['Height', 'Weight', 'Body Fat %', 'BMI', 'Waist-Hip Ratio'], color: 'from-slate-500 to-slate-600' },
  { icon: Heart, title: 'Vital Signs', tests: ['Resting Heart Rate', 'Blood Pressure', 'Contraindication Check'], color: 'from-red-500 to-red-600' },
  { icon: Activity, title: 'Agility', tests: ['Pro Agility 5-10-5', 'T-Test', 'Illinois Agility', 'Hexagonal Jump'], color: 'from-purple-500 to-purple-600' },
  { icon: Zap, title: 'Power', tests: ['Squat Jump', 'CMJ', 'Vertical Jump', 'Standing Long Jump', 'Wingate Test'], color: 'from-orange-500 to-orange-600' },
  { icon: Timer, title: 'Speed', tests: ['5m Sprint', '10m Sprint', '20m Sprint', '40-Yard Dash', 'Foot Tapping'], color: 'from-yellow-500 to-yellow-600' },
  { icon: Dumbbell, title: 'Strength', tests: ['1RM Bench Press', '1RM Squat', '1RM Deadlift', 'Grip Strength'], color: 'from-blue-500 to-blue-600' },
  { icon: Scale, title: 'Muscular Endurance', tests: ['YMCA Bench Press', 'Push-Up Test', 'Curl-Up Test', 'Core Stability'], color: 'from-cyan-500 to-cyan-600' },
  { icon: Flame, title: 'Cardiovascular', tests: ['YMCA Cycle Test', '1.5-Mile Run', 'Cooper 12-Min', 'Yo-Yo IR1'], color: 'from-emerald-500 to-emerald-600' },
  { icon: Move, title: 'Flexibility & Balance', tests: ['Sit & Reach', 'Shoulder Flexibility', 'Stork Stand', 'Y-Balance'], color: 'from-pink-500 to-pink-600' },
]

const roles = [
  {
    icon: Shield,
    title: 'Admin Portal',
    description: 'Full system management, sport configuration, coach-athlete assignment, and center-wide monitoring.',
    features: [
      'Center-wide athlete & coach profiles',
      'Coach assignment by Head/Assistant/Specialist role',
      'Configure 35 sports & nutrition profiles',
      'Multi-dimensional dashboards: Center/Dept/Team/Athlete',
      'Organize mass testing campaigns & batch recording',
      'Aggregated reports with PDF/Excel export',
    ],
    gradient: 'from-[#3BA5B5] to-[#4BBDC8]',
    border: 'border-[#3BA5B5]/25',
    bg: 'bg-[#3BA5B5]/5',
    dot: 'bg-[#3BA5B5]',
    // ATMS Teal — Admin Portal
  },
  {
    icon: GraduationCap,
    title: 'Coach Portal',
    description: 'Execute fitness tests, manage periodization, and track progress for assigned athletes.',
    features: [
      'Record results for 30+ NSCA tests',
      'Design macro/meso/micro cycle plans',
      'Manage training sessions & lesson plans',
      'ACWR monitoring & injury surveillance',
      'Record nutrition compliance levels',
      'Individual reports for assigned athletes',
    ],
    gradient: 'from-[#d11a2a] to-red-500',
    border: 'border-[#d11a2a]/25',
    bg: 'bg-[#d11a2a]/5',
    dot: 'bg-[#d11a2a]',
  },
  {
    icon: Users,
    title: 'Athlete Portal',
    description: 'View personal test results, track schedule, nutrition plans, and maintain training logs.',
    features: [
      'View test results with 5-level NSCA classification',
      'Progress charts over time',
      'Personal schedule & upcoming sessions',
      'Meal plans & nutrition tracking',
      'Training log & personal notes',
      'Receive notifications from coaches & system',
    ],
    gradient: 'from-[#10b981] to-emerald-400',
    border: 'border-[#10b981]/25',
    bg: 'bg-[#10b981]/5',
    dot: 'bg-[#10b981]',
  },
]

const workflowSteps = [
  { title: 'Athlete Intake', description: 'Profile registration, PAR-Q+ screening, and pre-training contraindication checks' },
  { title: 'Fitness Testing', description: '30+ NSCA tests with CV% reliability and 5-level classification' },
  { title: 'Periodization', description: 'Macro/meso/micro cycle planning with volume-intensity tracking' },
  { title: 'Training Sessions', description: 'Session scheduling, attendance, RPE/sRPE recording, and lesson plans' },
  { title: 'Health Monitoring', description: 'Injury tracking, ACWR monitoring, and return-to-play protocols' },
  { title: 'Analytics & Reports', description: 'Multi-dimensional dashboards, KPI tracking, trend analysis, and PDF/Excel export' },
]

const problems = [
  { title: 'Manual record keeping', detail: 'Athlete data scattered across Excel, paper — hard to retrieve and error-prone' },
  { title: 'No unified test standards', detail: 'Each coach evaluates differently with no normative data for comparison' },
  { title: 'Subjective fitness assessment', detail: 'No CV% reliability — impossible to classify accurately by international standards' },
  { title: 'No injury risk detection', detail: 'No ACWR tracking or contraindication checks during training' },
  { title: 'Manual periodization', detail: 'Hard to plan macro/meso/micro cycles and track training load' },
  { title: 'Inefficient coach management', detail: 'No workload calculation — easy to overload or under-assign coaches' },
]

const solutions = [
  { title: '360° digital athlete profiles', detail: 'Comprehensive management: profile, fitness, psychology, nutrition, LTAD in one system' },
  { title: 'Full NSCA v3.0 compliance', detail: '30+ tests with CV% reliability, normative data, and 5-level classification' },
  { title: 'Scientific, objective classification', detail: 'Auto-compare against international norms by gender, age, and sport' },
  { title: 'ACWR & risk monitoring', detail: 'Acute:Chronic Workload Ratio tracking, contraindication checks, and overload detection' },
  { title: 'Smart periodization', detail: 'Macro/meso/micro cycle planning with automatic volume-intensity tracking' },
  { title: 'Coach workload management', detail: 'Role-weighted workload (Head/Assistant/Specialist) with overload prevention' },
]

/* ────────────────────────── Helpers ────────────────────────── */

function PhoneMockup({ title, children }: { title: string; children: ReactNode }) {
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

export default function ActiwellATMSClient() {
  const { t, language } = useLanguage()
  const tx = (key: string, fallback: string): string => {
    const value = t(key)
    return value === key ? fallback : value
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ───── Hero Section — ATMS Teal #3BA5B5 / Lime #8DC63F ───── */}
      <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1a1c 0%, #0d2a2e 35%, #112e30 65%, #0a1a1c 100%)' }}>
        {/* Moving Dots Particle Background — ATMS Teal/Lime brand */}
        <div className="absolute inset-0">
          <MovingDotsBackground />
        </div>

        {/* Subtle accent glows (kept for depth behind particles) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#3BA5B5]/15 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[500px] rounded-full bg-[#3BA5B5]/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge with pulse dot */}
            <Badge className="mb-8 rounded-full border-[#4BBDC8]/30 bg-[#3BA5B5]/20 text-teal-200 backdrop-blur-sm px-4 py-2">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
              </span>
              {tx('actiwellAtms.hero.badge', 'NSCA v3.0 — 35 Sports')}
            </Badge>

            {/* Title with ATMS gradient accent */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl">
              {language === 'en' ? (
                <>
                  <span className="text-white">Athletic Training</span>
                  <br />
                  <TextHighlight color="rgba(59, 165, 181, 0.3)" delay={0.8} duration={0.8}>
                    <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                      Management System
                    </span>
                  </TextHighlight>
                </>
              ) : (
                <TextHighlight color="rgba(59, 165, 181, 0.3)" delay={0.8} duration={0.8}>
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                    {tx('actiwellAtms.hero.title', 'Athletic Training Management System')}
                  </span>
                </TextHighlight>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
              {language === 'en' ? (
                <>
                  Professional sports training platform digitizing athlete development workflows — from{' '}
                  <TextWordCarousel
                    words={['NSCA-standard fitness testing', 'smart periodization', 'ACWR injury prevention', 'data-driven coaching']}
                    interval={2.5}
                    className="text-teal-300 font-semibold"
                  />{' '}
                  to peak performance.
                </>
              ) : (
                tx('actiwellAtms.hero.subtitle', 'Professional sports training platform digitizing athlete development workflows — from NSCA-standard fitness testing to peak performance.')
              )}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#3BA5B5] hover:bg-[#4BBDC8] text-white border-0">
                <a href="#features">
                  <Activity className="mr-2 h-5 w-5" />
                  Explore Features
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-teal-400/25 text-teal-200 hover:text-white bg-teal-500/5 hover:bg-teal-500/10">
                <a href="#roles">
                  View 3 Portals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats Cards — matching ATMS landing pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
            >
              {[
                { number: '30+', label: 'NSCA Tests' },
                { number: '9', label: 'Assessment Categories' },
                { number: '35', label: 'Sports Supported' },
                { number: '360°', label: 'Athlete Management' },
              ].map((stat) => (
                <div key={stat.label} className="group rounded-xl border border-[#3BA5B5]/20 bg-white/[0.03] backdrop-blur-sm px-4 py-5 text-center transition-colors hover:bg-white/[0.06] hover:border-[#4BBDC8]/30">
                  <div className="text-3xl font-bold bg-gradient-to-b from-teal-200 to-teal-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient border bottom — ATMS gradient-border technique */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3BA5B5]/50 to-transparent" />
      </section>

      {/* ───── 9 Main Features ───── */}
      <section id="features" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#3BA5B5] mb-3 text-sm font-semibold tracking-wider uppercase">{tx('actiwellAtms.modules.title', 'Comprehensive Features')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {language === 'en' ? (
                <>
                  9 Core Modules for{' '}
                  <span className="bg-gradient-to-r from-[#3BA5B5] to-[#4BBDC8] bg-clip-text text-transparent">Professional Training</span>
                </>
              ) : (
                <span className="bg-gradient-to-r from-[#3BA5B5] to-[#4BBDC8] bg-clip-text text-transparent">
                  {tx('actiwellAtms.modules.title', '9 Core Modules for Professional Training')}
                </span>
              )}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {tx('actiwellAtms.modules.description', 'A modern sports training management system integrating everything from fitness assessment to periodization and injury prevention.')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Card className="h-full group border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-[#3BA5B5]/20 transition-all">
                  <CardContent className="pt-6">
                    <div className="text-[#3BA5B5]/50 mb-2 text-sm font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Test Categories — 9 categories, 30+ tests ───── */}
      <section id="tests" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#3BA5B5] mb-3 text-sm font-semibold tracking-wider uppercase">NSCA Test Categories</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-[#3BA5B5] to-[#4BBDC8] bg-clip-text text-transparent">9 Categories</span> with 30+ Tests
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive fitness testing system following NSCA v3.0 with CV% reliability, normative data, and 5-level classification.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Card className="h-full group border-gray-200/60 bg-white shadow-sm hover:shadow-lg hover:border-[#3BA5B5]/15 transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-md transition-transform group-hover:scale-110`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {category.tests.map(test => (
                        <li key={test} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#3BA5B5]" />
                          {test}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* NSCA compliance badge */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#3BA5B5]/20 bg-white px-6 py-3 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3BA5B5]/10">
                <Activity className="h-4 w-4 text-[#3BA5B5]" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                100% compliant with <span className="text-[#3BA5B5] font-semibold">NSCA v3.0</span> standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Problem → Solution ───── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#3BA5B5] mb-3 text-sm font-semibold tracking-wider uppercase">Problem & Solution</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              From <span className="text-red-500">Manual</span> to{' '}
              <span className="text-[#3BA5B5]">Automated</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problems */}
            <Card className="border-red-200/50 bg-red-50/50 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl text-red-700">Current Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {problems.map((problem) => (
                    <li key={problem.title} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      <div>
                        <span className="font-medium text-gray-800">{problem.title}</span>
                        <p className="mt-0.5 text-sm text-gray-600">{problem.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="border-emerald-200/50 bg-emerald-50/50 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl text-emerald-700">ATMS Solution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {solutions.map((solution) => (
                    <li key={solution.title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <div>
                        <span className="font-medium text-gray-800">{solution.title}</span>
                        <p className="mt-0.5 text-sm text-gray-600">{solution.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ───── 3 Role Portals ───── */}
      <section id="roles" className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/mercury/atms_footer.avif)' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#4BBDC8] mb-3 text-sm font-semibold tracking-wider uppercase">Role-Based Access</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Three{' '}
              <span className="bg-gradient-to-r from-[#3BA5B5] to-[#8DC63F] bg-clip-text text-transparent">Specialized Portals</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Clear role-based access control tailored for each user type.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className={`h-full ${role.border} bg-white/10 backdrop-blur-md shadow-sm hover:shadow-lg hover:bg-white/15 transition-all border-white/10`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${role.gradient} shadow-lg`}>
                        <role.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{role.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-5 text-gray-300">{role.description}</p>
                    <ul className="space-y-2.5">
                      {role.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-200">
                          <span className={`h-2 w-2 rounded-full ${role.dot}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Workflow — 6 Steps ───── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#3BA5B5] mb-3 text-sm font-semibold tracking-wider uppercase">Workflow</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-[#3BA5B5] to-[#4BBDC8] bg-clip-text text-transparent">Simple</span> Process, High Efficiency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Scientific training workflow following international standards — from intake to analytics.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="h-full border-gray-200/60 bg-white shadow-sm hover:shadow-lg hover:border-[#3BA5B5]/15 transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3BA5B5] to-[#4BBDC8] text-lg font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Mobile Apps — CSS Mockups ───── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#3BA5B5] mb-3 text-sm font-semibold tracking-wider uppercase">Mobile Applications</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-[#d11a2a] to-red-500 bg-clip-text text-transparent">Coach</span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-[#10b981] to-emerald-400 bg-clip-text text-transparent">Athlete</span>{' '}
              Apps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mobile apps optimized for tablets and phones — record results on the field and track progress anytime, anywhere.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Coach App */}
            <Card className="border-[#d11a2a]/20 bg-[#d11a2a]/[0.03] shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Phone mockup */}
                  <PhoneMockup title="Coach App">
                    {/* Status bar */}
                    <div className="mb-3 flex items-center justify-between text-[9px] text-gray-400">
                      <span>9:41</span>
                      <span className="font-semibold text-[#d11a2a]">ATMS Coach</span>
                      <span>100%</span>
                    </div>
                    {/* Test form header */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-[#d11a2a] to-red-500 px-3 py-2.5">
                      <p className="text-[10px] text-white/80">NSCA Test Recording</p>
                      <p className="text-xs font-bold text-white">Speed — 20m Sprint</p>
                    </div>
                    {/* Athlete card */}
                    <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-2.5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#3BA5B5] to-[#8DC63F] flex items-center justify-center text-[9px] text-white font-bold">NV</div>
                        <div>
                          <p className="text-[10px] font-semibold text-gray-800">Nguyen Van A</p>
                          <p className="text-[8px] text-gray-500">Swimming · 17 yrs</p>
                        </div>
                      </div>
                    </div>
                    {/* Result fields */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <span className="text-[10px] text-gray-500">Trial 1</span>
                        <span className="text-[11px] font-semibold text-gray-900">3.42s</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <span className="text-[10px] text-gray-500">Trial 2</span>
                        <span className="text-[11px] font-semibold text-gray-900">3.38s</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-[#10b981]/30 bg-[#10b981]/5 px-2.5 py-2">
                        <span className="text-[10px] text-[#10b981] font-medium">Best</span>
                        <span className="text-[11px] font-bold text-[#10b981]">3.38s</span>
                      </div>
                    </div>
                    {/* Classification */}
                    <div className="mt-3 rounded-lg bg-teal-50 px-2.5 py-2 text-center">
                      <p className="text-[8px] text-teal-600">NSCA Classification</p>
                      <p className="text-xs font-bold text-[#3BA5B5]">Excellent</p>
                    </div>
                    {/* Save button */}
                    <div className="mt-3 rounded-lg bg-[#d11a2a] py-2 text-center">
                      <span className="text-[10px] font-semibold text-white">Save Result</span>
                    </div>
                  </PhoneMockup>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d11a2a] to-red-500 shadow-lg">
                        <ClipboardCheck className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Coach Application</h3>
                        <p className="text-xs text-gray-500">Test recording & session management</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        'Tablet-optimized test forms with 30+ NSCA tests',
                        'Station mode for mass testing campaigns',
                        'Session management, attendance, RPE/sRPE',
                        'Detailed lesson plans with exercise format',
                      ].map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d11a2a]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-[#d11a2a]/10 p-3">
                      <div className="text-center">
                        <p className="text-[#d11a2a] text-lg font-bold">{'<'}1s</p>
                        <p className="text-[10px] text-gray-500">Form load</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#d11a2a] text-lg font-bold">15s</p>
                        <p className="text-[10px] text-gray-500">Per result</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#d11a2a] text-lg font-bold">100%</p>
                        <p className="text-[10px] text-gray-500">NSCA valid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Athlete App */}
            <Card className="border-[#10b981]/20 bg-[#10b981]/[0.03] shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Phone mockup */}
                  <PhoneMockup title="Athlete App">
                    {/* Status bar */}
                    <div className="mb-3 flex items-center justify-between text-[9px] text-gray-400">
                      <span>9:41</span>
                      <span className="font-semibold text-[#10b981]">ATMS Athlete</span>
                      <span>100%</span>
                    </div>
                    {/* Profile header */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-[#10b981] to-emerald-400 px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white font-bold">NA</div>
                        <div>
                          <p className="text-xs font-bold text-white">Nguyen Van A</p>
                          <p className="text-[9px] text-white/80">Swimming · U18</p>
                        </div>
                      </div>
                    </div>
                    {/* Recent test results */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">Recent Results</p>
                    <div className="space-y-2 mb-3">
                      <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-gray-800 font-medium">20m Sprint</span>
                          <span className="text-[9px] rounded-full bg-teal-100 px-1.5 py-0.5 text-teal-700 font-medium">Excellent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#3BA5B5] to-[#4BBDC8]" />
                          </div>
                          <span className="text-[10px] font-semibold text-gray-700">3.38s</span>
                        </div>
                      </div>
                      <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-gray-800 font-medium">CMJ</span>
                          <span className="text-[9px] rounded-full bg-emerald-100 px-1.5 py-0.5 text-emerald-700 font-medium">Good</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#10b981] to-emerald-400" />
                          </div>
                          <span className="text-[10px] font-semibold text-gray-700">42cm</span>
                        </div>
                      </div>
                    </div>
                    {/* Training log */}
                    <p className="mb-2 text-[10px] font-semibold text-gray-700">Training Log</p>
                    <div className="rounded-md border border-gray-200 bg-white px-2.5 py-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-gray-600">Today</span>
                        <span className="text-[#10b981] font-medium">Completed</span>
                      </div>
                      <div className="mt-1 flex gap-3 text-[9px] text-gray-500">
                        <span>RPE: 7/10</span>
                        <span>Sleep: 8h</span>
                        <span>Mood: Good</span>
                      </div>
                    </div>
                    {/* Stats row */}
                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      <div className="rounded-md bg-emerald-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-[#10b981]">142</p>
                        <p className="text-[8px] text-gray-500">Sessions</p>
                      </div>
                      <div className="rounded-md bg-emerald-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-[#10b981]">28d</p>
                        <p className="text-[8px] text-gray-500">Streak</p>
                      </div>
                      <div className="rounded-md bg-emerald-50 px-2 py-1.5 text-center">
                        <p className="text-xs font-bold text-[#10b981]">+12%</p>
                        <p className="text-[8px] text-gray-500">Progress</p>
                      </div>
                    </div>
                  </PhoneMockup>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#10b981] to-emerald-400 shadow-lg">
                        <Activity className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Athlete Application</h3>
                        <p className="text-xs text-gray-500">Progress tracking & training logs</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        'Test results with progress trend charts',
                        'Daily training log: status, fitness, mood',
                        'Exercise logging with sets, reps, weight, RPE',
                        'Personal stats: total days, streaks, trends',
                      ].map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-[#10b981]/10 p-3">
                      <div className="text-center">
                        <p className="text-[#10b981] text-lg font-bold">{'<'}3m</p>
                        <p className="text-[10px] text-gray-500">Create log</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#10b981] text-lg font-bold">7d</p>
                        <p className="text-[10px] text-gray-500">Edit window</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#10b981] text-lg font-bold">Offline</p>
                        <p className="text-[10px] text-gray-500">Supported</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shared features */}
          <div className="mt-10">
            <h4 className="mb-5 text-center text-lg font-semibold text-gray-900">Shared Features Across Both Apps</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {['Real-time notifications', 'Injury alerts < 5 minutes', 'Automatic data sync', 'Tablet & phone optimized'].map(f => (
                <div key={f} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #3BA5B5 0%, #8DC63F 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Digitize Your Training Center?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            ATMS brings NSCA-standard testing, smart periodization, and data-driven coaching into a unified platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2a8a97] hover:bg-gray-100 border-0">
              <Link href="/contact">
                {tx('actiwellAtms.cta.contact', 'Get Started')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/">
                {tx('actiwellAtms.cta.backToItSolution', 'Back to IT Solutions')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
