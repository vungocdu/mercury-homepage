import type { Metadata } from 'next'
import MinovaPMSClient from './MinovaPMSClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Minova PMS | Hotel Tech Cloud Property Management System',
  description:
    'Minova PMS — Hotel Tech cloud Property Management System by Mercury Solutions. AI-powered hotel operations with reservation lifecycle, multi-channel OTA integration, real-time housekeeping, night audit, VNPay & MoMo payments, and smart guest experience.',
  keywords: [
    'Hotel Tech',
    'Minova PMS',
    'Property Management System',
    'hotel management software',
    'cloud PMS',
    'hotel technology',
    'reservation system',
    'channel manager',
    'OTA integration',
    'night audit system',
    'housekeeping management',
    'hotel revenue management',
    'VNPay hotel',
    'MoMo payment hotel',
    'AI hotel management',
    'Vietnam Hotel Tech',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'Minova PMS | Hotel Tech Cloud Property Management System',
    description:
      'Hotel Tech cloud PMS with AI-powered reservation management, OTA channel integration, real-time housekeeping, night audit & multi-gateway payments.',
    url: 'https://www.mercurysolutions.vn/minova-pms',
  },
}

export default function MinovaPMSPage() {
  return <MinovaPMSClient />
}
