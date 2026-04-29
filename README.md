# Walsh West

A regional branch website for Walsh West, part of Walsh Trading, Inc. (registered FCM/IB).

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm 8+
- PostgreSQL 14+ (local or cloud)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual values (see `docs/environment-setup.md`).

3. **Set up database**
   ```bash
   pnpm db:migrate
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```
   Visit http://localhost:3000

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components
- `src/lib/` - Utilities and third-party wrappers
- `src/server/` - Server actions
- `prisma/` - Database schema and migrations
- `tests/` - Unit and e2e tests
- `docs/` - Project documentation

## Available Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm test             # Run unit tests (Vitest)
pnpm test:e2e         # Run e2e tests (Playwright)
pnpm lint             # Lint code (ESLint)
pnpm typecheck        # Type check (TypeScript)
pnpm db:migrate       # Run database migrations
pnpm db:studio        # Open Prisma Studio
```

## Documentation

- **Architecture**: See `docs/architecture.md`
- **Environment Setup**: See `docs/environment-setup.md`
- **Design Tokens**: See `docs/design-tokens.md`
- **PII Handling**: See `docs/pii-handling.md`
- **Project Guidelines**: See `CLAUDE.md`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL + Prisma
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Testing**: Vitest + Playwright
- **Hosting**: Vercel

## Pages

- `/` - Home
- `/about` - About the branch and branch manager
- `/services` - Services for hedgers and speculators
- `/events` - Upcoming events calendar
- `/contact` - General inquiry + "Work With Us" forms
- `/newsletter` - Newsletter signup

## Compliance

This site is subject to NFA Compliance Rule 2-29 (communications with the public). All user-facing copy must be reviewed by the branch manager before publication.

Risk disclosure appears on every page: "Futures and options on futures involve substantial risk of loss and are not suitable for all investors. Past performance is not indicative of future results."

## Status

**Current**: v1 skeleton complete. All pages, forms, and infrastructure are functional with placeholder copy.

**Next steps**:
- Finalize visual styling to match walshtrading.com
- Write and review user-facing copy (NFA compliance review required)
- Integrate newsletter provider
- Integrate event source (Google Calendar or static content)
- Production deployment to Vercel

## License

Proprietary - Walsh West / Walsh Trading, Inc.
