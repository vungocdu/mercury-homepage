import type { Metadata } from 'next'
import TermsPageClient from './TermsPageClient'

// Force static rendering for GitLab Pages deployment
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Điều Khoản Dịch Vụ - Mercury Solutions Vietnam | Terms of Service',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ của Mercury Solutions Vietnam. Quy định về quyền lợi, trách nhiệm và các điều kiện sử dụng dịch vụ AI Software Development, HR Tech, Sport Tech, Hotel Tech và Video Production.',
  keywords: [
    'điều khoản dịch vụ',
    'terms of service',
    'điều kiện sử dụng',
    'Mercury Solutions Vietnam terms',
    'software service agreement',
    'AI software terms',
    'HR Tech terms',
    'quyền lợi khách hàng',
    'intellectual property',
    'dispute resolution',
  ],
  openGraph: {
    title: 'Điều Khoản Dịch Vụ - Mercury Solutions Vietnam',
    description: 'Điều khoản và điều kiện sử dụng dịch vụ của Mercury Solutions Vietnam.',
    url: 'https://www.mercurysolutions.vn/terms',
  },
}

export default function TermsPage() {
  return <TermsPageClient />
} 