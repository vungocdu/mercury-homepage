'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, UserCheck, FileText, Settings, Mail, Phone } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLanguage } from '../../contexts/LanguageContext'

export default function PrivacyPageClient() {
  const { translations } = useLanguage()

  const sections = [
    {
      icon: Shield,
      title: translations.privacy.generalPrinciples.title,
      content: translations.privacy.generalPrinciples.content,
      gradient: "from-mercury-blue-500 to-mercury-blue-600"
    },
    {
      icon: FileText,
      title: translations.privacy.dataCollection.title,
      content: translations.privacy.dataCollection.content,
      items: translations.privacy.dataCollection.items,
      gradient: "from-mercury-gold-500 to-mercury-gold-600"
    },
    {
      icon: Eye,
      title: translations.privacy.dataUsage.title,
      content: translations.privacy.dataUsage.content,
      items: translations.privacy.dataUsage.items,
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Lock,
      title: translations.privacy.dataSecurity.title,
      content: translations.privacy.dataSecurity.content,
      items: translations.privacy.dataSecurity.items,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: translations.privacy.dataSharing.title,
      content: translations.privacy.dataSharing.content,
      items: translations.privacy.dataSharing.items,
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: UserCheck,
      title: translations.privacy.userRights.title,
      content: translations.privacy.userRights.content,
      items: translations.privacy.userRights.items,
      gradient: "from-blue-500 to-cyan-600"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-mercury-blue-50 via-white to-mercury-gold-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-mercury-blue-600" />
              <span className="text-mercury-blue-600 font-semibold text-lg">{translations.privacy.badge}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.privacy.hero.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              {translations.privacy.hero.subtitle}
            </p>

            <div className="mt-8 text-sm text-gray-600">
              <p>{translations.privacy.lastUpdated}: <span className="font-semibold">19/12/2024</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center mr-6`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {index + 1}. {section.title}
                  </h2>
                </div>
                
                <div className="text-gray-700 leading-relaxed">
                  <p className="text-lg mb-6">{section.content}</p>
                  
                  {section.items && (
                    <div className="space-y-4">
                      {section.items.map((item: { title: string; description: string }, itemIndex: number) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-mercury-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {translations.privacy.contact.title}
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              {translations.privacy.contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a 
                href="mailto:privacy@mercurysolutions.vn"
                className="flex items-center justify-center space-x-3 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                whileHover={{ y: -2 }}
              >
                <Mail className="w-6 h-6 text-mercury-blue-600" />
                <span className="text-gray-800 font-semibold">privacy@mercurysolutions.vn</span>
              </motion.a>

              <motion.a 
                href="tel:+84283xxxxxx"
                className="flex items-center justify-center space-x-3 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                whileHover={{ y: -2 }}
              >
                <Phone className="w-6 h-6 text-mercury-blue-600" />
                <span className="text-gray-800 font-semibold">+84 (0)28 3xxx xxxx</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}