import type { StorageValue } from 'zustand/middleware/persist'

import type { UserStore } from '@/shared/stores/timezone-store'

export type PersistedUserStoreState = StorageValue<Partial<UserStore>>
