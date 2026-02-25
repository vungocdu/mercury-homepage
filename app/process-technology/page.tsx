import type { Metadata } from 'next'
import ProcessTechnologyClient from './ProcessTechnologyClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Process & Technology | Mercury Solutions',
  description: 'Discover our proven software development methodology and cutting-edge technology stack. Agile methodology, modern technologies, quality assurance.',
  keywords: [
    'software development process',
    'technology stack',
    'agile methodology',
    'React',
    'Next.js',
    'Go',
    'Laravel',
    'Flutter',
    'DevOps',
    'AI',
    'machine learning',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'Process & Technology | Mercury Solutions',
    description: 'Discover our proven software development methodology and cutting-edge technology stack. Agile methodology, modern technologies, quality assurance.',
    url: 'https://www.mercurysolutions.vn/process-technology',
  },
}

export default function ProcessTechnologyPage() {
  return <ProcessTechnologyClient />
}
