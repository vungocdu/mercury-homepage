import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageShell from '@/components/site/PageShell'
import ServiceDetail from '@/components/pages/ServiceDetail'
import { services } from '@/lib/content'
import JsonLd from '@/components/site/JsonLd'
import { abs, breadcrumbs, SITE_URL } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: `${s.title.en} Services`,
    description: `${s.intro.en}`.slice(0, 158),
    openGraph: { title: `${s.title.en} Services | Mercury Solutions`, url: abs(`/services/${s.slug}`) },
    alternates: { canonical: `/services/${s.slug}/` },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title.en,
            description: s.intro.en,
            url: abs(`/services/${s.slug}`),
            provider: { '@type': 'Organization', name: 'Mercury Solutions', url: SITE_URL },
            areaServed: ['VN', 'JP', 'SG'],
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: s.title.en, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <ServiceDetail slug={slug} />
    </PageShell>
  )
}
