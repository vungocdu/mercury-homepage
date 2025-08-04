'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, FileText, Target, Eye, Users, Calendar, Building2 } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLanguage } from '../../contexts/LanguageContext'

export default function AboutPageClient() {
  const { translations } = useLanguage()
  
  // Type assertion to avoid TypeScript errors with safe fallback
  const t = translations as any // eslint-disable-line @typescript-eslint/no-explicit-any

  // Early return if translations are not ready
  if (!t || !t.about || !t.about.company) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mercury-blue-50 via-white to-mercury-gold-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-mercury-blue-600"></div>
            <p className="mt-4 text-lg text-gray-600">Loading...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const companyInfo = [
    {
      icon: Building2,
      label: t.about.company.name || "Company Name",
      value: "Mercury Solutions",
      gradient: "from-mercury-blue-500 to-mercury-blue-600"
    },
    {
      icon: MapPin,
      label: t.about.company.address || "Address",
      value: "123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh, Việt Nam",
      gradient: "from-mercury-gold-500 to-mercury-gold-600"
    },
    {
      icon: FileText,
      label: t.about.company.taxCode || "Tax Code",
      value: "0123456789",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      label: t.about.company.phone || "Phone",
      value: "+84 (0)28 3xxx xxxx",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Mail,
      label: t.about.company.email || "Email",
      value: "info@mercurysolutions.vn",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Calendar,
      label: t.about.company.founded || "Founded Year",
      value: "2020",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  const values = [
    {
      icon: Target,
      title: t.about?.mission?.title || "Mission",
      description: t.about?.mission?.description || "Our mission description",
      gradient: "from-mercury-blue-500 to-mercury-blue-600"
    },
    {
      icon: Eye,
      title: t.about?.vision?.title || "Vision", 
      description: t.about?.vision?.description || "Our vision description",
      gradient: "from-mercury-gold-500 to-mercury-gold-600"
    },
    {
      icon: Users,
      title: t.about?.values?.title || "Values",
      description: t.about?.values?.description || "Our values description",
      gradient: "from-purple-500 to-indigo-600"
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
              <Building2 className="w-8 h-8 text-mercury-blue-600" />
              <span className="text-mercury-blue-600 font-semibold text-lg">{t.about?.badge || "About Mercury Solutions"}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {t.about?.hero?.title || "About Us"}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              {t.about?.hero?.subtitle || "Learn more about our company"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              {t.about?.company?.title || "Company Information"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about?.company?.description || "Learn more about our company"}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.label}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
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
              {t.about?.values?.sectionTitle || "Vision, Mission & Values"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about?.values?.sectionDescription || "Our guiding principles"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-mercury-blue-600 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t.about?.cta?.title || "Ready to partner with Mercury Solutions?"}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-mercury-blue-100">
              {t.about?.cta?.description || "Let us help you achieve your goals"}
            </p>
            <motion.a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-white text-mercury-blue-600 hover:bg-mercury-gold-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.about?.cta?.button || "Contact Now"}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}