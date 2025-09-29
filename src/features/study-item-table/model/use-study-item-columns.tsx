import { type ColumnDef } from "@tanstack/react-table";
import { useFormatter, useTranslations } from "next-intl";

import {
  TagsCell,
  TitleCell,
  StatusCell,
  CreatedCell,
} from "@/entities/study-item/ui";
import { Checkbox } from "@/components/ui/checkbox";
import type { StudyItem, StudyItemTag, Tag } from "@prisma/client";

export const useStudyItemColumns = () => {
  const t = useTranslations("StudyItemTable");
  const ts = useTranslations("StudyItemStatus");
  const format = useFormatter();
  const columns: ColumnDef<StudyItem>[] = [
    {
      id: "select",
      size: 40,
      maxSize: 40,
      minSize: 40,
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
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: "title",
      cell: ({ row }) => <TitleCell title={row.getValue("title")} />,
    },
    {
      header: t("description"),
      accessorKey: "description",
      maxSize: 200,
      size: 180,
      minSize: 100,
      cell: ({ row }) => (
        <div className="truncate font-medium">
          {row.getValue("description") ?? ""}
        </div>
      ),
    },
    {
      header: t("created"),
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: "createdAt",
      cell: ({ row }) => (
        <CreatedCell format={format} createdAt={row.getValue("createdAt")} />
      ),
    },
    {
      header: t("status"),
      size: 120,
      maxSize: 140,
      minSize: 100,
      accessorKey: "status",
      cell: ({ row }) => <StatusCell status={row.getValue("status")} t={ts} />,
    },
    {
      header: () => <div>{t("tags")}</div>,
      accessorKey: "itemTags",
      size: 120,
      maxSize: 140,
      minSize: 100,
      cell: ({ row }) => {
        const tags: Array<StudyItemTag & { tag: Tag }> =
          row.getValue("itemTags");
        return <TagsCell tags={tags} />;
      },
    },
  ];
  return columns;
};
