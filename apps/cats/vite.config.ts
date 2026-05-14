import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { federation } from "@module-federation/vite";
import { mfConfig } from "../../module-federation.config";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:2002",
    port: 2002,
  },
  plugins: [
    federation({
      name: "cats",
      manifest: true,
      exposes: {
        "./cat-app": "./src/Cats.tsx",
      },
      shared: mfConfig.shared,
    }),
    react(),
    babel({
      include: /\.[jt]sx?$/,
      exclude: [/[\\/]node_modules[\\/]/],
      presets: [reactCompilerPreset({ compilationMode: "annotation" })],
    }),
  ],
});
