import type { Metadata } from 'next'
import TNASystemClient from './TNASystemClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'TNA HRM System | HR Tech Manufacturing Payroll & Attendance Platform',
  description:
    'TNA HRM — HR Tech platform by Mercury Solutions for manufacturing HR. AI-powered attendance capture, shift & leave management, payroll automation, and MISA accounting integration. Streamline factory workforce operations.',
  keywords: [
    'HR Tech',
    'TNA HRM system',
    'manufacturing HR software',
    'AI attendance system',
    'payroll automation',
    'time and attendance',
    'shift management software',
    'leave management system',
    'MISA integration',
    'factory workforce management',
    'HR technology Vietnam',
    'human resource management',
    'employee management system',
    'Mercury Solutions HR Tech',
    'manufacturing payroll',
  ],
  openGraph: {
    title: 'TNA HRM | HR Tech Manufacturing Payroll & Attendance Platform',
    description:
      'HR Tech platform for manufacturing: AI attendance capture, shift management, payroll automation & MISA accounting integration.',
    url: 'https://www.mercurysolutions.vn/tna-system',
  },
}

export default function TNASystemPage() {
  return <TNASystemClient />
}
