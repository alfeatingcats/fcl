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

import { Textarea } from "@/components/ui/textarea";

import { TagsSelector } from "@/features/tag-selector";
import type { CreateStudyItemInput } from "@/shared/api/schemas";
import type { UseFormReturn } from "react-hook-form";

type StudyItemFormProps = {
  isPending?: boolean;
  form: UseFormReturn<CreateStudyItemInput>;
};
export const StudyItemForm: CFC<StudyItemFormProps> = ({ form }) => {
  return (
    <Form {...form}>
      <form className="space-y-4 pr-4 pl-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title..." {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description..." {...field} />
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
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <TagsSelector
                    value={value}
                    onChange={(v) => form.setValue("tagIds", v)}
                    // fetchTags={isDrawerOpen}
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
