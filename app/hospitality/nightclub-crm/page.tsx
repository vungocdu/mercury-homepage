import type { Metadata } from 'next'
import NightclubCrmClient from './NightclubCrmClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Nightlife CRM | Hospitality Management for Nightlife Venues',
  description: 'Mercury Nightlife CRM — Multi-tenant CRM platform for nightlife venues (clubs, lounges, bars). Centralized guest profiles, smart segmentation, reservations, waitlist, table management, and real-time operations.',
  keywords: [
    'Nightlife CRM',
    'Club Management System',
    'Night Club CRM',
    'Hospitality CRM',
    'Guest Management',
    'Venue Management',
    'Table Management',
    'Waitlist Management',
    'Reservations System',
    'Nightlife Operations',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'Nightlife CRM | Mercury Solutions',
    description: 'CRM for nightlife venues — guest profiles, smart segmentation, reservations, waitlist, and real-time table operations.',
    url: 'https://www.mercurysolutions.vn/hospitality/nightclub-crm',
  },
}

export default function NightclubCrmPage() {
  return <NightclubCrmClient />
}
