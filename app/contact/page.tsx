import type { Metadata } from 'next'
import PageShell from '@/components/site/PageShell'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Consultation',
  description: 'Contact Mercury Solutions: enquiry form, phone, email and office address in Hanoi.',
  alternates: { canonical: '/contact/' },
}

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  )
}
