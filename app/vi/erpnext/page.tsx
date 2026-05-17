import type { Metadata } from 'next'
import ERPNextClient from '@/app/erpnext/ERPNextClient'
import { erpContent } from '@/app/erpnext/erpnext-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: erpContent.vi.meta.title,
  description: erpContent.vi.meta.description,
  keywords: [
    'ERPNext Việt Nam',
    'tùy chỉnh ERPNext',
    'Frappe Framework Việt Nam',
    'ERP mã nguồn mở Việt Nam',
    'triển khai ERPNext Việt Nam',
    'kế toán ERPNext VAS',
    'ERPNext sản xuất',
    'ERPNext CRM',
    'ERPNext POS',
    'Mercury Solution ERP',
  ],
  alternates: {
    canonical: '/vi/erpnext',
    languages: {
      en: '/erpnext',
      vi: '/vi/erpnext',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.mercurysolutions.vn/vi/erpnext',
    title: erpContent.vi.meta.title,
    description: erpContent.vi.meta.description,
  },
}

export default function ERPNextPageVI() {
  return <ERPNextClient locale="vi" />
}
