// Common utility and generic types used across the project

import type { StorageValue } from "zustand/middleware/persist";
import type { UserStoreState } from "@/shared/stores/timezone-store";
import type { createFormatter, useTranslations } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type useEmblaCarousel from "embla-carousel-react";

// Storage value for Zustand persist
export type PersistedUserStoreState = StorageValue<Partial<UserStoreState>>;

// Formatter type for next-intl
export type IntlFormatter = ReturnType<typeof createFormatter>;
export type TimeTranslations = ReturnType<typeof useTranslations<"Time">>;

// Embla Carousel types
export type EmblaCarouselApi = UseEmblaCarouselType[1];
export type EmblaCarouselOptions = Parameters<typeof useEmblaCarousel>[0];
export type EmblaCarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

// React Hook Form handleSubmit type
export type FormHandleSubmit<T extends object = object> = ReturnType<
  UseFormReturn<T>["handleSubmit"]
>;
