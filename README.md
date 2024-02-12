# 📦 UI Lib Monorepo

## Repo Contents

This is a [`PNPM`](https://pnpm.io/) workspace based monorepo that contains:

- one Component Library / Design System in `packages/ui-lib`
- five Apps that showcase different ways to consume it located in `apps/*`:
  1. `vite-react-app-1` - This is a Vite React SPA app that uses the **UI Lib** as a dependency installed from a local private registry (using [`verdaccio`](https://verdaccio.org/)) instead of the local monorepo workspace.
  2. `vite-react-app-2` - This is a Vite React SPA app that uses the **UI Lib** as a dependency installed from the local monorepo workspace (via `"workspace:*"` in the `package.json`'s `dependencies` list).
  3. `vite-react-app-3` - This is a Vite React SPA app that uses the **UI Lib** source files as an external directory import via a TypeScript path alias (`~ui` in the `tsconfig.json`).
  4. `vite-react-app-4` - This is a Vite React SPA app that uses the **UI Lib** source files initially hard copied to a local directory. The source files are intended to be used as a reference and to be extended in order to create the app's own components. For more information about this approach please see the popular [shadcn/ui](https://ui.shadcn.com/docs) components library.
  5. `remix-app` - This is a full-stack [Remix](https://remix.run/) app that uses the **UI Lib** source files as an external directory import via a TypeScript path alias (`~ui` in the `tsconfig.json`). It has a similar setup as `apps/vite-react-app-3` but showcases the component library's support for **SSR** (Server Side Rendering) and **Streaming** via deferred promisses.

## Apps Details

### ⚛️ Vite React App 1

In this setup, in order to see any change that you make to the **UI Lib** package inside any app that lists it as a dependency, you have to go thru the whole package publishing and manual version update process.

[View Full App Readme](./apps/vite-react-app-1/README.md)

### ⚛️ Vite React App 2

In this setup, in order to see any change that you make to the **UI Lib** package inside any app that lists
it as a dependency, you don't have to re-publish the package but you have to manually re-build the UI Lib. Runing it
in dev mode and making changes to the SOURCE files is not enough for the consuming apps to
pick-up those changes and to trigger a hot reload.

[View Full App Readme](./apps/vite-react-app-2/README.md)

### ⚛️ Vite React App 3

This method provides by far the best DX (Developer Experience) for both adding features to the UI Lib while also developing the apps that use it, but requires some "tech buy-in" from the consumers (eg. using an app server that supports TypeScript path aliases and bundling from an external directory, adding Tailwind CSS as a dependency, etc). It provides best results when the team that maintains the UI Lib works closely or is the same team that also develops to the apps that use it.

[View Full App Readme](./apps/vite-react-app-3/README.md)

### ⚛️ Vite React App 4

This method provides the most flexibility for consumer apps to taylor the UI Lib components to their specific needs and usecases, however note that with great power comes great responsibility! You basically now own the whole code and any bug fixes and new features that are added to the UI Lib must be MANUALLY added to the components that you create. While you could potentially use a diff-ing script to track future component updates, the result of the diff greatly depends on how many changes you have added to the original components.

[View Full App Readme](./apps/vite-react-app-4/README.md)

### ⚛️ Remix App

In this setup, the components from the **UI Library** are rendered both on the server (**node**), and then hydrated again on the client (**browser**). You can disable JavaScript in Chrome while having the Dev Tools open by pressing `Cmd + Shift + P` then selecting `Disable JavaScript` and reloading the page. While the components that will be send from the server directly as HTML won't be interactive yet (eg. you still need hydration to add event handlers to buttons), this will lead to superior UX (User Experience) and a significant improvement in the Core Web Vitals markers (TTFB, CLS, etc.) which directly corelates to client retention and an increase in sales volume in apps such as e-commerce.

[View Full App Readme](./apps/remix-app/README.md)

---

> NOTES: Because in this demo we have also added the **UI Lib** package as a
> dependency from a local private registry in `apps/vite-react-app-1`, make sure
> that Verdaccio is running and that you add `--registry http://localhost:4873`
> to any PNPM command that installs new packages or PNPM will fail because this
> is not actually published to the official NPM registry.
