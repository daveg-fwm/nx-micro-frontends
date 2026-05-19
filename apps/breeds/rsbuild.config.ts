import { withZephyr } from "zephyr-rsbuild-plugin";

import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

import { deployProdToZephyr, mfShared } from "../../module-federation.config";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 2001,
  },
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginBabel({
      include: /\.[jt]sx?$/,
      exclude: [/[\\/]node_modules[\\/]/],
      babelLoaderOptions(opts) {
        opts.plugins?.unshift("babel-plugin-react-compiler");
      },
    }),
    pluginModuleFederation({
      name: "breeds",
      filename: "remoteEntry.js",
      exposes: {
        "./breeds-app": "./src/App.tsx",
      },
      shared: mfShared,
    }),

    deployProdToZephyr && withZephyr(),
  ],
  output: { assetPrefix: "auto" },
});
