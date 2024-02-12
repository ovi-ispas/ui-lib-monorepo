# Vite React App 3

This is a Vite React SPA app that uses the **UI Lib** source files as an external directory import via a TypeScript path alias (`~ui` in the `tsconfig.json`).

## Setup

1. Importing the required components source files from the **UI Lib** via the `~ui` path alias will offload the transpiling and bunding to the consumer app's dev server and compiler (eg. Vite, NextJS, Remix, etc.)

2. Whenever you make some changes to the files inside `packages/ui-lib` - without needing to manually run the build script! -, the Vite dev server from `apps/vite-react-app-3` will detect them as local file changes and conveniently hot reload your app.

3. Because this is a Tailwind based UI Library you can get the same automatic hot reloading for the components CSS styles too, by adding Tailwind as an app dependency (it's listed as a peer dependency in UI Lib) and offloading the class names generation without the need to manually recompile!

> IMPORTANT: This method provides by far the best DX (Developer Experience) for both adding features to the UI Lib while also developing the apps that use it, but requires some "tech buy-in" from the consumers (eg. using an app server that supports TypeScript path aliases and bundling from an external directory, adding Tailwind CSS as a dependency, etc). It provides best results when the team that maintains the UI Lib works closely or is the same team that also develops to the apps that use it.
