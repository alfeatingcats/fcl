import type { JsonValue } from "@prisma/client/runtime/library";
import z from "zod";
import { CreateTagSchema } from "./tag";
import { RepetitionStatus } from "@prisma/client";

export const StatusSchema = z.enum([
  "IN_PROGRESS",
  "COMPLETED",
  "PAUSED",
  "ARCHIVED",
]);

export const Status = StatusSchema.enum;

/* #region Outputs */
export const LexicalStateSchema = z
  .object({
    root: z.object({
      children: z.array(z.unknown()),
      direction: z.string().nullable(),
      format: z.string().or(z.number()),
      indent: z.number(),
      type: z.string(),
      version: z.number(),
    }),
  })
  .passthrough();

export const GetStudyItemByIdOutputSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: LexicalStateSchema.nullable(),
  descriptionText: z.string().nullable(),
  status: z.nativeEnum(Status),
  createdAt: z.date(),
  updatedAt: z.date(),
  completedAt: z.date().nullable(),
  createdById: z.string(),
  repetitions: z.array(
    z
      .object({
        id: z.string(),
        repetitionNumber: z.number().int(),
        scheduledAt: z.date(),
        completedAt: z.date().nullable(),
        status: z.nativeEnum(RepetitionStatus),
        difficulty: z.number().int().nullable(),
        studyItemId: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
      })
      .strict(),
  ),
  itemTags: z.array(
    z.object({
      createdAt: z.date(),
      studyItemId: z.string(),
      tagId: z.string().cuid(),
      tag: CreateTagSchema.extend({
        createdAt: z.date(),
        id: z.string().cuid(),
      }),
    }),
  ),
});
export type GetStudyItemByIdInfer = z.infer<
  typeof GetStudyItemByIdOutputSchema
>;
/* #endregion */

/* #region Create Study Item */
export const CreateStudyItemSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(200, "Title is too long"),
  description: LexicalStateSchema.optional().nullable(),
  descriptionText: z.string().max(5000).optional().nullable(),
  tagIds: z
    .array(z.string().cuid("Invalid tag ID"))
    .max(10, "Maximum of 10 tags allowed")
    .optional()
    .default([]),
});
export type CreateStudyItemInput = z.input<typeof CreateStudyItemSchema>;
/* #endregion */

/* #region  Update Study Item */
export const UpdateStudyItemSchema = z.object({
  id: z.string().cuid("Invalid note ID"),
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(200, "Title is too long")
    .optional(),
  description: LexicalStateSchema.optional().nullable(),
  descriptionText: z.string().max(5000).optional().nullable(),
  status: StatusSchema.optional(),
  tagIds: z
    .array(z.string().cuid("Invalid tag ID"))
    .max(10, "Maximum of 10 tags allowed")
    .optional()
    .default([]),
});

export type UpdateStudyItemInput = z.input<typeof UpdateStudyItemSchema>;
/* #endregion */

export type ExistStudyItemResponse = Omit<
  UpdateStudyItemInput,
  "description"
> & {
  description?: JsonValue | null;
};

export const ReadStudyItemsSchema = z.object({
  status: StatusSchema.optional(),
  tagIds: z.array(z.string().cuid()).optional(),
  search: z.string().optional(),
  limit: z.number().min(1).max(100).default(10),
  cursor: z.string().cuid().optional(),
});
export type ReadStudyItemInput = z.input<typeof ReadStudyItemsSchema>;

export const StudyItemIdSchema = UpdateStudyItemSchema.pick({ id: true });
export type StudyItemIdInput = z.input<typeof StudyItemIdSchema>;

export const DeleteStudyItemSchema = z.object({ id: z.string() });
