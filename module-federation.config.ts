import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

import { dependencies } from "./package.json";

export const mfConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    breeds: "breeds@http://localhost:2001/remoteEntry.js",
    subBreeds: "subBreeds@http://localhost:2002/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, requiredVersion: dependencies.react },
    "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
    "react-router": { singleton: true, requiredVersion: dependencies["react-router"] },
    clsx: { singleton: true, requiredVersion: dependencies["clsx"] },
  },
};
