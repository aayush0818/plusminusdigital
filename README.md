# PlusMinus Digital

Website for PlusMinus Digital — a web design and digital experience studio building distinctive, high-craft sites for architecture, real estate, interior design, and nonprofit clients.

**Live site:** [plusminusdigital.in](https://plusminusdigital.in)

## Overview

A fast, motion-forward agency site with custom cursor and smooth-scroll interactions, showcasing selected work as detailed case studies and publishing design/industry insights as articles.

**Pages**
- `/` — Home
- `/work` — Selected work
- `/work/:slug` — Individual case study
- `/services` — Services offered
- `/about` — About the studio
- `/insights` — Articles and insights
- `/insights/:slug` — Individual article
- `/contact` — Contact

## Tech stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** for components
- **Framer Motion** for animation
- **Lenis** for smooth scrolling
- **React Router** for routing
- **TanStack Query** for data fetching
- **Vitest** + **React Testing Library** for tests
- Content (case studies, articles) sourced from `src/data`, no backend required

## Getting started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

\`\`\`sh
# Clone the repository
git clone https://github.com/aayush0818/plusminusdigital.git
cd plusminusdigital

# Install dependencies
npm install

# Start the dev server
npm run dev
\`\`\`

The app runs at `http://localhost:8080` by default.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build, output to `dist/` |
| `npm run build:dev` | Build in development mode (unminified, for debugging) |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

\`\`\`
src/
  components/    # Reusable UI (CustomCursor, SmoothScroll, ScrollToTop, etc.)
  components/ui/ # shadcn/ui primitives
  pages/         # Route-level pages
  data/          # Case study and article content (articles.ts)
  hooks/         # Custom React hooks
  lib/           # Shared utilities
  test/          # Vitest setup and tests
\`\`\`

## Adding content

Case studies and articles are defined in `src/data/articles.ts` rather than pulled from a CMS or database — add or edit entries there and they'll appear on `/work` or `/insights` automatically via the `:slug` routes.

## Deployment

Deployed from the `main` branch, served at [plusminusdigital.in](https://plusminusdigital.in).

## License

Private project — all rights reserved.
