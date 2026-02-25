import type { Metadata } from 'next'
import ContainerCalculatorClient from './ContainerCalculatorClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'ContCal | 3D Container Packing Optimizer',
  description:
    'ContCal — AI-powered 3D container packing optimization. Maximize space utilization to 90%+, reduce shipping costs by 10-15%, and cut planning time from hours to minutes with interactive 3D visualization and 20+ automated business rules.',
  keywords: [
    'container packing optimization',
    '3D bin packing',
    'container loading software',
    'shipping optimization',
    'logistics tool',
    'furniture packing',
    'container calculator',
    'beam search algorithm',
    'Three.js visualization',
    'Mercury Solution',
  ],
  openGraph: {
    title: 'ContCal | 3D Container Packing Optimizer',
    description:
      'AI-powered container packing optimization with interactive 3D visualization. Reduce shipping costs by 10-15% with intelligent space utilization.',
    url: 'https://www.mercurysolutions.vn/container-calculator',
  },
}

export default function ContainerCalculatorPage() {
  return <ContainerCalculatorClient />
}
