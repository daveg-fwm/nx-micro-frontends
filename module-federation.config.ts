import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

export const mfConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    dogs: "dogs@http://localhost:2001/mf-manifest.json",
  },
  shared: ["react", "react-dom", "react-router"],
};
