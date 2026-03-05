import * as z from 'zod';
// prettier-ignore
export const TagResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string().nullable(),
    createdAt: z.date(),
    itemTags: z.array(z.unknown())
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
