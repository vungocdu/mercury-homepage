import { localeAlternates } from '@/lib/locale-seo'
import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import CareersPage from '@/components/pages/CareersPage'

export const metadata: Metadata = {
  title: 'Careers — Build Software & AI with Mercury',
  description: 'Build software, AI and digital-transformation products with Mercury Solutions.',
  alternates: { canonical: '/careers/', languages: localeAlternates('careers') },
}

export default function Page() {
  return (
    <PageShell>
      <CareersPage />
    </PageShell>
  )
}
