import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import InsightsPage from '@/components/pages/InsightsPage'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'News, expert articles and trends in ERP, AI, HR Tech and digital transformation from Mercury Solutions.',
  robots: { index: false, follow: true }, // placeholder topics only; enable once real articles are published
  alternates: { canonical: '/insights/' },
}

export default function Page() {
  return (
    <PageShell>
      <InsightsPage />
    </PageShell>
  )
}
