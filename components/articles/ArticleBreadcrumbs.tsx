import Link from 'next/link'
import type { Article } from '@/lib/articles/types'
export default function ArticleBreadcrumbs({ article }: { article: Article }) {
  const ja = article.language === 'ja'
  return <nav aria-label={ja ? 'パンくずリスト' : 'Đường dẫn'} className="mb-8 text-sm">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-slate-600">
      <li><Link className="inline-flex min-h-11 items-center text-blue-700 hover:underline" href={`/${article.language}/`}>{ja ? 'ホーム' : 'Trang chủ'}</Link></li>
      <li aria-hidden="true">›</li>
      <li><Link className="inline-flex min-h-11 items-center text-blue-700 hover:underline" href={`/${article.language}/insights/`}>Insights</Link></li>
      <li aria-hidden="true">›</li>
      <li aria-current="page" className="min-w-0 break-words">{article.title}</li>
    </ol>
  </nav>
}
