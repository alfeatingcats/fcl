"use client";

import { api } from "@/trpc/react";

import type { CFC } from "@/types";

export const RepetitionsClient: CFC = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 });

  return (
    <div className="flex flex-col gap-4">
      {studyItems.items.map((item) => (
        <div key={item.id} className="bg-muted/50 rounded p-2">
          {item.title}
        </div>
      ))}
    </div>
  );
};
