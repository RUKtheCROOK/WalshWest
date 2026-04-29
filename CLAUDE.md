# walsh-west

> **Every agent reads this file at the start of every task. If you change a convention here, all agents pick it up automatically.**

## Product

Walsh West is a regional branch of Walsh Trading, Inc., a registered FCM/IB. The branch manager (Series 3 + Series 30 licensed) needs a simple marketing website to grow local and online presence and qualify inbound leads.

The site is a **lead-qualification brochure**, not a trading platform. It must visually align with the main Walsh Trading site (walshtrading.com) and be **NFA-compliant** in every word it publishes.

### Primary user jobs

1. **Learn what Walsh West does** — a commodities brokerage serving primarily **hedgers** (commercial producers/end-users managing price risk) and secondarily **speculators**.
2. **Get in touch** — three intake paths: a general inquiry form, a "work with us" signup form, and a newsletter signup.
3. **See upcoming events** — a calendar of webinars, market briefings, and local events the branch is hosting or attending.
4. **Meet the branch manager** — an "About" page so prospects know who they'd be working with.
5. **Bridge to the parent firm** — a clear link/redirect to the main Walsh Trading site for anything beyond the branch's scope.

### Non-goals (do NOT build these)

- Any trading tool, order entry, quote feed, charting, or simulated-trading widget.
- Account opening flows (those live with the parent firm).
- Anything that could be construed as a guarantee, performance claim, or solicitation that violates **NFA Compliance Rule 2-29** (communications with the public) or related CFTC/NFA rules.
- Logged-in client portals, position viewers, or anything touching customer funds/positions.

## Tech Stack — DO NOT DEVIATE WITHOUT DIRECTOR APPROVAL

| Layer | Choice | Why |
|---|---|---|
| Language | TypeScript (strict) | Type safety on a small team |
| Framework | Next.js 15 (App Router) | SSG/ISR for marketing pages, server actions for forms |
| Styling | Tailwind CSS + shadcn/ui | Fast to match Walsh Trading's visual style, accessible primitives |
| Database | PostgreSQL (Vercel Postgres or Supabase) | Stores newsletter subscribers, inquiry submissions, event entries |
| ORM | Prisma | Type-safe queries, simple migrations |
| Forms / validation | React Hook Form + Zod | Single source of truth for client + server validation |
| Email | Resend (transactional) + a newsletter provider TBD | Confirmations + newsletter delivery |
| Auth | None for v1 (public site). Admin views, if needed, gated by a single-user Auth.js setup | No client accounts in scope |
| Hosting | Vercel | First-class Next.js support |
| Package manager | pnpm | |
| Test frameworks | Vitest (unit) + Playwright (e2e) | |

## Project Structure

```
walsh-west/
├── src/
│   ├── app/                  # Next.js App Router pages (home, about, services, events, contact, newsletter)
│   ├── components/           # Reusable UI (shadcn-based)
│   ├── lib/                  # Wrappers for DB, email, third-party SDKs
│   ├── server/               # Server actions, form handlers
│   └── content/              # Static copy (MDX) for services/about — easy edits
├── prisma/                   # schema.prisma + migrations
├── tests/                    # Vitest + Playwright
├── public/                   # Logos, photos, NFA disclosures (PDF if needed)
└── docs/                     # ADRs, specs from architect
```

## Coding Standards

### Language-specific
- TypeScript `strict: true`. No `any` without an inline justification comment.
- No non-null assertions (`!`) on values from forms, DB, or fetch — narrow them.

### Framework-specific
- Server Components by default. Opt into `"use client"` only when needed (interactivity, hooks).
- Mutations live in **server actions** under `src/server/`. No API routes for form handling unless an external service requires a webhook.
- Static/marketing pages should be statically generated; the events calendar can use ISR.

### Naming
- Files: `kebab-case` for utils and routes, `PascalCase.tsx` for React components.
- Functions: `camelCase`, verbs first (`createInquiry`, not `inquiryCreate`).
- DB tables/columns: `snake_case` in SQL; Prisma models in `PascalCase` mapped to `snake_case` via `@@map`/`@map`.

### Forbidden
- `console.log` in committed code (use a proper logger if needed; otherwise delete).
- Direct `process.env` access outside `src/lib/env.ts`.
- Raw third-party SDK calls outside `src/lib/`.
- Any user-facing copy that promises returns, implies certainty, or otherwise violates NFA 2-29 — see the Voice section.

## Inter-Agent Output Schema

Inherited from `~/.claude/CLAUDE.md`. See that file for the schema all worker agents use when reporting back to the Director.

## Autonomy Mode

This project runs in **full bypass-permissions mode**. The harness will not prompt for tool approvals; the Director and worker agents proceed without gates except for the items in "Gates" below. Configured in `.claude/settings.json` via `permissions.defaultMode = "bypassPermissions"`.

## Gates (still require human approval, despite bypass mode)

The Director must pause and ask the user before:

- **Publishing or editing any user-facing copy** that describes services, performance, risk, or testimonials. NFA 2-29 review is required from the human (Series 3 holder), not an agent.
- **Pointing the production domain** (DNS changes, Vercel production deploys to the live domain).
- **Schema migrations** that drop columns/tables or run destructive backfills.
- **Connecting any paid third-party service** (email provider, analytics, CRM) — confirm pricing tier and data handling first.
- **Sending email to the real subscriber list** from any script or batch job.

## Common Commands

```bash
pnpm dev              # Dev server
pnpm build            # Production build
pnpm test             # Vitest unit tests
pnpm test:e2e         # Playwright e2e
pnpm lint             # ESLint
pnpm typecheck        # tsc --noEmit
pnpm db:migrate       # Prisma migrate dev
pnpm db:studio        # Prisma Studio
```

Before any merge: `lint`, `typecheck`, and `test` must pass.

## Voice (for user-facing copy)

- **Audience**: Prospective clients of the branch — primarily commercial **hedgers** (ag producers, processors, end-users) and secondarily informed **speculators**. They are adults making business decisions; do not condescend.
- **Tone**: Calm, plain, professional. Confident without being salesy. Think *experienced broker explaining things over coffee*, not *landing-page hype*.
- **Person**: Second person ("your operation," "your hedge"). First-person plural for the firm ("we work with…").
- **Reading level**: Roughly 9th–10th grade. Define industry terms on first use.

### NFA-compliance guardrails for ALL public copy

The branch manager is the compliance backstop, but agents must avoid these patterns by default:

- **No performance claims, projections, or hypothetical results** unless accompanied by the required NFA disclosures and explicitly approved by the human.
- **No guarantees of profit or limits on loss.** Futures and options on futures involve substantial risk of loss and are not suitable for all investors — this disclosure (or equivalent) must appear on any page discussing services or risk.
- **No testimonials** in v1. (They trigger additional NFA disclosure requirements; defer until the human chooses to handle them.)
- **No misleading comparisons** to other firms, instruments, or strategies.
- **No "get rich," "easy," "low risk," "safe," "secret," or similar marketing-buzzword language.**
- **Past performance is not indicative of future results** — include this disclosure anywhere historical context is implied.
- Any reference to Walsh Trading, Inc. must be accurate (registered FCM/IB, NFA member). Walsh West is a **branch office**, not a separate firm.

When in doubt, route the copy back to the human via the Director. NFA review is a hard gate.

## Sensitive data classification

- [ ] This product handles money / financial data
- [X] This product handles PII (personally identifiable information)
- [ ] This product handles medical / regulated data
- [ ] None of the above

The site collects name, email, phone, and free-text inquiry details via the contact and signup forms — that is PII. The security-auditor must run before any production deploy.

### PII handling rules
- No PII in logs (scrub before logging; prefer structured logs with allow-listed fields).
- No PII in third-party API calls beyond what the call requires (especially LLM prompts — sanitize first).
- Encrypt sensitive fields at rest if the chosen DB doesn't already (Vercel Postgres / Supabase encrypt at rest by default — confirm before relying on it).
- Email addresses used for the newsletter must have a clear unsubscribe link in every send (CAN-SPAM).
- Honor data-deletion requests promptly; document the process in `docs/`.

## External integrations

| Service | Purpose | Wrapper location | Sandbox? |
|---|---|---|---|
| Resend | Transactional email (form confirmations, admin notifications) | `src/lib/email/` | Yes (test API key) |
| Newsletter provider (TBD) | Newsletter list + sends | `src/lib/newsletter/` | Yes |
| Postgres (Vercel/Supabase) | Form submissions, subscribers, events | `src/lib/db/` | Local dev DB |
| Calendar source (TBD: Google Calendar or static MDX) | Events list | `src/lib/events/` | n/a |

All third-party SDKs go through wrappers under `src/lib/`. No raw SDK calls outside `src/lib/`.

## Notes for the agent team

- This is a **rough first draft** of the site. Favor shipping a clean, simple v1 over feature breadth. The branch manager wants something he can put in front of prospects within weeks, not months.
- **Visual parity with walshtrading.com matters.** Pull palette, typography, and component patterns from the parent site rather than inventing a new look. The ui-ux-agent should reference it before defining tokens.
- **NFA compliance is non-negotiable.** When generating any user-facing copy, default to neutral, factual language and flag anything ambiguous to the human via the Director. Better to under-promise in copy than to draft something that needs to come down later.
- **No client accounts, no money flow, no order entry — ever.** If a request drifts in that direction, stop and confirm with the user; it likely belongs at the parent firm, not here.
- The branch manager is the only human reviewer. Keep PRs small and copy diffs reviewable.
