import type { Metadata } from 'next'
import OTACalculatorClient from './OTACalculatorClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'OTA Calculator | Smart Revenue Optimization for Hotels',
  description:
    'OTA Calculator — compare commission structures, discount programs, and net revenue across 7+ OTA channels. Supports Booking.com, Agoda, Expedia, Traveloka, Trip.com, Airbnb, and Go2Joy with precise decimal calculations.',
  keywords: [
    'OTA Calculator',
    'hotel revenue management',
    'OTA commission calculator',
    'Booking.com commission',
    'Agoda discount calculator',
    'hotel pricing tool',
    'rate parity',
    'channel manager',
    'revenue optimization',
    'Minova Group',
  ],
  openGraph: {
    title: 'OTA Calculator | Smart Revenue Optimization for Hotels',
    description:
      'Compare OTA commissions, discount stacking, and net revenue across Booking.com, Agoda, Expedia, Traveloka, Trip.com, Airbnb, and Go2Joy — all in one tool.',
    url: 'https://www.mercurysolutions.vn/ota-calculator',
  },
}

export default function OTACalculatorPage() {
  return <OTACalculatorClient />
}
