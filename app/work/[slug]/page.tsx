import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageShell from '@/components/site/PageShell'
import WorkDetail from '@/components/pages/WorkDetail'
import { projects } from '@/lib/content'
import JsonLd from '@/components/site/JsonLd'
import { abs, breadcrumbs } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) return {}
  return {
    title: `${p.name.en} — ${p.cluster.en} Case Study`,
    description: `${p.tagline.en}. ${p.overview.en}`.slice(0, 158),
    openGraph: { title: `${p.name.en} — ${p.tagline.en}`, url: abs(`/work/${p.slug}`) },
    alternates: { canonical: `/work/${p.slug}/` },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) notFound()
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: p.name.en,
            headline: p.tagline.en,
            description: p.overview.en,
            url: abs(`/work/${p.slug}`),
            creator: { '@type': 'Organization', name: 'Mercury Solutions' },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/work' },
            { name: p.name.en, path: `/work/${p.slug}` },
          ]),
        ]}
      />
      <WorkDetail slug={slug} />
    </PageShell>
  )
}
