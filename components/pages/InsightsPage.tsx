import { articles, articlePath } from '@/lib/articles'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
export default function InsightsPage({ language = 'en' }: { language?: 'en' | 'vi' | 'ja' }) {
  const ja = language === 'ja'; const vi = language === 'vi'
  const list = language === 'en' ? articles : articles.filter(a => a.language === language)
  return <><PageHero eyebrow="insights" title={ja ? '業務改善のヒント' : vi ? 'Kiến thức triển khai phần mềm' : 'Practical software guides'} text={ja ? '受発注・在庫管理と会計データの準備を考えるための実務ガイド。' : vi ? 'Hướng dẫn xác định nhu cầu, chuẩn bị dữ liệu và triển khai phần mềm cho doanh nghiệp.' : 'Practical guides in Vietnamese and Japanese for business software decisions.'} crumbs={[{ label: ja ? 'ホーム' : vi ? 'Trang chủ' : 'Home', href: '/' }, { label: 'Insights' }]} /><section className="container-custom grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">{list.map(a => <a key={articlePath(a)} href={articlePath(a)} lang={a.language} className="rounded-lg border border-slate-200 bg-white p-6 text-slate-900 hover:border-blue-600"><span className="text-xs text-blue-700">{a.language === 'vi' ? 'Tiếng Việt' : '日本語'}</span><h2 className="my-3 text-xl font-semibold">{a.title}</h2><p className="text-slate-600">{a.description}</p></a>)}</section><CtaBand /></>
}
