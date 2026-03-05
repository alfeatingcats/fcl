import * as z from 'zod';

export const SessionSchema = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
});

export type SessionType = z.infer<typeof SessionSchema>;
