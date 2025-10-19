import type { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { UseFormReturn } from "react-hook-form";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  TagsSelector,
  type RequiredCreateTagInput,
} from "@/features/tag-selector";
import type { CFC } from "@/shared/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UpdateStudyItemInput } from "@/shared/api/schemas";

type StudyItemFormProps = {
  isLoading?: boolean;
  renderCreateTagButton: ReactNode;
  defaultTags?: RequiredCreateTagInput[];
  form: UseFormReturn<UpdateStudyItemInput>;
};

export const StudyItemForm: FC<StudyItemFormProps> = ({
  form,
  defaultTags,
  isLoading = false,
  renderCreateTagButton,
}) => {
  const t = useTranslations("StudyItemForm");

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-row">
                  <Input
                    placeholder={t("titlePlaceholder")}
                    disabled={isLoading}
                    className="!border-none !bg-transparent text-xl shadow-none hover:cursor-pointer md:text-2xl"
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
              <FormLabel>{t("tagsLabel")}</FormLabel>
              <FormControl>
                <TagsSelector
                  defaultTags={defaultTags}
                  onChange={(_, selectedTagIds) => {
                    form.setValue(
                      "tagIds",
                      selectedTagIds.length > 0 ? selectedTagIds : undefined,
                    );
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
              <FormLabel>{t("descriptionLabel")}</FormLabel>
              <FormControl>
                <Textarea
                  className="!max-w-lg"
                  placeholder={t("descriptionPlaceholder")}
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
