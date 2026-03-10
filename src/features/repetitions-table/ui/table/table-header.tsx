import type { FC } from "react";
import { flexRender, type Table } from "@tanstack/react-table";

import type { StudyRepetition } from "@prisma/client";

import {
  TableHead,
  TableRow,
  TableHeader as Header,
} from "@/components/ui/table";
import { cn } from "@/shared/lib/utils";

type TableHeaderProps = {
  table: Table<StudyRepetition>;
};

export const TableHeader: FC<TableHeaderProps> = ({ table }) => {
  return (
    <Header>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="hover:bg-transparent">
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                key={header.id}
                className={cn(
                  "text-muted-foreground !py-3",
                  header.column.columnDef.meta,
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </Header>
  );
};
