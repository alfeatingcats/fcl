import { auth } from "./server/auth";
import { protectedPathsArray, publicPaths } from "./lib/const";

export default auth((req) => {
  const isProtectedRoute = protectedPathsArray.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (isProtectedRoute && !req.auth) {
    const newUrl = new URL(publicPaths.login, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/repetitions/:path*",
  ],
};
