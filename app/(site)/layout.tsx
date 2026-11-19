import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Sans_JP, Space_Grotesk } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Analytics from '@/components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import JsonLd from '@/components/site/JsonLd'
import { SITE_URL, organization } from '@/lib/seo'

const plex = IBM_Plex_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})


const display = Space_Grotesk({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

const plexJp = IBM_Plex_Sans_JP({
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-jp',
})

export const metadata: Metadata = {
  title: {
    default: 'Mercury Solutions — Software, AI & Digital Transformation',
    template: '%s | Mercury Solutions',
  },
  description:
    'Mercury Solutions builds software, AI & agentic automation, computer vision and digital-transformation solutions for businesses in Vietnam, Japan and Singapore.',
  keywords: [
    'software development Vietnam',
    'AI agent',
    'agentic automation',
    'ERP development',
    'digital transformation',
    'computer vision',
    'Meta platform integration',
    'drone light show',
    'Mercury Solutions',
  ],
  authors: [{ name: 'Mercury Solutions' }],
  creator: 'Mercury Solutions',
  publisher: 'Mercury Solutions',
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN', 'ja_JP'],
    url: SITE_URL,
    title: 'Mercury Solutions — Software, AI & Digital Transformation',
    description: 'Software, AI & agentic automation, computer vision and digital transformation for businesses in Vietnam, Japan and Singapore.',
    siteName: 'Mercury Solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mercury Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercury Solutions — Software, AI & Digital Transformation',
    description: 'Software, AI & agentic automation, computer vision and digital transformation for businesses in Vietnam, Japan and Singapore.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = { themeColor: '#2047F4' }

export default function RootLayout({
  children, language = 'en',
}: {
  children: React.ReactNode; language?: 'en' | 'vi' | 'ja'
}) {
  return (
    <html lang={language} className={`scroll-smooth ${plex.variable} ${plexMono.variable} ${plexJp.variable} ${display.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <JsonLd data={[organization, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Mercury Solutions', url: SITE_URL, inLanguage: ['vi', 'en', 'ja'] }]} />
        <LanguageProvider key={language} initialLanguage={language}>
          <Analytics />
          {children}
        </LanguageProvider>
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
