import ArticleBreadcrumbs from './ArticleBreadcrumbs'
import PageShell from '@/components/site/PageShell'
import JsonLd from '@/components/site/JsonLd'
import type { Article } from '@/lib/articles/types'
import { articlePath } from '@/lib/articles'
import { SITE_URL } from '@/lib/seo'
export default function ArticlePage({ article: a }: { article: Article }) {
  const ja = a.language === 'ja'; const url = `${SITE_URL}${articlePath(a)}`
  return <PageShell>
    <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, inLanguage: a.language, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Mercury Solutions Vietnam', url: SITE_URL } }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: ja ? 'ホーム' : 'Trang chủ', item: `${SITE_URL}/${a.language}/` }, { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/${a.language}/insights/` }, { '@type': 'ListItem', position: 3, name: a.title, item: url }] }]} />
    <article lang={a.language} className="article-page text-slate-900"><div className="container-custom article-content">
      <ArticleBreadcrumbs article={a} />
      <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{a.title}</h1>
      <p className="mt-6 text-xl leading-relaxed">{a.answer}</p>
      <div className="mt-12 space-y-10 text-lg leading-relaxed">{a.sections.map(s => <section key={s.heading}><h2 className="mb-4 text-2xl font-semibold">{s.heading}</h2>{s.paragraphs.map((p, i) => <p className="mb-4" key={i}>{p}</p>)}{s.bullets && <ul className="list-disc space-y-2 pl-6">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>}</section>)}</div>
      <aside className="mt-12 space-y-3 border-t border-slate-200 pt-8"><h2 className="text-xl font-semibold">{ja ? '関連情報・お問い合わせ' : 'Tìm hiểu thêm'}</h2>{a.links.map(l => <p key={l.href}><a className="text-blue-700 underline" href={l.href}>{l.label}</a></p>)}</aside>
      {!!a.sources?.length && <section className="mt-10"><h2 className="text-xl font-semibold">{ja ? '参考資料' : 'Nguồn tham khảo'}</h2><ul className="mt-4 space-y-2">{a.sources.map(s => <li key={s.href}><a className="text-blue-700 underline" href={s.href}>{s.label}</a></li>)}</ul></section>}
    </div></article>
  </PageShell>
}
