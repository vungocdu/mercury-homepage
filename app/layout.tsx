import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollIndicator from '@/components/ScrollIndicator'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mercury Solutions Vietnam | AI Software Development, HR Tech, Sport Tech & Hotel Tech',
    template: '%s | Mercury Solutions'
  },
  description: 'Mercury Solutions Vietnam — AI-powered software development company specializing in HR Tech, Sport Tech, Hotel Tech & Business Operations. Custom SaaS platforms, mobile apps, DevOps, cloud solutions, and digital transformation for enterprises across Southeast Asia.',
  keywords: [
    'Mercury Solutions Vietnam',
    'AI software development',
    'HR Tech',
    'Sport Tech',
    'Hotel Tech',
    'software development company Vietnam',
    'DevOps',
    'cloud solutions',
    'SaaS platform',
    'digital transformation',
    'machine learning',
    'computer vision',
    'mobile app development',
    'web development',
    'enterprise software',
    'custom software Vietnam',
    'AI solutions',
    'workforce management',
    'property management system',
    'fitness management software',
    'Vietnam technology company',
    'Hanoi software company',
    'video production',
    'TVC services'
  ],
  authors: [{ name: 'Mercury Solutions Vietnam Company Limited' }],
  creator: 'Mercury Solutions Vietnam',
  publisher: 'Mercury Solutions Vietnam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mercurysolutions.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mercurysolutions.vn',
    title: 'Mercury Solutions Vietnam | AI Software Development, HR Tech, Sport Tech & Hotel Tech',
    description: 'AI-powered software company in Vietnam. Custom HR Tech, Sport Tech, Hotel Tech platforms, DevOps, cloud solutions & digital transformation.',
    siteName: 'Mercury Solutions Vietnam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mercury Solutions Vietnam - AI Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercury Solutions Vietnam | AI Software Development, HR Tech, Sport Tech & Hotel Tech',
    description: 'AI-powered software company in Vietnam. Custom HR Tech, Sport Tech, Hotel Tech platforms, DevOps, cloud solutions & digital transformation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2047F4" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js" defer></script>
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <LanguageProvider>
          <Analytics />
          <ScrollIndicator />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 