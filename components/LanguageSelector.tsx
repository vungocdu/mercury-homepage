'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage, translations } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const languages = [
    { code: 'en', name: translations.language.en, flag: '🇺🇸' },
    { code: 'vi', name: translations.language.vi, flag: '🇻🇳' },
    { code: 'ja', name: translations.language.ja, flag: '🇯🇵' },
    { code: 'ko', name: translations.language.ko, flag: '🇰🇷' },
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'vi' | 'ja' | 'ko')
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center space-x-2 ${
                language === lang.code ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 