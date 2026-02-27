import type { Metadata } from 'next'
import QuickShiftClient from './QuickShiftClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'QuickShift | HR Tech AI-Powered Workforce & Staffing Management Platform',
  description:
    'QuickShift — HR Tech platform by Mercury Solutions. AI-powered temporary staffing management with Timecard OCR, automated shift scheduling, work order management, invoicing automation, and multi-channel notifications for staffing agencies.',
  keywords: [
    'HR Tech',
    'QuickShift',
    'workforce management platform',
    'staffing agency software',
    'AI timecard OCR',
    'shift scheduling system',
    'temporary staffing technology',
    'HR technology',
    'human resource tech',
    'invoicing automation',
    'labor management software',
    'gig economy platform',
    'staffing operations',
    'Mercury Solutions HR Tech',
    'Vietnam HR technology',
  ],
  openGraph: {
    title: 'QuickShift | HR Tech AI-Powered Workforce Management Platform',
    description:
      'HR Tech staffing platform with AI OCR, auto scheduling, work orders, invoicing, and 3 dedicated mobile apps for workers, customers & managers.',
    url: 'https://www.mercurysolutions.vn/quickshift',
  },
}

export default function QuickShiftPage() {
  return <QuickShiftClient />
}
