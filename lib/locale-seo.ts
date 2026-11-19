import { SITE_URL } from './seo'
export function localeAlternates(path: string) {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, '')}/` : ''
  return { en: `${SITE_URL}/${suffix}`, vi: `${SITE_URL}/vi/${suffix}`, ja: `${SITE_URL}/ja/${suffix}`, 'x-default': `${SITE_URL}/${suffix}` }
}
