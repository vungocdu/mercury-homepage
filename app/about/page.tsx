import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Về chúng tôi - Mercury Solutions Vietnam | Công ty Phần mềm AI, HR Tech, Sport Tech',
  description: 'Công ty TNHH Mercury Solutions Việt Nam - Đơn vị tiên phong về phát triển phần mềm AI, HR Tech, Sport Tech, Hotel Tech & DevOps. Giải pháp SaaS, ứng dụng mobile, chuyển đổi số toàn diện. MST: 0110235195. Địa chỉ: Tầng 5, 33/41 Thái Hà, Đống Đa, Hà Nội.',
  keywords: [
    'Mercury Solutions Vietnam Company Limited',
    'công ty phần mềm AI Vietnam',
    'HR Tech Vietnam',
    'Sport Tech company',
    'Hotel Tech Vietnam',
    'about Mercury Solutions',
    'AI software development',
    'DevOps solutions',
    'digital transformation',
    'SaaS platform Vietnam',
    'custom software development',
    'Vietnam technology company',
    'Hanoi software company',
    'công ty công nghệ Hà Nội',
    'phát triển phần mềm',
    'giải pháp AI'
  ],
  openGraph: {
    title: 'Về chúng tôi - Mercury Solutions Vietnam | AI Software, HR Tech, Sport Tech',
    description: 'Mercury Solutions Vietnam — AI-powered software development. HR Tech, Sport Tech, Hotel Tech platforms & DevOps solutions for enterprises.',
    url: 'https://www.mercurysolutions.vn/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}