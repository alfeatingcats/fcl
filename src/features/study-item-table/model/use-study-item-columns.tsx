import { type ColumnDef } from "@tanstack/react-table";
import { useFormatter, useTranslations } from "next-intl";

import type { StudyItem } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";

import { CreatedCell, StatusCell, TitleCell } from "@/entities/study-item/ui";

export const useStudyItemColumns = () => {
  const t = useTranslations("StudyItemTable");
  const format = useFormatter();
  const columns: ColumnDef<StudyItem>[] = [
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
          className="!ml-1.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t("selectRow")}
          className="!ml-1.5"
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
      cell: ({ row }) => (
        <CreatedCell format={format} createdAt={row.getValue("createdAt")} />
      ),
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
