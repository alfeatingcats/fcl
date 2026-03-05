import * as z from 'zod';
export const StudyItemTagAggregateResultSchema = z.object({  _count: z.object({
    studyItem: z.number(),
    studyItemId: z.number(),
    tag: z.number(),
    tagId: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    studyItemId: z.string().nullable(),
    tagId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    studyItemId: z.string().nullable(),
    tagId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});