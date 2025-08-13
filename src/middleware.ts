import { protectedPathsArray } from "./lib/const";
import { auth } from "./server/auth";

export const middleware = auth((req) => {
  console.log({ auth: req.auth, path: req.nextUrl.pathname });
  const isProtectedRoute = protectedPathsArray.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (isProtectedRoute && !req.auth) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export default middleware;

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/repetitions/:path*",
  ],
  runtime: "nodejs",
};
