import { z } from "zod";

export const CompleteRepetitionSchema = z.object({
  repetitionId: z.string().cuid("Invalid repetition ID"),
  difficulty: z
    .number()
    .min(1, "Difficulty must be between 1 and 5")
    .max(5, "Difficulty must be between 1 and 5")
    .int("Difficulty must be an integer"),
});

export type CompleteRepetitionInput = z.input<typeof CompleteRepetitionSchema>;

export const SkipRepetitionSchema = CompleteRepetitionSchema.pick({
  repetitionId: true,
});

export type SkipRepetitionInput = z.input<typeof SkipRepetitionSchema>;

export const WaitRepetitionSchema = CompleteRepetitionSchema.pick({
  repetitionId: true,
});

export type WaitRepetitionInput = z.input<typeof WaitRepetitionSchema>;

export const BulkRepetitionsSchema = z.object({
  repetitions: z.array(CompleteRepetitionSchema),
});

export type BulkRepetitionsInput = z.input<typeof BulkRepetitionsSchema>;

export const UpcomingEventSchema = z.object({
  start: z.date(),
  end: z.date(),
});

export type UpcomingEventInput = z.input<typeof UpcomingEventSchema>;
