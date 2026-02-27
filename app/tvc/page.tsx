import type { Metadata } from 'next'
import TVCPageClient from './TVCPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Dịch Vụ Quay Phim TVC Nhà Máy, Khu Công Nghiệp 4K | Mercury Solutions Vietnam',
  description: 'Mercury Solutions Vietnam — dịch vụ quay phim TVC nhà máy, khu công nghiệp chuyên nghiệp 4K. Flycam, FPV drone, motion graphics, AI post-production. Hoàn thành 1-2 tuần. Nâng tầm thương hiệu sản xuất!',
  keywords: [
    'dịch vụ quay phim nhà máy',
    'sản xuất TVC doanh nghiệp',
    'quay phim giới thiệu công ty sản xuất',
    'quay phim khu công nghiệp 4K',
    'làm phim doanh nghiệp',
    'quay phim flycam nhà xưởng',
    'video quy trình sản xuất',
    'phim tự giới thiệu doanh nghiệp',
    'TVC services Vietnam',
    'video production company',
    'AI video production',
    'motion graphics',
    'brand video Vietnam',
    'corporate video Hanoi',
    'Mercury Solutions Vietnam',
  ],
  openGraph: {
    title: 'Dịch Vụ Quay Phim TVC Nhà Máy, KCN 4K | Mercury Solutions Vietnam',
    description: 'Dịch vụ quay phim TVC nhà máy, KCN chuyên nghiệp 4K. Flycam, FPV, motion graphics. Hoàn thành 1-2 tuần.',
    url: 'https://www.mercurysolutions.vn/tvc',
  },
}

export default function TVCPage() {
  return <TVCPageClient />
}