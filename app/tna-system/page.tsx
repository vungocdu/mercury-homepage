import type { Metadata } from 'next'
import TNASystemClient from './TNASystemClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'TNA HRM System | Manufacturing HR & Payroll Platform',
  description:
    'TNA HRM System introduction page: AI attendance capture, shift and leave management, payroll engine, and MISA accounting integration for manufacturing operations.',
  keywords: [
    'TNA HRM',
    'manufacturing HRM',
    'time attendance',
    'payroll automation',
    'MISA integration',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'TNA HRM System | Manufacturing HR & Payroll Platform',
    description:
      'Discover core functions of the TNA HRM platform from attendance and shift operations to payroll and accounting integration.',
    url: 'https://www.mercurysolutions.vn/tna-system',
  },
}

export default function TNASystemPage() {
  return <TNASystemClient />
}
