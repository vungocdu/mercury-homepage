'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LocalizedLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { language } = useLanguage()
  const localized = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/admin') && !href.startsWith('/tvc') && language !== 'en'
    ? `/${language}${href === '/' ? '/' : href}` : href
  return <Link href={localized} {...props} />
}
