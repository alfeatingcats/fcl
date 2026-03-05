import * as z from 'zod';
// prettier-ignore
export const StudyItemTagModelSchema = z.object({
    studyItem: z.unknown(),
    studyItemId: z.string(),
    tag: z.unknown(),
    tagId: z.string(),
    createdAt: z.date()
}).strict();

export type StudyItemTagPureType = z.infer<typeof StudyItemTagModelSchema>;
