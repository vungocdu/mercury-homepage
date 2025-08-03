import type { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật - Mercury Solutions | Privacy Policy',
  description: 'Chính sách bảo mật thông tin cá nhân của Mercury Solutions. Cam kết bảo vệ dữ liệu khách hàng với các biện pháp bảo mật tiên tiến và tuân thủ quy định pháp luật.',
  keywords: [
    'chính sách bảo mật',
    'privacy policy',
    'bảo mật thông tin',
    'Mercury Solutions privacy',
    'GDPR compliance',
    'data protection',
    'quyền riêng tư',
    'bảo vệ dữ liệu cá nhân',
    'information security'
  ],
  openGraph: {
    title: 'Chính Sách Bảo Mật - Mercury Solutions',
    description: 'Chính sách bảo mật thông tin cá nhân của Mercury Solutions. Cam kết bảo vệ dữ liệu khách hàng.',
    url: 'https://mercurysolutions.vn/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}