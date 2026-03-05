import * as z from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id', 'name', 'color', 'createdAt'])

export type TagScalarFieldEnum = z.infer<typeof TagScalarFieldEnumSchema>;