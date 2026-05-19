import { withZephyr } from "zephyr-rsbuild-plugin";

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
    "@tanstack/react-query": {
      singleton: true,
      requiredVersion: dependencies["@tanstack/react-query"],
    },
    clsx: { singleton: true, requiredVersion: dependencies["clsx"] },
  },
};

/**
 * Only deploy to https://zephyr-cloud.io/ if we run the production build. The deployment only
 * works if the repo has been connected to a project on Zephyr Cloud and the build is run by an
 * authorised contributor.
 *
 * If the DEPLOY_TO_ZEPHYR env variable flag is not set, the production build will run locally as
 * normal without attempting to trigger a deployment to Zephyr.
 */
export const deployProdToZephyr =
  process.env.NODE_ENV === "production" && process.env.DEPLOY_TO_ZEPHYR === "true";
