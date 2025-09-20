# FCL TRPC

FCL TRPC is a modern web application designed to help users master knowledge through a spaced repetition system. The app leverages advanced technologies to provide an efficient, customizable, and user-friendly learning experience.

## Overview

This project is built with:

- 🚀 **Next.js (App Router):** Delivers fast, scalable routing and server-side rendering for optimal performance.
- ⚡ **tRPC:** Enables typesafe, end-to-end API communication between client and server.
- 🗄️ **Prisma ORM:** Manages database access and migrations with a robust, type-safe interface.
- 🎨 **Shadcn UI:** Provides a set of beautiful, accessible, and customizable UI components.
- 🔒 **NextAuth:** Handles secure authentication and user sessions.

## Key Features

- 🧠 **Spaced Repetition System:** Implements proven algorithms to optimize learning and memory retention.
- 🧩 **Modular Architecture:** Features are organized for scalability and maintainability, allowing easy extension and customization.
- 🔗 **Typesafe Data Flow:** Ensures reliability and safety in API and database interactions.
- 🌗 **Theme Support:** Users can switch between light, dark, or system themes for a personalized experience.
- 🌍 **Internationalization:** Supports multiple languages for global accessibility.
- 🖥️ **Modern UI:** Clean, responsive design using Shadcn UI components.

## 📦 Project Structure

The codebase is organized for clarity, scalability, and modularity:

```
src/
  app/                🌐 Next.js routes & pages
    [locale]/          🌍 Internationalized routing
      (protected)/     🔒 Protected routes (auth required)
      (public)/        🌱 Public routes
    api/               🔗 API endpoints (auth, trpc)
  components/          🎨 Shadcn UI components & custom widgets
    ui/                🧩 UI primitives (buttons, dialogs, etc.)
  features/            🚀 Feature modules (study-item, tag, etc.)
    [feature]/         📚 Each feature with:
      model/           🧠 Business logic & data
      ui/              🖼️ Feature-specific UI
  entities/            🏷️ Domain entities (study-item, tag, repetitions)
    [entity]/          🗂️ Each entity with:
      model/           🧠 Entity logic & types
      ui/              🖼️ Entity UI components
  widgets/             🧱 Reusable widgets (header, study-items-page)
    [widget]/          🗂️ Each widget with:
      model/           🧠 Widget logic
      ui/              🖼️ Widget UI
  i18n/                🌏 Internationalization helpers
  providers/           🛠️ Context providers (theme, etc.)
  shared/              🔄 Shared code (api, hooks, lib, types)
  styles/              🎨 Global styles
  trpc/                🔗 tRPC client/server setup
prisma/                 🗄️ Prisma schema & migrations
public/                 🖼️ Static assets (images, avatars)
messages/               💬 i18n translation files
```

**Folder Highlights:**

- `features/`, `entities/`, and `widgets/` all use a unified structure: each contains `model/` (logic, types) and `ui/` (UI components) for clear separation and easy scaling.
- `app/` uses Next.js App Router conventions, with `(protected)` and `(public)` folders for route access control.
- `components/ui/` contains Shadcn UI primitives for consistent design.
- `messages/` holds translation dictionaries for i18n.
- `prisma/` manages database schema and migrations.

## License

Licensed under the MIT License.

---

Created by [afl](https://github.com/alfeatingcats)
