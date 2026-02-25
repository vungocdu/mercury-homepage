import type { Metadata } from 'next'
import MinovaPMSClient from './MinovaPMSClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Minova PMS | Cloud Property Management System',
  description:
    'Minova PMS — enterprise-grade cloud Property Management System for hotels and resorts. Complete reservation lifecycle, multi-channel OTA integration, real-time housekeeping, night audit, VNPay & MoMo payments, and AI-powered guest experience.',
  keywords: [
    'Minova PMS',
    'Property Management System',
    'hotel management software',
    'reservation system',
    'channel manager',
    'OTA integration',
    'night audit',
    'housekeeping management',
    'VNPay',
    'MoMo payment',
    'hotel technology',
    'Minova Group',
  ],
  openGraph: {
    title: 'Minova PMS | Cloud Property Management System',
    description:
      'Enterprise-grade cloud PMS with reservation management, OTA channel integration, real-time housekeeping, night audit, and multi-gateway payments for hotels and resorts.',
    url: 'https://www.mercurysolutions.vn/minova-pms',
  },
}

export default function MinovaPMSPage() {
  return <MinovaPMSClient />
}
