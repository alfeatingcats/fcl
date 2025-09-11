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

## Project Structure

The codebase is organized for clarity and modularity:

```
src/
  app/                Next.js routes and pages (protected/public)
  components/         Shadcn UI components and custom widgets
  features/           Domain features, each with its own logic and UI
  hooks/              Custom React hooks
  lib/                Utilities and constants
  providers/          Context providers (e.g., theme)
  schema/             Zod schemas for validation
  server/             API routers, authentication, and database access
  trpc/               tRPC client/server setup
  types/              Shared type definitions
  widgets/            Reusable widget components
prisma/               Prisma schema and migrations
public/               Static assets (icons, images)
messages/             Internationalization message files
```

## Contribution & License

Contributions are welcome! Please use the Conventional Commits style for pull requests and issues.

Licensed under the MIT License.

---

Created by [afl](https://github.com/alfeatingcats)
