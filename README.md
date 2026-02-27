# Kargome

Lit + Vite + LightningCSS boilerplate — native Web Components, zero runtime overhead.

**Lit 3.3.2** | **Vite 6.4.1** | **LightningCSS 1.31.1** | **Bun 1.3.5** | **License MIT**

---

## Stack

| Tool | Version | Role |
|---|---|---|
| Lit | 3.3.2 | Reactive Web Components (Shadow DOM, no virtual DOM) |
| Vite | 6.4.1 | Dev server (native ESM) + Rollup prod bundler → Rolldown in v7 |
| LightningCSS | 1.31.1 | CSS transform + minify in Rust — replaces PostCSS + autoprefixer |
| Bun | 1.3.5 | Runtime + package manager |

---

## Performance

Real numbers from production builds:

- **Build time:** 69–103 ms (varies per run)
- **JS gzipped:** 10.68–10.87 kB
- **CSS gzipped:** 0.95–1.08 kB
- **Total gzipped:** ~11.5 kB
- **Lighthouse:** 100 Performance

---

## Getting started

```sh
# clone with submodules (includes design-tokens-cli)
git clone --recurse-submodules <repo>
cd kargome

# install (Bun)
bun install
bun install --cwd tools/design-tokens-cli

# dev
bun run dev

# build
bun run build

# preview production build
bun run preview
```

---

## Project structure

```
kargome/
├── index.html
├── package.json
├── vite.config.js
├── .gitmodules
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── main.js
│   ├── components/
│   │   ├── app-shell.js      ← root component, demo layout
│   │   ├── app-header.js     ← sticky frosted-glass nav + theme toggle
│   │   └── app-button.js     ← primary / secondary / ghost variants
│   └── styles/
│       ├── tokens.css        ← AUTO-GENERATED (bun run tokens)
│       ├── base.css          ← reset + body transition
│       └── main.css          ← imports tokens + base
├── design-tokens/            ← source of truth for all CSS variables
│   ├── kargome-light/        ← 7 token files (colors, typography, spacing…)
│   ├── kargome-dark/         ← dark color overrides
│   ├── kargome-spring/       ← spring & sunshine color overrides
│   ├── kargome-light.config.json
│   ├── kargome-dark.config.json
│   └── kargome-spring.config.json
├── scripts/
│   └── build-tokens.js       ← assembles tokens.css from generated CSS
└── tools/
    └── design-tokens-cli/    ← git submodule (Design Tokens Format 2025.10)
```

---

## Design tokens

### Pipeline

1. JSON source files in `design-tokens/kargome-*/` follow the [Design Tokens Format 2025.10](https://tr.designtokens.org/) spec.
2. `bun run tokens` runs `design-tokens-cli` → generates per-theme CSS → assembles `src/styles/tokens.css`.
3. `tokens.css` is committed but regenerated automatically on every `dev` and `build`.

### Token categories

| Category | Tokens | Example |
|---|---|---|
| Colors | 13 per theme | `--color-accent`, `--color-bg`, `--color-nav-bg` |
| Typography | font-family, 7 sizes, 4 weights, 2 line-heights | `--font-size-xl`, `--font-weight-bold` |
| Spacing | 9 steps | `--space-4` (1rem = 16px) |
| Radius | 5 steps | `--radius-full` (9999px) |
| Shadow | 3 levels | `--shadow-md` |
| Transition | 3 speeds | `--transition-fast` (150ms ease) |
| Layout | container widths, nav height | `--container-max` (980px) |

To add a new token: add it to the relevant `.tokens.json` file and run `bun run tokens`.

---

## Themes

Three built-in themes, toggled via the ☀️/🌙/🌸 button in the nav. Cycles: light → dark → spring.

| Theme | `data-theme` | Description |
|---|---|---|
| Light | `light` | Default. White bg, blue accent. |
| Dark | `dark` | Black bg, lighter blue accent. |
| Spring | `spring` | Warm ivory bg, golden amber accent, spring green. |

System `prefers-color-scheme: dark` is respected unless an explicit `data-theme` is set. The user's choice is persisted in `localStorage`. An anti-flash script in `<head>` restores the theme before first paint.

### Adding a theme

1. Create `design-tokens/kargome-<name>/colors.tokens.json`
2. Add a config file `design-tokens/kargome-<name>.config.json`
3. Add the theme to `scripts/build-tokens.js`
4. Add `[data-theme="<name>"]` to the cycle in `app-header.js`

---

## Components

**`<app-shell>`** — Root component. Renders the full page: hero, stack section, button demos, token swatches.

**`<app-header>`** — Sticky nav with frosted-glass backdrop. Includes theme toggle cycling through light/dark/spring. Nav links hidden on ≤640px.

**`<app-button>`** — Button/link component.

```html
<app-button variant="primary">Label</app-button>
<app-button variant="secondary">Label</app-button>
<app-button variant="ghost">Label</app-button>
<app-button variant="primary" href="/path">Link</app-button>
<app-button variant="primary" disabled>Disabled</app-button>
```

Properties:

| Property | Type | Values |
|---|---|---|
| `variant` | string | `primary` \| `secondary` \| `ghost` |
| `disabled` | boolean | — |
| `href` | string | renders `<a>` when set |

---

## Responsive

Breakpoints: 768px (tablet), 480px (mobile).

- Hero padding scales down
- Stats switch to 2×2 grid; separators hidden on ≤480px
- Section padding scales down
- Section titles use `clamp()`
- Demo row labels go full-width on ≤480px
- Token swatches: 2-column on ≤480px
- Nav links hidden on ≤640px

---

## Security

- `bun audit` — 0 vulnerabilities
- Security headers set in `vite.config.js` for dev and preview:

| Header | Value |
|---|---|
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |

CSP and HSTS must be configured at the web server level in production.

---

## Submodule

`tools/design-tokens-cli` is a git submodule pointing to `https://github.com/bivex/design-tokens-cli`. It implements the Design Tokens Format 2025.10 specification.

```sh
# update submodule to latest
git submodule update --remote tools/design-tokens-cli
```

---

## License

MIT © 2026 Bivex
