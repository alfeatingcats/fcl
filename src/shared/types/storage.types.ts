import type { StorageValue } from "zustand/middleware/persist";
import type { UserStoreState } from "@/shared/stores/timezone-store";

export type PersistedUserStoreState = StorageValue<Partial<UserStoreState>>;
