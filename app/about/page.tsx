import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Về chúng tôi - Mercury Solutions Vietnam Company Limited | Công ty Công nghệ & Truyền thông',
  description: 'Công ty TNHH Mercury Solutions Việt Nam - Đơn vị tiên phong về giải pháp AI, Digital Transformation và Video Production. Địa chỉ: Tầng 5, số nhà 33/41 Thái Hà, Phường Đống Đa, TP Hà Nội. MST: 0110235195.',
  keywords: [
    'Mercury Solutions Vietnam Company Limited',
    'MERCURY SOLUTIONS VIETNAM COMPANY LIMITED',
    'về chúng tôi',
    'about Mercury Solutions',
    'công ty công nghệ',
    'AI solutions',
    'digital transformation',
    'video production',
    'Vietnam technology company',
    'Hanoi technology company',
    'tầm nhìn sứ mệnh',
    'vision mission',
    'brand story'
  ],
  openGraph: {
    title: 'Về chúng tôi - Mercury Solutions Vietnam Company Limited | Công ty Công nghệ & Truyền thông',
    description: 'Mercury Solutions Vietnam Company Limited - Đơn vị tiên phong về giải pháp AI, Digital Transformation và Video Production. Đột Phá Công Nghệ, Vững Vàng Thương Hiệu.',
    url: 'https://mercurysolutions.vn/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}