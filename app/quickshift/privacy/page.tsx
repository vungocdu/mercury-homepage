import type { Metadata } from 'next'
import QuickShiftPrivacyClient from './QuickShiftPrivacyClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy Policy & User Privacy Choices — QuickShift | Mercury Solutions',
  description:
    'QuickShift Privacy Policy: learn how we collect, use, and protect your data. Manage your privacy choices — access, modify, or delete your personal data at any time.',
  keywords: [
    'QuickShift privacy policy',
    'user privacy choices',
    'data deletion request',
    'personal data management',
    'GDPR compliance',
    'PDPA compliance',
    'Mercury Solutions privacy',
    'staffing app privacy',
    'workforce data protection',
  ],
  openGraph: {
    title: 'Privacy Policy & User Privacy Choices — QuickShift',
    description:
      'Understand how QuickShift handles your data. Access, modify, or request deletion of your personal information.',
    url: 'https://www.mercurysolutions.vn/quickshift/privacy',
  },
}

export default function QuickShiftPrivacyPage() {
  return <QuickShiftPrivacyClient />
}
