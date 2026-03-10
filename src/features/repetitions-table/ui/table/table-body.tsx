import { TableCell, TableRow, TableBody as Body } from "@/components/ui/table";
import { cn } from "@/shared/lib/utils";
import type { StudyRepetition } from "@prisma/client";
import { flexRender, type Table } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import type { FC } from "react";

type TableBodyProps = {
  table: Table<StudyRepetition>;
};

export const TableBody: FC<TableBodyProps> = ({ table }) => {
  const t = useTranslations("StudyItemTable");

  return (
    <Body>
      {table.getRowModel().rows?.length ? (
        <>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      "whitespace-nowrap [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0",
                      cell.column.columnDef.meta,
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </>
      ) : (
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            {t("noResults")}
          </TableCell>
        </TableRow>
      )}
    </Body>
  );
};
