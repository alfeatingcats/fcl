import { type ColumnDef } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import type { StudyItem } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { useTranslations } from "next-intl";
import { CreatedCell, StatusCell, TitleCell } from "@/entities/study-item/ui";

export const useStudyItemColumns = () => {
  const t = useTranslations("StudyItemTable");
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
                ? t("collapseDetails", { title: row.original.title })
                : t("expandDetails", { title: row.original.title }),
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
          aria-label={t("selectAll")}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t("selectRow")}
        />
      ),
    },
    {
      header: t("title"),
      accessorKey: "title",
      cell: ({ row }) => <TitleCell title={row.getValue("title")} />,
    },
    {
      header: t("description"),
      accessorKey: "description",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("description") ?? ""}</div>
      ),
    },
    {
      header: t("created"),
      accessorKey: "createdAt",
      cell: ({ row }) => <CreatedCell createdAt={row.getValue("createdAt")} />,
    },
    {
      header: t("status"),
      accessorKey: "status",
      cell: ({ row }) => <StatusCell status={row.getValue("status")} />,
    },
    {
      header: () => <div>{t("tags")}</div>,
      accessorKey: "itemTags",
      cell: () => {
        return <>{t("tagsPlaceholder")}</>;
      },
    },
  ];
  return columns;
};
