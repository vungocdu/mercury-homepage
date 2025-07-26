'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { translations } = useLanguage()

  const navigation = [
    { name: translations.nav.home, href: '#home' },
    { name: translations.nav.services, href: '#services' },
    { name: translations.nav.technology, href: '#technology' },
    { name: translations.nav.process, href: '#process' },
    { name: translations.nav.projects, href: '#projects' },
    { name: translations.nav.tvcServices, href: '/tvc' },
    { name: translations.nav.contact, href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Mercury Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-wider text-foreground hover:text-primary hover:shadow-glow transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a href="#contact" className="btn-primary">
              {translations.common.getStarted}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="btn-primary block text-center" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.common.getStarted}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 