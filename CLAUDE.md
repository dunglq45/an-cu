# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `yarn` (this repo is pinned to `yarn@1.22.17` and has a `yarn.lock`; don't use `npm`).

- `yarn start` — dev server at `http://localhost:4200` (alias for `ng serve`).
- `yarn build` — production build, output to `dist/an-cu/`.
- `yarn watch` — development-mode build with `--watch`.
- `yarn test` — unit tests via the Vitest-based `@angular/build:unit-test` runner (jsdom environment).
  - Single file: `ng test --include=src/app/pages/home/home.spec.ts`
  - Filter by test/suite name: `ng test --filter="App"`
  - Non-watch single run: `ng test --watch=false`
- `yarn serve:ssr:an-cu` — run the built SSR server (`node dist/an-cu/server/server.mjs`); requires `yarn build` first.

## Architecture

This is an Angular 21 SSR real-estate listings site (standalone components, signal-based inputs/state, no NgModules).

### Routing and rendering

- `src/app/app.routes.ts` is the client route table; `src/app/app.routes.server.ts` maps each of those routes to an SSR `RenderMode` for `@angular/ssr`. When adding/changing a client route, mirror it here or the server render mode falls back to the wildcard entry.
- Routes use Vietnamese path segments and slugs: `/` (home), `/tim-kiem` (search results), `/bat-dong-san/:slug` (property/listing detail), `/du-an/:slug` (project detail), `**` (not-found).
- `src/server.ts` is the Express entry point (`AngularNodeAppEngine`) that serves the built browser bundle and SSR-renders everything else; API endpoints would be added here.
- `src/app/app.config.ts` / `app.config.server.ts` wire up router, client hydration (`withEventReplay`), and merge server-only providers (`provideServerRendering`) for the server config.

### Data layer

There is no backend/API integration yet. All content is served from static mock arrays in `src/app/core/data/` (`mock-listings.ts`, `mock-projects.ts`, `mock-agents.ts`, `mock-areas.ts`, `mock-map-pins.ts`), typed against the interfaces in `src/app/core/models/`. Page components look up records with `computed()` by matching the route's `slug` input against these arrays (see `pages/property-detail/property-detail.ts`, `pages/project-detail/project-detail.ts`). When wiring real data, these mock/model files are the shape contract to preserve or migrate.

### Component layout

- `src/app/layout/` — page chrome shared across routes: `header`, `footer`, `mobile-topbar`, `mobile-bottom-nav`, and `page-shell` which composes them and is used as the outer wrapper by every page component (`footerVariant`, `showBottomNav`, `activeNav` inputs control per-page chrome).
- `src/app/pages/` — one folder per route; each page component (`*.ts`/`.html`/`.scss`) may have its own nested subcomponents (e.g. `property-detail/gallery`, `property-detail/loan-estimator`, `property-detail/booking-card`, `project-detail/floor-plan`, `project-detail/gated-pricing-table`) that are only used by that page.
- `src/app/shared/ui/` — presentational components reused across pages (cards, form controls, badges, panels). Prefer adding here over duplicating markup when a component is used by more than one page.

### Styling

- Design tokens (colors, spacing, radii, fonts, shadows) live as CSS custom properties in `src/app/styles/_tokens.scss`, plus `_breakpoints.scss` and `_utilities.scss`. These are on the Sass `includePaths` (`angular.json` → `stylePreprocessorOptions`), so any component SCSS can `@use` them without a relative path. Full token reference: [`docs/design/tokens.md`](docs/design/tokens.md).
- Every component has its own `.scss` file (`styleUrl`); there is no global component stylesheet beyond `src/styles.scss` and the token partials.

### Unrelated directory

`project/` is a standalone exported design-canvas artifact (`project/_ds/.../` — a "Modernist" red/mono design system with its own tokens and HTML component gallery). It is not referenced by the Angular build or app styles/tokens — don't treat it as source of truth for this app's UI.
