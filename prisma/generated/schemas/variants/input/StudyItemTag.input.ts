import * as z from 'zod';
// prettier-ignore
export const StudyItemTagInputSchema = z.object({
    studyItem: z.unknown(),
    studyItemId: z.string(),
    tag: z.unknown(),
    tagId: z.string(),
    createdAt: z.date()
}).strict();

export type StudyItemTagInputType = z.infer<typeof StudyItemTagInputSchema>;
