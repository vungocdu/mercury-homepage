'use client'

import { Play, Camera, Edit3, Palette, Zap, Users, Award, Clock, Video, Mic, Lightbulb, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import TrackingButton from '@/components/TrackingButton'
import TickerScroll from '@/components/TickerScroll'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TVCPageClient() {
  const { translations } = useLanguage()
  
  const services = [
    {
      icon: Lightbulb,
      title: translations.tvc.services.consultation.title,
      description: translations.tvc.services.consultation.description,
      features: translations.tvc.features.consultation
    },
    {
      icon: Target,
      title: translations.tvc.services.concept.title,
      description: translations.tvc.services.concept.description,
      features: translations.tvc.features.concept
    },
    {
      icon: Camera,
      title: translations.tvc.services.production.title,
      description: translations.tvc.services.production.description,
      features: translations.tvc.features.production
    },
    {
      icon: Edit3,
      title: translations.tvc.services.postProduction.title,
      description: translations.tvc.services.postProduction.description,
      features: translations.tvc.features.postProduction
    },
    {
      icon: Video,
      title: translations.tvc.services.motionGraphics.title,
      description: translations.tvc.services.motionGraphics.description,
      features: translations.tvc.features.motionGraphics
    },
    {
      icon: Mic,
      title: translations.tvc.services.distribution.title,
      description: translations.tvc.services.distribution.description,
      features: translations.tvc.features.distribution
    }
  ]

  const process = [
    {
      step: '01',
      title: translations.tvc.process.steps.consultation,
      description: translations.tvc.descriptions.consultation
    },
    {
      step: '02',
      title: translations.tvc.process.steps.concept,
      description: translations.tvc.descriptions.concept
    },
    {
      step: '03',
      title: translations.tvc.process.steps.production,
      description: translations.tvc.descriptions.production
    },
    {
      step: '04',
      title: translations.tvc.process.steps.postProduction,
      description: translations.tvc.descriptions.postProduction
    }
  ]

  const portfolio = [
    {
      title: translations.tvc.portfolio.projects.corporate.title,
      category: 'TVC',
      description: translations.tvc.portfolio.projects.corporate.description,
      duration: '60s',
      platform: 'Television & Digital'
    },
    {
      title: translations.tvc.portfolio.projects.product.title,
      category: 'Commercial',
      description: translations.tvc.portfolio.projects.product.description,
      duration: '30s',
      platform: 'National TV & Social Media'
    },
    {
      title: translations.tvc.portfolio.projects.internal.title,
      category: 'Corporate',
      description: translations.tvc.portfolio.projects.internal.description,
      duration: '3-5min',
      platform: 'Internal Platforms'
    },
    {
      title: translations.tvc.portfolio.projects.events.title,
      category: 'Event',
      description: translations.tvc.portfolio.projects.events.description,
      duration: '2-3min',
      platform: 'Multi-platform Distribution'
    }
  ]

  const stats = [
    { icon: Award, number: '50+', label: translations.tvc.hero.stats.projects },
    { icon: Users, number: '25+', label: translations.tvc.hero.stats.clients },
    { icon: Clock, number: '24/7', label: translations.tvc.hero.stats.support },
    { icon: Zap, number: '100%', label: 'Quality Guarantee' }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 hero-bg">
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: 'hsl(var(--text-primary))' }}>
                  {translations.tvc.hero.title}
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {translations.tvc.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <TrackingButton 
                  href="#contact" 
                  className="btn-primary inline-flex items-center justify-center"
                  trackingAction="click_cta"
                  trackingLabel="Start Your Project"
                  conversionType="lead"
                  conversionValue={100}
                >
                  {translations.common.getStarted}
                  <Play size={20} className="ml-2" />
                </TrackingButton>
                <TrackingButton 
                  href="#portfolio" 
                  className="btn-secondary inline-flex items-center justify-center"
                  trackingAction="view_portfolio"
                  trackingLabel="View Portfolio"
                >
                  {translations.nav.portfolio}
                </TrackingButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 professional-card rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                    </div>
                    <div className="text-2xl font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{stat.number}</div>
                    <div className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="professional-card p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 professional-card rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>Video Production Studio</h3>
                      <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Professional equipment & crew</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="professional-card p-4 text-center">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>4K</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Quality</div>
                    </div>
                    <div className="professional-card p-4 text-center">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>24/7</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Support</div>
                    </div>
                    <div className="professional-card p-4 text-center">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>100%</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Satisfaction</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Project Completion</span>
                      <span className="text-sm font-semibold" style={{ color: 'hsl(var(--success-color))' }}>On Time</span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ backgroundColor: 'hsl(var(--border))' }}>
                      <div className="h-2 rounded-full" style={{ width: '98%', backgroundColor: 'hsl(var(--link-primary))' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20" style={{ backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: 'hsl(var(--link-primary) / 0.2)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              {translations.tvc.services.title || 'What We Do'}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations.tvc.services.subtitle || 'We specialize in creating strategic TVC content that enhances your brand image and attracts top talent. Our comprehensive approach combines cutting-edge technology with creative excellence.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group service-card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 professional-card rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-colors duration-200">
                    <service.icon className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>{service.title}</h3>
                </div>
                
                <p className="mb-4 leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              {translations.tvc.process.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations.tvc.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 z-0" 
                       style={{ width: 'calc(100% - 2rem)', backgroundColor: 'hsl(var(--border))' }}></div>
                )}
                
                <div className="relative z-10 service-card p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 professional-card rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-colors duration-200">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>{step.step}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                    {step.title}
                  </h3>
                  
                  <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Scroll Portfolio Section */}
      <TickerScroll />

      {/* Portfolio Section */}
      <section id="portfolio" className="section-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              {translations.tvc.portfolio.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations.tvc.portfolio.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="service-card overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Project Image Placeholder */}
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2" style={{ color: 'hsl(var(--link-primary))' }} />
                    <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Project Video</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-xs rounded-full" 
                          style={{ backgroundColor: 'hsl(var(--link-primary) / 0.1)', color: 'hsl(var(--link-primary))' }}>
                      {project.category}
                    </span>
                    <span className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>{project.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200" 
                      style={{ color: 'hsl(var(--text-primary))' }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm mb-3" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {project.description}
                  </p>
                  
                  <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>
                    Platform: {project.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-white" style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {translations.tvc.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {translations.tvc.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackingButton 
              href="#contact" 
              className="bg-white hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              style={{ color: 'hsl(var(--link-primary))' }}
              trackingAction="click_cta"
              trackingLabel="Get Started Today"
              conversionType="lead"
              conversionValue={150}
            >
              {translations.tvc.cta.getStarted}
              <Play size={20} className="ml-2" />
            </TrackingButton>
            <TrackingButton 
              href="tel:+842412345678" 
              className="border border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              trackingAction="contact_form"
              trackingLabel="Call Us Now"
              conversionType="contact"
              conversionValue={200}
            >
              {translations.tvc.cta.contactUs}
            </TrackingButton>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  )
} 