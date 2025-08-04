import type { Metadata } from 'next'
import AIDigitalTransformationClient from './AIDigitalTransformationClient'

// Force dynamic rendering for Next.js 15 compatibility
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Digital Transformation - Chuyển đổi số với AI | Mercury Solutions',
  description: 'Mercury Solutions cung cấp giải pháp AI Digital Transformation toàn diện. Chúng tôi xuất sắc trong xây dựng ứng dụng mobile và web có tải cao với công nghệ AI tiên tiến và quy trình đã được chứng minh.',
  keywords: [
    'AI digital transformation',
    'chuyển đổi số AI',
    'ứng dụng mobile AI',
    'ứng dụng web tải cao',
    'công nghệ AI',
    'machine learning',
    'automation',
    'digital solutions',
    'Mercury Solutions AI',
    'Vietnam AI development'
  ],
  openGraph: {
    title: 'AI Digital Transformation - Chuyển đổi số với AI | Mercury Solutions',
    description: 'Mercury Solutions cung cấp giải pháp AI Digital Transformation toàn diện với công nghệ tiên tiến và quy trình đã được chứng minh.',
    url: 'https://mercurysolutions.vn/ai-digital-transformation',
  },
}

export default function AIDigitalTransformationPage() {
  return <AIDigitalTransformationClient />
}