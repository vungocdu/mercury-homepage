'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

// Use any type for translations to avoid TypeScript issues
type TranslationType = any // eslint-disable-line @typescript-eslint/no-explicit-any

// Lazy load translations
let translationsCache: Record<string, TranslationType> = {}

// Function to load translations dynamically
async function loadTranslations(lang: Language): Promise<TranslationType> {
  if (translationsCache[lang]) {
    return translationsCache[lang]
  }

  try {
    let translationModule
    switch (lang) {
      case 'en':
        translationModule = await import('../translations/en')
        break
      case 'vi':
        translationModule = await import('../translations/vi')
        break
      case 'ja':
        translationModule = await import('../translations/ja')
        break
      case 'ko':
        translationModule = await import('../translations/ko')
        break
      default:
        translationModule = await import('../translations/en')
    }

    const translation = (translationModule as any)[lang] || translationModule
    translationsCache[lang] = translation
    return translation
  } catch (error) {
    console.error(`Failed to load translation for ${lang}:`, error)
    // Fallback to English
    const fallbackModule = await import('../translations/en')
    const fallback = (fallbackModule as any).en || fallbackModule
    translationsCache[lang] = fallback
    return fallback
  }
}

// Server-side fallback (simplified)
const serverFallback = {
  language: 'en' as const,
  setLanguage: () => {},
  t: (key: string) => key,
  translations: {} as TranslationType,
}

type Language = 'en' | 'vi' | 'ja' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: TranslationType
}

// Translations will be loaded dynamically

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    try {
      const savedLanguage = localStorage.getItem('language') as Language | null
      if (savedLanguage && ['en', 'vi', 'ja', 'ko'].includes(savedLanguage)) {
        return savedLanguage
      }
    } catch {
      // Ignore storage failures and keep English as the default.
    }

    return 'en'
  })
  const [currentTranslations, setCurrentTranslations] = useState<TranslationType>({})

  // Load translations when language changes
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    loadTranslations(language).then(setCurrentTranslations).catch((error) => {
      console.error('Failed to load translations:', error)
      setCurrentTranslations({})
    })
  }, [language])

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
    let value: unknown = currentTranslations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k]
      } else {
        break
      }
    }

    return typeof value === 'string' ? value : key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: currentTranslations,
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
