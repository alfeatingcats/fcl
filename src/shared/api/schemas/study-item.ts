import z from "zod";

export const CreateStudyItemSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(200, "Title is too long"),
  description: z.string().max(1000, "Description is too long").optional(),
  tagIds: z
    .array(z.string().cuid("Invalid tag ID"))
    .max(10, "Maximum of 10 tags allowed")
    .optional()
    .default([]),
});

export const UpdateStudyItemSchema = z.object({
  id: z.string().cuid("Invalid note ID"),
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(200, "Title is too long")
    .optional(),
  description: z.string().max(1000, "Description is too long").optional(),
  status: z.enum(["IN_PROGRESS", "COMPLETED", "PAUSED", "ARCHIVED"]).optional(),
});

export const ReadStudyItemsSchema = z.object({
  status: z.enum(["IN_PROGRESS", "COMPLETED", "PAUSED", "ARCHIVED"]).optional(),
  tagIds: z.array(z.string().cuid()).optional(),
  search: z.string().optional(),
  limit: z.number().min(1).max(100).default(10),
  cursor: z.string().cuid().optional(),
});

export type ReadStudyItemInput = z.input<typeof ReadStudyItemsSchema>;
export type CreateStudyItemInput = z.input<typeof CreateStudyItemSchema>;
