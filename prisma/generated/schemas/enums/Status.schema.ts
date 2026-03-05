import * as z from 'zod';

export const StatusSchema = z.enum(['IN_PROGRESS', 'COMPLETED', 'PAUSED', 'ARCHIVED'])

export type Status = z.infer<typeof StatusSchema>;