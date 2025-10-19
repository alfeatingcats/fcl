import { PRESET_COLOR_CLASSES } from "@/shared/lib/const";
import z from "zod";

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
  color: z.string().optional(),
});

export const DeleteTagSchema = z.object({
  id: z.string().cuid(),
  transferToTagId: z.string().cuid().optional(), // Transfer relations to another tag
});
