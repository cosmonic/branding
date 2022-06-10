# Cosmonic Branding

Cosmonic branding guidelines implemented with native web components and deployed to GitHub Pages. Very simple, no fluffy styles (yet) beyond just the presentation of the guidelines.

## Dev

-   Run locally: `npm start`
-   Run tests locally: `npm run test:full`
    -   Currently the tests are just for code health: spellchecking, formatting, etc. No unit testing yet.
-   Run build locally: `npm run build`

### Dependencies

#### [`vite`](https://www.npmjs.com/package/vite)

Fast, minimal config dev server and builder.

-   Vite is used to run a local server that understands TypeScript imports (notice that [`index.html`](https://github.com/cosmonic/branding/blob/main/index.html) imports a `.ts` file directly).
-   Vite is also used to build the production deployable assets. Mostly it just runs the TypeScript compiler and replaces `.ts` imports with `.js` imports. You can see an example of its output on the [`gh-pages`](https://github.com/cosmonic/branding/tree/gh-pages) branch.

#### [`element-vir`](https://www.npmjs.com/package/element-vir)

Native, function-oriented web component wrapper for [`lit`](https://www.npmjs.com/package/lit).

#### [`spa-router-vir`](https://www.npmjs.com/package/spa-router-vir)

Extremely unobtrusive spa route handler. Doesn't try to manage your whole page architecture, just the URL.

#### [`augment-vir`](https://www.npmjs.com/package/augment-vir)

Minimal package of common type and functionality helpers.

## Why not use Storybook?

If you install storybook via npm right now, it'll add over _1000_ more dependencies with almost 2 dozen deprecation warnings and _high_ security vulnerabilities. No thank you!
