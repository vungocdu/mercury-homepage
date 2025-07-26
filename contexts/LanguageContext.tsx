'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/translations/en'
import { vi } from '@/translations/vi'
import { ja } from '@/translations/ja'
import { ko } from '@/translations/ko'

type Language = 'en' | 'vi' | 'ja' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: typeof en
}

const translations: Record<Language, typeof en> = {
  en,
  vi,
  ja,
  ko,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'vi', 'ja', 'ko'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as any)[k]
      } else {
        // Fallback to English if translation not found
        value = keys.reduce((obj: any, k) => obj?.[k], translations.en)
        break
      }
    }

    return typeof value === 'string' ? value : key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 