import * as z from 'zod';

export const RepetitionStatusSchema = z.enum(['PENDING', 'COMPLETED', 'MISSED', 'SKIPPED'])

export type RepetitionStatus = z.infer<typeof RepetitionStatusSchema>;