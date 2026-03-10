import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";

import { useStudyItemColumns } from "./use-study-item-columns";
import type { ReadStudyItemsOutputSchemaType } from "@/shared/api/schemas/fg/study-item";

export const useStudyItemTable = (
  studyItems: ReadStudyItemsOutputSchemaType["items"],
) => {
  const columns = useStudyItemColumns();

  const table = useReactTable<ReadStudyItemsOutputSchemaType["items"][number]>({
    data: studyItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => Boolean(row.original.description),
  });

  return { table };
};
