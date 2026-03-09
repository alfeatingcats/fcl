import type { Tag } from '@prisma/client'
import type { inferProcedureOutput } from '@trpc/server'

import type { appRouter } from '@/server/api/root'

export type TagItem = Pick<Tag, 'id' | 'name' | 'color'>

export type TagsListType = inferProcedureOutput<typeof appRouter.tags.getAll>
