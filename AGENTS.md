<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Static portfolio for Kazi Sazzad Hossain: Next.js 16 App Router (`src/app`), React 19, TypeScript, Tailwind CSS 4, React Compiler. No backend, API routes, database, or environment variables; content is hardcoded.

## Commands

- `npm run dev` — Turbopack dev server at `localhost:3000`.
- `npm run lint` — ESLint flat config across the repo; use `npx eslint src/components` for a focused lint.
- `npx next typegen`, then `npx tsc --noEmit` — typecheck. Route types and `next-env.d.ts` are generated and gitignored, so run typegen before `tsc` on a clean checkout.
- `npm run build` — production build. It runs TypeScript but not ESLint; run `npm run lint` first for the full check.
- No test script or test suite exists.

## Deployment

- `netlify.toml` sets the build command (`npm run build`), publish directory (`.next`), and Node 22. Netlify detects Next.js and installs its OpenNext runtime automatically; don't add `@netlify/plugin-nextjs` or a custom `_redirects` file. See `README.md` for the deploy steps.

## Architecture

- `@/*` maps to `src/*`.
- `src/app/page.tsx` composes the home sections from `src/components/`. Only `navbar.tsx` and `resume-button.tsx` are client components (`"use client"`); keep new sections server-rendered unless they need state or effects.
- `src/app/projects/[slug]/page.tsx` is statically generated from `generateStaticParams()` with `dynamicParams = false`, so adding a `projects` entry creates its route and unknown slugs 404. Next 16 passes `params` as a Promise; the page awaits it.
- All content (profile, social links, nav, skills, education, projects) is in `src/data/portfolio.ts`. The resume button downloads `public/resume.pdf`; the checked-in PDF is a placeholder. `profile.resumeAvailable` toggles the download vs. the "coming soon" modal.
- Icons are hand-written SVGs in `src/components/icons.tsx`; no icon library is installed. Extend that file instead of adding a dependency.

## Styling and toolchain

- Tailwind 4 is wired through the `@tailwindcss/turbopack` loader in `next.config.ts`, with `@import "tailwindcss"` in `src/app/globals.css`. There is no PostCSS or `tailwind.config.*`; don't add one.
- Custom theme tokens (`bg-paper`, `text-ink`, font variables), animations, and helper classes (`.text-gradient`, `.bg-dots`, `.bg-grid`) are defined in `globals.css`; check there before adding global CSS.
- React Compiler is enabled (`reactCompiler: true`); write plain components and don't add `useMemo`/`useCallback` by default.
- Route props use generated globals such as `LayoutProps<"/">` and `PageProps<"/projects/[slug]">`; don't import them from `next`. Run typegen if unresolved.
- `next dev` owns the `nextjs-agent-rules` block above and may add a `nextjs-agent-feedback` block (`experimental.agentFeedback` is enabled). Keep and commit managed blocks; don't rewrite or remove them.
