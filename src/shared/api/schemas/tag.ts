import { PRESET_COLOR_CLASSES } from "@/shared/lib/const";
import z from "zod";
import {
  TagGroupByResultSchema,
  TagSchema,
  TagSelectObjectSchema,
  TagSelectObjectZodSchema,
} from "prisma/generated/schemas";

export const CreateTagSchema = z.object({
  name: z
    .string()
    .min(1, "Tag name cannot be empty")
    .max(50, "Tag name is too long")
    .regex(/^[a-zA-Zа-яёА-ЯЁ0-9\s\-_]+$/, "Invalid characters in tag name"),
  color: z.string().optional().default(PRESET_COLOR_CLASSES[0]!),
});

export type CreateTagInput = z.input<typeof CreateTagSchema>;

export const UpdateTagSchema = z.object({
  id: z.string().cuid(),
  name: z
    .string()
    .min(1, "Tag name cannot be empty")
    .max(50, "Tag name is too long")
    .optional(),
  color: z.string(),
});
export type UpdateTagInput = z.input<typeof UpdateTagSchema>;

export const DeleteTagSchema = z.object({
  id: z.string().cuid(),
  transferToTagId: z.string().cuid().optional(), // Transfer relations to another tag
});

export const DeleteTagOutputSchema = z
  .object({
    deletedTag: TagGroupByResultSchema.element
      .pick({
        id: true,
        name: true,
        color: true,
        createdAt: true,
      })
      .extend({ _count: z.object({ itemTags: z.number() }) }),
    transferredConnections: z.number(),
  })
  .nullable();
