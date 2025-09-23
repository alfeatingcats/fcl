import { create } from "zustand";
import { setCookie, getCookie } from "tiny-cookie";
import { persist, createJSONStorage } from "zustand/middleware";

export type UserStoreState = {
  timeZone: string;
  setTimeZone: (tz: string) => void;
};

export const USER_STORE_LOCAL_STORAGE_KEY = "user-store";

const cookieStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      return getCookie(name) ?? null;
    } catch (error) {
      console.warn("[UserStore] Failed to get cookie:", error);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      setCookie(name, value, {
        path: "/",
        expires: "1Y",
        samesite: "lax",
      });
    } catch (error) {
      console.warn("[UserStore] Failed to set cookie:", error);
    }
  },
  removeItem: (name: string): void => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      setCookie(name, "", {
        path: "/",
        expires: new Date(0),
        samesite: "lax",
      });
    } catch (error) {
      console.warn("[UserStore] Failed to remove cookie:", error);
    }
  },
};

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      timeZone: "UTC",
      setTimeZone: (tz) => {
        set({ timeZone: tz });
      },
    }),
    {
      name: USER_STORE_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => cookieStorage),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.warn("[UserStore] Rehydration failed:", error);
            return;
          }

          // Automatically update timezone after loading
          if (typeof window !== "undefined" && state) {
            const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const currentTz = state.timeZone ?? "UTC";

            if (currentTz !== browserTz) {
              setTimeout(() => state.setTimeZone?.(browserTz), 0);
            }
          }
        };
      },
    },
  ),
);
