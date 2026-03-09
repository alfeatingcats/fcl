import { StatusSchema, TagSchema } from "prisma/generated/schemas";
import { z } from "zod";

// 1. Schema for returning a list of tags with statistics (getAll)
export const TagWithStatsOutputSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    createdAt: z.date(),
    usageCount: z.number(),
    recentItems: z.array(
      z.object({
        id: z.string(),
        status: StatusSchema, // Using ENUM from the generator
        createdAt: z.date(),
      }),
    ),
  }),
);

export type TagWithStatsOutput = z.infer<typeof TagWithStatsOutputSchema>;

// 2. Schema for user tag statistics
export const UserTagStatsOutputSchema = z.object({
  totalTags: z.number(),
  topTags: z.array(TagSchema.extend({ usageCount: z.number() })),
  recentTags: z.array(TagSchema.extend({ usageCount: z.number() })),
});

// For getPopular
export const PopularTagOutputSchema = z.array(
  TagSchema.extend({
    _count: z.object({ itemTags: z.number() }),
  }),
);

// For searchForAutocomplete
export const TagAutocompleteOutputSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    color: z.string().nullable(),
    _count: z.object({ itemTags: z.number() }),
  }),
);
