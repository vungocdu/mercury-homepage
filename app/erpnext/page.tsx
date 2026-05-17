import type { Metadata } from 'next'
import ERPNextClient from './ERPNextClient'
import { erpContent } from './erpnext-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: erpContent.en.meta.title,
  description: erpContent.en.meta.description,
  keywords: [
    'ERPNext Vietnam',
    'ERPNext customization',
    'Frappe Framework Vietnam',
    'open source ERP Vietnam',
    'ERP implementation Vietnam',
    'ERPNext accounting VAS',
    'ERPNext manufacturing',
    'ERPNext CRM',
    'ERPNext POS',
    'Mercury Solution ERP',
  ],
  alternates: {
    canonical: '/erpnext',
    languages: {
      en: '/erpnext',
      vi: '/vi/erpnext',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mercurysolutions.vn/erpnext',
    title: erpContent.en.meta.title,
    description: erpContent.en.meta.description,
  },
}

export default function ERPNextPage() {
  return <ERPNextClient locale="en" />
}
