"use client"

import { ExternalLink, Smartphone, Globe, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  
  const projectKeys = ['actiwell', 'timekeeping', 'myarm', 'property', 'powerControl', 'airhub']
  
  const projects = projectKeys.map(key => {
    return {
      title: t(`projects.items.${key}.title`),
      description: t(`projects.items.${key}.description`),
      features: [
        t(`projects.items.${key}.features.items.0`),
        t(`projects.items.${key}.features.items.1`),
        t(`projects.items.${key}.features.items.2`),
        t(`projects.items.${key}.features.items.3`)
      ],
      platforms: [
        t(`projects.items.${key}.platforms.items.0`),
        t(`projects.items.${key}.platforms.items.1`)
      ].filter(Boolean),
      technologies: [
        t(`projects.items.${key}.technologies.items.0`),
        t(`projects.items.${key}.technologies.items.1`),
        t(`projects.items.${key}.technologies.items.2`)
      ].filter(Boolean),
      image: `/images/${key}.jpg`
    }
  })

  return (
    <section id="projects" className="section-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
            <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{t('projects.header.badge')}</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--text-primary))' }}>{t('projects.header.title')}</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('projects.header.subtitle')}
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
            {t('projects.header.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: 'hsl(var(--card-bg))',
                border: '2px solid hsl(var(--card-border))',
                boxShadow: '0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -1px rgb(30 58 138 / 0.06)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                <div className="text-center relative z-10">
                  <Globe className="w-12 h-12 text-white mx-auto mb-2 animate-float" />
                  <p className="text-sm text-white/80">Project Preview</p>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200" style={{ color: 'hsl(var(--text-primary))' }}>
                  {project.title}
                </h3>
                
                <p className="mb-4 leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>{t('projects.labels.features')}</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                        <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Platforms & Technologies */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                      <Smartphone className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--link-primary))' }} />
                      {t('projects.labels.platforms')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: 'hsl(var(--bg-primary))', color: 'hsl(var(--text-primary))' }}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                      <Zap className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--warning-color))' }} />
                      {t('projects.labels.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-xs rounded-full border" style={{ backgroundColor: 'hsl(var(--warning-color) / 0.1)', color: 'hsl(var(--text-primary))', borderColor: 'hsl(var(--warning-color) / 0.3)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                   style={{ 
                     background: 'linear-gradient(135deg, hsl(var(--link-primary) / 0.08) 0%, hsl(var(--link-primary) / 0.04) 100%)'
                   }}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl p-8 relative overflow-hidden"
               style={{
                 backgroundColor: 'hsl(var(--card-bg))',
                 border: '2px solid hsl(var(--card-border))',
                 boxShadow: '0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -1px rgb(30 58 138 / 0.06)'
               }}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                {t('projects.cta.title')}
              </h3>
              <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                {t('projects.cta.description')}
              </p>
              <a href="#contact" className="group btn-primary inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl">
                {t('projects.cta.button')}
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Floating particles for CTA */}
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full animate-float" style={{ backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full animate-float" style={{ animationDelay: '1s', backgroundColor: 'hsl(var(--warning-color) / 0.2)' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 