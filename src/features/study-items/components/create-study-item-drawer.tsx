import { type z } from "zod";
import { useBoolean } from "ahooks";
import { Expand, FilterIcon, PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import type { CFC } from "@/types";
import { TagsSelector } from "@/features";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateStudyItemSchema } from "@/schema/study-item.schema";
import { ProgressStepper } from "./progress-stepper";

type CreateStudyItemDrawerProps = {
  onCreate: () => void;
  isPending?: boolean;
};
export const CreateStudyItemDrawer: CFC<CreateStudyItemDrawerProps> = ({
  onCreate,
  isPending = false,
}) => {
  const [isDrawerOpen, { toggle: toggleDrawer }] = useBoolean(false);
  const form = useForm<z.input<typeof CreateStudyItemSchema>>({
    resolver: zodResolver(CreateStudyItemSchema),
    defaultValues: {
      title: "",
      description: "",
      tagIds: [],
    },
  });

  function onSubmit(values: z.input<typeof CreateStudyItemSchema>) {
    console.log(values);
  }
  return (
    <Drawer direction="right" open={isDrawerOpen} onOpenChange={toggleDrawer}>
      <div className="flex items-center justify-between gap-2 px-2">
        <Button variant="outline" size="sm">
          <FilterIcon />
          Filter
        </Button>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={onCreate}
            disabled={isPending}
          >
            <PlusIcon />
            Create study item
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent>
        <div className="space-y-4 overflow-y-auto pb-0.5">
          <DrawerHeader className="-mb-1">
            <DrawerTitle className="flex items-center justify-between">
              Create Study Item
              <Button type="button" variant="ghost" size="sm">
                <Expand />
              </Button>
            </DrawerTitle>
            <DrawerDescription>
              Fill in the details to create a new study item. Add a title,
              description, and select relevant tags to organize your item.
            </DrawerDescription>
          </DrawerHeader>

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
                          fetchTags={isDrawerOpen}
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
          <div className="!w-full pr-4 pl-4">
            <Card>
              <CardHeader>
                <CardTitle>Progression of repetitions</CardTitle>
                <CardDescription>
                  Track the stages and status of repetitions for effective
                  memorization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressStepper />
              </CardContent>
            </Card>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
