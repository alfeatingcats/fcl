import createMiddleware from "next-intl/middleware";
import NextAuth from "next-auth";

import { routing } from "@/i18n/routing";
import { authConfig } from "@/server/auth/auth.config";

import { publicPaths } from "./const";
import { isPublicPage } from "./middleware-utils";

const { auth } = NextAuth(authConfig);

const handleI18nRouting = createMiddleware(routing);

export const authMiddleware = auth((req) => {
  const isPublic = isPublicPage(req.nextUrl.pathname, [...routing.locales]);

  if (!isPublic && !req.auth) {
    const newUrl = new URL(publicPaths.signIn, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return handleI18nRouting(req);
});
