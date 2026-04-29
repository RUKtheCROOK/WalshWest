# Architecture - Walsh West v1

## Overview

Walsh West is a Next.js 15 App Router application following a server-first architecture. The site is a marketing/lead-qualification tool, not a trading platform.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui primitives
- **Database**: PostgreSQL via Prisma ORM
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend for transactional emails
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Hosting**: Vercel

## Directory Structure

```
walsh-west/
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # Static pages
│   │   ├── services/
│   │   ├── events/            # Uses ISR for event listings
│   │   ├── contact/           # Inquiry + Work With Us forms
│   │   └── newsletter/        # Newsletter signup form
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui primitives (Button, Input, etc.)
│   │   ├── Header.tsx         # Site navigation
│   │   ├── Footer.tsx         # Footer with NFA disclosure + parent firm link
│   │   └── *Form.tsx          # Client-side form components
│   ├── lib/                   # Shared utilities and wrappers
│   │   ├── db/                # Prisma client singleton
│   │   ├── email/             # Resend wrapper
│   │   ├── newsletter/        # Newsletter provider stub (TBD)
│   │   ├── events/            # Event source stub (TBD)
│   │   ├── env.ts             # Environment variable validation (Zod)
│   │   ├── validations.ts     # Zod schemas for forms
│   │   └── utils.ts           # Utility functions (cn, etc.)
│   └── server/                # Server-side code
│       └── actions.ts         # Server actions for form submissions
├── prisma/
│   ├── schema.prisma          # Database schema (3 models)
│   └── migrations/            # Migration history
├── tests/
│   ├── unit/                  # Vitest tests
│   └── e2e/                   # Playwright tests
├── public/                    # Static assets
└── docs/                      # Documentation (this file, design tokens, etc.)
```

## Data Flow

### Form Submissions

1. User fills form in a client component (`InquiryForm`, `WorkWithUsForm`, or `NewsletterForm`)
2. React Hook Form validates input on client (Zod schema)
3. Form calls server action from `src/server/actions.ts`
4. Server action re-validates input (same Zod schema)
5. Server action writes to database via Prisma
6. Server action sends confirmation email via Resend wrapper
7. Server action returns result to client
8. Client displays success/error message

### Static/Marketing Pages

- Home, About, Services: Static generation (SSG)
- Events: Incremental Static Regeneration (ISR) - can be updated without full rebuild

## Database Schema

Three models, all with `snake_case` table/column names:

1. **Inquiry** (`inquiries` table)
   - General contact form submissions
   - Fields: name, email, phone, message

2. **WorkWithUsSignup** (`work_with_us_signups` table)
   - "Work with us" form submissions
   - Fields: name, email, phone, operation_type (optional), message

3. **NewsletterSubscriber** (`newsletter_subscribers` table)
   - Newsletter subscriptions
   - Fields: email (unique), name (optional), subscribed (boolean)

## External Integrations

All third-party SDKs are wrapped in `src/lib/`:

- **Resend** (`src/lib/email/`): Transactional email delivery
- **Newsletter provider** (`src/lib/newsletter/`): Stub for future integration (TBD: Mailchimp, ConvertKit, etc.)
- **Events source** (`src/lib/events/`): Stub for future integration (TBD: Google Calendar API or static MDX)

## Environment Variables

Centralized in `src/lib/env.ts` with Zod validation. No direct `process.env` access elsewhere.

Required variables:
- `DATABASE_URL`
- `RESEND_API_KEY`
- `NODE_ENV`

See `docs/environment-setup.md` for details.

## Security & Compliance

### PII Handling
Forms collect name, email, phone, message - all PII.

- Stored in PostgreSQL with encryption at rest (via Vercel Postgres / Supabase)
- Not logged (structured logging avoids PII fields)
- Email confirmations sent only to the submitter
- No third-party analytics or tracking in v1

### NFA Compliance
Every page with service-related content includes risk disclosure:
- "Futures and options on futures involve substantial risk of loss..."
- Footer includes this disclosure site-wide
- No performance claims, guarantees, or testimonials in copy

See `CLAUDE.md` for full NFA guardrails.

## Testing Strategy

- **Unit tests** (Vitest): Zod schemas, utility functions
- **E2E tests** (Playwright): Page loads, navigation, form presence, walshtrading.com link
- **No integration tests yet**: Server actions are tested indirectly via e2e (can add later if needed)

## Future Enhancements (out of scope for v1)

- Finalize visual styling (match walshtrading.com exactly)
- Integrate real newsletter provider
- Integrate calendar/event source (Google Calendar or CMS)
- Add admin view for form submissions (gated by Auth.js)
- Analytics (privacy-respecting: Plausible or similar)
- More comprehensive e2e tests for form submissions
