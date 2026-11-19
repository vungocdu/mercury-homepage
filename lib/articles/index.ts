import 'server-only'
import { articlesVi } from '@/content/articles/vi'
import { articlesJa } from '@/content/articles/ja'
export const articles = [...articlesVi, ...articlesJa]
export const articlePath = (a: { language: string; slug: string }) => `/${a.language}/insights/${a.slug}/`
export const findArticle = (language: string, slug: string) => articles.find(a => a.language === language && a.slug === slug)

// Fail the build on an invalid entry rather than publish ambiguous URLs.
const articleKeys = new Set<string>()
for (const article of articles) {
  const key = `${article.language}/${article.slug}`
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || articleKeys.has(key)) throw new Error(`Invalid or duplicate article key: ${key}`)
  if (!article.title.trim() || !article.description.trim() || !article.answer.trim() || !article.sections.length) throw new Error(`Incomplete article: ${key}`)
  articleKeys.add(key)
}
