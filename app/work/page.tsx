import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import WorkPage from '@/components/pages/WorkPage'

export const metadata: Metadata = {
  title: 'Projects — ERP, HR Tech, GovTech & Sport Tech',
  description: 'Eight featured Mercury Solutions projects: ERP, fitness tech, HR tech, GovTech and sport tech across Vietnam, Japan and Singapore.',
  alternates: { canonical: '/work/' },
}

export default function Page() {
  return (
    <PageShell>
      <WorkPage />
    </PageShell>
  )
}
