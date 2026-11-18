import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import ServicesPage from '@/components/pages/ServicesPage'

export const metadata: Metadata = {
  title: 'Services — Software, AI, Computer Vision & More',
  description:
    'Software development, AI & agentic automation, digital transformation, computer vision, Meta platform integration and drone light shows.',
  alternates: { canonical: '/services/' },
}

export default function Page() {
  return (
    <PageShell>
      <ServicesPage />
    </PageShell>
  )
}
