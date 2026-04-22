import type { Metadata } from 'next'
import TNASystemClient from '@/app/tna-system/TNASystemClient'
import { tnaContent } from '@/app/tna-system/tna-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: tnaContent.ja.meta.title,
  description: tnaContent.ja.meta.description,
  keywords: [
    '勤怠管理システム',
    '製造業 給与計算',
    'AI勤怠',
    'シフト管理',
    '休暇管理',
    'MISA連携',
    '工場 人事システム',
    'Mercury Solutions',
  ],
  alternates: {
    canonical: '/ja/tna-system',
    languages: {
      en: '/tna-system',
      ja: '/ja/tna-system',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.mercurysolutions.vn/ja/tna-system',
    title: tnaContent.ja.meta.title,
    description: tnaContent.ja.meta.description,
  },
}

export default function JapaneseTNASystemPage() {
  return <TNASystemClient locale="ja" />
}
