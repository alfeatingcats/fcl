import { isNil, range } from "es-toolkit";
import { CheckIcon } from "lucide-react";
import { isEmpty } from "es-toolkit/compat";
import { AnimatePresence, motion } from "motion/react";

import {
  TagsList,
  TagsItem,
  TagsEmpty,
  TagsGroup,
} from "@/components/ui/kibo-ui/tags";
import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

import type { RequiredCreateTagInput } from "../model/types";

type TagsListContentProps = {
  isPending: boolean;
  selectedTagIds: string[];
  handleSelect: (tagId: string) => void;
  displayTags: RequiredCreateTagInput[] | undefined;
};

export const TagsListContent = ({
  isPending,
  displayTags,
  selectedTagIds,
  handleSelect,
}: TagsListContentProps) => {
  return (
    <TagsList>
      <AnimatePresence mode="popLayout">
        {isPending ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-3 p-3"
          >
            {range(4).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full rounded-xl" />
            ))}
          </motion.div>
        ) : isNil(displayTags) || isEmpty(displayTags) ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="p-3"
          >
            <TagsEmpty />
          </motion.div>
        ) : (
          <TagsGroup key="tags">
            {displayTags.map((tag) => (
              <motion.div
                key={tag.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  mass: 0.5,
                }}
              >
                <TagsItem
                  onSelect={() => handleSelect(tag.id)}
                  value={tag.name}
                  className="hover:bg-accent/50 transition-colors"
                >
                  <div className={cn("mr-2 h-3 w-3 rounded-full", tag.color)} />
                  <span className="flex-1 text-sm">{tag.name}</span>
                  {selectedTagIds.includes(tag.id) && (
                    <CheckIcon className="text-muted-foreground" size={14} />
                  )}
                </TagsItem>
              </motion.div>
            ))}
          </TagsGroup>
        )}
      </AnimatePresence>
    </TagsList>
  );
};
