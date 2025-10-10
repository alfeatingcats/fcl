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
