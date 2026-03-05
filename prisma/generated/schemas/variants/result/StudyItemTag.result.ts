import * as z from 'zod';
// prettier-ignore
export const StudyItemTagResultSchema = z.object({
    studyItem: z.unknown(),
    studyItemId: z.string(),
    tag: z.unknown(),
    tagId: z.string(),
    createdAt: z.date()
}).strict();

export type StudyItemTagResultType = z.infer<typeof StudyItemTagResultSchema>;
