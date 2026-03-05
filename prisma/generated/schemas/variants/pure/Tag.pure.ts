import * as z from 'zod';
// prettier-ignore
export const TagModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string().nullable(),
    createdAt: z.date(),
    itemTags: z.array(z.unknown())
}).strict();

export type TagPureType = z.infer<typeof TagModelSchema>;
