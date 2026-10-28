# Architecture

## Intent

The website favors clear ownership, small components, and factual content that can be reviewed independently. React provides composable UI, React Router provides page-level navigation, and Tailwind CSS provides consistent local styling.

## Boundaries

| Location | Owns | Does not own |
| --- | --- | --- |
| `src/pages` | Route composition and page-specific layout | Shared navigation, raw content data |
| `src/components` | Reusable, accessible interface pieces | Route-specific copy or content data |
| `src/data` | Team-approved text, navigation, and image metadata | JSX layout or component state |
| `src/styles` | Global styles and design tokens | Per-page layout rules |
| `assets` | Source imagery supplied by the team | Generated build artifacts |

## Routes

| URL | Purpose | Current iteration |
| --- | --- | --- |
| `/#/` | Team introduction and accomplishments | First content-bearing page |
| `/#/about` | Team story, values, and history | Structure ready; approved copy is pending |
| `/#/resources` | Guides and public materials | Structure ready; library curation is pending |
| `/#/join-us` | Recruitment information | Structure ready; official process is pending |
| `/#/contact` | Published team channels | Structure ready; official channels are pending |

Hash routing is deliberate: GitHub Pages serves static files and cannot rewrite a direct `/about` request to React’s entry point. It keeps every route refreshable without a server-side redirect.

## Adding a feature

1. Put reviewed content or image metadata in `src/data`.
2. Build a reusable component if more than one page needs the UI.
3. Keep route composition in `src/pages`.
4. Run `npm run check` before requesting review.
5. Keep each pull request limited to one coherent slice, such as “About content” or “resource cards.”

## Asset policy

Use existing assets whenever they match the content. New image files should have descriptive, lowercase, hyphenated names and meaningful alt text in the content data. Do not publish personal/team contact details or claims until the team has confirmed them.

## Provisional visual tokens

GHOST does not yet have a fixed brand palette. The temporary, logo-adjacent palette lives in `src/styles/index.css` as Tailwind theme tokens: `ghost-void`, `ghost-night`, `ghost-violet`, `ghost-orchid`, `ghost-lilac`, `ghost-mist`, and `ghost-muted`. Components must use these semantic tokens rather than introducing arbitrary hex values. Once the team ratifies a palette, update the token values in one place.
