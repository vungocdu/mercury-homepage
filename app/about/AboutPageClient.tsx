'use client'

import { MapPin, Phone, Mail, FileText, Target, Eye, Users, Calendar, Building2 } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLanguage } from '../../contexts/LanguageContext'

export default function AboutPageClient() {
  const { translations } = useLanguage()

  // Type assertion to avoid TypeScript errors with safe fallback
  const t = translations as any // eslint-disable-line @typescript-eslint/no-explicit-any



  // Get about section (fallback to services.about if direct about is not available)
  const aboutSection = t?.about || t?.services?.about

  const companyInfo = [
    {
      icon: Building2,
      label: aboutSection?.company?.name || "Company Name",
      value: aboutSection?.companyInfo?.name || aboutSection?.company?.name || "Mercury Solutions",
      gradient: "from-mercury-blue-500 to-mercury-blue-600"
    },
    {
      icon: MapPin,
      label: aboutSection?.company?.address || "Address",
      value: aboutSection?.companyInfo?.address || "5th Floor, 33/41 Thai Ha Street, Trung Liet Ward, Dong Da District, Hanoi City, Vietnam",
      gradient: "from-mercury-gold-500 to-mercury-gold-600"
    },
    {
      icon: FileText,
      label: aboutSection?.company?.taxCode || "Tax Code",
      value: aboutSection?.companyInfo?.taxCode || "0123456789",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      label: aboutSection?.company?.phone || "Phone",
      value: aboutSection?.companyInfo?.phone || "+84 (0)28 3xxx xxxx",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Mail,
      label: aboutSection?.company?.email || "Email",
      value: aboutSection?.companyInfo?.email || "info@mercurysolutions.vn",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Calendar,
      label: aboutSection?.company?.founded || "Founded Year",
      value: aboutSection?.companyInfo?.founded || "2020",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]


  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-mercury-blue-50 via-white to-mercury-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {aboutSection?.hero?.title || "About Us"}
            </h1>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              {aboutSection?.company?.title || "Company Information"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutSection?.company?.description || "Learn more about our company"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent">
              {aboutSection?.values?.sectionTitle || "Vision, Mission & Values"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutSection?.values?.sectionDescription || "Our guiding principles"}
            </p>
          </div>

          {/* Vision & Mission - Top Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-blue-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600"></div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mercury-blue-500 to-mercury-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-mercury-blue-600 transition-colors">
                    {aboutSection?.mission?.title || "Mission"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {aboutSection?.mission?.description || "Our mission description"}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mercury-gold-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600"></div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mercury-gold-500 to-mercury-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-mercury-gold-600 transition-colors">
                    {aboutSection?.vision?.title || "Vision"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {aboutSection?.vision?.description || "Our vision description"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - Bottom Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Build - Measure - Learn */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {aboutSection?.values?.coreValues?.buildMeasureLearn?.title || "Build - Measure - Learn"}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium mb-4 uppercase tracking-wide">
                    {aboutSection?.values?.coreValues?.buildMeasureLearn?.subtitle || "Build - Measure - Learn"}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutSection?.values?.coreValues?.buildMeasureLearn?.description || "Continuous improvement description"}
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership as a Feature */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {aboutSection?.values?.coreValues?.partnershipAsFeature?.title || "Partnership as a Feature"}
                  </h3>
                  <p className="text-sm text-green-600 font-medium mb-4 uppercase tracking-wide">
                    {aboutSection?.values?.coreValues?.partnershipAsFeature?.subtitle || "Partnership as a Feature"}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutSection?.values?.coreValues?.partnershipAsFeature?.description || "Partnership description"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {aboutSection?.cta?.title || "Ready to partner with Mercury Solutions?"}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-mercury-blue-100">
              {aboutSection?.cta?.description || "Let us help you achieve your goals"}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-white text-mercury-blue-600 hover:bg-mercury-gold-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {aboutSection?.cta?.button || "Contact Now"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}