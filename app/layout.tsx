import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollIndicator from '@/components/ScrollIndicator'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mercury Solutions - Data Analysis & Innovative Technologies',
    template: '%s | Mercury Solutions'
  },
  description: 'Mercury Solutions specializes in Data Analysis, Computer Vision, Web Development, Mobile App Development, and innovative technologies. We provide comprehensive solutions for businesses from SMEs to MNCs.',
  keywords: [
    'data analysis',
    'computer vision',
    'web development',
    'mobile app development',
    'AI solutions',
    'machine learning',
    'IoT platform',
    'software development',
    'digital transformation',
    'Vietnam technology',
    'TVC services',
    'digital art',
    'video production',
    'creative services'
  ],
  authors: [{ name: 'Mercury Solutions' }],
  creator: 'Mercury Solutions',
  publisher: 'Mercury Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mercury-solutions.minova.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mercury-solutions.minova.vn',
    title: 'Mercury Solutions - Data Analysis & Innovative Technologies',
    description: 'Mercury Solutions specializes in Data Analysis, Computer Vision, Web Development, Mobile App Development, and innovative technologies.',
    siteName: 'Mercury Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mercury Solutions - Data Analysis & Innovative Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercury Solutions - Data Analysis & Innovative Technologies',
    description: 'Mercury Solutions specializes in Data Analysis, Computer Vision, Web Development, Mobile App Development, and innovative technologies.',
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
        <meta name="theme-color" content="#0ea5e9" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"></script>
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <LanguageProvider>
          <ScrollIndicator />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 