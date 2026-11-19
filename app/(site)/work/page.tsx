import { localeAlternates } from '@/lib/locale-seo'
import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import WorkPage from '@/components/pages/WorkPage'

export const metadata: Metadata = {
  title: 'Projects — ERP, HR Tech, GovTech & Sport Tech',
  description: 'Featured Mercury Solutions projects: ERP, fitness tech, HR tech, GovTech and sport tech across Vietnam, Japan and Singapore.',
  alternates: { canonical: '/work/', languages: localeAlternates('work') },
}

export default function Page() {
  return (
    <PageShell>
      <WorkPage />
    </PageShell>
  )
}
