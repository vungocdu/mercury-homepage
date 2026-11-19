import { LINKEDIN_COMPANY_URL, SUPPORT_EMAIL } from './brand'
export const SITE_URL = 'https://www.mercurysolutions.vn'

/** Absolute URL with the trailing slash this site uses (next.config trailingSlash: true). */
export const abs = (path: string) => `${SITE_URL}${path === '/' ? '/' : path.replace(/\/?$/, '/')}`

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mercury Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/mercury-logo.png`,
  description:
    'Mercury Solutions builds software, AI & agentic automation, computer vision and digital-transformation solutions for businesses in Vietnam, Japan and Singapore.',
  email: SUPPORT_EMAIL,
  sameAs: [LINKEDIN_COMPANY_URL],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Ngo 41 Thai Ha, Trung Liet, Dong Da',
    addressLocality: 'Hanoi',
    addressCountry: 'VN',
  },
}

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
})
