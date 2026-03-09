import { type UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { UpdateTagSchema } from '@/shared/api/schemas'

export type UseTagFormProps = {
  defaultValues?: Partial<UpdateTagFormInput>
}

export type TagFormReturn = UseFormReturn<UpdateTagFormInput>

export const UpdateTagFormSchema = UpdateTagSchema.extend({
  name: z
    .string()
    .min(1, 'Tag name cannot be empty')
    .max(50, 'Tag name is too long'),
})

export type UpdateTagFormInput = z.input<typeof UpdateTagFormSchema>
