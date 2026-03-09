import { z } from 'zod'

import {
  StudyItemSchema,
  StudyItemTagSchema,
  StudyRepetitionSchema,
  TagSchema,
  UserSchema,
} from '$/prisma/generated/schemas'

// 1. Base nesting: Tag inside the StudyItemTag relation
const TagWithRelationSchema = StudyItemTagSchema.extend({
  tag: TagSchema,
})

// 2. Full StudyItem schema with all relations (for create, update, getById)
export const StudyItemWithAllRelationsSchema = StudyItemSchema.extend({
  repetitions: z.array(StudyRepetitionSchema),
  itemTags: z.array(TagWithRelationSchema),
  createdBy: UserSchema.pick({ name: true, image: true }).optional(),
})

// 3. Schema for pagination (getAll)
export const ReadStudyItemsOutputSchema = z.object({
  items: z.array(
    StudyItemSchema.extend({
      repetitions: z.array(StudyRepetitionSchema),
      itemTags: z.array(TagWithRelationSchema),
      description: z.any().nullable(),
    }),
  ),
  nextCursor: z.string().optional(),
})

export type ReadStudyItemsOutputSchemaType = z.infer<
  typeof ReadStudyItemsOutputSchema
>

export const GetStudyItemByIdOutputSchema = StudyItemSchema.extend({
  repetitions: z.array(StudyRepetitionSchema),
  itemTags: z.array(TagWithRelationSchema),
})

// Types for TypeScript (inference)
export type GetStudyItemByIdInfer = z.infer<typeof GetStudyItemByIdOutputSchema>
