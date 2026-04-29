# walsh-west

> **Every agent reads this file at the start of every task. If you change a convention here, all agents pick it up automatically.**

## Product

I am a series 3 and series 30 branch manager for a branch of Walsh Trading Inc. The branch is called walsh west. I am needing a website that I can operate as the branch to have a bigger local presence and online presence. I need the website to follow the same theme as the main walsh trading website. But I only really need it to do simple lead qualification. A form, what we do, a newsletter signup, an inquiry form, an about us form where I can put myself so people know who I am. Maybe a redirect to the main site as well. This is just a rough draft. It should be NFA compliant.

### Primary user jobs
1. <fill in: what's the #1 thing users come here to do>
2. <#2>
3. <#3>

### Non-goals (do NOT build these)
- <out-of-scope thing>
- <another out-of-scope thing>

## Tech Stack — DO NOT DEVIATE WITHOUT DIRECTOR APPROVAL

| Layer | Choice | Why |
|---|---|---|
| Language | TypeScript (strict) | |
| Framework | Next.js 15 (App Router) | |
| Styling | <e.g., Tailwind + shadcn/ui> | |
| Database | <e.g., PostgreSQL> | |
| ORM | <e.g., Prisma> | |
| Auth | <e.g., Clerk / Auth.js / NextAuth> | |
| Hosting | <e.g., Vercel> | |
| Package manager | pnpm | |
| Test frameworks | <e.g., Vitest + Playwright> | |

## Project Structure

```
walsh-west/
├── src/
│   ├── <fill in your actual structure>
├── tests/
└── docs/
```

## Coding Standards

### Language-specific
- <e.g., TypeScript strict mode, no any without justification>
- <conventions specific to your language>

### Framework-specific
- <e.g., Server Components by default in Next.js, opt into client when needed>
- <where mutations live: server actions, API routes, RPC, etc.>

### Naming
- Files: <e.g., kebab-case for utils, PascalCase for components>
- Functions: <conventions>
- Tables/columns: <conventions if relevant>

### Forbidden
- `console.log` in committed code.
- `<framework>` deprecated APIs from prior versions.
- Direct env access outside the project's env module.
- <Other forbidden patterns specific to this project>

## Inter-Agent Output Schema

Inherited from `~/.claude/CLAUDE.md`. See that file for the schema all worker agents use when reporting back to the Director.

## Gates (require human approval)

In addition to the global gates in `~/.claude/CLAUDE.md`, this project requires user approval before:

- <project-specific gate, e.g., "Schema migrations on financial tables">
- <e.g., "Spending against external paid APIs in any kind of loop or batch">

## Common Commands

```bash
pnpm dev              # Dev server
pnpm build            # Production build
pnpm test             # Test suite
pnpm lint             # Linter
pnpm typecheck        # Type check
```

Before any merge: lint, typecheck, and test must pass.

## Voice (for user-facing copy)

- **Audience**: <who is this for>
- **Tone**: <e.g., calm, plain, professional / playful>
- **Person**: <e.g., 2nd person ("your X")>
- **Avoid**: <e.g., jargon, scare language, marketing buzzwords>

## Sensitive data classification

- [ ] This product handles money / financial data
- [ ] This product handles PII (personally identifiable information)
- [ ] This product handles medical / regulated data
- [ ] None of the above

If any boxes are checked, the security-auditor's threshold is higher and it MUST be invoked before any deploy.

### If money is handled
- Storage: integer in smallest currency unit (cents for USD).
- Math: only via the project's money helper module.
- Never: floats, `parseFloat`, `Number()` on money strings.

### If PII is handled
- No PII in logs.
- No PII in third-party API calls (especially LLM prompts) — sanitize first.
- Encryption at rest for sensitive fields via the project's crypto module.

## External integrations

| Service | Purpose | Wrapper location | Sandbox? |
|---|---|---|---|
| <e.g., Stripe> | <Payments> | `src/lib/stripe/` | Yes |

All third-party SDKs go through wrappers. No raw SDK calls outside `src/lib/`.

## Notes for the agent team

<Anything else the agents should know about this specific project — quirks, history, things to avoid.>
