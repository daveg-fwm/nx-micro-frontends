import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

import { dependencies } from "./package.json";

/** Shared dependency policy for host and remotes (remotes use this as-is). */
export const mfShared: NonNullable<ModuleFederationOptions["shared"]> = {
  react: { singleton: true, requiredVersion: dependencies.react },
  "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
  "react-router": { singleton: true, requiredVersion: dependencies["react-router"] },
  "@tanstack/react-query": {
    singleton: true,
    requiredVersion: dependencies["@tanstack/react-query"],
  },
  clsx: { singleton: true, requiredVersion: dependencies["clsx"] },
};

/**
 * Host-only: load react-query in the shell entry so the federated singleton exists before any
 * remote runs. Avoids broken handoffs when the “first” remote to load is not the same as the
 * remote you open second (e.g. subBreeds then breeds).
 */
export const mfHostConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    breeds: "breeds@http://localhost:2001/remoteEntry.js",
    subBreeds: "subBreeds@http://localhost:2002/remoteEntry.js",
  },
  shared: {
    ...mfShared,
    "@tanstack/react-query": {
      singleton: true,
      requiredVersion: dependencies["@tanstack/react-query"],
      eager: true,
    },
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
