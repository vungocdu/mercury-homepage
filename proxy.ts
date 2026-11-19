import { NextRequest, NextResponse } from 'next/server'
/** Keep all trial URLs on the existing website; no separate DNS required. */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (path === '/erp-trial' || path.startsWith('/erp-trial/')) {
    const rest = path.replace(/^\/erp-trial/, '')
    const vi = /^\/vi(?:\/|$)/.test(rest)
    const suffix = vi ? rest.replace(/^\/vi/, '') : rest
    if (!['/', '/terms/', '/privacy/', '/terms', '/privacy', ''].includes(suffix)) return new NextResponse('Not found', { status: 404 })
    const url = request.nextUrl.clone(); url.pathname = `/trial/${vi ? 'vi' : 'ja'}${suffix || '/'}`
    return NextResponse.rewrite(url)
  }
  const match = path.match(/^\/trial\/(ja|vi)(\/.*)?$/)
  if (match) {
    const url = request.nextUrl.clone(); url.pathname = `/erp-trial${match[1] === 'vi' ? '/vi' : ''}${match[2] || '/'}`
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}
export const config = { matcher: ['/erp-trial/:path*', '/trial/:path*'] }
