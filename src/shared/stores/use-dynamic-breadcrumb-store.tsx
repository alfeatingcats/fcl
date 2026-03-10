import { create } from "zustand";

type DynamicBreadcrumbStore = {
  entries: Record<string, string>;
  setEntry: (id: string, title: string) => void;
  clearEntry: (id: string) => void;
};

export const useDynamicBreadcrumbStore = create<DynamicBreadcrumbStore>(
  (set) => ({
    entries: {},
    setEntry: (id, title) =>
      set((state) => ({
        entries: { ...state.entries, [id]: title },
      })),
    clearEntry: (id) =>
      set((state) => {
        const next = { ...state.entries };
        delete next[id];
        return { entries: next };
      }),
  }),
);
