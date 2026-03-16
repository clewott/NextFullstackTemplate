# Next.js Fullstack Template

A production-ready Next.js fullstack template with authentication, database ORM, and cloud storage pre-configured. Built on Next.js 16 with TypeScript, Tailwind CSS v4, and a modern fullstack toolchain.

## Stack Overview

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | Better Auth |
| ORM | Prisma 7 |
| Database | PostgreSQL via Supabase |

## Key Libraries

### Better Auth
[Better Auth](https://better-auth.com) handles authentication with a type-safe, framework-agnostic approach.

- Server config: [src/lib/auth.ts](src/lib/auth.ts) — defines providers and the Prisma adapter
- Client config: [src/lib/auth-client.ts](src/lib/auth-client.ts) — exports `signIn`, `signUp`, `useSession`
- Auth route handler: [src/app/api/auth/[...all]/route.ts](src/app/api/auth/%5B...all%5D/route.ts)
- Auth utilities: [src/utils/account/](src/utils/account/)

Supports email/password out of the box. GitHub OAuth is stubbed and ready to enable.

### Prisma
[Prisma](https://prisma.io) is the ORM layer connecting to PostgreSQL.

- Schema: [prisma/schema.prisma](prisma/schema.prisma) — includes `User`, `Session`, `Account`, `Verification`, and `Todo` models
- Client singleton: [src/lib/prisma.ts](src/lib/prisma.ts)
- Adapter config: [prisma.config.ts](prisma.config.ts) — uses the `@prisma/adapter-pg` adapter with `DATABASE_URL` and `DIRECT_URL`

Run migrations with:
```bash
npx prisma migrate dev
```

Introspect or push schema changes with:
```bash
npx prisma db push
```

### Supabase
[Supabase](https://supabase.com) is used as the hosted PostgreSQL backend.

- Browser client: [src/utils/supabase/client.ts](src/utils/supabase/client.ts)
- Server client: [src/utils/supabase/server.ts](src/utils/supabase/server.ts)
- Middleware: [src/utils/supabase/middleware.ts](src/utils/supabase/middleware.ts)

Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from your Supabase project settings.

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/   # Better Auth catch-all route
│   ├── dashboard/           # Protected dashboard page
│   ├── login/               # Login page
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── auth.ts              # Better Auth server config
│   ├── auth-client.ts       # Better Auth client config
│   └── prisma.ts            # Prisma client singleton
└── utils/
    ├── account/             # Auth helper hooks/utilities
    └── supabase/            # Supabase client utilities
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Prisma / PostgreSQL
DATABASE_URL=your_pooled_connection_string
DIRECT_URL=your_direct_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000
```

`DATABASE_URL` and `DIRECT_URL` can both be found in your Supabase project under **Settings > Database**.

### 3. Push the database schema

```bash
npx prisma db push
```

Or run migrations if you have a migrations history:

```bash
npx prisma migrate dev
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Add all environment variables from your `.env.local` to the Vercel project settings before deploying.
