import { Fragment, type FC } from "react";
import { useTranslations } from "next-intl";
import { flexRender } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StudyItem } from "@prisma/client";

import { useStudyItemTable } from "../model/use-table";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface StudyItemTableContentProps {
  studyItems: Array<StudyItem>;
}
export const StudyItemTableContent: FC<StudyItemTableContentProps> = ({
  studyItems = [],
}) => {
  const t = useTranslations("StudyItemTable");

  const { table } = useStudyItemTable(studyItems);

  return (
    <OverlayScrollbarsComponent
      className="rounded-md border"
      element="span"
      options={{
        scrollbars: { autoHide: "scroll" },
        overflow: { x: "scroll", y: "hidden" },
      }}
      defer
    >
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-muted-foreground !py-3"
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
                      className="py-2 whitespace-nowrap [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
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
    </OverlayScrollbarsComponent>
  );
};
