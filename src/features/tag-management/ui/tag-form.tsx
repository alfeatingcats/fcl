import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import type { CFC } from "@/shared/types";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";

import type { CreateTagInput } from "@/shared/api/schemas";
import { TagColorRadioGroup } from "@/entities/tag/ui/tag-color-radio-group";

type TagFormProps = {
  isPending?: boolean;
  form: UseFormReturn<CreateTagInput>;
};

export const TagForm: CFC<TagFormProps> = ({ form }) => {
  const t = useTranslations("TagForm");
  return (
    <Form {...form}>
      <form className="space-y-4 pr-4 pl-4">
        <FormField
          control={form.control}
          name="name"
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
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("colorLabel")}</FormLabel>
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
  );
};
