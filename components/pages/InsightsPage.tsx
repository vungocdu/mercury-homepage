import { articles, articlePath } from '@/lib/articles'
import InsightsIndex from '@/components/articles/InsightsIndex'

export default function InsightsPage({ language = 'en' }: { language?: 'en' | 'vi' | 'ja' }) {
  // Only card summaries cross the client boundary; article bodies remain server-only.
  const summaries = articles.map(a => ({ language: a.language, title: a.title, description: a.description, href: articlePath(a) }))
  return <InsightsIndex key={language} articles={summaries} />
}
