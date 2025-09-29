import { Minus } from "lucide-react";
import { isEmpty } from "es-toolkit/compat";

import { Badge } from "@/components/ui/badge";
import type { StudyItemTag, Tag } from "@prisma/client";

export interface TagsCellProps {
  tags: Array<StudyItemTag & { tag: Tag }>;
}

export const TagsCell = ({ tags }: TagsCellProps) => {
  if (isEmpty(tags)) {
    return <Minus className="h-4 w-4 opacity-50" />;
  }

  return (
    <div className="flex min-w-[200px] flex-wrap gap-1">
      {tags.map(({ tag }) => (
        <Badge className={`${tag.color}`} key={tag.id}>
          {tag.name}
        </Badge>
      ))}
    </div>
  );
};
