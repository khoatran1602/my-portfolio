# Repository Guidelines

This portfolio uses Next.js 13 (App + Pages routers) and Tailwind; treat the notes below as the baseline for every change.

## Project Structure & Module Organization
- `src/app` hosts App Router layouts and dynamic sections; `src/pages` keeps legacy routes like the sitemap and API handlers. Ship new screens in `src/app` unless you are fixing an existing `pages` file.
- `src/components` contains reusable UI blocks, `src/content` houses JSON/MD data, `src/lib` gathers hooks and helpers, and `src/routes` centralizes navigation data. Assets live under `public`, while global styles are in `src/styles`.
- Respect the `@/*` path alias declared in `tsconfig.json` for all intra-project imports.

## Build, Test, and Development Commands
- `npm run dev` – launches Next in dev mode with Fast Refresh; use when iterating on UI.
- `npm run build` – produces the optimized production bundle; required before deployment.
- `npm run start` – serves the last build locally, mirroring production content headers.
- `npm run lint` – runs `next lint` with the repo ESLint + Tailwind config; execute before every PR.

## Coding Style & Naming Conventions
- TypeScript is configured in strict mode; prefer typed props/interfaces and narrow unions.
- Follow function components with arrow syntax, PascalCase component filenames (`HeroSection.tsx`), and camelCase utilities (`useScrollProgress`).
- Tailwind classes handle layout; fall back to `*.module.css` only for complex, component-specific effects. Keep global tweaks in `src/styles/globals.css`.

## Testing Guidelines
- Automated tests are not yet wired; when adding them, use React Testing Library + Vitest (component) and Playwright (E2E). Co-locate files as `Component.test.tsx` near the implementation or under `src/__tests__`.
- Add smoke tests for each new page and snapshot critical components (hero, contact). Document manual verification steps in the PR until CI exists.

## Commit & Pull Request Guidelines
- Follow the existing Conventional Commits style: `<type>: <imperative summary>` (e.g., `feature: add timeline carousel`, `chore: refresh resume link`).
- Each PR should include a concise description, linked issue or task ID, testing notes (`npm run lint`, manual viewport checks), and screenshots for visible changes. Request review before merging; no direct pushes to `main`.

## Configuration & Environment Tips
- Runtime flags live in `.env.local`; prefix anything needed in the browser with `NEXT_PUBLIC_`. Never commit secrets.
- Adjust rendering or asset behavior through `next.config.js` for dev parity and `next.config.optimized.js` for production experiments; update both when touching shared options (images, redirects, headers).
