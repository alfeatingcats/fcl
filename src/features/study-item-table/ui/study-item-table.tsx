import { InfoIcon } from "lucide-react";
import { Fragment, type FC } from "react";
import type { StudyItem } from "@prisma/client";
import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStudyItemTable } from "../model/use-table";
import { useTranslations } from "next-intl";

interface StudyItemTableProps {
  studyItems: Array<StudyItem>;
}
export const StudyItemTable: FC<StudyItemTableProps> = ({
  studyItems = [],
}) => {
  const t = useTranslations("StudyItemTable");

  const { table } = useStudyItemTable(studyItems);

  return (
    <div className="!max-w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="whitespace-nowrap [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() && (
                  <TableRow>
                    <TableCell colSpan={row.getVisibleCells().length}>
                      <div className="text-primary/80 flex items-start py-2">
                        <span
                          className="me-3 mt-0.5 flex w-7 shrink-0 justify-center"
                          aria-hidden="true"
                        >
                          <InfoIcon className="opacity-60" size={16} />
                        </span>
                        <p className="text-sm">{row.original.description}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))
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
        </TableBody>
      </Table>
    </div>
  );
};
