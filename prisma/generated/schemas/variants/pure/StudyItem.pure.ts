import * as z from 'zod';
import { StatusSchema } from '../../enums/Status.schema';
// prettier-ignore
export const StudyItemModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.unknown().nullable(),
    descriptionText: z.string().nullable(),
    status: StatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.date().nullable(),
    createdBy: z.unknown(),
    createdById: z.string(),
    repetitions: z.array(z.unknown()),
    itemTags: z.array(z.unknown())
}).strict();

export type StudyItemPureType = z.infer<typeof StudyItemModelSchema>;
