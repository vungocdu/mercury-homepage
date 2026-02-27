import type { Metadata } from 'next'
import ActiwellATMSClient from './ActiwellATMSClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Actiwell ATMS | Sport Tech Athletic Training Management System',
  description:
    'Actiwell ATMS — Sport Tech platform by Mercury Solutions. AI-powered sports training management with NSCA v3.0 fitness testing, 360° athlete management, periodization, ACWR injury prevention, and role-based portals for admins, coaches, and athletes.',
  keywords: [
    'Sport Tech',
    'ATMS',
    'athletic training management system',
    'sports technology',
    'AI sports analytics',
    'NSCA fitness testing',
    'athlete management software',
    'sports training platform',
    'periodization software',
    'ACWR tracking',
    'coach management system',
    'fitness assessment technology',
    'sport science software',
    'Mercury Solutions Sport Tech',
    'Vietnam sports technology',
  ],
  openGraph: {
    title: 'Actiwell ATMS | Sport Tech Athletic Training Management System',
    description:
      'Sport Tech platform with AI-powered 30+ NSCA tests, 9 assessment categories, 35 sports, and dedicated portals for admins, coaches & athletes.',
    url: 'https://www.mercurysolutions.vn/actiwell-atms',
  },
}

export default function ActiwellATMSPage() {
  return <ActiwellATMSClient />
}
