import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'
import { authMiddleware } from './shared/lib/auth-middleware'
import { isPublicPage } from './shared/lib/middleware-utils'

const handleI18nRouting = createMiddleware(routing)

export default function middleware(
  req: NextRequest,
  event: NextFetchEvent,
):
  | NextResponse
  | Response
  | undefined
  | Promise<NextResponse | Response | undefined> {
  const isPublic = isPublicPage(req.nextUrl.pathname, [...routing.locales])

  if (isPublic) {
    return handleI18nRouting(req)
  } else {
    // biome-ignore lint/suspicious/noExplicitAny: <_explanation>
    return (authMiddleware as any)(req, event)
  }
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
