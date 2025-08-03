'use client'

import { Play, Camera, Edit3, Zap, Users, Award, Clock, Video, Lightbulb, Target, Sparkles, Star, ArrowRight, Factory, Settings, Users2, Film } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TrackingButton from '../../components/TrackingButton'
import TickerScroll from '../../components/TickerScroll'
import { useLanguage } from '../../contexts/LanguageContext'

export default function TVCPageClient() {
  const { translations } = useLanguage()
  
  const services = [
    {
      icon: Factory,
      title: translations.tvc.solution.services.factory.title,
      description: translations.tvc.solution.services.factory.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Settings,
      title: translations.tvc.solution.services.process.title,
      description: translations.tvc.solution.services.process.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    },
    {
      icon: Lightbulb,
      title: translations.tvc.solution.services.technology.title,
      description: translations.tvc.solution.services.technology.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      icon: Users2,
      title: translations.tvc.solution.services.culture.title,
      description: translations.tvc.solution.services.culture.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    }
  ]

  const process = [
    {
      step: '01',
      title: translations.tvc.process.steps.consultation,
      description: translations.tvc.descriptions.consultation,
      icon: Lightbulb,
      color: 'mercury-blue'
    },
    {
      step: '02',
      title: translations.tvc.process.steps.concept,
      description: translations.tvc.descriptions.concept,
      icon: Target,
      color: 'mercury-blue'
    },
    {
      step: '03',
      title: translations.tvc.process.steps.production,
      description: translations.tvc.descriptions.production,
      icon: Camera,
      color: 'mercury-blue'
    },
    {
      step: '04',
      title: translations.tvc.process.steps.postProduction,
      description: translations.tvc.descriptions.postProduction,
      icon: Edit3,
      color: 'mercury-blue'
    }
  ]

  const portfolio = [
    {
      title: translations.tvc.portfolio.projects.corporate.title,
      category: 'TVC',
      description: translations.tvc.portfolio.projects.corporate.description,
      duration: '3-5min',
      platform: 'Corporate & Digital',
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      title: translations.tvc.portfolio.projects.product.title,
      category: 'Commercial',
      description: translations.tvc.portfolio.projects.product.description,
      duration: '30s',
      platform: 'National TV & Social Media',
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    },
    {
      title: translations.tvc.portfolio.projects.internal.title,
      category: 'Corporate',
      description: translations.tvc.portfolio.projects.internal.description,
      duration: '3-5min',
      platform: 'Internal Platforms',
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      title: translations.tvc.portfolio.projects.events.title,
      category: 'Event',
      description: translations.tvc.portfolio.projects.events.description,
      duration: '2-3min',
      platform: 'Multi-platform Distribution',
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]

  const whyUsFeatures = [
    {
      icon: Zap,
      title: translations.tvc.whyUs.features.speed.title,
      description: translations.tvc.whyUs.features.speed.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Film,
      title: translations.tvc.whyUs.features.quality.title,
      description: translations.tvc.whyUs.features.quality.description,
      gradient: 'from-mercury-gold-500 to-mercury-gold-600'
    },
    {
      icon: Camera,
      title: translations.tvc.whyUs.features.technology.title,
      description: translations.tvc.whyUs.features.technology.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]

  const stats = [
    { icon: Award, number: '50+', label: translations.tvc.hero.stats.projects, color: 'mercury-blue' },
    { icon: Users, number: '25+', label: translations.tvc.hero.stats.clients, color: 'mercury-blue' },
    { icon: Clock, number: '24/7', label: translations.tvc.hero.stats.support, color: 'mercury-blue' },
    { icon: Zap, number: '100%', label: 'Quality Guarantee', color: 'mercury-blue' }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative pt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-50 via-white to-mercury-blue-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mercury-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-mercury-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-mercury-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container-custom py-20 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-mercury-gold-500" />
                  <span className="text-mercury-blue-600 font-semibold">Professional TVC Services</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
                  {translations.tvc.hero.title}
                </h1>
                <p className="text-xl leading-relaxed text-gray-700">
                  {translations.tvc.hero.subtitle}
                </p>
                <p className="text-lg text-gray-600">
                  {translations.tvc.hero.description}
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TrackingButton 
                  href="#contact" 
                  className="bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700 hover:from-mercury-blue-700 hover:to-mercury-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group"
                  trackingAction="click_cta"
                  trackingLabel="Get Consultation"
                  conversionType="lead"
                  conversionValue={100}
                >
                  {translations.tvc.hero.cta}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </TrackingButton>
                <TrackingButton 
                  href="#portfolio" 
                  className="border-2 border-mercury-gold-500 text-mercury-gold-600 hover:bg-mercury-gold-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center group"
                  trackingAction="view_portfolio"
                  trackingLabel="View Portfolio"
                >
                  {translations.nav.portfolio}
                  <Star size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
                </TrackingButton>
              </motion.div>

              {/* Partners */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-sm text-gray-600 mb-4">{translations.tvc.hero.partners}</p>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Fujikin</div>
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Jworld Vina</div>
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">+ More</div>
                </div>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-2xl mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Video Production Studio</h3>
                      <p className="text-sm text-gray-600">Professional equipment & crew</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-mercury-blue-50 to-mercury-blue-100 p-4 rounded-xl text-center border border-mercury-blue-200">
                      <div className="text-2xl font-bold text-mercury-blue-600">4K</div>
                      <div className="text-xs text-gray-600">Quality</div>
                    </div>
                    <div className="bg-gradient-to-br from-mercury-gold-50 to-mercury-gold-100 p-4 rounded-xl text-center border border-mercury-gold-200">
                      <div className="text-2xl font-bold text-mercury-gold-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div className="bg-gradient-to-br from-mercury-blue-50 to-mercury-blue-100 p-4 rounded-xl text-center border border-mercury-blue-200">
                      <div className="text-2xl font-bold text-mercury-blue-600">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Project Completion</span>
                      <span className="text-sm font-semibold text-green-600">On Time</span>
                    </div>
                    <div className="w-full rounded-full h-3 bg-gray-200">
                      <div className="h-3 rounded-full bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20 bg-gradient-to-br from-mercury-blue-400 to-mercury-blue-600 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full opacity-20 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-700 animate-pulse" style={{animationDelay: '2s'}}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.painPoints.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {translations.tvc.painPoints.points.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-12 p-6 bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 rounded-2xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold">{translations.tvc.painPoints.conclusion}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-mercury-blue-50 to-mercury-blue-100">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.solution.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
              {translations.tvc.solution.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-mercury-blue-200 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  <p className="leading-relaxed text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Video className="w-6 h-6 text-mercury-gold-500" />
              <span className="text-mercury-blue-600 font-semibold">Our Portfolio</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.portfolio.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {translations.tvc.portfolio.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div 
                key={index} 
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-mercury-blue-200 h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-center relative z-10">
                      <Play className="w-12 h-12 mx-auto mb-2 text-white" />
                      <p className="text-sm text-white font-medium">Project Video</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 text-white font-medium flex-shrink-0">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-600 font-medium flex-shrink-0">{project.duration}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-mercury-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm mb-4 text-gray-600 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="text-xs text-gray-500 font-medium mt-auto">
                      Platform: {project.platform}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-mercury-blue-50 to-mercury-blue-100">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-mercury-blue-500" />
              <span className="text-mercury-blue-600 font-semibold">Our Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.process.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {translations.tvc.process.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 z-0 bg-gradient-to-r from-mercury-blue-200 to-mercury-blue-300" 
                       style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
                
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 bg-clip-text text-transparent flex-shrink-0">{step.step}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  
                  <p className="leading-relaxed text-gray-600 flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.whyUs.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-mercury-blue-200 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  
                  <p className="leading-relaxed text-gray-600 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Scroll Portfolio Section */}
      <TickerScroll />

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mercury-blue-600 via-mercury-blue-700 to-mercury-blue-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-mercury-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-mercury-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-mercury-gold-300" />
              <span className="text-mercury-gold-300 font-semibold">Ready to Start?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {translations.tvc.cta.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-mercury-blue-100">
              {translations.tvc.cta.subtitle}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-mercury-blue-100">
              {translations.tvc.cta.description}
            </p>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder={translations.tvc.cta.form.name}
                  className="p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500"
                />
                <input 
                  type="email" 
                  placeholder={translations.tvc.cta.form.email}
                  className="p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500"
                />
                <input 
                  type="tel" 
                  placeholder={translations.tvc.cta.form.phone}
                  className="p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500"
                />
                <input 
                  type="text" 
                  placeholder={translations.tvc.cta.form.company}
                  className="p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500"
                />
                <div className="md:col-span-2">
                  <textarea 
                    placeholder={translations.tvc.cta.form.requirements}
                    rows={4}
                    className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                                     <TrackingButton 
                     href="#" 
                     className="w-full bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 hover:from-mercury-gold-600 hover:to-mercury-gold-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
                     trackingAction="contact_form"
                     trackingLabel="TVC Consultation Form"
                     conversionType="lead"
                     conversionValue={200}
                   >
                    {translations.tvc.cta.form.submit}
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </TrackingButton>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.tvc.faq.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {Object.entries(translations.tvc.faq.questions).map(([key, faq], index) => (
              <motion.div 
                key={key}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <div className="w-6 h-6 bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-200">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 