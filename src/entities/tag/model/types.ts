import type { inferProcedureOutput } from '@trpc/server'

import type { appRouter } from '@/server/api/root'

export type TagsListType = inferProcedureOutput<typeof appRouter.tags.getAll>
