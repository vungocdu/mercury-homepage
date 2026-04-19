import type { Metadata } from 'next'
import MyArmClient from './MyArmClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'MyARM | Japanese Workflow & Collaboration Platform',
  description:
    'MyARM by Mercury Solutions and MyArms Japan. A mobile-first workflow platform for jobs, missions, meetings, team coordination, document access, and deadline visibility across field and office teams.',
  keywords: [
    'MyARM',
    'MyArms',
    'workflow platform',
    'business management app',
    'team collaboration mobile app',
    'task organization software',
    'project progress tracking',
    'Laravel backend',
    'Flutter mobile app',
    'Japanese business software',
    'Mercury Solutions',
  ],
  openGraph: {
    title: 'MyARM | Japanese Workflow & Collaboration Platform',
    description:
      'Mobile-first workflow orchestration for teams that manage jobs, meetings, missions, documents, and deadlines with Japanese-style operational discipline.',
    url: 'https://www.mercurysolutions.vn/myarm',
  },
}

export default function MyArmPage() {
  return <MyArmClient />
}
