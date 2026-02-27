import type { Metadata } from 'next'
import ProcessTechnologyClient from './ProcessTechnologyClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Process & Technology Stack | AI, DevOps, Cloud & Agile Development',
  description: 'Mercury Solutions development methodology: Agile/Scrum, CI/CD DevOps pipelines, AI/ML integration, cloud-native architecture, and modern tech stack — React, Next.js, Go, Flutter, Laravel, PostgreSQL, Docker, Kubernetes.',
  keywords: [
    'software development process',
    'DevOps CI/CD',
    'AI development',
    'machine learning',
    'cloud-native architecture',
    'agile methodology',
    'technology stack',
    'React',
    'Next.js',
    'Go Golang',
    'Laravel PHP',
    'Flutter mobile',
    'Docker Kubernetes',
    'PostgreSQL',
    'microservices architecture',
    'quality assurance',
    'Mercury Solutions technology',
    'Vietnam software development',
  ],
  openGraph: {
    title: 'Process & Technology | AI, DevOps, Cloud & Agile Development',
    description: 'Agile development, CI/CD DevOps, AI/ML integration, cloud-native architecture & modern tech stack: React, Next.js, Go, Flutter, Laravel.',
    url: 'https://www.mercurysolutions.vn/process-technology',
  },
}

export default function ProcessTechnologyPage() {
  return <ProcessTechnologyClient />
}
