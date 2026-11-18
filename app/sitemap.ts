import { MetadataRoute } from 'next'
import { services, projects } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mercurysolutions.vn'
  const now = new Date()

  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path || '/'}${path ? '/' : ''}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  })

  return [
    entry('', 1),
    entry('/about', 0.8),
    entry('/services', 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry('/work', 0.9),
    ...projects.map((p) => entry(`/work/${p.slug}`, 0.7)),
    entry('/careers', 0.6),
    entry('/contact', 0.9),
    entry('/tvc', 0.7),
  ]
}
