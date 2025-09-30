import { type ColumnDef } from "@tanstack/react-table";
import { useFormatter, useTranslations } from "next-intl";

import type {
  StudyItem,
  StudyItemTag,
  Tag,
  StudyRepetition,
} from "@prisma/client";
import {
  TagsCell,
  TitleCell,
  StatusCell,
  CreatedCell,
  RepetitionsCell,
} from "@/entities/study-item/ui";
import { Checkbox } from "@/components/ui/checkbox";

export const useStudyItemColumns = () => {
  const t = useTranslations("StudyItemTable");
  const ts = useTranslations("StudyItemStatus");
  const tsi = useTranslations("Sidebar");

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
          className="!mr-1.5 !ml-1.5"
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
      header: tsi("reviewCycle"),
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: "repetitions",
      cell: ({ row }) => {
        const repetitions: StudyRepetition[] = row.getValue("repetitions");
        return <RepetitionsCell repetitions={repetitions} />;
      },
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
      header: t("tags"),
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
