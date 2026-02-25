import type { Metadata } from 'next'
import QuickShiftClient from './QuickShiftClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'QuickShift | AI-Powered Task Force Management Platform',
  description:
    'QuickShift digitizes temporary staffing operations with AI Timecard OCR, automated shift scheduling, work order management, invoicing, and multi-channel notifications for staffing agencies.',
  keywords: [
    'QuickShift',
    'task force management',
    'staffing agency software',
    'timecard OCR',
    'shift scheduling',
    'workforce management',
    'temporary staffing',
    'invoicing automation',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'QuickShift | AI-Powered Task Force Management Platform',
    description:
      'End-to-end temporary staffing platform with AI OCR, auto scheduling, work orders, invoicing, and 3 dedicated mobile apps for workers, customers, and business managers.',
    url: 'https://www.mercurysolutions.vn/quickshift',
  },
}

export default function QuickShiftPage() {
  return <QuickShiftClient />
}
