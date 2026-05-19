import { withZephyr } from "zephyr-rsbuild-plugin";

import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

import { deployProdToZephyr, mfConfig } from "../../module-federation.config";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 2000,
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
    pluginSvgr(),
    pluginModuleFederation(mfConfig),

    deployProdToZephyr && withZephyr(),
  ],
  output: { assetPrefix: "auto" },
});
