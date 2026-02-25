'use client'

import Projects from '@/components/it-solution/Projects'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Settings2 } from 'lucide-react'

export default function ITSolutionSection() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Projects */}
      <Projects />

      {/* Process & Technology CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/process-technology" className="block group">
            <div className="relative rounded-2xl border border-mercury-blue-200/50 bg-gradient-to-r from-mercury-blue-50/50 to-mercury-gold-50/50 p-8 md:p-12 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Settings2 className="w-6 h-6 text-mercury-blue-600" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
                  {t('processPage.cta')}
                </h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                {t('processPage.hero.subtitle')}
              </p>
              <div className="inline-flex items-center text-mercury-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                {t('common.learnMore')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
