export interface Article {
  slug: string
  language: 'vi' | 'ja'
  title: string
  description: string
  answer: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  links: { label: string; href: string }[]
  sources?: { label: string; href: string }[]
}
