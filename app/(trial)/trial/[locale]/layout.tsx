import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { IBM_Plex_Sans } from 'next/font/google'
import '../../../globals.css'
const font = IBM_Plex_Sans({ subsets: ['latin', 'vietnamese'], weight: ['400', '500', '600', '700'], display: 'swap' })
export function generateStaticParams() { return [{ locale: 'ja' }, { locale: 'vi' }] }
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'vi' && locale !== 'ja') notFound()
  return <html lang={locale}><body className={`${font.className} bg-slate-50 text-slate-900`}>{children}<Analytics /><SpeedInsights /></body></html>
}
