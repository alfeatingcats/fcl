import * as z from 'zod';
export const StudyItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    descriptionText: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    completedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    repetitions: z.number(),
    itemTags: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    descriptionText: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    completedAt: z.date().nullable(),
    createdById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    descriptionText: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    completedAt: z.date().nullable(),
    createdById: z.string().nullable()
  }).nullable().optional()});