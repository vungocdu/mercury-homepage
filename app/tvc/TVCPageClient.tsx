'use client'

import { useState } from 'react'
import { Play, Camera, Edit3, Zap, Clock, Video, Lightbulb, Target, Sparkles, Star, ArrowRight, Factory, Settings, Users2, Film, Globe, Users, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TrackingButton from '../../components/TrackingButton'

import MovingDotsBackground from '../../components/MovingDotsBackground'
import { useLanguage } from '../../contexts/LanguageContext'

// Custom Drone Icon Component
const Drone = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 17a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM9 12a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"/>
    <circle cx="6" cy="12" r="2" fill="currentColor"/>
    <circle cx="18" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="9" r="1" fill="currentColor"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </svg>
)

export default function TVCPageClient() {
  const { translations } = useLanguage()
  // Type assertion to avoid TypeScript errors with translation structure
  const t = translations as any // eslint-disable-line @typescript-eslint/no-explicit-any
  
  // TVC form state
  const [tvcFormData, setTvcFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isTvcSubmitting, setIsTvcSubmitting] = useState(false)
  const [tvcSubmitSuccess, setTvcSubmitSuccess] = useState(false)
  const [tvcSubmitError, setTvcSubmitError] = useState('')

  // TVC form handlers
  const handleTvcChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTvcFormData({
      ...tvcFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleTvcSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsTvcSubmitting(true)
    setTvcSubmitError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...tvcFormData,
          service: 'tvc',
          source: 'tvc_page'
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit TVC consultation request')
      }

      const result = await response.json()
      console.log('TVC form submitted successfully:', result)
      
      setTvcSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setTvcFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        setTvcSubmitSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('TVC form submission error:', error)
      setTvcSubmitError(error instanceof Error ? error.message : 'Failed to submit form')
    } finally {
      setIsTvcSubmitting(false)
    }
  }
  
  const services = [
    {
      icon: Factory,
      title: t.tvc.solution.services.factory.title,
      description: t.tvc.solution.services.factory.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Settings,
      title: t.tvc.solution.services.process.title,
      description: t.tvc.solution.services.process.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    },
    {
      icon: Lightbulb,
      title: t.tvc.solution.services.technology.title,
      description: t.tvc.solution.services.technology.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      icon: Users2,
      title: t.tvc.solution.services.culture.title,
      description: t.tvc.solution.services.culture.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    }
  ]

  const process = [
    {
      step: '01',
      title: t.tvc.process.steps.consultation.title,
      description: t.tvc.process.steps.consultation.description,
      icon: Lightbulb,
      color: 'mercury-blue'
    },
    {
      step: '02',
      title: t.tvc.process.steps.concept.title,
      description: t.tvc.process.steps.concept.description,
      icon: Target,
      color: 'mercury-blue'
    },
    {
      step: '03',
      title: t.tvc.process.steps.production.title,
      description: t.tvc.process.steps.production.description,
      icon: Camera,
      color: 'mercury-blue'
    },
    {
      step: '04',
      title: t.tvc.process.steps.postProduction.title,
      description: t.tvc.process.steps.postProduction.description,
      icon: Edit3,
      color: 'mercury-blue'
    }
  ]

  const portfolio = [
    {
      title: t.tvc.portfolio.projects.corporate.title,
      category: 'TVC',
      description: t.tvc.portfolio.projects.corporate.description,
      duration: '3-5min',
      platform: 'Corporate & Digital',
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      title: t.tvc.portfolio.projects.product.title,
      category: 'Commercial',
      description: t.tvc.portfolio.projects.product.description,
      duration: '30s',
      platform: 'National TV & Social Media',
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    },
    {
      title: t.tvc.portfolio.projects.internal.title,
      category: 'Corporate',
      description: t.tvc.portfolio.projects.internal.description,
      duration: '3-5min',
      platform: 'Internal Platforms',
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      title: t.tvc.portfolio.projects.events.title,
      category: 'Event',
      description: t.tvc.portfolio.projects.events.description,
      duration: '2-3min',
      platform: 'Multi-platform Distribution',
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]

  const whyUsFeatures = [
    {
      icon: Zap,
      title: t.tvc.whyUs.features.speed.title,
      description: t.tvc.whyUs.features.speed.description,
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Film,
      title: t.tvc.whyUs.features.quality.title,
      description: t.tvc.whyUs.features.quality.description,
      gradient: 'from-mercury-gold-500 to-mercury-gold-600'
    },
    {
      icon: Camera,
      title: t.tvc.whyUs.features.technology.title,
      description: t.tvc.whyUs.features.technology.description,
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]



  return (
    <>
      <Header />
      
             {/* Hero Section with Moving Dots Background */}
       <section className="relative pt-16 overflow-hidden min-h-screen">
         {/* Moving Dots Background */}
        <div className="absolute inset-0">
           <MovingDotsBackground />
        </div>
         
         {/* Gradient Overlay for better text readability */}
         <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/30"></div>

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
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-mercury-gold-500" />
                    <span className="text-mercury-blue-600 font-semibold">{t.tvc.hero.badge}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">{t.tvc.hero.badgeSubtitle}</p>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
                  {t.tvc.hero.title}
                </h1>
                <p className="text-xl leading-relaxed text-gray-700">
                  {t.tvc.hero.subtitle}
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
                  {t.tvc.hero.cta}
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
                      <div className="h-3 rounded-full bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section - Enhanced Design */}
      <section className="relative py-24 overflow-hidden">
        {/* Dramatic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-900/10 to-transparent"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Dramatic Header */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Critical Challenges</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
              {t.tvc.painPoints.title}
              </motion.span>
            </h2>
          </motion.div>

          {/* Enhanced Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {t.tvc.painPoints.points.map((point: any, index: number) => (
                <motion.div 
                  key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 group-hover:border-red-500/30">
                  {/* Animated Warning Icon */}
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <motion.div
                        className="absolute w-1 h-4 bg-white rounded-full mt-1"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                  </div>
                    <div className="ml-4 w-8 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
                  </motion.div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                </motion.div>
              ))}
            </div>

          {/* Dramatic Conclusion */}
            <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 lg:p-12 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-3xl shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </motion.div>
                
                <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
                  {t.tvc.painPoints.conclusion}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - Enhanced Design */}
      <section className="relative py-24 overflow-hidden">
        {/* Bright, Optimistic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-mercury-blue-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mercury-blue-100/30 via-transparent to-mercury-gold-100/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-mercury-blue-200/30 rounded-full blur-2xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-20 w-48 h-48 bg-mercury-gold-200/20 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Success Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-mercury-gold-100/80 backdrop-blur-sm border border-mercury-gold-300/50 rounded-full mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-3 h-3 bg-mercury-gold-500 rounded-full mr-3"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-mercury-blue-700 font-semibold text-sm uppercase tracking-wider">Our Solution</span>
            </motion.div>

            {/* Elegant Header */}
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                dangerouslySetInnerHTML={{
                  __html: t.tvc.solution.title
                    .replace(/Quy Trình|Processes|プロセス|공정/g, '<span class="bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-500 bg-clip-text text-transparent font-bold">$&</span>')
                    .replace(/Tác Phẩm Nghệ Thuật|Artistic Masterpieces|芸術作品|예술 작품/g, '<span class="bg-gradient-to-r from-mercury-gold-600 to-mercury-gold-500 bg-clip-text text-transparent font-bold">$&</span>')
                }}
              />
            </h2>

                                          <motion.p 
                  className="text-xl lg:text-2xl max-w-5xl mx-auto text-gray-700 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
                  dangerouslySetInnerHTML={{
                    __html: t.tvc.solution.description
                      .replace(/Mercury Solutions/g, '<span class="font-bold text-mercury-blue-600">$&</span>')
                      .replace(/cỗ máy|quy trình|machines|process|機械|プロセス|기계|공정/g, '<span class="font-bold text-mercury-blue-600">$&</span>')
                      .replace(/câu chuyện hình ảnh|visual stories|ビジュアルストーリー|시각적 스토리/g, '<span class="font-bold text-mercury-gold-600">$&</span>')
                      .replace(/cảm hứng|inspiring|インスピレーション|영감/g, '<span class="font-bold text-mercury-gold-600">$&</span>')
                      .replace(/giá trị thương hiệu|brand value|ブランド価値|브랜드 가치/g, '<span class="font-bold text-mercury-blue-600">$&</span>')
                  }}
                />
          </motion.div>

          {/* Enhanced Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card Background with Sophisticated Effects */}
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-200/20 to-mercury-gold-200/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-mercury-blue-300/50 h-full flex flex-col">
                    {/* Floating Icon */}
                    <motion.div 
                      className="relative mb-8"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <service.icon className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Floating Particles */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-mercury-gold-400 rounded-full opacity-60"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      ></motion.div>
            </motion.div>
                    
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-mercury-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="leading-relaxed text-gray-600 flex-grow text-base group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Subtle Progress Bar */}
                    <motion.div 
                      className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`}
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1.5, delay: index * 0.2 + 0.8 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-mercury-blue-700 to-mercury-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-mercury-blue-600 hover:to-mercury-blue-400 transition-all duration-300 cursor-pointer group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t.tvc.solution.exploreSolution}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-20 bg-gradient-to-br from-mercury-blue-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-mercury-blue-600" />
              <span className="text-mercury-blue-600 font-semibold">Global Network</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {t.tvc.hero.partnershipsDetails.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {t.tvc.hero.partnershipsDetails.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.tvc.hero.partnershipsDetails.companies).map(([key, company], index) => (
              <motion.div 
                key={key}
                className="bg-white/90 backdrop-blur-sm border-2 border-mercury-blue-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:border-mercury-blue-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-mercury-blue-600 mr-3" />
                    <span className="text-sm text-mercury-blue-600 font-bold bg-mercury-blue-100 px-3 py-1 rounded-full">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(company as any).country}
                    </span>
                    </div>
                  </div>
                  
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mercury-blue-600 transition-colors">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(company as any).name}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block text-sm text-mercury-blue-700 bg-mercury-blue-50 px-3 py-1 rounded-lg font-medium">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {(company as any).field}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(company as any).description}
                </p>
                
                {/* Partnership indicator */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-mercury-blue-600">
                    <div className="w-2 h-2 bg-mercury-blue-600 rounded-full mr-2"></div>
                    <span className="text-xs font-medium">Strategic Partner</span>
                  </div>
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
              <span className="text-mercury-blue-600 font-semibold">{t.tvc.portfolio.subtitle}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {t.tvc.portfolio.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {t.tvc.portfolio.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
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
                  <div className={`h-40 lg:h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-center relative z-10">
                      <Play className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-2 text-white" />
                      <p className="text-xs lg:text-sm text-white font-medium">{t.tvc.portfolio.projects.videoPreview}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 lg:p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 lg:px-3 py-1 text-xs rounded-full bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 text-white font-medium flex-shrink-0">
                        {project.category}
                      </span>
                      <span className="text-xs lg:text-sm text-gray-600 font-medium flex-shrink-0">{project.duration}</span>
                    </div>
                    
                    <h3 className="text-base lg:text-lg font-bold mb-3 text-gray-800 group-hover:text-mercury-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs lg:text-sm mb-4 text-gray-600 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="text-xs text-gray-500 font-medium mt-auto">
                      {t.tvc.portfolio.projects.platform}: {project.platform}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Enhanced with Visual Process Cards */}
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
              <span className="text-mercury-blue-600 font-semibold">{t.tvc.process.subtitle}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {t.tvc.process.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
              {t.tvc.process.description}
            </p>
          </motion.div>

          {/* Enhanced Process Cards with Visual Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-[calc(100%-2rem)] h-1 z-0 bg-gradient-to-r from-mercury-blue-200 to-mercury-blue-300"></div>
                )}
                
                <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-mercury-gold-500 to-mercury-gold-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="ml-4 text-base lg:text-lg font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="leading-relaxed text-gray-600 flex-grow text-sm lg:text-base">
                    {step.description}
                  </p>
                  
                  {/* Visual Timeline Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{t.tvc.process.steps.timeline}</span>
                      <span className="font-semibold text-mercury-blue-600">
                        {index === 0 && '1-2 days'}
                        {index === 1 && '2-3 days'}
                        {index === 2 && '3-5 days'}
                        {index === 3 && '2-3 days'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className={`h-2 rounded-full bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 transition-all duration-500 ${
                        index === 0 ? 'w-1/4' :
                        index === 1 ? 'w-2/4' :
                        index === 2 ? 'w-3/4' : 'w-full'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mercury-gold-500 to-mercury-gold-600 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{t.tvc.process.summary.title}</h3>
                  <p className="text-gray-600">{t.tvc.process.summary.subtitle}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mercury-blue-600 mb-2">1-2</div>
                  <div className="text-sm text-gray-600">{t.tvc.process.summary.weeks}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mercury-gold-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">{t.tvc.process.summary.satisfaction}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mercury-blue-600 mb-2">4K</div>
                  <div className="text-sm text-gray-600">{t.tvc.process.summary.quality}</div>
                </div>
              </div>
            </div>
          </motion.div>
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
              {t.tvc.whyUs.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-mercury-blue-200 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="ml-4 text-lg lg:text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  
                  <p className="leading-relaxed text-gray-600 flex-grow text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Production Ecosystem Section */}
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
              {t.tvc.ecosystem.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-700">
              {t.tvc.ecosystem.description}
            </p>
          </motion.div>

          {/* Core Team Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
              {t.tvc.ecosystem.coreTeam.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {t.tvc.ecosystem.coreTeam.roles.map((role: any, index: number) => (
                <motion.div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="ml-3 text-lg font-bold text-gray-800 group-hover:text-mercury-blue-600 transition-colors">
                      {role.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {role.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Equipment Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
              {t.tvc.ecosystem.equipment.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {t.tvc.ecosystem.equipment.categories.map((category: any, index: number) => (
                <motion.div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mercury-gold-500 to-mercury-gold-600 rounded-xl flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="ml-3 text-lg font-bold text-gray-800 group-hover:text-mercury-blue-600 transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Drone Equipment Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
              {t.tvc.ecosystem.droneEquipment.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {t.tvc.ecosystem.droneEquipment.items.map((item: any, index: number) => (
                <motion.div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Drone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="ml-4 text-xl font-bold text-gray-800 group-hover:text-mercury-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Auxiliary Equipment Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
              {t.tvc.ecosystem.auxiliaryEquipment.title}
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {t.tvc.ecosystem.auxiliaryEquipment.items.map((item: any, index: number) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-mercury-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700 rounded-3xl p-8 lg:p-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {t.tvc.ecosystem.callToAction.title}
            </h3>
            <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto text-mercury-blue-100">
              {t.tvc.ecosystem.callToAction.description}
            </p>
            <motion.button 
              className="bg-white text-mercury-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-mercury-gold-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.tvc.ecosystem.callToAction.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>



      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mercury-blue-600 via-mercury-blue-700 to-mercury-blue-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-mercury-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-mercury-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse [animation-delay:2s]"></div>
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
              {t.tvc.cta.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-mercury-blue-100">
              {t.tvc.cta.subtitle}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-mercury-blue-100">
              {t.tvc.cta.description}
            </p>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              <form onSubmit={handleTvcSubmit} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <input 
                  type="text" 
                  name="firstName"
                  value={tvcFormData.firstName}
                  onChange={handleTvcChange}
                  placeholder="Tên *"
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input 
                  type="text" 
                  name="lastName"
                  value={tvcFormData.lastName}
                  onChange={handleTvcChange}
                  placeholder="Họ *"
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input 
                  type="email" 
                  name="email"
                  value={tvcFormData.email}
                  onChange={handleTvcChange}
                  placeholder={t.tvc.cta.form.email}
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={tvcFormData.phone}
                  onChange={handleTvcChange}
                  placeholder={t.tvc.cta.form.phone}
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input 
                  type="text" 
                  name="company"
                  value={tvcFormData.company}
                  onChange={handleTvcChange}
                  placeholder={t.tvc.cta.form.company}
                  className="sm:col-span-2 p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <div className="sm:col-span-2">
                  <textarea 
                    name="message"
                    value={tvcFormData.message}
                    onChange={handleTvcChange}
                    placeholder="Mô tả yêu cầu TVC của bạn..."
                    rows={4}
                    className="w-full p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                  ></textarea>
                </div>
                
                {/* Error Message */}
                {tvcSubmitError && (
                  <div className="sm:col-span-2 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-100 text-sm font-medium">{tvcSubmitError}</p>
                  </div>
                )}
                
                {/* Success Message */}
                {tvcSubmitSuccess && (
                  <div className="sm:col-span-2 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-100 text-sm font-medium">
                      🎉 Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 8 giờ làm việc.
                    </p>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit" 
                    disabled={isTvcSubmitting}
                    className={`w-full font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group text-sm lg:text-base ${
                      isTvcSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 hover:from-mercury-gold-600 hover:to-mercury-gold-700 text-white'
                    }`}
                  >
                    {isTvcSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Đang gửi...</span>
                      </>
                    ) : tvcSubmitSuccess ? (
                      <>
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span>Đã gửi!</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        <span>{t.tvc.cta.form.submit}</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
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
              {t.tvc.faq.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {Object.entries(t.tvc.faq.questions).map(([key, faq]: [string, any], index: number) => (
              <motion.div 
                key={key}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <div className="w-6 h-6 bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-200">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </summary>
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{faq.answer}</p>
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