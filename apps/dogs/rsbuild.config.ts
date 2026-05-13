import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 2001,
    cors: { origin: "*" },
  },
  output: {
    assetPrefix: "http://localhost:2001",
  },
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.[jt]sx?$/,
      exclude: [/[\\/]node_modules[\\/]/],
      babelLoaderOptions(opts) {
        opts.plugins?.unshift("babel-plugin-react-compiler");
      },
    }),
    pluginModuleFederation({
      name: "dogs",
      exposes: {
        "./dog-app": "./src/Dogs.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
