'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/translations/en'
import { vi } from '@/translations/vi'
import { ja } from '@/translations/ja'
import { ko } from '@/translations/ko'

// Server-side fallback
const serverFallback = {
  language: 'en' as const,
  setLanguage: () => {},
  t: (key: string) => {
    const keys = key.split('.')
    let value: any = en

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as any)[k]
      } else {
        // Fallback to English if translation not found
        value = keys.reduce((obj: any, k) => obj?.[k], en)
        break
      }
    }

    return typeof value === 'string' ? value : key
  },
  translations: en,
}

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Get language from localStorage or default to 'en'
    try {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && ['en', 'vi', 'ja', 'ko'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      // Fallback to 'en' if localStorage is not available
      console.warn('localStorage not available, using default language')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (error) {
      console.warn('Could not save language to localStorage')
    }
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

  // Only render children when client-side to avoid hydration issues
  if (!isClient) {
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Server-side version
export function useLanguageServer() {
  return serverFallback
}

// Client-side version
export function useLanguageClient() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return server-side fallback
    return serverFallback
  }
  return context
}

// Main hook - uses server fallback for SSR
export function useLanguage() {
  // Check if we're on the server
  if (typeof window === 'undefined') {
    return serverFallback
  }

  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return server-side fallback
    return serverFallback
  }
  return context
} 