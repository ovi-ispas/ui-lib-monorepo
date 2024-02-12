# Vite React App 1

This is a Vite React SPA app that uses the **UI Lib** as a dependency installed from a local private registry (using [`verdaccio`](https://verdaccio.org/)) instead of the local monorepo workspace.

## Setup

1. Install the Verdaccio utility globally (`pnpm install -g verdaccio`)
2. Start the local private registry using the `verdaccio` command (also requires setting up a username on first run)
3. With Verdaccio running, publish the **UI Lib** package to the local private registry using the `pnpm publish-package` script inside `packages/ui-lib`
4. With Verdaccio running, install the **UI Lib** package inside `apps/vite-react-app-1` using `pnpm install --no-link-workspace-packages --registry http://localhost:4873 @ui-lib-monorepo/ui-lib@0.0.1`
5. Repeat steps 2 to 4 when releasing a new version of the **UI Lib**, being carefull to update the package version in both `packages/ui-lib` and `apps/vite-react-app-1`'s `package.json` files

> IMPORTANT: To see any change that you make to the **UI Lib** package inside any app that lists
> it as a dependency like described above, you have to go thru the whole package publishing and
> manual version update process!
