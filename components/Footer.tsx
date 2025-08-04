"use client"

import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-mercury-blue-700 via-mercury-blue-800 to-mercury-blue-900 text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Mercury Solutions
            </h3>
            <p className="mb-8 leading-relaxed text-gray-200 text-lg">
              {t('footer.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {t('contact.info.address')}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {t('contact.info.phone')}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {t('contact.info.email')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.ai.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.web.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.mobile.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.vision.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.devops.title')}
                </a>
              </li>
              <li>
                <a href="/tvc" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('services.tvc.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('nav.technology')}
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('nav.process')}
                </a>
              </li>
              <li>
                <a href="/tvc" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {t('nav.tvcServices')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </p>
            
            <div className="flex space-x-8">
              <a href="/privacy" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {t('footer.privacy')}
              </a>
              <a href="/terms" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 