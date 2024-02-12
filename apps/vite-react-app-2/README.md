# Vite React App 2

This is a Vite React SPA app that uses the **UI Lib** as a dependency installed from the local monorepo workspace (via `"workspace:*"` in the `package.json`'s `dependencies` list).

## Setup

1. Run `pnpm install` and because you are in a monorepo workspaces setup,
   PNPM will automatically link the **UI Lib** package listed as a dependency in this app's `package.json` to its coresponding workspace `dist` folder.
2. Whenever you make some changes and run the `pnpm build` script in `packages/ui-lib` to
   generate a new build, the Vite dev server from `apps/vite-react-app-2` will detect the changes from the linked `dist` directory and conveniently hot reload your app.

> IMPORTANT: To see any change that you make to the **UI Lib** package inside any app that lists
> it as a dependency like described above, you have to manually re-build the UI Lib. Runing it
> in dev mode and making changes to the SOURCE files is not enough for the consuming apps to
> pick-up those changes and to trigger a hot reload.
