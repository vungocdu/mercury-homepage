import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, articlePath, findArticle } from '@/lib/articles'
import ArticlePage from '@/components/articles/ArticlePage'
import { SITE_URL } from '@/lib/seo'
type Props = { params: Promise<{ lang: string; slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return articles.map(a => ({ lang: a.language, slug: a.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params; const a = findArticle(lang, slug)
  if (!a) return {}
  const url = `${SITE_URL}${articlePath(a)}`
  return { title: a.title, description: a.description, alternates: { canonical: url }, openGraph: { type: 'article', title: a.title, description: a.description, url, locale: lang === 'ja' ? 'ja_JP' : 'vi_VN', images: ['/og-image.png'] }, twitter: { card: 'summary_large_image', title: a.title, description: a.description, images: ['/og-image.png'] } }
}
export default async function Page({ params }: Props) { const { lang, slug } = await params; const a = findArticle(lang, slug); if (!a) notFound(); return <ArticlePage article={a} /> }
