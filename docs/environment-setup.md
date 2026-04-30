# Environment Setup

## Prerequisites

- Node.js 18+ (recommended: use nvm or fnm)
- pnpm 8+ (`npm install -g pnpm` if not installed)
- PostgreSQL 14+ (local instance or cloud provider)

## Local Development Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

```env
# Database - local PostgreSQL connection
DATABASE_URL="postgresql://user:password@localhost:5432/walsh_west_dev"

# Email - get a test API key from resend.com (free tier)
RESEND_API_KEY="re_your_actual_key_here"

# Node environment
NODE_ENV="development"
```

**IMPORTANT**: Never commit `.env.local` to the repository. It is already in `.gitignore`.

### 3. Set up the database

Create a local PostgreSQL database:

```bash
createdb walsh_west_dev
```

Run Prisma migrations:

```bash
pnpm db:migrate
```

Generate Prisma client:

```bash
pnpm db:generate
```

### 4. Start the development server

```bash
pnpm dev
```

Visit http://localhost:3000

## Database Management

- **Run migrations**: `pnpm db:migrate`
- **Open Prisma Studio** (GUI for DB): `pnpm db:studio`
- **Reset database** (development only): `pnpm prisma migrate reset`

## Running Tests

- **Unit tests**: `pnpm test`
- **E2E tests**: `pnpm test:e2e` (starts dev server automatically)
- **Lint**: `pnpm lint`
- **Type check**: `pnpm typecheck`

## Production Deployment (Vercel)

See `docs/deployment.md` (to be created) for production setup instructions.

### Environment Variables for Production

Required on Vercel:

- `DATABASE_URL` - Vercel Postgres or Supabase connection string
- `RESEND_API_KEY` - Production API key from Resend
- `NODE_ENV` - Set to "production"

## Troubleshooting

### "Environment validation failed"

Make sure all required variables are set in `.env.local`. Check `src/lib/env.ts` for the schema.

### Prisma client errors

Run `pnpm db:generate` to regenerate the Prisma client after schema changes.

### Port 3000 already in use

Either stop the other process using port 3000, or start Next.js on a different port:

```bash
pnpm dev -- -p 3001
```
