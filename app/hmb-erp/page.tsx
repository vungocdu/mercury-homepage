import type { Metadata } from 'next'
import HmbErpClient from './HmbErpClient'
import { hmbErpContent } from './hmb-erp-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: hmbErpContent.en.meta.title,
  description: hmbErpContent.en.meta.description,
  keywords: ['HMB ERP', 'multi-company ERP', 'modular monolith ERP', 'Mercury Solutions'],
  alternates: { canonical: '/hmb-erp' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mercurysolutions.vn/hmb-erp',
    title: hmbErpContent.en.meta.title,
    description: hmbErpContent.en.meta.description,
  },
}

export default function HmbErpPage() {
  return <HmbErpClient />
}
