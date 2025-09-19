import { type ColumnDef } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import type { StudyItem } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CreatedCell, StatusCell, TitleCell } from "@/entities/study-item/ui";

export const createStudyItemColumns = () => {
  const columns: ColumnDef<StudyItem>[] = [
    {
      id: "expander",
      header: () => null,
      cell: ({ row }) => {
        return row.getCanExpand() ? (
          <Button
            {...{
              className: "size-7 shadow-none text-muted-foreground",
              onClick: row.getToggleExpandedHandler(),
              "aria-expanded": row.getIsExpanded(),
              "aria-label": row.getIsExpanded()
                ? `Collapse details for ${row.original.title}`
                : `Expand details for ${row.original.title}`,
              size: "icon",
              variant: "ghost",
            }}
          >
            {row.getIsExpanded() ? (
              <ChevronUpIcon
                className="opacity-60"
                size={16}
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="opacity-60"
                size={16}
                aria-hidden="true"
              />
            )}
          </Button>
        ) : undefined;
      },
    },
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      header: "Title",
      accessorKey: "title",
      cell: ({ row }) => <TitleCell title={row.getValue("title")} />,
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("description") ?? ""}</div>
      ),
    },
    {
      header: "Created",
      accessorKey: "createdAt",
      cell: ({ row }) => <CreatedCell createdAt={row.getValue("createdAt")} />,
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => <StatusCell status={row.getValue("status")} />,
    },
    {
      header: () => <div>Tags</div>,
      accessorKey: "itemTags",
      cell: ({ row }) => {
        return <>tags...</>;
      },
    },
  ];
  return columns;
};
