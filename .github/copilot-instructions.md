# Copilot Instructions for AI Coding Agents

## Project Overview

This is a modern spaced repetition web app built with Next.js (App Router), tRPC, Prisma, and Shadcn UI. It uses modular feature-based architecture and typesafe API/data flows.

## Key Architecture & Patterns

- **Routing:** All app routes/pages are in `src/app/`. Protected routes use the `(protected)` subfolder.
- **UI Components:** Shadcn UI components are in `src/components/ui/`. Custom widgets are in `src/widgets/`.
- **Features:** Domain features are in `src/features/`, each with its own `components/` and `containers/`.
- **API Layer:** tRPC routers are in `src/server/api/routers/` and exposed via `src/server/api/trpc.ts`.
- **Database:** Prisma schema is in `prisma/schema.prisma`. DB access via `src/server/db.ts`.
- **Types:** Shared types in `src/types/` and Zod schemas in `src/schema/`.
- **Providers:** Context providers (e.g., theme) in `src/providers/`.

## Developer Workflows

- **Install:** `pnpm install`
- **Dev Server:** `pnpm dev`
- **Build:** `pnpm build`
- **DB Migrations:** `pnpm prisma migrate dev`
- **Database Config:** Edit `prisma/schema.prisma`, then migrate.
- **Authentication:** NextAuth config in `src/server/auth/config.ts`.

## Conventions & Practices

- **Feature Modules:** Place new features in `src/features/[feature]/` with clear separation of UI and logic.
- **Typesafe APIs:** Use tRPC for all client-server communication. Define routers in `src/server/api/routers/`.
- **Validation:** Use Zod schemas for input validation (`src/schema/`).
- **UI:** Prefer Shadcn UI components for consistency.
- **Internationalization:** Message files in `messages/`.
- **Testing:** (No explicit test setup found; ask user if needed.)
- **Commits:** Use Conventional Commits style.

## Integration Points

- **NextAuth:** For authentication, see `src/server/auth/`.
- **Prisma:** For DB, see `prisma/` and `src/server/db.ts`.
- **tRPC:** For API, see `src/server/api/` and `src/trpc/`.
- **Shadcn UI:** For UI, see `src/components/ui/`.
- **i18n translations:** The i18n translation dictionary is located in the `messages/` folder.

## Examples

- Add a new feature: `src/features/new-feature/`
- Add a new tRPC router: `src/server/api/routers/newRouter.ts`
- Add a new UI component: `src/components/ui/newComponent.tsx`

---

If any conventions or workflows are unclear, ask the user for clarification before proceeding.
