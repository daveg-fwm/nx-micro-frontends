import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

import { dependencies } from "./package.json";

export const mfConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    dogs: "dogs@http://localhost:2001/mf-manifest.json",
    cats: "cats@http://localhost:2002/mf-manifest.json",
  },
  shared: {
    react: { singleton: true, requiredVersion: dependencies.react },
    "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
    "react-router": { singleton: true, requiredVersion: dependencies["react-router"] },
  },
};
