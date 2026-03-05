import * as z from 'zod';
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  studyItem: z.array(z.unknown())
}));