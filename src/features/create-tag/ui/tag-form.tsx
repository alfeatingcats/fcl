import { useTranslations } from 'next-intl'
import type { UseFormReturn } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { CreateTagInput } from '@/shared/api/schemas'
import type { CFC } from '@/shared/types'

import { TagColorRadioGroup } from '@/entities/tag/ui/tag-color-radio-group'

type TagFormProps = {
  isPending?: boolean
  form: UseFormReturn<CreateTagInput>
}

export const TagForm: CFC<TagFormProps> = ({ form }) => {
  const t = useTranslations('TagForm')
  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('titleLabel')}</FormLabel>
              <FormControl>
                <Input placeholder={t('titlePlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('colorLabel')}</FormLabel>
              <FormControl>
                <TagColorRadioGroup
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
