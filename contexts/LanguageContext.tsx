'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/translations/en'
import { vi } from '@/translations/vi'
import { ja } from '@/translations/ja'
import { ko } from '@/translations/ko'

// Use any type for translations to avoid TypeScript issues
type TranslationType = any // eslint-disable-line @typescript-eslint/no-explicit-any

// Server-side fallback
const serverFallback = {
  language: 'en' as const,
  setLanguage: () => {},
  t: (key: string) => {
    const keys = key.split('.')
    let value: unknown = en

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k]
      } else {
        // Fallback to English if translation not found
        value = keys.reduce((obj: unknown, k) => (obj as Record<string, unknown>)?.[k], en)
        break
      }
    }

    return typeof value === 'string' ? value : key
  },
  translations: en as TranslationType,
}

type Language = 'en' | 'vi' | 'ja' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: TranslationType
}

const translations: Record<Language, TranslationType> = {
  en: en as TranslationType,
  vi: vi as TranslationType,
  ja: ja as TranslationType,
  ko: ko as TranslationType,
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
    let value: unknown = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k]
      } else {
        // Fallback to English if translation not found
        value = keys.reduce((obj: unknown, k) => (obj as Record<string, unknown>)?.[k], translations.en)
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
  const context = useContext(LanguageContext)
  
  // Check if we're on the server or context is undefined
  if (typeof window === 'undefined' || context === undefined) {
    return serverFallback
  }
  
  return context
} 