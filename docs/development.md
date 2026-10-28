# Development and dependency workflow

## Version consistency

- `.nvmrc` pins the Node runtime used locally and in GitHub Actions.
- `package.json` declares the supported Node/npm range and exact direct dependencies.
- `package-lock.json` locks every transitive dependency. Commit it with every dependency change.
- `.npmrc` enables strict engine checks and exact saves, preventing accidental version drift.

Use `npm ci` for a clean, repeatable install. Use `npm install <package>` only when deliberately changing dependencies; commit the matching `package.json` and `package-lock.json` changes together.

## Local development

```sh
npm ci
npm run dev
```

Vite prints a localhost URL and refreshes the page as source files change. This is a local process only. It does not push Git commits, change `main`, invoke GitHub Actions, or touch the deployed site.

If PowerShell’s execution policy prevents `npm` from running, call the same executable explicitly:

```powershell
npm.cmd ci
npm.cmd run dev
```

## Branch and review flow

1. Branch from the current integration branch using a scoped name, such as `feature/about-history`.
2. Make one focused change set.
3. Run `npm run check` and manually test relevant routes in the dev server.
4. Review `git diff` for accidental assets, environment files, or lockfile changes.
5. Open a pull request. Only reviewed changes should merge into `main`.

GitHub Pages builds and deploys `main` only. That separation is the safeguard between local/branch work and the public website.

## Environment variables

The current site requires no environment variables. If one becomes necessary, add its key and non-sensitive explanation to `.env.example`; never commit values in `.env` or secrets to client-side code. Treat every Vite variable prefixed with `VITE_` as public browser-visible data.
