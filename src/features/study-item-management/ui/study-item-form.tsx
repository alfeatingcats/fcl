import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import type { CFC } from "@/shared/types";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

import { Textarea } from "@/components/ui/textarea";

import { TagsSelector } from "@/features/tag-selector";
import type { CreateStudyItemInput } from "@/shared/api/schemas";
import type { UseFormReturn } from "react-hook-form";

type StudyItemFormProps = {
  isPending?: boolean;
  form: UseFormReturn<CreateStudyItemInput>;
};

export const StudyItemForm: CFC<StudyItemFormProps> = ({ form }) => {
  const t = useTranslations("StudyItemForm");
  return (
    <Form {...form}>
      <form className="space-y-4 pr-4 pl-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("titleLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("titlePlaceholder")} {...field} />
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
              <FormLabel>{t("descriptionLabel")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("descriptionPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tagIds"
          render={({ field: { value, ref } }) => {
            return (
              <FormItem>
                <FormLabel>{t("tagsLabel")}</FormLabel>
                <FormControl>
                  <TagsSelector
                    value={value}
                    onChange={(v) => form.setValue("tagIds", v)}
                    ref={ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
};
