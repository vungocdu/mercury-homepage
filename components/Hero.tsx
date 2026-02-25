'use client'

import { Zap, ChevronRight } from 'lucide-react'
import TextReveal from './TextReveal'
import ClientOnly from './ClientOnly'
import { useLanguage } from '@/contexts/LanguageContext'

function HeroContent() {
  const { t } = useLanguage()
  


  return (
    <div className="container-custom relative z-20">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        
        {/* Content */}
        <div className="space-y-8 fade-in-up max-w-4xl">
          <div className="space-y-6">
            <TextReveal delay={0.1}>
              <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
                <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                  {t('hero.badge')}
                </span>
              </div>
            </TextReveal>
            
            <TextReveal delay={0.2}>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span style={{ color: 'hsl(var(--text-primary))' }}>{t('hero.title.part1')}</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  {t('hero.title.part2')}
                </span>{' '}
                <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{t('hero.title.part3')}</span>
              </h1>
            </TextReveal>
            
            <TextReveal delay={0.3}>
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                {t('hero.subtitle')}
              </p>
            </TextReveal>
          </div>

          {/* CTA Button */}
          <TextReveal delay={0.4}>
            <div className="flex justify-center">
              <a href="#projects" className="btn-secondary group inline-flex items-center justify-center hover:scale-105">
                {t('hero.cta')}
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center border-mercury-blue-500 shadow-lg">
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-mercury-blue-500"></div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero-bg-white pt-16 min-h-screen relative overflow-hidden">
      <ClientOnly fallback={
        <div className="container-custom relative z-20">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
            <div className="space-y-8 fade-in-up max-w-4xl">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
                  <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                    Mercury Solutions
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span style={{ color: 'hsl(var(--text-primary))' }}>Mercury Solutions</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                    - Data Analysis & Innovative Technologies
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                  Mercury Solutions specializes in Data Analysis, Computer Vision, Web Development, Mobile App Development, and innovative technologies.
                </p>
              </div>

              <div className="flex justify-center">
                <a href="#projects" className="btn-secondary group inline-flex items-center justify-center hover:scale-105">
                  View Our Projects
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 rounded-full flex justify-center border-mercury-blue-500 shadow-lg">
              <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-mercury-blue-500"></div>
            </div>
          </div>
        </div>
      }>
        <HeroContent />
      </ClientOnly>
    </section>
  )
} 
