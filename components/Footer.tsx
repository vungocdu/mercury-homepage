"use client"

import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { translations } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-mercury-blue-800 via-mercury-blue-900 to-mercury-blue-950 text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Mercury Solutions
            </h3>
            <p className="mb-8 leading-relaxed text-gray-200 text-lg">
              {translations?.footer?.description || 'Leading provider of AI-powered digital transformation solutions in Vietnam and Southeast Asia.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {translations?.contact?.info?.address || '5F, 33/41 Thai Ha, Dong Da, Hanoi'}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {translations?.contact?.info?.phone || '024 6663 6480'}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-mercury-gold-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-mercury-gold-400" />
                </div>
                <span className="text-gray-200">
                  {translations?.contact?.info?.email || 'info@mercurysolutions.vn'}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {translations?.footer?.services || 'Services'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.ai?.title || 'AI Solutions'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.web?.title || 'Web Development'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.mobile?.title || 'Mobile Development'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.vision?.title || 'Computer Vision'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.devops?.title || 'DevOps & Cloud'}
                </a>
              </li>
              <li>
                <a href="/tvc" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.services?.tvc?.title || 'TVC Production'}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {translations?.footer?.quickLinks || 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.nav?.home || 'Home'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.nav?.projects || 'Projects'}
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.nav?.technology || 'Technology'}
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.nav?.process || 'Process'}
                </a>
              </li>
              <li>
                <a href="/tvc" className="text-gray-200 hover:text-mercury-gold-400 transition-colors duration-300 text-lg">
                  {translations?.nav?.tvcServices || 'TVC Services'}
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
              {(translations?.footer?.copyright || '© {year} Mercury Solutions. All rights reserved.').replace('{year}', currentYear.toString())}
            </p>
            
            <div className="flex space-x-8">
              <a href="/privacy" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {translations?.footer?.privacy || 'Privacy Policy'}
              </a>
              <a href="/terms" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {translations?.footer?.terms || 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-300 hover:text-mercury-gold-400 transition-colors duration-300 text-sm">
                {translations?.footer?.cookies || 'Cookie Policy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
