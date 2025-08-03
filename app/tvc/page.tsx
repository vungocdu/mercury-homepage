import type { Metadata } from 'next'
import TVCPageClient from './TVCPageClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dịch Vụ Quay Phim TVC Nhà Máy, Khu Công Nghiệp 4K | Mercury Solutions',
  description: 'Mercury Solutions chuyên cung cấp dịch vụ quay phim, sản xuất TVC giới thiệu nhà máy, KCN chuyên nghiệp. Chất lượng 4K, flycam, FPV, hoàn thành trong 1-2 tuần. Nâng tầm thương hiệu sản xuất của bạn!',
  keywords: [
    'dịch vụ quay phim nhà máy',
    'sản xuất TVC doanh nghiệp',
    'quay phim giới thiệu công ty sản xuất',
    'quay phim khu công nghiệp',
    'làm phim doanh nghiệp',
    'quay phim flycam nhà xưởng',
    'video quy trình sản xuất',
    'phim tự giới thiệu doanh nghiệp 4K',
    'công ty quay phim quảng cáo',
    'TVC services',
    'digital art',
    'video production',
    'television commercial',
    'motion graphics',
    'creative services',
    'brand video',
    'advertising video',
    'Vietnam video production'
  ],
  openGraph: {
    title: 'Dịch Vụ Quay Phim TVC Nhà Máy, Khu Công Nghiệp 4K | Mercury Solutions',
    description: 'Mercury Solutions chuyên cung cấp dịch vụ quay phim, sản xuất TVC giới thiệu nhà máy, KCN chuyên nghiệp. Chất lượng 4K, flycam, FPV, hoàn thành trong 1-2 tuần.',
    url: 'https://mercurysolutions.vn/dich-vu-quay-phim-tvc-nha-may-doanh-nghiep',
  },
}

export default function TVCPage() {
  return <TVCPageClient />
}