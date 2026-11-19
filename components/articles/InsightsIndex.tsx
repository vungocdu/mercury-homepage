'use client'

import { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import PageHero from '@/components/site/PageHero'
import { INSIGHTS_PAGE_SIZE, paginate, pageNumbers } from '@/lib/articles/pagination'

type Summary = { language: 'vi' | 'ja'; title: string; description: string; href: string }
type Language = 'en' | 'vi' | 'ja'
const copy = {
  en: { title: 'Practical software guides', text: 'Guides to defining requirements, preparing data and implementing business software.', home: 'Home', topics: 'Topics', read: 'Read guide', previous: 'Previous', next: 'Next', pagination: 'Article pagination', empty: 'English articles are coming soon.', emptyText: 'Explore our Vietnamese and Japanese guides using the language selector in the header.', count: (from: number, to: number, total: number) => `${from}–${to} of ${total} topics`, page: (n: number) => `Page ${n}` },
  vi: { title: 'Kiến thức triển khai phần mềm', text: 'Hướng dẫn xác định nhu cầu, chuẩn bị dữ liệu và triển khai phần mềm cho doanh nghiệp.', home: 'Trang chủ', topics: 'Bài viết', read: 'Đọc bài viết', previous: 'Trước', next: 'Sau', pagination: 'Phân trang bài viết', empty: 'Chưa có bài viết tiếng Việt.', emptyText: 'Vui lòng quay lại sau hoặc chọn ngôn ngữ khác trên header.', count: (from: number, to: number, total: number) => `Hiển thị ${from}–${to} trong ${total} bài viết`, page: (n: number) => `Trang ${n}` },
  ja: { title: '業務改善のヒント', text: '受発注・在庫管理と会計データの準備を考えるための実務ガイド。', home: 'ホーム', topics: '記事一覧', read: '記事を読む', previous: '前へ', next: '次へ', pagination: '記事のページ切り替え', empty: '日本語の記事は準備中です。', emptyText: '後ほどご覧いただくか、ヘッダーで別の言語を選択してください。', count: (from: number, to: number, total: number) => `全${total}件中 ${from}–${to}件を表示`, page: (n: number) => `${n}ページ` },
}

export default function InsightsIndex({ articles }: { articles: Summary[] }) {
  const { language } = useLanguage()
  // Switching header language resets pagination with the filtered list.
  return <LocalizedIndex key={language} language={language} articles={articles.filter(a => a.language === language)} />
}

function LocalizedIndex({ language, articles }: { language: Language; articles: Summary[] }) {
  const c = copy[language]
  const [requestedPage, setPage] = useState(1)
  const heading = useRef<HTMLHeadingElement>(null)
  const { page, totalPages, items, from, to } = paginate(articles, requestedPage)
  function changePage(next: number) {
    setPage(next)
    heading.current?.focus({ preventScroll: true })
    heading.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }
  const button = 'inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700'
  return <>
    <PageHero eyebrow="insights" title={c.title} text={c.text} crumbs={[{ label: c.home, href: '/' }, { label: 'Insights' }]} />
    <section className="bg-slate-50/70 py-12 sm:py-16" aria-labelledby="insights-heading">
      <div className="container-custom">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 id="insights-heading" ref={heading} tabIndex={-1} className="scroll-mt-28 text-2xl font-semibold text-slate-900 focus:outline-none">{c.topics}</h2>
          <p className="text-sm text-slate-500" aria-live="polite">{c.count(from, to, articles.length)}</p>
        </div>
        <div id="insights-results" className="grid gap-6 md:grid-cols-2">
          {items.map(a => <a key={a.href} href={a.href} lang={a.language} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:p-8">
            <span className="text-xs font-medium tracking-wide text-blue-700">{a.language === 'vi' ? 'Tiếng Việt' : '日本語'}</span>
            <h3 className="mb-4 mt-3 text-xl font-semibold leading-snug group-hover:text-blue-700">{a.title}</h3>
            <p className="mb-8 leading-relaxed text-slate-600">{a.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700">{c.read}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </a>)}
        </div>
        {!items.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><h3 className="text-xl font-semibold text-slate-900">{c.empty}</h3><p className="mx-auto mt-3 max-w-lg text-slate-600">{c.emptyText}</p></div>}
      </div>
    </section>
    {/* Last content block: pagination sits directly above the site footer. */}
    <nav aria-label={c.pagination} className="border-t border-slate-200 bg-white py-6 sm:py-8" data-page-size={INSIGHTS_PAGE_SIZE}>
      <div className="container-custom flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button type="button" className={button} disabled={page === 1} aria-controls="insights-results" onClick={() => changePage(page - 1)}><ChevronLeft className="h-4 w-4" aria-hidden="true" />{c.previous}</button>
          {pageNumbers(page, totalPages).map((n, i) => n === 'gap' ? <span key={`gap-${i}`} className="px-1 text-slate-400" aria-hidden="true">…</span> : <button type="button" key={n} aria-label={c.page(n)} aria-current={n === page ? 'page' : undefined} aria-controls="insights-results" className={`${button} ${n === page ? '!border-blue-600 !bg-blue-600 !text-white' : ''}`} onClick={() => changePage(n)}>{n}</button>)}
          <button type="button" className={button} disabled={page === totalPages} aria-controls="insights-results" onClick={() => changePage(page + 1)}>{c.next}<ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
        </div>
        <p className="text-sm text-slate-500">{c.page(page)} / {totalPages}</p>
      </div>
    </nav>
  </>
}
