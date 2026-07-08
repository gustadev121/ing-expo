# AGENTS.md

## Project overview

Presentation app for a university distributed systems course (Sistemas Distribuidos, UNSA 2026A). Built with TanStack Start (file-based router), React 19, Vite, Tailwind CSS v4, and Biome.

## Commands

- `bun run dev` - dev server on port 3000
- `bun run build` - production build
- `bun run lint:format` - auto-format with Biome
- `bun run lint:check` - lint + format check with Biome (write mode)

There is no typecheck script; run `bunx tsc --noEmit` directly. There are no tests.

## Tech stack quirks

- **TanStack Start** with file-based routing. Route tree is auto-generated at `src/routeTree.gen.ts` — never edit it. If you add/rename/remove a route file, regenerate it via `bun run dev` (the router plugin handles this).
- **Biome** (not ESLint/Prettier). Uses double quotes, space indentation. Format check uses `--write` (mutates files in place).
- **Tailwind v4** via Vite plugin (`@tailwindcss/vite`), not PostCSS.
- **Zod v4** for env validation in `src/lib/env.ts`.

## Architecture

```
src/
  routes/          # TanStack file-based routes
    __root.tsx     # Root layout (HTML shell)
    index.tsx      # Home page (lists presentations)
    presentations/
      route.tsx    # Layout wrapper for /presentations/*
      index.tsx    # Redirects /presentations/ -> /
      $topic.tsx   # Dynamic route, renders a presentation
  shared/          # Reusable slide components (SlideWrap, PresentationDeck, etc.)
  topics/          # Presentation content, one folder per topic
    microphoto/    # "Microphoto" presentation
      presentation/slides.tsx
  lib/
    presentations.tsx  # Registry of all presentations (slug, path, component)
    env.ts            # Zod-validated env vars (BASE_URL)
```

## Key patterns

- **Adding a new presentation**: Create slides in `src/topics/<name>/presentation/slides.tsx`, then add an entry to `src/lib/presentations.tsx` with slug, path, title, description, and component.
- **Loader vs component data**: Route loaders must return only serializable data. React components cannot survive JSON serialization (SSR). Look up component references client-side from the static `presentations` array using the route param.
- **Path alias**: `@/*` maps to `./src/*` (tsconfig + vite config both configured).
- **`routeTree.gen.ts`** is excluded from Biome and linter. Don't format it.
