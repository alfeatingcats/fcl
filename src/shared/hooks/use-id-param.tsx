"use client";

import { useParams } from "next/navigation";

export const useIdParam = () => {
  return useParams<{ id: string }>().id;
};
