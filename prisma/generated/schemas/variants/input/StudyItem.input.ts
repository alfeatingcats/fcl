import * as z from 'zod';
import { StatusSchema } from '../../enums/Status.schema';
// prettier-ignore
export const StudyItemInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.unknown().optional().nullable(),
    descriptionText: z.string().optional().nullable(),
    status: StatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.date().optional().nullable(),
    createdBy: z.unknown(),
    createdById: z.string(),
    repetitions: z.array(z.unknown()),
    itemTags: z.array(z.unknown())
}).strict();

export type StudyItemInputType = z.infer<typeof StudyItemInputSchema>;
