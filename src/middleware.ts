import type { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";
import { isPublicPage } from "./shared/lib/middleware-utils";
import { authMiddleware } from "./shared/lib/auth-middleware";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(
  req: NextRequest,
  event: NextFetchEvent,
):
  | NextResponse
  | Response
  | undefined
  | Promise<NextResponse | Response | undefined> {
  const isPublic = isPublicPage(req.nextUrl.pathname, [...routing.locales]);

  if (isPublic) {
    return handleI18nRouting(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return (authMiddleware as any)(req, event);
  }
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  runtime: "nodejs",
};
