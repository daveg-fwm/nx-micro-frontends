import type { ModuleFederationOptions as RsbuildOption } from "@module-federation/rsbuild-plugin";
import type { ModuleFederationOptions as ViteOptions } from "@module-federation/vite";

export const mfConfig: RsbuildOption & ViteOptions = {
  name: "host",
  remotes: {
    dogs: "dogs@http://localhost:2001/mf-manifest.json",
    // cats: "cats@http://localhost:2002/mf-manifest.json",
  },
  shared: {
    react: { singleton: true, requiredVersion: "19.2.6" },
    "react-dom": { singleton: true, requiredVersion: "19.2.6" },
    // "react/jsx-runtime": { singleton: true, requiredVersion: "19.2.6" },
    // "react/jsx-dev-runtime": { singleton: true, requiredVersion: "19.2.6" },
    // "react-router": { singleton: true, requiredVersion: "7.15.0" },
  },
};
