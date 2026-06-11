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
import type { ReviewRepetitionInput } from '@/shared/api/schemas'
import type { CFC } from '@/shared/types'

import { RadioGroupDifficulty } from '@/entities/repetitions'

type ReviewRepetitionFormProps = {
  form: UseFormReturn<ReviewRepetitionInput>
}

export const ReviewRepetitionForm: CFC<ReviewRepetitionFormProps> = ({
  form,
}) => {
  const t = useTranslations('Repetitions')
  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('difficultyLabel')}</FormLabel>
              <FormControl>
                <RadioGroupDifficulty {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
