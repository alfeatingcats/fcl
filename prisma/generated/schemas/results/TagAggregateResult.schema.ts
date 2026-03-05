import * as z from 'zod';
export const TagAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    color: z.number(),
    createdAt: z.number(),
    itemTags: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});