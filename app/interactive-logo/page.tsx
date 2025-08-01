import type { Metadata } from 'next'
import MercuryInteractiveLogo from '@/components/MercuryInteractiveLogo'

export const metadata: Metadata = {
  title: 'Interactive Logo - Mercury Solutions',
  description: 'Experience the interactive particle effect with Mercury Solutions logo',
  keywords: [
    'interactive logo',
    'particle effect',
    'Mercury Solutions',
    'canvas animation',
    'interactive design'
  ],
  openGraph: {
    title: 'Interactive Logo - Mercury Solutions',
    description: 'Experience the interactive particle effect with Mercury Solutions logo',
    url: 'https://www.mercurysolutions.vn/interactive-logo',
  },
}

export default function InteractiveLogoPage() {
  return <MercuryInteractiveLogo />
} 