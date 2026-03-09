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

import { TagColorRadioGroup } from "@/entities/tag/ui/tag-color-radio-group";
import type { UpdateTagFormInput } from "../model";

type UpdateTagFormProps = {
  isPending?: boolean;
  form: UseFormReturn<UpdateTagFormInput>;
};

export const UpdateTagForm: CFC<UpdateTagFormProps> = ({ form }) => {
  const t = useTranslations("TagForm");
  return (
    <Form {...form}>
      <form className="space-y-5">
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
