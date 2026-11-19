import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageShell from '@/components/site/PageShell'
import Home from '../../(site)/page'
import AboutPage from '@/components/pages/AboutPage'
import CareersPage from '@/components/pages/CareersPage'
import ContactPage from '@/components/pages/ContactPage'
import InsightsPage from '@/components/pages/InsightsPage'
import ServicesPage from '@/components/pages/ServicesPage'
import ServiceDetail from '@/components/pages/ServiceDetail'
import WorkPage from '@/components/pages/WorkPage'
import WorkDetail from '@/components/pages/WorkDetail'
import JsonLd from '@/components/site/JsonLd'
import { projects, services } from '@/lib/content'
import { SITE_URL } from '@/lib/seo'
import { localeAlternates } from '@/lib/locale-seo'

type Props = { params: Promise<{ lang: string; slug?: string[] }> }
const pages = ['', 'about', 'services', 'work', 'careers', 'contact', 'insights']
const paths = [...pages, ...services.map(s => `services/${s.slug}`), ...projects.map(p => `work/${p.slug}`)]
export function generateStaticParams() { return ['vi', 'ja'].flatMap(lang => paths.map(path => ({ lang, slug: path ? path.split('/') : [] }))) }
export const dynamicParams = false

function content(lang: 'vi' | 'ja', path: string) {
  const service = services.find(s => path === `services/${s.slug}`)
  const project = projects.find(p => path === `work/${p.slug}`)
  const labels: Record<string, [string, string]> = {
    '': ['Giải pháp phần mềm, AI và chuyển đổi số', 'ソフトウェア・AI・デジタル変革'],
    about: ['Về Mercury Solutions', 'Mercury Solutionsについて'],
    services: ['Dịch vụ công nghệ', 'テクノロジーサービス'],
    work: ['Dự án tiêu biểu', '導入事例'], careers: ['Tuyển dụng', '採用情報'],
    contact: ['Liên hệ tư vấn', 'お問い合わせ'], insights: ['Tin tức và kiến thức', 'インサイト'],
  }
  const title = service?.title[lang] ?? project?.name[lang] ?? labels[path]?.[lang === 'vi' ? 0 : 1]
  const description = service?.intro[lang] ?? project?.overview[lang] ?? (lang === 'vi' ? 'Mercury Solutions phát triển phần mềm, AI và giải pháp chuyển đổi số cho doanh nghiệp.' : 'Mercury Solutionsは企業向けソフトウェア、AI、デジタル変革を支援します。')
  return { title, description, service, project }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw, slug = [] } = await params
  if (raw !== 'vi' && raw !== 'ja') return {}
  const lang = raw; const path = slug.join('/'); const { title, description } = content(lang, path)
  if (!title || !paths.includes(path)) return {}
  return { title, description, alternates: { canonical: `${SITE_URL}/${lang}/${path ? `${path}/` : ''}`, languages: localeAlternates(path) }, openGraph: { title: `${title} | Mercury Solutions`, description, url: `${SITE_URL}/${lang}/${path ? `${path}/` : ''}`, locale: lang === 'vi' ? 'vi_VN' : 'ja_JP' } }
}
export default async function LocalePage({ params }: Props) {
  const { lang: raw, slug = [] } = await params
  if (raw !== 'vi' && raw !== 'ja') notFound()
  const lang = raw; const path = slug.join('/')
  if (!paths.includes(path)) notFound()
  const { title, description, service, project } = content(lang, path)
  if (!path) return <Home />
  const page = service ? <ServiceDetail slug={service.slug} /> : project ? <WorkDetail slug={project.slug} /> : path === 'about' ? <AboutPage /> : path === 'services' ? <ServicesPage /> : path === 'work' ? <WorkPage /> : path === 'careers' ? <CareersPage /> : path === 'contact' ? <ContactPage /> : <InsightsPage language={lang} />
  const prefix = `/${lang}`
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: lang === 'vi' ? 'Trang chủ' : 'ホーム', item: `${SITE_URL}${prefix}/` }, { '@type': 'ListItem', position: 2, name: service ? (lang === 'vi' ? 'Dịch vụ' : 'サービス') : (lang === 'vi' ? 'Dự án' : '導入事例'), item: `${SITE_URL}${prefix}/${service ? 'services' : 'work'}/` }, { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}${prefix}/${path}/` } ] }
  return <PageShell>{(service || project) && <JsonLd data={[{ '@context': 'https://schema.org', '@type': service ? 'Service' : 'CreativeWork', name: title, description, url: `${SITE_URL}/${lang}/${path}/`, inLanguage: lang, ...(service ? { provider: { '@type': 'Organization', name: 'Mercury Solutions', url: SITE_URL } } : { creator: { '@type': 'Organization', name: 'Mercury Solutions', url: SITE_URL } }) }, breadcrumb]} />}{page}</PageShell>
}
