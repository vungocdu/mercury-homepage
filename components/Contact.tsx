'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getFirestoreDb } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Contact() {
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields')
      }

      // Write directly to Firestore — Cloud Function handles email sending
      const db = getFirestoreDb()
      await addDoc(collection(db, 'contact_submissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message,
        service: formData.service || null,
        status: 'new',
        createdAt: serverTimestamp(),
      })

      setSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          service: ''
        })
        setSubmitSuccess(false)
      }, 3000)
      
    } catch (error) {
      let errorMessage = 'An error occurred while submitting the form. Please try again.'

      if (error instanceof Error) {
        if (error.message.includes('required fields')) {
          errorMessage = error.message
        } else if (error.message.includes('permission') || error.message.includes('PERMISSION_DENIED')) {
          errorMessage = 'Service temporarily unavailable. Please try again later.'
        }
      }
      
      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Clock,
      title: t('contact.info.businessHours'),
      details: [
        t('contact.info.weekdays'),
        t('contact.info.weekend')
      ],
      color: 'from-mercury-blue-500 to-mercury-blue-600'
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: [
        '5F, 33/41 Thai Ha Street,',
        'Dong Da, Hanoi, Vietnam'
      ],
      color: 'from-mercury-gold-500 to-mercury-gold-600'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: [
        '024 6663 6480',
        'info@mercurysolutions.vn'
      ],
      color: 'from-mercury-blue-600 to-mercury-blue-700'
    }
  ]

  const socialProfiles = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('contact.form.title')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.form.subtitle')}
                </p>
              </div>
            </div>
            
            <form 
              onSubmit={handleSubmit}
              method="POST"
              action=""
              className="space-y-6"
            >
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                    {t('contact.form.firstName')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white"
                      placeholder={t('contact.form.firstNamePlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                    {t('contact.form.lastName')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white"
                      placeholder={t('contact.form.lastNamePlaceholder')}
                    />
                  </div>
                </div>
              </div>
              
              {/* Service Selection */}
              <div className="group">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                  Dịch vụ quan tâm *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white appearance-none"
                  >
                    <option value="">-- Chọn dịch vụ --</option>
                    <option value="software">💻 Phát triển phần mềm (Web/Mobile App, AI)</option>
                    <option value="tvc">🎬 Sản xuất TVC (Video quảng cáo, giới thiệu)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Company Field */}
              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                  {t('contact.form.company')}
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                  {t('contact.form.email')} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>
              
              {/* Phone Field */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                  {t('contact.form.phone')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-mercury-blue-600 transition-colors duration-200">
                  {t('contact.form.message')} *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mercury-blue-500 focus:ring-4 focus:ring-mercury-blue-100 transition-all duration-200 bg-white resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
              </div>
              
              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm font-medium">{submitError}</p>
                </div>
              )}
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-600 text-sm font-medium">
                    Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  // Let form handle submit
                }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700 hover:from-mercury-blue-700 hover:to-mercury-blue-800 hover:scale-105 hover:shadow-lg'
                } flex items-center justify-center space-x-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>{t('contact.form.sent')}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('contact.info.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.info.subtitle')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group p-4 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-mercury-blue-600 transition-colors duration-200">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Profiles */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('contact.social.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.social.subtitle')}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {socialProfiles.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} ${social.hoverColor} flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-mercury-blue-50 to-mercury-gold-50 rounded-2xl border border-mercury-blue-100">
                <p className="text-sm text-gray-600 text-center">
                  {t('contact.social.followUs')}
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                {t('contact.quick.title')}
              </h3>
              <p className="text-mercury-blue-100 mb-6">
                {t('contact.quick.subtitle')}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+84 24 1234 5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 