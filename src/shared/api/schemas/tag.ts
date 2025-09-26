import z from "zod";

export const CreateTagSchema = z.object({
  name: z
    .string()
    .min(1, "Tag name cannot be empty")
    .max(50, "Tag name is too long")
    .regex(/^[a-zA-Zа-яёА-ЯЁ0-9\s\-_]+$/, "Invalid characters in tag name"),
  color: z
    .string()
    .optional()
    .default("bg-blue-100 text-blue-700 border border-blue-300"),
});

export const UpdateTagSchema = z.object({
  id: z.string().cuid(),
  name: z
    .string()
    .min(1, "Tag name cannot be empty")
    .max(50, "Tag name is too long")
    .optional(),
  color: z.string().optional(),
});

export type CreateTagInput = z.input<typeof CreateTagSchema>;
