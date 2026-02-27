import type { Metadata } from 'next'
import OTACalculatorClient from './OTACalculatorClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'OTA Calculator | Hotel Tech Smart Revenue Optimization Tool',
  description:
    'OTA Calculator — Hotel Tech revenue optimization by Mercury Solutions. AI-driven comparison of commission structures, discount programs, and net revenue across 7+ OTA channels: Booking.com, Agoda, Expedia, Traveloka, Trip.com, Airbnb & Go2Joy.',
  keywords: [
    'Hotel Tech',
    'OTA Calculator',
    'hotel revenue management',
    'OTA commission calculator',
    'hotel pricing optimization',
    'Booking.com commission',
    'Agoda discount calculator',
    'rate parity tool',
    'channel manager',
    'revenue optimization AI',
    'hotel technology',
    'hospitality software',
    'Mercury Solutions Hotel Tech',
    'Vietnam hotel software',
  ],
  openGraph: {
    title: 'OTA Calculator | Hotel Tech Smart Revenue Optimization',
    description:
      'Hotel Tech tool: compare OTA commissions, discount stacking & net revenue across Booking.com, Agoda, Expedia, Traveloka, Trip.com, Airbnb & Go2Joy.',
    url: 'https://www.mercurysolutions.vn/ota-calculator',
  },
}

export default function OTACalculatorPage() {
  return <OTACalculatorClient />
}
