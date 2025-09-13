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
  signIn: "/signin",
  signUp: "/signup",
};

export const publicPathsArray = Object.values(publicPaths);

// Preset Tailwind classes for tags: light bg, dark text, medium border
export const PRESET_COLOR_CLASSES = [
  "bg-red-100 text-red-700 border border-red-300",
  "bg-green-100 text-green-700 border border-green-300",
  "bg-amber-100 text-amber-700 border border-amber-300",
  "bg-pink-100 text-pink-700 border border-pink-300",
  "bg-violet-100 text-violet-700 border border-violet-300",
  "bg-rose-100 text-rose-700 border border-rose-300",
  "bg-orange-100 text-orange-700 border border-orange-300",
  "bg-blue-100 text-blue-700 border border-blue-300",
  "bg-gray-100 text-gray-700 border border-gray-300",
  "bg-slate-100 text-slate-700 border border-slate-300",
];
