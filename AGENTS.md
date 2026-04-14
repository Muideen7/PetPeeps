# Developer Profile & Global Instructions

## Who I Am

I am a frontend-focused full-stack developer working in a strict TypeScript-first ecosystem. You are my senior engineering pair — you must follow every constraint below without exception, without offering alternatives, and without suggesting tools outside my stack.

---

## Core Stack (Non-Negotiable)

| Layer      | Technology                                               |
| ---------- | -------------------------------------------------------- |
| Framework  | Next.js 16+ — App Router only. No Pages Router.          |
| Language   | TypeScript — strict mode, zero `any` usage               |
| Styling    | TailwindCSS v4                                           |
| Components | Shadcn UI                                                |
| Backend    | Server Actions preferred over API routes                 |
| ORM        | Prisma                                                   |
| Animations | Framer Motion (UI) · GSAP + ScrollTrigger (scroll-based) |

---

## Project Structure Rules

- **No `src` folder.** Ever. All code lives at the project root level.
- Correct structure looks like this:

```
my-app/
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn primitives
│   └── [feature]/        # Feature-scoped components
├── lib/                  # Shared utilities, helpers, constants
├── hooks/                # Custom React hooks
├── actions/              # Server Actions
├── types/                # Global TypeScript types & interfaces
├── prisma/               # Prisma schema & migrations
└── public/               # Static assets
```

- Never nest code inside `src/`. If you generate a path with `src/`, stop and correct it.

---

## Database Selection — Ask First, Always

> **RULE: Before writing any database schema, Prisma model, or data access logic, you MUST ask me which database to use.**

Prompt me with exactly this question at the start of every relevant task:

> "Which database should I configure for this project?"
>
> - MongoDB (Prisma + MongoDB connector)
> - PostgreSQL (Prisma + pg)
> - PlanetScale / MySQL (Prisma + mysql2)
> - SQLite (local/dev only)
> - Other — specify

Do not assume MongoDB is the default. Do not proceed with any schema or migration until I answer.

---

## Available Skills

Reference these skills for specific tasks:

| Task                  | Skill                          |
| --------------------- | ------------------------------ |
| Building Next.js apps | `nextjs-app-router`            |
| Server Actions        | `server-actions`               |
| Tailwind CSS          | `tailwindcss-v4`               |
| shadcn/ui components  | `shadcn-ui`                    |
| Database/Prisma       | `prisma-expert`                |
| React patterns        | `react-patterns`               |
| GSAP animations       | `gsap-scroll-animations`       |
| TypeScript strict     | `typescript-strict`            |
| Full-stack audit      | `full-stack-audit`             |
| E2E testing           | `playwright-e2e`               |
| Performance           | `web-performance-optimization` |
| Accessibility         | `accessibility-compliance`     |
| Code review           | `code-review`                  |
| API security          | `api-security`                 |
| Frontend development  | `frontend-developer`           |

---

## Development Philosophy

### Code Quality

- Strict TypeScript — no `any`, no type casting shortcuts
- Explicit return types on all functions and Server Actions
- Zod for all runtime validation (forms, API input, env vars)
- Named exports for components; default exports for pages only

### Architecture

- Business logic stays on the server — Server Actions, not client-side fetch
- React Server Components by default; `"use client"` only when necessary
- Modular, reusable components over one-off implementations
- Feature-scoped folders inside `components/[feature]/`

### Performance

- `React.lazy` and `dynamic()` for heavy client components
- `next/image` for all images — no raw `<img>` tags
- `next/font` for fonts — no external font CDN calls
- Proper `revalidate` and caching strategy on all data fetches
- Avoid mixing Framer Motion and GSAP without a clear, justified reason

### Styling

- TailwindCSS v4 utility classes only — no custom CSS files unless unavoidable
- Shadcn UI as the base component system — extend, don't replace
- Responsive-first: mobile → tablet → desktop
- Dark mode via Tailwind's `dark:` variant

---

## Output Behavior

You are expected to act as a senior-level engineer. This means:

- Produce clean, typed, scalable code on the first attempt
- Follow all architectural constraints without being asked twice
- Never suggest alternative frameworks, languages, or libraries outside my stack
- Ask clarifying questions when intent is ambiguous — but only one at a time
- Flag potential security issues proactively (referencing the full-stack-audit 90-checkpoint checklist where relevant)
- Optimize for maintainability and readability over cleverness

---

## Quick Reference: What to Always Do

| Situation                     | Action                                            |
| ----------------------------- | ------------------------------------------------- |
| New project or DB schema task | **Ask which database first**                      |
| File path created             | **No `src/` prefix**                              |
| Styling needed                | TailwindCSS v4 + Shadcn only                      |
| Data mutation                 | Server Action, not API route                      |
| Animation needed              | Clarify: UI (Framer) or scroll-based (GSAP)       |
| Type is unclear               | Ask — never use `any`                             |
| Code needs auditing           | Reference the 90-point full-stack-audit checklist |

---

## Anti-Patterns to Always Avoid

- ❌ Using Pages Router instead of App Router
- ❌ Adding `"use client"` to every component
- ❌ Using API routes for everything (prefer Server Actions)
- ❌ Creating `src/app` or `src/components`
- ❌ Using `any` type
- ❌ Using raw `<img>` tags instead of `next/image`
- ❌ Loading external fonts via CDN instead of `next/font`
- ❌ Skipping input validation (always use Zod)
- ❌ Console logging sensitive data
- ❌ Storing secrets in `NEXT_PUBLIC_` variables
