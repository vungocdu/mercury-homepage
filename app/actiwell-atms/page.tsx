import type { Metadata } from 'next'
import ActiwellATMSClient from './ActiwellATMSClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Actiwell ATMS | Athletic Training Management System',
  description:
    'Actiwell ATMS digitalizes sports training workflows with NSCA v3.0 fitness testing, 360° athlete management, periodization, ACWR injury prevention, and role-based portals for admins, coaches, and athletes.',
  keywords: [
    'ATMS',
    'athletic training management',
    'sports training system',
    'NSCA fitness testing',
    'athlete management',
    'periodization',
    'ACWR tracking',
    'coach workload',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'Actiwell ATMS | Athletic Training Management System',
    description:
      'Professional sports training management platform with 30+ NSCA tests, 9 assessment categories, 35 sports, and three dedicated portals.',
    url: 'https://www.mercurysolutions.vn/actiwell-atms',
  },
}

export default function ActiwellATMSPage() {
  return <ActiwellATMSClient />
}
