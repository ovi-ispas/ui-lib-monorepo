# Vite React App 4

This is a Vite React SPA app that uses the **UI Lib** source files initially hard copied
to a local directory. The source files are intended to be used as a reference and to be extended in order to create the app's own components. For more information about this approach please see the popular [shadcn/ui](https://ui.shadcn.com/docs) components library.

## Setup

1. Ensure the app closely follows the tech used in the **UI Lib** and has all the required dependencies installed locally (eg. Tailwind) and that the correct TypeScript path aliases are set up in `tsconfig.json`
2. Copy the required source files from `packages/ui-lib` to `apps/vite-react-app-4/src/ui-lib`
3. Adjust, modify and extend the components to your needs.

> IMPORTANT: This method provides the most flexibility for consumer apps to taylor the UI Lib components to their specific needs and usecases, however note that with great power comes great responsibility! You basically now own the whole code and any bug fixes and new features that are added to the UI Lib must be MANUALLY added to the components that you create. While you could potentially use a diff-ing script to track future component updates, the result of the diff greatly depends on how many changes you have added to the original components.
