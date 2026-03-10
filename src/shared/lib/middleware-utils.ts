import { publicPathsArray } from "./const";

export function createPublicPathnameRegex(locales: string[]): RegExp {
  return RegExp(
    `^(/(${locales.join("|")}))?(${publicPathsArray
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
}

export function isPublicPage(pathname: string, locales: string[]): boolean {
  const publicPathnameRegex = createPublicPathnameRegex(locales);
  return publicPathnameRegex.test(pathname);
}
