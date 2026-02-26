'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import {
  Zap,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Database,
  Building2,
  Hotel,
  Dumbbell,
  Video
} from 'lucide-react'
import { motion } from 'framer-motion'
import TextReveal from './TextReveal'
import ClientOnly from './ClientOnly'

export default function Services() {
  const { translations } = useLanguage()

  // Digital Transformation Solutions
  const digitalTransformationSolutions = [
    {
      icon: Database,
      title: translations?.services?.digitalTransformation?.solutions?.attendance?.title || 'Attendance Management',
      description: translations?.services?.digitalTransformation?.solutions?.attendance?.description || 'Smart attendance management system with AI-powered recognition',
      color: 'hsl(var(--link-primary))',
      partner: 'Fujikin Corporation (Japan)'
    },
    {
      icon: Dumbbell,
      title: translations?.services?.digitalTransformation?.solutions?.gym?.title || 'Gym Management',
      description: translations?.services?.digitalTransformation?.solutions?.gym?.description || 'AI-powered gym management and member tracking system',
      color: 'hsl(var(--success-color))',
      partner: 'Actiwell - AI Solution'
    },
    {
      icon: Hotel,
      title: translations?.services?.digitalTransformation?.solutions?.hotel?.title || 'Hotel Management',
      description: translations?.services?.digitalTransformation?.solutions?.hotel?.description || 'Comprehensive hotel management system with AI optimization',
      color: 'hsl(var(--warning-color))',
      partner: 'Minova Hotel Group'
    },
    {
      icon: Building2,
      title: translations?.services?.digitalTransformation?.solutions?.enterprise?.title || 'Enterprise Solutions',
      description: translations?.services?.digitalTransformation?.solutions?.enterprise?.description || 'Custom enterprise solutions with AI integration',
      color: 'hsl(var(--link-primary))',
      partner: 'MyArms (Japan)'
    }
  ]

  // Digital Marketing Services
  const digitalMarketingServices = [
    {
      icon: Video,
      title: translations?.services?.digitalMarketing?.services?.tvc?.title || 'TVC Production',
      description: translations?.services?.digitalMarketing?.services?.tvc?.description || 'Professional TVC video production services',
      color: 'hsl(var(--success-color))',
      partners: ['Jworld Vina (Korea)', 'Fujikin Viet Nam']
    }
  ]

  const stats = [
    { icon: TrendingUp, number: '150+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '25+', label: 'Industry Awards' },
    { icon: Clock, number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="services" className="section-light relative">
      <div className="container-custom">
        <ClientOnly>
          <TextReveal className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
              <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                Professional AI & TVC Services
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              <span style={{ color: 'hsl(var(--text-primary))' }}>Digital</span>{' '}
              <span className="bg-gradient-to-r from-mercury-blue-400 via-mercury-blue-500 to-mercury-blue-700 bg-clip-text text-transparent">
                Solutions
              </span>{' '}
              <span style={{ color: 'hsl(var(--text-primary))' }}>That Drive Growth</span>
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations?.services?.subtitle}
            </p>
          </TextReveal>
        </ClientOnly>

        {/* Digital Transformation Services Section */}
        <ClientOnly>
          <TextReveal className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                {translations?.services?.digitalTransformation.title}
              </h3>
              <p className="text-lg mb-2" style={{ color: 'hsl(var(--link-primary))' }}>
                {translations?.services?.digitalTransformation.subtitle}
              </p>
              <p className="text-base max-w-4xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                {translations?.services?.digitalTransformation.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {digitalTransformationSolutions.map((solution, index) => (
                <ClientOnly key={index}>
                  <TextReveal delay={index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
                      style={{
                        backgroundColor: 'hsl(var(--card-bg))',
                        border: '1px solid hsl(var(--card-border))',
                        boxShadow: '0 4px 6px -1px rgb(15 23 42 / 0.06), 0 2px 4px -1px rgb(15 23 42 / 0.03)'
                      }}
                    >
                      <div className="p-8 relative z-10">
                        {/* Partner Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-3 py-1 text-xs rounded-full font-medium" 
                                style={{ 
                                  backgroundColor: 'hsl(var(--bg-primary))',
                                  color: 'hsl(var(--text-secondary))'
                                }}>
                            {solution.partner}
                          </span>
                        </div>

                        {/* Solution Icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                             style={{ backgroundColor: solution.color }}>
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Solution Content */}
                        <h4 className="text-xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                          {solution.title}
                        </h4>
                        
                        <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                          {solution.description}
                        </p>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                           style={{ 
                             background: `linear-gradient(135deg, ${solution.color}08 0%, ${solution.color}04 100%)`
                           }}></div>
                      
                      {/* Subtle border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ 
                             border: `1px solid ${solution.color}20`,
                             boxShadow: `0 0 0 1px ${solution.color}10`
                           }}></div>
                    </motion.div>
                  </TextReveal>
                </ClientOnly>
              ))}
            </div>
          </TextReveal>
        </ClientOnly>

        {/* Digital Marketing Services Section */}
        <ClientOnly>
          <TextReveal className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                {translations?.services?.digitalMarketing.title}
              </h3>
              <p className="text-lg mb-2" style={{ color: 'hsl(var(--link-primary))' }}>
                {translations?.services?.digitalMarketing.subtitle}
              </p>
              <p className="text-base max-w-4xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                {translations?.services?.digitalMarketing.description}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {digitalMarketingServices.map((service, index) => (
                <ClientOnly key={index}>
                  <TextReveal delay={index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
                      style={{
                        backgroundColor: 'hsl(var(--card-bg))',
                        border: '1px solid hsl(var(--card-border))',
                        boxShadow: '0 4px 6px -1px rgb(15 23 42 / 0.06), 0 2px 4px -1px rgb(15 23 42 / 0.03)'
                      }}
                    >
                      <div className="p-8 relative z-10">
                        {/* Partners Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex flex-wrap gap-2">
                            {service.partners.map((partner, partnerIndex) => (
                              <span key={partnerIndex} className="px-3 py-1 text-xs rounded-full font-medium" 
                                    style={{ 
                                      backgroundColor: 'hsl(var(--bg-primary))',
                                      color: 'hsl(var(--text-secondary))'
                                    }}>
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Service Icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                             style={{ backgroundColor: service.color }}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Service Content */}
                        <h4 className="text-xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                          {service.title}
                        </h4>
                        
                        <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                          {service.description}
                        </p>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                           style={{ 
                             background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}04 100%)`
                           }}></div>
                      
                      {/* Subtle border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ 
                             border: `1px solid ${service.color}20`,
                             boxShadow: `0 0 0 1px ${service.color}10`
                           }}></div>
                    </motion.div>
                  </TextReveal>
                </ClientOnly>
              ))}
            </div>
          </TextReveal>
        </ClientOnly>

        {/* Enhanced Stats Section */}
        <ClientOnly>
          <TextReveal className="mt-20" delay={0.5}>
            <div className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                 style={{
                   backgroundColor: 'hsl(var(--card-bg))',
                   border: '1px solid hsl(var(--card-border))',
                   boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <ClientOnly>
                <TextReveal delay={0.6}>
                  <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'hsl(var(--text-primary))' }}>
                    Why Choose Mercury Solutions?
                  </h3>
                </TextReveal>
              </ClientOnly>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ClientOnly key={index}>
                  <TextReveal delay={0.7 + index * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                         style={{
                           backgroundColor: 'hsl(var(--bg-primary))',
                           border: '1px solid hsl(var(--card-border))'
                         }}>
                      <stat.icon className="w-8 h-8" style={{ color: 'hsl(var(--link-primary))' }} />
                    </div>
                    <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--link-primary))' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                      {stat.label}
                    </div>
                  </div>
                </TextReveal>
                </ClientOnly>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <ClientOnly>
                <TextReveal delay={1.1}>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" style={{ color: 'hsl(var(--success-color))' }} />
                    <span style={{ color: 'hsl(var(--text-primary))' }}>Proven Track Record</span>
                  </div>
                </TextReveal>
              </ClientOnly>
              <ClientOnly>
                <TextReveal delay={1.2}>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                    <span style={{ color: 'hsl(var(--text-primary))' }}>Fast Delivery</span>
                  </div>
                </TextReveal>
              </ClientOnly>
              <ClientOnly>
                <TextReveal delay={1.3}>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6" style={{ color: 'hsl(var(--warning-color))' }} />
                    <span style={{ color: 'hsl(var(--text-primary))' }}>Premium Quality</span>
                  </div>
                </TextReveal>
              </ClientOnly>
            </div>
          </div>
        </TextReveal>
        </ClientOnly>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full opacity-20 animate-float" style={{ backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s', backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s', backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
    </section>
  )
} 