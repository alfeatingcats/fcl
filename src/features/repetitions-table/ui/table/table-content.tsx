import { type FC } from "react";
import type { StudyRepetition } from "@prisma/client";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { Table } from "@/components/ui/table";

import { TableBody } from "./table-body";
import { TableFooter } from "./table-footer";
import { TableHeader } from "./table-header";
import type { RepetitionListProps } from "@/entities/repetitions/model";
import {
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRepetitionColumns } from "../../model/use-repetition-columns";

interface RepetitionsTableContentProps
  extends Omit<RepetitionListProps, "repetitions"> {
  repetitions: Array<StudyRepetition>;
}

export const RepetitionsTableContent: FC<RepetitionsTableContentProps> = ({
  repetitions = [],
  onSkipRepetition,
  onWaitRepetition,
  onCompleteRepetition,
}) => {
  const columns = useRepetitionColumns({
    data: repetitions,
    onSkipRepetition,
    onWaitRepetition,
    onCompleteRepetition,
  });

  const table = useReactTable({
    data: repetitions || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="relative w-full overflow-hidden rounded-md border">
      <OverlayScrollbarsComponent
        defer
        element="span"
        options={{
          scrollbars: { autoHide: "scroll" },
          overflow: { x: "scroll", y: "hidden" },
        }}
      >
        <Table className="min-w-[700px]">
          <TableHeader table={table} />
          <TableBody table={table} />
          <TableFooter />
        </Table>
      </OverlayScrollbarsComponent>
    </div>
  );
};
