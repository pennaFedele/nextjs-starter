import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName, headerName } from './src/app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // Avoid matching for static files, API routes, etc.
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req: NextRequest) {
  // Ignore paths with "icon" or "chrome"
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  
  let lng
  // Try to get language from cookie
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  // If no cookie, check the Accept-Language header
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  // Default to fallback language if still undefined
  if (!lng) lng = fallbackLng

  // Check if the language is already in the path
  const lngInPath = languages.find(loc => req.nextUrl.pathname.startsWith(`/${loc}`))
  const headers = new Headers(req.headers)
  headers.set(headerName, lngInPath || lng)

  // If the language is not in the path, redirect to include it
  if (
    lngInPath &&
    !req.nextUrl.pathname.startsWith(`/${lng}`)
  ) {
    const redirectUrl = `/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`;
    return NextResponse.redirect(
      new URL(redirectUrl, req.url)
    )
  }
  
  return NextResponse.next({ headers })

  // If a referer exists, try to detect the language from there and set the cookie accordingly
  if (req.headers.has('referer')) {
    const referer = req.headers.get('referer');
    if (referer !== null) {
      const refererLng = acceptLanguage.get(referer);
      if (refererLng) {
        headers.set('Set-Cookie', `${cookieName}=${refererLng}`)
      }
    }
  }

  return NextResponse.next({ headers })
}