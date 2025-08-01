'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Brain, 
  Bot, 
  Eye, 
  Network, 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react'
import { motion } from 'framer-motion'
import TextReveal from './TextReveal'
import ClientOnly from './ClientOnly'

export default function Services() {
  const { translations } = useLanguage()

  const services = [
    {
      icon: Brain,
      title: translations.services.ai.title,
      description: translations.services.ai.description,
      features: translations.services.ai.features,
      color: 'hsl(var(--link-primary))'
    },
    {
      icon: Bot,
      title: translations.services.automation.title,
      description: translations.services.automation.description,
      features: translations.services.automation.features,
      color: 'hsl(var(--success-color))'
    },
    {
      icon: Eye,
      title: translations.services.vision.title,
      description: translations.services.vision.description,
      features: translations.services.vision.features,
      color: 'hsl(var(--warning-color))'
    },
    {
      icon: Network,
      title: translations.services.integration.title,
      description: translations.services.integration.description,
      features: translations.services.integration.features,
      color: 'hsl(var(--link-primary))'
    },
    {
      icon: Shield,
      title: translations.services.security.title,
      description: translations.services.security.description,
      features: translations.services.security.features,
      color: 'hsl(var(--success-color))'
    },
    {
      icon: Cpu,
      title: translations.services.optimization.title,
      description: translations.services.optimization.description,
      features: translations.services.optimization.features,
      color: 'hsl(var(--warning-color))'
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>{' '}
              <span style={{ color: 'hsl(var(--text-primary))' }}>That Drive Growth</span>
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations.services.subtitle}
            </p>
          </TextReveal>
        </ClientOnly>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ClientOnly key={index}>
              <TextReveal delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group service-card p-8 hover:scale-105 transition-all duration-500 fade-in-scale relative overflow-hidden"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-xs rounded-full professional-card" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {service.title.split(' ')[0]}
                  </span>
                </div>

                {/* Service Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: service.color }}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm group-hover:text-gray-100 transition-colors duration-200" style={{ color: 'hsl(var(--text-secondary))' }}>
                      <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: service.color }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                     style={{ backgroundColor: `${service.color}10` }}>                </div>
              </motion.div>
            </TextReveal>
            </ClientOnly>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <ClientOnly>
          <TextReveal className="mt-20" delay={0.5}>
            <div className="professional-card p-8 rounded-2xl">
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
                    <div className="w-16 h-16 professional-card rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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