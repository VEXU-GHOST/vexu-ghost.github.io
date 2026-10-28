# GHOST VEX U website

The GHOST website is a Vite + React application with client-side routes for Home, About, Resources, Join Us, and Contact. It is intentionally being rebuilt in small, reviewable slices rather than as a one-shot redesign.

## Quick start

Prerequisites: Node `24.18.0` (pinned in `.nvmrc`) and npm `11.16.0` (declared in `package.json`).

```sh
npm ci
npm run dev
```

On this Windows machine, PowerShell blocks the `npm` script shim. Use `npm.cmd ci` and `npm.cmd run dev` instead. The dev server binds to `127.0.0.1`, so it is visible only on the local machine and cannot alter the live website.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts Vite’s local hot-reload server. |
| `npm run build` | Creates the production site in `dist/`. |
| `npm run preview` | Serves the built `dist/` output locally. |
| `npm run check` | Runs the current production-build verification. |

## Deployment safety

Development happens on feature branches. GitHub Pages deploys only a push to `main`, after the dependency lock is installed and `npm run build` succeeds. Working locally with `npm run dev` never publishes a site.

## Project map

```text
src/
  components/     Shared UI building blocks
  data/           Content separated from presentation
  pages/          Route-level pages
  styles/         Global Tailwind entrypoint and project tokens
assets/           Existing GHOST imagery and logos
docs/             Architecture and contribution documentation
```

See [architecture documentation](docs/architecture.md) and [development documentation](docs/development.md).
