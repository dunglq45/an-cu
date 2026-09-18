# Design tokens

Source of truth: [`src/app/styles/_tokens.scss`](../../src/app/styles/_tokens.scss). All values are CSS custom properties on `:root`; components consume them with `var(--token-name)`, never hard-coded hex/px values. `_tokens.scss`, `_breakpoints.scss` and `_utilities.scss` are on the Sass `includePaths` (`angular.json` → `stylePreprocessorOptions`), so any component SCSS can `@use` them without a relative path.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--color-primary` | `#16403a` | Primary brand green (buttons, links, active states) |
| `--color-primary-dark` | `#0e2c28` | Hover/pressed state of primary |
| `--color-primary-soft` | `#e4efe9` | Tinted fill on primary-colored surfaces (hovers, badges) |
| `--color-accent` | `#a9762b` | Accent gold (VIP badges, kickers) |
| `--color-accent-dark` | `#c9a05e` | Accent on dark backgrounds |
| `--color-accent-hover` | `#916422` | Accent hover state |
| `--color-accent-soft` / `--color-accent-soft-text` | `#f5ebd9` / `#6e4c18` | Tinted accent fill + its readable text color |
| `--color-surface` | `#f7f4ee` | Page background |
| `--color-media-placeholder` / `-light` | `#e6e1d6` / `#ede9e0` | Placeholder blocks for missing images |
| `--color-border` | `#e2dcd1` | Default hairline border |
| `--color-text` | `#14201d` | Primary text |
| `--color-text-muted` | `#5a6663` | Secondary text |
| `--color-error` | `#9b2c1f` | Form/validation errors |
| `--color-input-placeholder` | `#96a09d` | Input placeholder text |
| `--color-icon-muted` | `#8c918a` | Muted icons |
| `--color-on-dark-1` … `--color-on-dark-6` | green ramp, light → dark | Text/border variants for content placed on dark (primary) surfaces |

## Type

- `--font-serif`: `'Fraunces', serif` — display/heading font.
- `--font-sans`: `'Be Vietnam Pro', system-ui, sans-serif` — body/UI font.

## Spacing

`--space-1` through `--space-8` = 4, 8, 12, 16, 24, 32, 48, 64px. Use the token, not a raw pixel value, for margins/padding/gaps.

## Radius

- `--radius-control`: 9px (buttons, inputs)
- `--radius-card`: 12px (cards)
- `--radius-panel`: 16px (larger surfaces/panels)
- `--radius-pill`: 999px (badges, chips, pills)

## Control sizing

- `--control-height-sm`: 44px
- `--control-height-lg`: 48px

## Shadow

- `--shadow-popup`: `0 8px 24px rgba(20, 32, 29, 0.12)`

## Breakpoints

Defined in [`_breakpoints.scss`](../../src/app/styles/_breakpoints.scss) as Sass mixins (not CSS custom properties, since they gate `@media` queries):

```scss
@include mobile { ... }   // max-width: 767px
@include desktop { ... }  // min-width: 768px
```

## Shared utility classes

[`_utilities.scss`](../../src/app/styles/_utilities.scss) defines global, token-driven classes available anywhere without a per-component import: `.btn` (`--primary`, `--secondary`, `--accent`, `--ghost`, `--outline-on-dark`, `--sm`), `.badge` (`--vip`, `--verified`, `--rent`, `--reserved`), `.chip` / `.chip--selected`, `.field-label`, `.text-input` / `.select-input` / `.field-error`, `.card` / `.card--panel`, and `.section-kicker`. Prefer these over redefining equivalent styles in a component's own `.scss` file.

## Not part of this app

`project/_ds/` at the repo root is an unrelated exported "Modernist" design-canvas artifact (red/mono theme, its own token set). It is not wired into the Angular build and should not be used as a reference for this app's UI — use this document and `_tokens.scss` instead.
