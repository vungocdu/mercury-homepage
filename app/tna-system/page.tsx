import type { Metadata } from 'next'
import TNASystemClient from './TNASystemClient'
import { tnaContent } from './tna-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: tnaContent.en.meta.title,
  description: tnaContent.en.meta.description,
  keywords: [
    'TNA HRM system',
    'manufacturing attendance software',
    'manufacturing payroll software',
    'AI attendance system',
    'shift management software',
    'leave management system',
    'MISA integration',
    'factory workforce management',
    'employee management system',
    'Mercury Solutions',
  ],
  alternates: {
    canonical: '/tna-system',
    languages: {
      en: '/tna-system',
      ja: '/ja/tna-system',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mercurysolutions.vn/tna-system',
    title: tnaContent.en.meta.title,
    description: tnaContent.en.meta.description,
  },
}

export default function TNASystemPage() {
  return <TNASystemClient locale="en" />
}
