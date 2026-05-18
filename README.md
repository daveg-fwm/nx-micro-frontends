# Nx micro-frontends app

This Nx monorepo serves as an example of how to configure a micro-frontends SPA. It consists of:

- 1 host SPA
- 2 remote SPAs
- 1 package of shared components and images

## Stack

- Nx
- Module Federation
- Rsbuild
- React
- TypeScript
- React Router
- Tanstack Query
- TailwindCSS
- Headless UI
- Tailwind Plus

## Getting Started

Installation requires the following versions:

- node v24.14.1
- pnpm v11.1.2

### Installation

Install the dependencies:

```bash
pnpm i
```

### Development

Start the development server with HMR:

```bash
// Full micro-frontends SPA
pnpm dev

// Breeds app only
pnpm dev:breeds

// Sub-breeds app only
pnpm dev:subBreeds
```

### Other commands

Check the `package.json` file for each app to view the full list of commands. Use the `nx` command to run eg:

```bash
// Run eslint on the host `dogs` app
nx lint dogs
```

## Key configurations

- Prefer custom app and package installation over Nx plugins for total control over core library versions and structure.
- Hook up package scripts to `nx` command in `package.json` files.
- Add includes and paths to `tsconfig.json` files for each app and package.
- Use the `@source` Tailwind directive in each `App.css` file. This informs Tailwind of additional locations where its classes are used.
- Import `App.css` files from remote applications to the host `App.css` file. This ensures any custom styles from remote applications are included when running the full micro-frontends SPA.

### Module Federation

Each application uses the `Rsbuild` web build tool which is powered by `Rspack`, a Rust-based bundler, which provides built-in, drop-in compatibility for Module Federation.

Configuration is straightforward using the `@module-federation/rsbuild-plugin` and `@module-federation/enhanced` packages. Inside each application you will find a `rsbuild.config.ts` file which contains a simple `pluginModuleFederation` setup.

Note there is also a `module-federation.config.ts` file which contains the config for our host app and allows for a single source of defined shared libraries which must be added to the config for each remote app as well. These are libraries shared between the host and remote apps which must all use the exact same versions.

### The Asynchronous Bootstrap Pattern

This approach ensures the application negotiates which versions of shared libraries to use at runtime before the app mounts. It uses a "two-file" entry approach:

- **index.ts:** contains only a dynamic import of the root app logic
- **bootstrap.tsx:** contains the root logic to initialize the app
