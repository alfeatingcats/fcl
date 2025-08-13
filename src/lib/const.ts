export const EBBINGHAUS_INTERVALS = [
  20, // 1st repetition: after 20 minutes
  180, // 2nd repetition: after 3 hours
  1440, // 3rd repetition: after 1 day
  4320, // 4th repetition: after 3 days
  10080, // 5th repetition: after 1 week
  43200, // 6th repetition: after 1 month
  129600, // 7th repetition: after 3 months
];

export const SIDEBAR_COOKIE_NAME = "sidebar_state";
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export const protectedPaths = {
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  repetitions: "/repetitions",
};

export const protectedPathsArray = Object.values(protectedPaths);

export const publicPaths = {
  home: "/",
  about: "/about",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
};

export const publicPathsArray = Object.values(publicPaths);
