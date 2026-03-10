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

export const publicPaths = {
  home: "/",
  about: "/about",
  contact: "/contact",
  signIn: "/signin",
  signUp: "/signup",
};

export const publicPathsArray = Object.values(publicPaths);

// Preset Tailwind classes for tags: light bg, dark text, medium border
export const PRESET_COLOR_CLASSES: Array<string> = [
  // Red
  "bg-red-100 text-red-700 border border-red-300 dark:bg-red-500/30 dark:text-red-200 dark:border-red-600",

  // Green
  "bg-green-100 text-green-700 border border-green-300 dark:bg-green-500/30 dark:text-green-200 dark:border-green-600",

  // Amber
  "bg-amber-100 text-amber-700 border border-amber-300 dark:bg-amber-500/30 dark:text-amber-200 dark:border-amber-600",

  // Pink
  "bg-pink-100 text-pink-700 border border-pink-300 dark:bg-pink-500/30 dark:text-pink-200 dark:border-pink-600",

  // Violet
  "bg-violet-100 text-violet-700 border border-violet-300 dark:bg-violet-500/30 dark:text-violet-200 dark:border-violet-600",

  // Rose
  "bg-rose-100 text-rose-700 border border-rose-300 dark:bg-rose-500/30 dark:text-rose-200 dark:border-rose-600",

  // Orange
  "bg-orange-100 text-orange-700 border border-orange-300 dark:bg-orange-500/30 dark:text-orange-200 dark:border-orange-600",

  // Blue
  "bg-blue-100 text-blue-700 border border-blue-300 dark:bg-blue-500/30 dark:text-blue-200 dark:border-blue-600",

  // Gray
  "bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-500/30 dark:text-gray-200 dark:border-gray-600",

  // Slate
  "bg-slate-100 text-slate-700 border border-slate-300 dark:bg-slate-500/30 dark:text-slate-200 dark:border-slate-600",
];
