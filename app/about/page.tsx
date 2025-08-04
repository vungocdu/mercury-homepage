import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Về chúng tôi - Mercury Solutions | Công ty Công nghệ & Truyền thông',
  description: 'Mercury Solutions - Đơn vị tiên phong về giải pháp AI, Digital Transformation và Video Production. Địa chỉ: 123 Đường ABC, TP.HCM. MST: 0123456789.',
  keywords: [
    'Mercury Solutions',
    'về chúng tôi',
    'about Mercury Solutions',
    'công ty công nghệ',
    'AI solutions',
    'digital transformation',
    'video production',
    'Vietnam technology company',
    'tầm nhìn sứ mệnh',
    'vision mission'
  ],
  openGraph: {
    title: 'Về chúng tôi - Mercury Solutions | Công ty Công nghệ & Truyền thông',
    description: 'Mercury Solutions - Đơn vị tiên phong về giải pháp AI, Digital Transformation và Video Production.',
    url: 'https://mercurysolutions.vn/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}