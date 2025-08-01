import type { Metadata } from 'next'
import TVCPageClient from './TVCPageClient'

export const metadata: Metadata = {
  title: 'TVC Services - Professional Digital Art & Video Production',
  description: 'Mercury Solutions offers professional TVC (Television Commercial) services including digital art, video production, motion graphics, and creative content for brands and businesses.',
  keywords: [
    'TVC services',
    'digital art',
    'video production',
    'television commercial',
    'motion graphics',
    'creative services',
    'brand video',
    'advertising video',
    'Vietnam video production'
  ],
  openGraph: {
    title: 'TVC Services - Professional Digital Art & Video Production',
    description: 'Professional TVC services including digital art, video production, motion graphics, and creative content.',
    url: 'https://www.mercurysolutions.vn/tvc',
  },
}

export default function TVCPage() {
  return <TVCPageClient />
}