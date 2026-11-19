import { notFound } from 'next/navigation'
import RootLayout from '../(site)/layout'
import type { Metadata } from 'next'
export const metadata: Metadata = { metadataBase: new URL('https://www.mercurysolutions.vn'), title: { default: 'Mercury Solutions', template: '%s | Mercury Solutions' }, robots: { index: true, follow: true }, openGraph: { type: 'website', siteName: 'Mercury Solutions', images: ['/og-image.png'] } }

export function generateStaticParams() { return [{ lang: 'vi' }, { lang: 'ja' }] }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (lang !== 'vi' && lang !== 'ja') notFound()
  return <RootLayout language={lang}>{children}</RootLayout>
}
