import * as z from 'zod';
import { StatusSchema } from '../enums/Status.schema';

export const StudyItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  descriptionText: z.string().nullish(),
  status: StatusSchema.default("IN_PROGRESS"),
  createdAt: z.date(),
  updatedAt: z.date(),
  completedAt: z.date().nullish(),
  createdById: z.string(),
});

export type StudyItemType = z.infer<typeof StudyItemSchema>;
