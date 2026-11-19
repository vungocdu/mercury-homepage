import TrialLink from '@/components/trial/TrialLink'
import { LINKEDIN_COMPANY_URL } from '@/lib/brand'
import JsonLd from '@/components/site/JsonLd'
import { trialFaq } from '@/lib/trial/faq'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TrialForm from '@/components/trial/TrialForm'
import { company, legalContent, trialCopy, type TrialLang } from '@/lib/trial/content'
import { LEGAL_APPROVED, TERMS_VERSION, trialUrl } from '@/lib/trial/config'
type Props = { params: Promise<{ locale: string; page?: string[] }> }
const validPages = ['', 'terms', 'privacy']
export const dynamicParams = false
export function generateStaticParams() { return ['ja', 'vi'].flatMap(locale => validPages.map(page => ({ locale, page: page ? [page] : [] }))) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page = [] } = await params
  if (locale !== 'ja' && locale !== 'vi') return {}
  const c = trialCopy[locale]; const path = page.join('/'); const title = path === 'terms' ? c.terms : path === 'privacy' ? c.privacy : c.title
  return { title: `${title} | Mercury ERP`, description: c.description, alternates: { canonical: trialUrl(locale, path), languages: { ja: trialUrl('ja', path), vi: trialUrl('vi', path), 'x-default': trialUrl('ja', path) } }, robots: { index: LEGAL_APPROVED, follow: true }, openGraph: { title, description: c.description, url: trialUrl(locale, path), locale: locale === 'ja' ? 'ja_JP' : 'vi_VN' } }
}
export default async function Page({ params }: Props) {
  const { locale, page = [] } = await params
  if (locale !== 'ja' && locale !== 'vi') notFound()
  const lang: TrialLang = locale; const path = page.join('/'); if (!validPages.includes(path)) notFound()
  const c = trialCopy[lang]; const base = lang === 'ja' ? '/erp-trial/' : '/erp-trial/vi/'; const legal = path === 'terms' || path === 'privacy'
  return <div className="mx-auto max-w-5xl px-5">
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: company.name, url: 'https://www.mercurysolutions.vn/', email: company.email, sameAs: [LINKEDIN_COMPANY_URL] }} />
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 py-6"><TrialLink href={base} className="text-xl font-bold">Mercury ERP</TrialLink><nav className="flex gap-5" aria-label="Language"><TrialLink lang="ja" href={trialUrl('ja', path)}>日本語</TrialLink><TrialLink lang="vi" href={trialUrl('vi', path)}>Tiếng Việt</TrialLink></nav></header>
    {!LEGAL_APPROVED && <p className="my-6 rounded border border-amber-200 bg-amber-50 p-4 text-amber-950">{lang === 'ja' ? '確認用ドラフト — 条件を確認後、受付を開始します。' : 'Bản dự thảo để rà soát — mở đăng ký sau khi xác nhận điều kiện.'}</p>}
    <main className="py-12">{legal ? <article><h1 className="text-3xl font-bold">{path === 'terms' ? c.terms : c.privacy}</h1><p className="mt-3 text-sm">{TERMS_VERSION}</p>{legalContent[lang][path].map(([heading, text]) => <section className="mt-8" key={heading}><h2 className="text-xl font-semibold">{heading}</h2><p className="mt-3 leading-relaxed">{text}</p></section>)}</article> : <><div className="grid items-start gap-10 lg:grid-cols-2"><section><p className="font-semibold text-blue-700">Mercury ERP · {lang === 'ja' ? '30日間トライアル' : 'Trial 30 ngày'}</p><h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight">{c.title}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed">{c.hero}</p><TrialLink href="#register" className="mt-8 inline-block rounded-full bg-blue-700 px-7 py-3 font-semibold text-white">{c.request}</TrialLink><p className="mt-4 text-sm text-slate-600">{lang === 'ja' ? '担当者によるアカウント準備 · 有効化から30日 · 自動課金なし' : 'Mercury cấp tài khoản · 30 ngày từ kích hoạt · Không tự thu phí'}</p></section><section id="register" className="scroll-mt-8"><h2 className="mb-5 text-2xl font-semibold">{c.request}</h2><TrialForm language={lang} enabled={LEGAL_APPROVED && process.env.TRIAL_REGISTRATION_ENABLED === 'true'} base={base} /></section></div><section className="mt-16"><h2 className="text-2xl font-semibold">{lang === 'ja' ? '確認できる業務範囲' : 'Phạm vi nghiệp vụ'}</h2><ul className="mt-5 grid gap-4 sm:grid-cols-2">{c.scope.map(s => <li className="rounded border border-slate-200 bg-white p-5" key={s}>{s}</li>)}</ul><p className="mt-5 leading-relaxed">{c.scopeNote}</p></section><section className="mt-14"><h2 className="text-2xl font-semibold">{lang === 'ja' ? 'ご利用開始までの流れ' : 'Cách bắt đầu'}</h2><ol className="mt-5 list-decimal space-y-3 pl-6">{c.steps.map(s => <li key={s}>{s}</li>)}</ol></section><section className="mt-14"><h2 className="text-2xl font-semibold">{lang === 'ja' ? 'よくある質問' : 'Câu hỏi thường gặp'}</h2><div className="mt-5 space-y-3">{trialFaq[lang].map(([question, answer]) => <details key={question} className="rounded border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 leading-relaxed">{answer}</p></details>)}</div></section></> }</main>
    <footer className="space-y-3 border-t border-slate-200 py-8 text-sm"><p className="font-semibold">{company.name}</p><p>{company.address}</p><TrialLink className="inline-flex min-h-11 items-center gap-2 underline" href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer">{lang === 'ja' ? 'LinkedInでMercury Solutionsの会社情報を見る ↗' : 'Xem Mercury Solutions trên LinkedIn ↗'}</TrialLink><TrialLink className="block underline" href={`mailto:${company.email}`}>{company.email}</TrialLink><p><TrialLink href={`${base}terms/`} className="underline">{c.terms}</TrialLink> · <TrialLink href={`${base}privacy/`} className="underline">{c.privacy}</TrialLink></p><TrialLink className="block underline" href={`https://www.mercurysolutions.vn/${lang}/`}>Mercury Solutions</TrialLink></footer>
  </div>
}
