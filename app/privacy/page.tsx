import type { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật - Mercury Solutions Vietnam | Privacy Policy',
  description: 'Chính sách bảo mật thông tin cá nhân của Mercury Solutions Vietnam. Cam kết bảo vệ dữ liệu khách hàng với các biện pháp bảo mật tiên tiến, tuân thủ GDPR và quy định pháp luật Việt Nam.',
  keywords: [
    'chính sách bảo mật',
    'privacy policy',
    'bảo mật thông tin',
    'Mercury Solutions Vietnam privacy',
    'GDPR compliance',
    'data protection Vietnam',
    'quyền riêng tư',
    'bảo vệ dữ liệu cá nhân',
    'information security',
    'software company privacy policy',
  ],
  openGraph: {
    title: 'Chính Sách Bảo Mật - Mercury Solutions Vietnam',
    description: 'Chính sách bảo mật thông tin cá nhân của Mercury Solutions Vietnam. Cam kết bảo vệ dữ liệu khách hàng.',
    url: 'https://www.mercurysolutions.vn/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}