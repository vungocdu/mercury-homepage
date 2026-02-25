'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code,
  Cpu,
  Database,
  Eye,
  FileText,
  Monitor,
  Palette,
  Plug,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  TestTube2,
  Zap,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollIndicator from '@/components/ScrollIndicator'
import MovingDotsBackground from '@/components/MovingDotsBackground'
import { TextHighlight } from '@/components/text-highlight'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function ProcessTechnologyClient() {
  const { t } = useLanguage()

  const processSteps = [
    {
      icon: ClipboardList,
      title: t('process.steps.plan.title'),
      description: t('process.steps.plan.description'),
      step: '01',
      color: 'blue',
      iconBg: 'bg-blue-500',
      lineColor: 'bg-blue-300',
    },
    {
      icon: Palette,
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description'),
      step: '02',
      color: 'violet',
      iconBg: 'bg-violet-500',
      lineColor: 'bg-violet-300',
    },
    {
      icon: Code,
      title: t('process.steps.build.title'),
      description: t('process.steps.build.description'),
      step: '03',
      color: 'emerald',
      iconBg: 'bg-emerald-500',
      lineColor: 'bg-emerald-300',
    },
    {
      icon: Rocket,
      title: t('process.steps.deploy.title'),
      description: t('process.steps.deploy.description'),
      step: '04',
      color: 'amber',
      iconBg: 'bg-amber-500',
      lineColor: 'bg-amber-300',
    },
  ]

  const benefits = [
    {
      icon: Eye,
      title: t('process.benefits.transparency.title'),
      description: t('process.benefits.transparency.description'),
    },
    {
      icon: Zap,
      title: t('process.benefits.agile.title'),
      description: t('process.benefits.agile.description'),
    },
    {
      icon: ShieldCheck,
      title: t('process.benefits.quality.title'),
      description: t('process.benefits.quality.description'),
    },
  ]

  const techStacks = [
    {
      category: t('technology.categories.frontend'),
      icon: Monitor,
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
      items: [
        { name: 'HTML5', type: 'language' },
        { name: 'CSS', type: 'language' },
        { name: 'JavaScript', type: 'language' },
        { name: 'React', type: 'framework' },
        { name: 'Vue', type: 'framework' },
        { name: 'Webpack', type: 'tool' },
        { name: 'Sass', type: 'tool' },
      ],
    },
    {
      category: t('technology.categories.backend'),
      icon: Server,
      iconColor: 'text-green-400',
      iconBg: 'bg-green-500/10',
      items: [
        { name: 'Python', type: 'language' },
        { name: 'Go', type: 'language' },
        { name: 'Node.js', type: 'language' },
        { name: 'Flask', type: 'framework' },
        { name: 'Django', type: 'framework' },
        { name: 'Laravel', type: 'framework' },
        { name: 'Express', type: 'framework' },
        { name: 'Meteor', type: 'framework' },
        { name: 'GraphQL', type: 'framework' },
      ],
    },
    {
      category: t('technology.categories.database'),
      icon: Database,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10',
      items: [
        { name: 'MongoDB', type: 'database' },
        { name: 'MySQL', type: 'database' },
        { name: 'PostgreSQL', type: 'database' },
        { name: 'Redis', type: 'database' },
        { name: 'SQL Server', type: 'database' },
      ],
    },
    {
      category: t('technology.categories.devops'),
      icon: Cloud,
      iconColor: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      items: [
        { name: 'Ansible', type: 'tool' },
        { name: 'Terraform', type: 'tool' },
        { name: 'Docker', type: 'tool' },
        { name: 'Kubernetes', type: 'tool' },
        { name: 'AWS', type: 'cloud' },
        { name: 'Google Cloud', type: 'cloud' },
        { name: 'GitLab CI', type: 'tool' },
        { name: 'Jenkins', type: 'tool' },
      ],
    },
    {
      category: t('technology.categories.mobile'),
      icon: Smartphone,
      iconColor: 'text-pink-400',
      iconBg: 'bg-pink-500/10',
      items: [
        { name: 'Kotlin', type: 'language' },
        { name: 'Java', type: 'language' },
        { name: 'Swift', type: 'language' },
        { name: 'Objective-C', type: 'language' },
        { name: 'Flutter', type: 'framework' },
        { name: 'React Native', type: 'framework' },
      ],
    },
    {
      category: t('technology.categories.ai'),
      icon: Brain,
      iconColor: 'text-red-400',
      iconBg: 'bg-red-500/10',
      items: [
        { name: 'TensorFlow', type: 'framework' },
        { name: 'Keras', type: 'framework' },
        { name: 'PyTorch', type: 'framework' },
        { name: 'FastAI', type: 'framework' },
        { name: 'OpenCV', type: 'library' },
        { name: 'scikit-learn', type: 'library' },
        { name: 'Pandas', type: 'library' },
        { name: 'NumPy', type: 'library' },
      ],
    },
  ]

  const additionalTools = [
    {
      title: t('technology.additional.sections.monitoring'),
      icon: Activity,
      iconColor: 'text-blue-400',
      items: ['Prometheus', 'Grafana', 'New Relic', 'Datadog', 'Sentry'],
    },
    {
      title: t('technology.additional.sections.logManagement'),
      icon: FileText,
      iconColor: 'text-green-400',
      items: ['ELK Stack', 'Fluentd', 'Logstash', 'Splunk', 'Papertrail'],
    },
    {
      title: t('technology.additional.sections.testing'),
      icon: TestTube2,
      iconColor: 'text-violet-400',
      items: ['Jest', 'Cypress', 'Selenium', 'JUnit', 'Pytest'],
    },
    {
      title: t('technology.additional.sections.integration'),
      icon: Plug,
      iconColor: 'text-amber-400',
      items: ['Zapier', 'IFTTT', 'Webhooks', 'API Gateway', 'Kong'],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'language':
        return 'bg-mercury-blue-50 text-mercury-blue-700 border-mercury-blue-200 hover:bg-mercury-blue-100'
      case 'framework':
        return 'bg-mercury-blue-100 text-mercury-blue-800 border-mercury-blue-300 hover:bg-mercury-blue-200'
      case 'database':
        return 'bg-mercury-blue-200 text-mercury-blue-900 border-mercury-blue-400 hover:bg-mercury-blue-300'
      case 'tool':
        return 'bg-mercury-gold-50 text-mercury-gold-700 border-mercury-gold-200 hover:bg-mercury-gold-100'
      case 'cloud':
        return 'bg-mercury-blue-150 text-mercury-blue-800 border-mercury-blue-250 hover:bg-mercury-blue-250'
      case 'library':
        return 'bg-mercury-gold-100 text-mercury-gold-800 border-mercury-gold-300 hover:bg-mercury-gold-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ─── 1. Hero ─── */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-mercury-900 via-gray-900 to-minova-900 overflow-hidden">
        <MovingDotsBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-6 bg-white/10 text-minova-gold border-minova-gold/30 backdrop-blur-sm">
                <Settings2 className="w-3.5 h-3.5 mr-1.5" />
                {t('processPage.hero.badge')}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-madefor"
            >
              {t('processPage.hero.title1')}{' '}
              <TextHighlight color="#D4AF37" delay={0.5} duration={0.8}>
                {t('processPage.hero.title2')}
              </TextHighlight>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-madefor"
            >
              {t('processPage.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Process Steps (Vertical Timeline) ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-madefor">
              {t('process.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-madefor">
              {t('process.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative flex items-start gap-6 md:gap-8 mb-12 last:mb-0"
              >
                {/* Numbered circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={cn(
                      'w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg',
                      step.iconBg
                    )}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center',
                          step.iconBg + '/10'
                        )}
                      >
                        <step.icon className={cn('h-5 w-5', step.iconBg.replace('bg-', 'text-'))} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-madefor">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-madefor">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Benefits ─── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-mercury-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-madefor">
              {t('process.benefits.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-madefor">
              {t('process.benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-minova-gold/10 text-minova-gold flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-madefor">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-madefor">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Technology Stack ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="px-4 py-2 mb-6 bg-gradient-to-r from-mercury-blue-100 to-mercury-gold-100 text-mercury-blue-700 font-semibold text-sm border-mercury-blue-200"
            >
              <Cpu className="w-4 h-4 mr-2" />
              {t('technology.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-madefor">
              {t('technology.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-madefor">
              {t('technology.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techStacks.map((stack, i) => (
              <motion.div
                key={stack.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center',
                          stack.iconBg
                        )}
                      >
                        <stack.icon className={cn('h-6 w-6', stack.iconColor)} />
                      </div>
                      <CardTitle className="text-xl font-bold font-madefor">
                        {stack.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className={cn(
                            'px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all duration-200',
                            getTypeColor(item.type)
                          )}
                        >
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Additional Tools ─── */}
      <section className="py-20 bg-gradient-to-br from-mercury-900 via-gray-900 to-minova-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-madefor">
              {t('technology.additional.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-madefor">
              {t('technology.additional.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {additionalTools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <tool.icon className={cn('h-5 w-5', tool.iconColor)} />
                    </div>
                    <h3 className="text-lg font-bold text-white font-madefor">
                      {tool.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tool.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-300 text-sm font-madefor"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-minova-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-madefor">
              {t('processPage.ctaSection.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-madefor">
              {t('processPage.ctaSection.description')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-mercury-600 to-minova-600 hover:from-mercury-700 hover:to-minova-700 text-white"
            >
              <Link href="/contact">
                <span>{t('processPage.ctaSection.button')}</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. Contact ─── */}
      <Contact />

      {/* ─── 8. Footer ─── */}
      <Footer />
      <ScrollIndicator />
    </main>
  )
}
