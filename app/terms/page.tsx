import type { Metadata } from 'next'
import TermsPageClient from './TermsPageClient'

// Force static rendering for GitLab Pages deployment
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Điều Khoản Dịch Vụ - Mercury Solutions | Terms of Service',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ của Mercury Solutions. Quy định về quyền lợi, trách nhiệm và các điều kiện sử dụng dịch vụ AI, Digital Transformation và Video Production.',
  keywords: [
    'điều khoản dịch vụ',
    'terms of service',
    'điều kiện sử dụng',
    'Mercury Solutions terms',
    'service agreement',
    'quyền lợi khách hàng',
    'trách nhiệm',
    'intellectual property',
    'dispute resolution',
    'quyền sở hữu trí tuệ'
  ],
  openGraph: {
    title: 'Điều Khoản Dịch Vụ - Mercury Solutions',
    description: 'Điều khoản và điều kiện sử dụng dịch vụ của Mercury Solutions.',
    url: 'https://mercurysolutions.vn/terms',
  },
}

export default function TermsPage() {
  return <TermsPageClient />
} 