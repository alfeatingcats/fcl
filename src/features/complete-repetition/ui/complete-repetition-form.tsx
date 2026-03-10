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
import type { CFC } from "@/shared/types";
import { RadioGroupDifficulty } from "@/entities/repetitions";
import type { CompleteRepetitionInput } from "@/shared/api/schemas";

type CompleteRepetitionFormProps = {
  form: UseFormReturn<CompleteRepetitionInput>;
};

export const CompleteRepetitionForm: CFC<CompleteRepetitionFormProps> = ({
  form,
}) => {
  const t = useTranslations("Repetitions");
  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("difficultyLabel")}</FormLabel>
              <FormControl>
                <RadioGroupDifficulty {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
