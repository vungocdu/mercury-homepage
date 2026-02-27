import type { Metadata } from 'next'
import QuickShiftPrivacyClient from './QuickShiftPrivacyClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy Policy, User Privacy Choices & Account Deletion — QuickShift | Mercury Solutions Vietnam',
  description:
    'QuickShift Privacy Policy by Mercury Solutions Vietnam. Comprehensive data collection disclosure, Apple App Store privacy labels, account deletion instructions, third-party SDK details, GDPR & PDPA compliance. Access, modify, or permanently delete your personal data.',
  keywords: [
    'QuickShift privacy policy',
    'QuickShift account deletion',
    'QuickShift data deletion',
    'app privacy policy',
    'Apple App Store privacy',
    'user privacy choices',
    'data deletion request',
    'GDPR compliance',
    'PDPA compliance',
    'Mercury Solutions Vietnam privacy',
    'workforce data protection',
    'app store privacy labels',
    'third party SDK disclosure',
    'HR Tech privacy',
  ],
  openGraph: {
    title: 'Privacy Policy, Account Deletion & Privacy Choices — QuickShift',
    description:
      'QuickShift comprehensive privacy policy: data collection, third-party SDKs, Apple privacy labels, account deletion, GDPR/PDPA rights.',
    url: 'https://www.mercurysolutions.vn/quickshift/privacy',
  },
}

export default function QuickShiftPrivacyPage() {
  return <QuickShiftPrivacyClient />
}
