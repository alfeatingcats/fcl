import { useDebounceFn } from 'ahooks'
import type { SerializedEditorState } from 'lexical'
import { useTranslations } from 'next-intl'
import { type FC, type ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { Editor } from '@/components/blocks/editor-x/editor'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { UpdateStudyItemInput } from '@/shared/api/schemas'

import {
  type RequiredCreateTagInput,
  TagsSelector,
} from '@/features/tag-selector'

type TForm = Pick<
  UpdateStudyItemInput,
  'description' | 'tagIds' | 'title' | 'id'
>

type StudyItemFormProps = {
  isLoading?: boolean
  renderCreateTagButton: ReactNode
  defaultTags?: RequiredCreateTagInput[]
  form: UseFormReturn<TForm>
}

export const StudyItemForm: FC<StudyItemFormProps> = ({
  form,
  defaultTags,
  isLoading = false,
  renderCreateTagButton,
}) => {
  const t = useTranslations('StudyItemForm')

  const { run: debouncedOnChange } = useDebounceFn(
    (value: unknown) =>
      form.setValue('description', value as TForm['description'], {
        shouldValidate: false,
        shouldDirty: true,
        shouldTouch: true,
      }),
    {
      wait: 300,
    },
  )

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-100">
              <FormControl>
                <div className="flex flex-row">
                  <Input
                    placeholder={t('titlePlaceholder')}
                    disabled={isLoading}
                    className="hover:cursor-pointer"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tagIds"
          render={({ field: { ref, onBlur } }) => (
            <FormItem>
              <FormLabel>{t('tagsLabel')}</FormLabel>
              <FormControl>
                <TagsSelector
                  defaultTags={defaultTags}
                  onChange={(_, selectedTagIds) => {
                    form.setValue(
                      'tagIds',
                      selectedTagIds.length > 0 ? selectedTagIds : [],
                      {
                        shouldDirty: true,
                        shouldTouch: true,
                      },
                    )
                  }}
                  ref={ref}
                  onBlur={onBlur}
                  renderCreateTagButton={renderCreateTagButton}
                  tagsWrapperClassName="!max-w-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>{t('descriptionLabel')}</FormLabel>
              <FormControl>
                <Editor
                  // wrapperClassName="h-160"
                  // disabled={isLoading}
                  // editorSerializedState={
                  //   studyItem?.description as unknown as SerializedEditorState
                  // }
                  editorSerializedState={
                    (field.value as unknown as SerializedEditorState) ??
                    undefined
                  }
                  placeholder={t('descriptionPlaceholder')}
                  onSerializedChange={(editorState) => {
                    debouncedOnChange(editorState)
                  }}
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
