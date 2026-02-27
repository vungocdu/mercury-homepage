import type { Metadata } from 'next'
import ActiwellPlatformClient from './ActiwellPlatformClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Actiwell | Sport Tech All-in-One Fitness & Gym Management Platform',
  description: 'Actiwell — Sport Tech fitness management ecosystem by Mercury Solutions & Attivo International. AI-powered booking, member mobile app, gym CMS, facility management, and sports analytics for fitness centers across Southeast Asia.',
  keywords: [
    'Sport Tech',
    'Actiwell platform',
    'fitness management software',
    'gym management system',
    'AI fitness technology',
    'sports facility management',
    'personal training booking system',
    'fitness CMS',
    'gym member app',
    'fitness technology platform',
    'Southeast Asia Sport Tech',
    'gym operations software',
    'sports analytics',
    'Mercury Solutions',
    'Attivo International',
  ],
  openGraph: {
    title: 'Actiwell | Sport Tech Fitness & Gym Management Platform',
    description: 'Sport Tech fitness ecosystem with AI-powered booking, member mobile app, gym CMS, and facility management for Southeast Asia.',
    url: 'https://www.mercurysolutions.vn/actiwell-platform',
  },
}

export default function ActiwellPlatformPage() {
  return <ActiwellPlatformClient />
}
