import type { StudyItem } from "@prisma/client";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";

import { createStudyItemColumns } from "./columns";

export const useStudyItemTable = (studyItems: Array<StudyItem>) => {
  const columns = createStudyItemColumns();

  const table = useReactTable({
    data: studyItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => Boolean(row.original.description),
  });

  return { table };
};
