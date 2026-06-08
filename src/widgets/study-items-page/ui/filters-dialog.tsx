import type { FC, ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type DialogNoCloseButtonProps = {
  button: ReactNode
}

export const DialogNoCloseButton: FC<DialogNoCloseButtonProps> = ({
  button,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="flex">
            {/* <Input.Search className="flex-1 w-full" /> */}
          </DialogTitle>
          <DialogDescription>
            This dialog doesn&apos;t have a close button in the top-right
            corner.
            {/* <Form {...form}>
              <form className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('titleLabel')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('titlePlaceholder')}
                          disabled={isLoading}
                          {...field}
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
                    <FormItem>
                      <FormLabel>{t('descriptionLabel')}</FormLabel>
                      <FormControl>
                        <Editor
                          wrapperClassName="h-120"
                          placeholder={t('descriptionPlaceholder')}
                          onSerializedChange={(editorState) => {
                            field.onChange(editorState)
                          }}
                        />
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
                              selectedTagIds.length > 0
                                ? selectedTagIds
                                : undefined,
                            )
                          }}
                          ref={ref}
                          onBlur={onBlur}
                          renderCreateTagButton={renderCreateTagButton}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form> */}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
