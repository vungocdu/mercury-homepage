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

  // Get TVC section with fallback
  const tvcSection = t?.tvc || {}

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
      // Validate required fields
      if (!tvcFormData.firstName || !tvcFormData.lastName || !tvcFormData.email || !tvcFormData.message) {
        throw new Error('Please fill in all required fields')
      }

      // Check if we're in browser environment
      if (typeof window === 'undefined') {
        throw new Error('This form can only be submitted from the browser')
      }

      console.log('Submitting TVC form via API route...')

      // Call API route for server-side processing
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: tvcFormData.firstName,
          lastName: tvcFormData.lastName,
          email: tvcFormData.email,
          phone: tvcFormData.phone || undefined,
          company: tvcFormData.company || undefined,
          message: tvcFormData.message,
          service: 'TVC Production' // Specify TVC service
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      console.log('✅ TVC form submitted successfully:', result)

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
      console.error('❌ TVC form submission error:', error)

      // More user-friendly error messages
      let errorMessage = 'An error occurred while submitting the form. Please try again.'

      if (error instanceof Error) {
        if (error.message.includes('RESEND_API_KEY')) {
          errorMessage = 'Email service is not configured. Please contact support.'
        } else if (error.message.includes('Database error')) {
          errorMessage = 'Failed to save your message. Please try again or contact us directly.'
        } else if (error.message.includes('required fields')) {
          errorMessage = error.message
        } else {
          errorMessage = error.message
        }
      }

      setTvcSubmitError(errorMessage)
    } finally {
      setIsTvcSubmitting(false)
    }
  }

  const services = [
    {
      icon: Factory,
      title: tvcSection.solution?.services?.factory?.title || 'Factory Video Production',
      description: tvcSection.solution?.services?.factory?.description || 'Professional factory and production facility video production',
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Settings,
      title: tvcSection.solution?.services?.process?.title || 'Process Documentation',
      description: tvcSection.solution?.services?.process?.description || 'Document manufacturing processes and workflows',
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    },
    {
      icon: Lightbulb,
      title: tvcSection.solution?.services?.technology?.title || 'Technology Integration',
      description: tvcSection.solution?.services?.technology?.description || 'Showcase advanced technology and automation',
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      icon: Users2,
      title: tvcSection.solution?.services?.culture?.title || 'Company Culture',
      description: tvcSection.solution?.services?.culture?.description || 'Capture company culture and employee stories',
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    }
  ]

  const process = [
    {
      step: '01',
      title: tvcSection.process?.steps?.consultation?.title || 'Consultation',
      description: tvcSection.process?.steps?.consultation?.description || 'Initial consultation and project planning',
      icon: Lightbulb,
      color: 'mercury-blue'
    },
    {
      step: '02',
      title: tvcSection.process?.steps?.concept?.title || 'Concept Development',
      description: tvcSection.process?.steps?.concept?.description || 'Develop video concept and storyboard',
      icon: Target,
      color: 'mercury-blue'
    },
    {
      step: '03',
      title: tvcSection.process?.steps?.production?.title || 'Production',
      description: tvcSection.process?.steps?.production?.description || 'Professional video production and filming',
      icon: Camera,
      color: 'mercury-blue'
    },
    {
      step: '04',
      title: tvcSection.process?.steps?.postProduction?.title || 'Post Production',
      description: tvcSection.process?.steps?.postProduction?.description || 'Editing, color grading, and final delivery',
      icon: Edit3,
      color: 'mercury-blue'
    }
  ]

  const portfolio = [
    {
      title: tvcSection.portfolio?.projects?.corporate?.title || 'Corporate Video',
      category: 'TVC',
      description: tvcSection.portfolio?.projects?.corporate?.description || 'Professional corporate video production',
      duration: '3-5min',
      platform: 'Corporate & Digital',
      gradient: 'from-mercury-blue-500 to-mercury-blue-700'
    },
    {
      title: tvcSection.portfolio?.projects?.product?.title || 'Product Showcase',
      category: 'Commercial',
      description: tvcSection.portfolio?.projects?.product?.description || 'Product demonstration and showcase videos',
      duration: '30s',
      platform: 'National TV & Social Media',
      gradient: 'from-mercury-blue-600 to-mercury-blue-800'
    },
    {
      title: tvcSection.portfolio?.projects?.internal?.title || 'Internal Communications',
      category: 'Corporate',
      description: tvcSection.portfolio?.projects?.internal?.description || 'Internal company communications and training videos',
      duration: '3-5min',
      platform: 'Internal Platforms',
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      title: tvcSection.portfolio?.projects?.events?.title || 'Event Coverage',
      category: 'Event',
      description: tvcSection.portfolio?.projects?.events?.description || 'Live event coverage and post-event videos',
      duration: '2-3min',
      platform: 'Multi-platform Distribution',
      gradient: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]

  const whyUsFeatures = [
    {
      icon: Zap,
      title: tvcSection.whyUs?.features?.speed?.title || 'Fast Turnaround',
      description: tvcSection.whyUs?.features?.speed?.description || 'Quick production and delivery timelines',
      gradient: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: Film,
      title: tvcSection.whyUs?.features?.quality?.title || 'Professional Quality',
      description: tvcSection.whyUs?.features?.quality?.description || '4K production with professional equipment',
      gradient: 'from-mercury-gold-500 to-mercury-gold-600'
    },
    {
      icon: Camera,
      title: tvcSection.whyUs?.features?.technology?.title || 'Advanced Technology',
      description: tvcSection.whyUs?.features?.technology?.description || 'Drone footage, FPV, and advanced cinematography',
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
                    <span className="text-mercury-blue-600 font-semibold">{tvcSection.hero?.badge || 'TVC Production'}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">{tvcSection.hero?.badgeSubtitle || 'Professional Video Production Services'}</p>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
                  {tvcSection.hero?.title || 'Professional TVC Video Production'}
                </h1>
                <p className="text-xl leading-relaxed text-gray-700">
                  {tvcSection.hero?.subtitle || 'High-quality video production services for businesses'}
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
                  {tvcSection.hero?.cta || 'Get Consultation'}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </TrackingButton>
                <TrackingButton
                  href="#portfolio"
                  className="border-2 border-mercury-gold-500 text-mercury-gold-600 hover:bg-mercury-gold-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center group"
                  trackingAction="view_portfolio"
                  trackingLabel="View Portfolio"
                >
                  {translations.nav?.portfolio || 'Portfolio'}
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
                  __html: tvcSection.solution?.title || 'Professional TVC Production Services'
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
                __html: tvcSection.solution?.description || 'High-quality video production for your business needs'
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
              <span>{tvcSection.solution?.exploreSolution || 'Explore Our Solutions'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
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
              <span className="text-mercury-blue-600 font-semibold">{tvcSection.portfolio?.subtitle || 'Our Work'}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {tvcSection.portfolio?.title || 'Portfolio'}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {tvcSection.portfolio?.description || 'Showcase of our recent video production projects'}
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
                      <p className="text-xs lg:text-sm text-white font-medium">{tvcSection.portfolio?.projects?.videoPreview || 'Watch Video'}</p>
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
                      {tvcSection.portfolio?.projects?.platform || 'Platform'}: {project.platform}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <span className="text-mercury-gold-300 font-semibold">{tvcSection.cta?.readyToStart || 'Ready to Start?'}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {tvcSection.cta?.title || 'Start Your Video Production Project'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-mercury-blue-100">
              {tvcSection.cta?.subtitle || 'Get professional video production services'}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-mercury-blue-100">
              {tvcSection.cta?.description || 'Contact us today to discuss your video production needs'}
            </p>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              <form onSubmit={handleTvcSubmit} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={tvcFormData.firstName}
                  onChange={handleTvcChange}
                  placeholder="First Name *"
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input
                  type="text"
                  name="lastName"
                  value={tvcFormData.lastName}
                  onChange={handleTvcChange}
                  placeholder="Last Name *"
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={tvcFormData.email}
                  onChange={handleTvcChange}
                  placeholder={tvcSection.cta?.form?.email || "Email *"}
                  required
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  value={tvcFormData.phone}
                  onChange={handleTvcChange}
                  placeholder={tvcSection.cta?.form?.phone || "Phone"}
                  className="p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <input
                  type="text"
                  name="company"
                  value={tvcFormData.company}
                  onChange={handleTvcChange}
                  placeholder={tvcSection.cta?.form?.company || "Company"}
                  className="sm:col-span-2 p-3 lg:p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-mercury-gold-500 text-sm lg:text-base"
                />
                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    value={tvcFormData.message}
                    onChange={handleTvcChange}
                    placeholder="Describe your TVC production needs..."
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
                      🎉 Thank you! We will contact you within 8 working hours.
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
                        <span>Sending...</span>
                      </>
                    ) : tvcSubmitSuccess ? (
                      <>
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        <span>{tvcSection.cta?.form?.submit || 'Send Message'}</span>
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

      <Footer />
    </>
  )
}

