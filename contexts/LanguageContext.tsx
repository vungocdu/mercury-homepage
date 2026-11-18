'use client'

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en } from '@/translations/en'
import { vi } from '@/translations/vi'
import { ja } from '@/translations/ja'
import type { Lx } from '@/lib/i18n'

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
  l: (x: Lx) => x.en,
  translations: en,
}

type Language = 'en' | 'vi' | 'ja'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  /** Pick the current language from an inline {vi,en,ja} value */
  l: (x: Lx) => string
  translations: typeof en
}

const translations: Record<Language, typeof en> = {
  en,
  vi,
  ja,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    try {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && ['en', 'vi', 'ja'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      // Fallback to 'en' if localStorage is not available
      console.warn('localStorage not available, using default language')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (error) {
      console.warn('Could not save language to localStorage')
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
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
    },
    [language]
  )

  // Memoized so consumers only re-render when the language actually changes.
  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      t,
      l: (x: Lx) => x[language] ?? x.en,
      translations: translations[language],
    }),
    [language, setLanguage, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
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
