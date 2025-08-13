# FCL TRPC

A modern web application for spaced repetition learning, built with Next.js, tRPC, Prisma, and Shadcn UI.

## Features

- 🚀 **Next.js App Router** for fast, scalable routing
- 🔒 **Authentication** with NextAuth
- 🗄️ **Prisma ORM** for database management
- ⚡ **tRPC** for typesafe API calls
- 🎨 **Shadcn UI** for beautiful, customizable components
- 🧠 **Spaced Repetition System** for effective learning
- 🌗 **Theme Support** (light/dark/system)
- 🧩 Modular structure for easy feature development

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) package manager
- PostgreSQL (or your preferred database)

### Installation

```sh
pnpm install
```

### Database Setup

1. Configure your database in `prisma/schema.prisma`.
2. Run migrations:

```sh
pnpm prisma migrate dev
```

### Development

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

## Project Structure

```
src/
  app/                # Next.js app routes & pages
  components/         # UI components (Shadcn UI)
  features/           # Feature modules
  hooks/              # Custom React hooks
  lib/                # Utilities and constants
  providers/          # Context providers
  schema/             # Zod schemas
  server/             # Server-side logic (tRPC, DB)
  trpc/               # tRPC client/server setup
  types/              # Type definitions
  widgets/            # Widget components
prisma/               # Prisma schema & migrations
public/               # Static assets
```

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm prisma migrate dev` — Run database migrations

## Contributing

Pull requests and issues are welcome!  
Please follow the [Conventional Commits](https://www.conventionalcommits.org/) style.

## License

MIT

---

Made with ❤️ by [afl](https://github.com/alfeatingcats)
