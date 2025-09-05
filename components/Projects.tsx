"use client"

import { ExternalLink, Smartphone, Globe, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ClientOnly from './ClientOnly'

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
        ...(t(`projects.items.${key}.platforms.items.1`) !== `projects.items.${key}.platforms.items.1` ? [t(`projects.items.${key}.platforms.items.1`)] : [])
      ].filter(Boolean),
      technologies: [
        t(`projects.items.${key}.technologies.items.0`),
        t(`projects.items.${key}.technologies.items.1`),
        t(`projects.items.${key}.technologies.items.2`)
      ].filter(Boolean),
      image: `/images/${key}.jpg`,
      website: t(`projects.items.${key}.website`) || null
    }
  })

  const ProjectsContent = () => (
    <section id="projects" className="section-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 shadow-lg bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 border border-blue-200/50">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent ml-2">{t('projects.header.badge')}</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text text-transparent">{t('projects.header.title')}</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t('projects.header.subtitle')}
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
            {t('projects.header.description')}
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            // Define unique color schemes for each project based on their actual brand colors
            const projectColors = {
              actiwell: {
                gradient: 'from-blue-600 via-blue-700 to-cyan-500', // Actiwell brand colors - deep blue to cyan gradient
                accent: 'blue',
                iconBg: 'bg-blue-50',
                iconColor: 'text-blue-700',
                borderColor: 'border-blue-300',
                shadowColor: 'shadow-blue-600/25'
              },
              timekeeping: {
                gradient: 'from-yellow-600 via-amber-600 to-yellow-700', // Fujikin - gold/amber theme
                accent: 'amber',
                iconBg: 'bg-yellow-50',
                iconColor: 'text-amber-700',
                borderColor: 'border-yellow-300',
                shadowColor: 'shadow-yellow-600/25'
              },
              myarm: {
                gradient: 'from-slate-700 via-gray-800 to-slate-900', // myArms - sophisticated dark slate gradient
                accent: 'slate',
                iconBg: 'bg-gray-50',
                iconColor: 'text-slate-800',
                borderColor: 'border-gray-300',
                shadowColor: 'shadow-gray-800/30'
              },
              property: {
                gradient: 'from-emerald-500 via-emerald-600 to-emerald-700', // Minova - emerald green
                accent: 'emerald',
                iconBg: 'bg-emerald-100',
                iconColor: 'text-emerald-600',
                borderColor: 'border-emerald-200',
                shadowColor: 'shadow-emerald-500/20'
              },
              powerControl: {
                gradient: 'from-yellow-500 via-amber-600 to-yellow-600',
                accent: 'yellow',
                iconBg: 'bg-yellow-50',
                iconColor: 'text-amber-700',
                borderColor: 'border-yellow-200',
                shadowColor: 'shadow-yellow-500/25'
              },
              airhub: {
                gradient: 'from-pink-500 via-rose-600 to-pink-600',
                accent: 'pink',
                iconBg: 'bg-pink-50',
                iconColor: 'text-rose-700',
                borderColor: 'border-pink-200',
                shadowColor: 'shadow-pink-500/25'
              }
            };

            const colors = projectColors[projectKeys[index] as keyof typeof projectColors] || projectColors.actiwell;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{
                  backgroundColor: 'hsl(var(--card-bg))',
                  border: '2px solid hsl(var(--card-border))',
                  boxShadow: '0 10px 25px -5px rgb(30 58 138 / 0.1), 0 8px 10px -6px rgb(30 58 138 / 0.1)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col lg:flex-row min-h-[400px]">
                  {/* Project Visual Section */}
                  <div className="relative lg:w-1/3 xl:w-1/4 p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                    {/* Animated Background Circles */}
                    <div className={`absolute inset-0 ${colors.iconBg} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${colors.iconBg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className={`absolute top-8 left-8 w-3 h-3 ${colors.iconBg} rounded-full opacity-40 animate-bounce`}></div>
                      <div className={`absolute top-16 right-12 w-2 h-2 ${colors.iconBg} rounded-full opacity-30 animate-pulse`}></div>
                      <div className={`absolute bottom-12 left-16 w-4 h-4 ${colors.iconBg} rounded-full opacity-25 animate-bounce delay-1000`}></div>
                    </div>

                    {/* Project Icon */}
                    <div className="relative z-10 text-center">
                      <div className={`inline-flex items-center justify-center w-20 h-20 ${colors.iconBg} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <Globe className={`w-10 h-10 ${colors.iconColor}`} />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {project.title.split(':')[0]}
                      </h3>
                      <div className={`inline-block w-12 h-1 bg-gradient-to-r ${colors.gradient} rounded-full mt-3 group-hover:w-16 transition-all duration-300`}></div>
                    </div>
                  </div>

                  {/* Project Content Section */}
                  <div className="lg:w-2/3 xl:w-3/4 p-8 lg:p-12">
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className={`text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Features Section */}
                      <div className="relative">
                        <div className={`absolute -top-2 -left-2 w-6 h-6 ${colors.iconBg} rounded-full opacity-60`}></div>
                        <h4 className={`font-bold mb-4 flex items-center text-gray-800 relative z-10`}>
                          <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                            <Zap className={`w-4 h-4 ${colors.iconColor}`} />
                          </div>
                          {t('projects.labels.features')}
                        </h4>
                        <ul className="space-y-3 pl-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                              <div className={`w-2 h-2 rounded-full mt-2 mr-4 bg-gradient-to-r ${colors.gradient} flex-shrink-0 group-hover:scale-125 transition-transform duration-200`}></div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Platforms & Technologies */}
                      <div className="space-y-6">
                        {/* Platforms */}
                        <div className="relative">
                          <div className={`absolute -top-1 -right-1 w-4 h-4 ${colors.iconBg} rounded-full opacity-50`}></div>
                          <h4 className={`font-bold mb-4 flex items-center text-gray-800 relative z-10`}>
                            <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                              <Smartphone className={`w-4 h-4 ${colors.iconColor}`} />
                            </div>
                            {t('projects.labels.platforms')}
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.platforms.map((platform, platformIndex) => (
                              <span
                                key={platformIndex}
                                className={`px-4 py-2 text-sm font-medium rounded-full border-2 ${colors.borderColor} bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md`}
                                style={{ animationDelay: `${platformIndex * 0.1}s` }}
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="relative">
                          <div className={`absolute -top-1 -right-1 w-4 h-4 ${colors.iconBg} rounded-full opacity-50`}></div>
                          <h4 className={`font-bold mb-4 flex items-center text-gray-800 relative z-10`}>
                            <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                              <Zap className={`w-4 h-4 ${colors.iconColor}`} />
                            </div>
                            {t('projects.labels.technologies')}
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${colors.gradient} text-white hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                                style={{ animationDelay: `${techIndex * 0.1}s` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Website Link */}
                    {project.website && (
                      <div className="flex justify-end">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden`}
                        >
                          {/* Button Background Animation */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-xl`}></div>

                          {/* Button Ripple Effect */}
                          <div className={`absolute inset-0 rounded-xl bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`}></div>

                          <Globe className="w-5 h-5 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10">{t('projects.labels.visitWebsite')}</span>
                          <ExternalLink className="w-4 h-4 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Animated Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${colors.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl p-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
               style={{
                 border: '2px solid hsl(var(--card-border))',
                 boxShadow: '0 20px 40px -10px rgb(30 58 138 / 0.15), 0 10px 20px -5px rgb(30 58 138 / 0.1)'
               }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10"></div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                {t('projects.cta.title')}
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                {t('projects.cta.description')}
              </p>
              <a href="#contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                {t('projects.cta.button')}
                <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Enhanced Floating Particles */}
            <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-bounce"></div>
            <div className="absolute bottom-8 left-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 left-8 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 animate-ping"></div>
            <div className="absolute top-1/2 right-8 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <ClientOnly fallback={
      <section id="projects" className="section-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
              <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>High-Performance Applications</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span style={{ color: 'hsl(var(--text-primary))' }}>We excel in building</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                high-load mobile and web applications
              </span>
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions across various industries with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>
    }>
      <ProjectsContent />
    </ClientOnly>
  )
} 