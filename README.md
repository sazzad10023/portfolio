# Kazi Sazzad Hossain — Portfolio

A personal portfolio for Kazi Sazzad Hossain, built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and React Compiler.

The site includes a responsive navbar, hero, about, skills, education, a project grid with statically generated detail pages, contact details, and a footer.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — start the Turbopack dev server.
- `npm run build` — create a production build.
- `npm run start` — serve the production build.
- `npm run lint` — run ESLint.

## Editing content

All portfolio content lives in `src/data/portfolio.ts`:

- `profile` — name, designation, bio, contact details, location, photo, and resume settings.
- `socialLinks` — GitHub, LinkedIn, X, and Facebook URLs.
- `navItems` — navigation labels and section anchors.
- `skillGroups` — skill categories, levels, and labels.
- `education` and `experience` — timeline content.
- `projects` — project cards and the content for each `/projects/[slug]` detail page.

Update the data file and the pages will pick up the changes automatically. Project detail pages are generated from `generateStaticParams`, so adding a project to the array also creates its route at build time.

## Resume

The resume button downloads `public/resume.pdf`. The checked-in PDF is a placeholder generated from the portfolio content; replace that file with your final CV.

- Keep `profile.resumeAvailable: true` in `src/data/portfolio.ts` to show the download button.
- Set `profile.resumeAvailable: false` to restore the "coming soon" modal.
- Change `profile.resumeUrl` if the CV lives at a different path.

## Assets

- Profile photo: `public/image/profile.png`
- Project previews: `public/image/projects/*.svg`

The project previews are local SVGs, so the site has no external image dependencies.

## Deployment

The project builds as a standard Next.js app and is preconfigured for Netlify in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js: 22 (Next.js requires 20.9 or newer)

Push the repository to a Git provider and connect it in the Netlify dashboard. Netlify detects Next.js and installs its OpenNext runtime automatically, so do not add `@netlify/plugin-nextjs` to `package.json`. The runtime handles static pages, image optimization, and the statically generated `/projects/[slug]` routes.

The site also deploys to Vercel without extra configuration. Run `npm run build` locally to verify the production build before pushing.

## Project structure

```text
src/
  app/
    layout.tsx           Root layout, metadata, navbar and footer
    page.tsx             Home page section composition
    projects/[slug]/     Project detail pages
    globals.css          Tailwind theme, animations, backgrounds
  components/            UI sections and shared components
  data/portfolio.ts      Single source of truth for content
public/
  image/                 Profile photo and project previews
  resume.pdf             Placeholder CV (replace with your own)
```
