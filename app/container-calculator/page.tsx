import type { Metadata } from 'next'
import ContainerCalculatorClient from './ContainerCalculatorClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'ContCal | AI-Powered 3D Container Packing & Logistics Optimizer',
  description:
    'ContCal — AI-powered 3D container packing optimization by Mercury Solutions. Maximize space utilization to 90%+, reduce shipping costs by 10-15%, and cut planning time from hours to minutes with interactive 3D visualization and 20+ automated business rules.',
  keywords: [
    'AI logistics optimization',
    'container packing optimizer',
    '3D bin packing algorithm',
    'container loading software',
    'shipping cost optimization',
    'logistics technology',
    'supply chain software',
    'AI-powered logistics',
    'container calculator',
    'beam search algorithm',
    '3D visualization',
    'business operations software',
    'Mercury Solutions',
    'Vietnam logistics tech',
  ],
  openGraph: {
    title: 'ContCal | AI 3D Container Packing & Logistics Optimizer',
    description:
      'AI-powered container packing with interactive 3D visualization. Reduce shipping costs by 10-15% with intelligent space utilization.',
    url: 'https://www.mercurysolutions.vn/container-calculator',
  },
}

export default function ContainerCalculatorPage() {
  return <ContainerCalculatorClient />
}
