import * as z from 'zod';
// prettier-ignore
export const TagInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string().optional().nullable(),
    createdAt: z.date(),
    itemTags: z.array(z.unknown())
}).strict();

export type TagInputType = z.infer<typeof TagInputSchema>;
