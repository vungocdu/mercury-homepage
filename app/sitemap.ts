import { MetadataRoute } from 'next'
import { services, projects } from '@/lib/content'
import { localeAlternates } from '@/lib/locale-seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mercurysolutions.vn'

  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path || '/'}${path ? '/' : ''}`,
    changeFrequency: 'monthly',
    priority,
  })

  const entries = [
    entry('', 1),
    entry('/about', 0.8),
    entry('/services', 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry('/work', 0.9),
    ...projects.map((p) => entry(`/work/${p.slug}`, 0.7)),
    entry('/careers', 0.6),
    entry('/contact', 0.9),
  ]
  return [...entries.flatMap(e => { const path = new URL(e.url).pathname.replace(/^\/+|\/+$/g, ''); const languages = localeAlternates(path); return ['en', 'vi', 'ja'].map(lang => ({ ...e, url: languages[lang as 'en' | 'vi' | 'ja'], alternates: { languages } })) }), entry('/tvc', 0.7)]
}
