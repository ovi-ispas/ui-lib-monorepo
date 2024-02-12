# Remix App (SSR & Streaming)

This is a full-stack Remix app that uses the **UI Lib** source files as an external directory import via a TypeScript path alias (`~ui` in the `tsconfig.json`). It has a similar setup as `apps/vite-react-app-3` but showcases the component library's support for SSR (Server Side Rendering) and Streaming.

## Setup

1. Importing the required components source files from the **UI Lib** via the `~ui` path alias will offload the transpiling and bunding to the consumer app's dev server and compiler (eg. Vite, NextJS, Remix, etc.)

2. Whenever you make some changes to the files inside `packages/ui-lib` - without needing to manually run the build script! -, the Vite dev server from `apps/remix-app` (in the latest versiosn of Remix, it offloads compilation and bundling to Vite) will detect them as local file changes and conveniently hot reload your app.

3. Because this is a Tailwind based UI Library you can get the same automatic hot reloading for the components CSS styles too, by adding Tailwind as an app dependency (it's listed as a peer dependency in UI Lib) and offloading the class names generation without the need to manually recompile!

> IMPORTANT: In this setup, the components from the **UI Library** are rendered both on the server (**node**), and then hydrated again on the client (**browser**). You can disable JavaScript in Chrome while having the Dev Tools open by pressing `Cmd + Shift + P` then selecting `Disable JavaScript` and reloading the page. While the components that will be send from the server directly as HTML won't be interactive yet (eg. you still need hydration to add event handlers to buttons), this will lead to superior UX (User Experience) and a significant improvement in the Core Web Vitals markers (TTFB, CLS, etc.) which directly corelates to client retention and an increase in sales volume in apps such as e-commerce.
