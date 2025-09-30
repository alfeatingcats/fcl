import { Form } from "@/components/ui/form";
import {
  ReadStudyItemsSchema,
  type ReadStudyItemInput,
} from "@/shared/api/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { StudyItem } from "@prisma/client";
import type { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { StudyItemTableHeader } from "./table-header";
import { StudyItemTableContent } from "./table-content";
import { StudyItemTableFooter } from "./table-footer";

// const filterSchema = z.object({
//   search: z.string().optional(),
//   status: z.array(z.string()).optional(),
//   tags: z.array(z.string()).optional(),
//   page: z.number().min(1).default(1),
//   pageSize: z.number().min(10).max(100).default(20),
// });
// const filterSchema = ReadStudyItemInput;

// type FilterFormValues = z.infer<typeof filterSchema>;

interface StudyItemDataTableProps {
  studyItems: Array<StudyItem>;
  //   totalCount: number;
  renderCreateButton?: ReactNode;
  //   onFilterChange?: (filters: ReadStudyItemInput) => void;
}

export const StudyItemDataTable: FC<StudyItemDataTableProps> = ({
  studyItems,
  //   totalCount,
  renderCreateButton,
  //   onFilterChange,
}) => {
  const form = useForm<ReadStudyItemInput>({
    resolver: zodResolver(ReadStudyItemsSchema),
    defaultValues: {
      search: "",
    },
  });

  // Отслеживаем изменения формы
  const handleFormChange = (values: ReadStudyItemInput) => {
    console.log("Form values changed:", values);

    // onFilterChange?.(values);
  };

  return (
    <Form {...form}>
      <form
        onChange={form.handleSubmit(handleFormChange)}
        className="space-y-3"
      >
        <StudyItemTableHeader
          form={form}
          renderCreateButton={renderCreateButton}
        />

        <StudyItemTableContent studyItems={studyItems} />

        <StudyItemTableFooter form={form} totalCount={10} />
      </form>
    </Form>
  );
};

export { StudyItemTableHeader } from "./table-header";
export { StudyItemTableFooter } from "./table-footer";
export { StudyItemTableContent } from "./table-content";
