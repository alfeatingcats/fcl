import { useDebounceFn } from 'ahooks'
import { noop } from 'es-toolkit'
import type { SerializedEditorState } from 'lexical'
import { Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC, ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { Editor } from '@/components/blocks/editor-x/editor'
import { Button } from '@/components/ui/button'
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
  DeleteStudyItemTrigger,
  SaveStudyItemTrigger,
} from '@/entities/study-item'
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
  onSave: (data: UpdateStudyItemInput) => void
  handleSubmit?: (callback: (data: UpdateStudyItemInput) => void) => () => void
  studyItemOnDelete: (studyItemId: string) => void
  studyItemId: string
}

export const StudyItemForm: FC<StudyItemFormProps> = ({
  form,
  defaultTags,
  isLoading = false,
  renderCreateTagButton,
  onSave,
  handleSubmit,
  studyItemOnDelete,
  studyItemId,
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
        <div className="w-full flex flex-row gap-2 items-center">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder={t('titlePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SaveStudyItemTrigger
            onClick={handleSubmit?.(onSave) ?? noop}
            isLoading={isLoading}
          />
          <DeleteStudyItemTrigger
            button={
              <Button
                onClick={() => studyItemOnDelete(studyItemId)}
                variant="destructive"
                size="lg"
                type="button"
              >
                <Trash2 />
              </Button>
            }
          />
        </div>

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
                  key={form.getValues('id')}
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
                  key={form.getValues('id')}
                  // wrapperClassName="h-160"
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
