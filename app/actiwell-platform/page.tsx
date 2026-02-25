import type { Metadata } from 'next'
import ActiwellPlatformClient from './ActiwellPlatformClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Actiwell - All-in-One Fitness Management Platform | Minova Group',
  description: 'Actiwell is an all-in-one fitness management ecosystem built by Mercury Solutions in partnership with Attivo International. Featuring AI-powered booking suggestions, mobile app for members, and a powerful CMS for gym managers.',
  keywords: [
    'Actiwell',
    'fitness management platform',
    'gym management software',
    'AI fitness',
    'personal training booking',
    'fitness CMS',
    'member mobile app',
    'Mercury Solutions',
    'Attivo International',
    'Southeast Asia fitness',
    'gym operations',
    'fitness technology',
  ],
  openGraph: {
    title: 'Actiwell - All-in-One Fitness Management Platform | Minova Group',
    description: 'Mercury Solutions partnered with Attivo International to create Actiwell — an all-in-one fitness ecosystem with AI-powered features, mobile app, and CMS.',
    url: 'https://www.mercurysolutions.vn/actiwell-platform',
  },
}

export default function ActiwellPlatformPage() {
  return <ActiwellPlatformClient />
}
