import { localeAlternates } from '@/lib/locale-seo'
import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About Us — Vision, Mission & Markets',
  description: 'Mercury Solutions: vision, mission, direction, clients and markets across Vietnam, Japan, Singapore and Australia.',
  alternates: { canonical: '/about/', languages: localeAlternates('about') },
}

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  )
}
