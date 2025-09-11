import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EBBINGHAUS_INTERVALS } from "./const";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRepetitionSchedule = () => {
  const now = new Date();
  return EBBINGHAUS_INTERVALS.map((intervalMinutes, index) => ({
    repetitionNumber: index + 1,
    scheduledAt: new Date(now.getTime() + intervalMinutes * 60 * 1000),
  }));
};
