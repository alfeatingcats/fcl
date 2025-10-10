import type { StudyItem } from "@prisma/client";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";

import { useStudyItemColumns } from "./use-study-item-columns";

export const useStudyItemTable = (studyItems: Array<StudyItem>) => {
  const columns = useStudyItemColumns();

  const table = useReactTable({
    data: studyItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => Boolean(row.original.description),
  });

  return { table };
};
