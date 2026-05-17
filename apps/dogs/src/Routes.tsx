import Breeds from "breeds/breeds-app";
import { Routes as ReactRouterRoutes, Route } from "react-router";
import SubBreeds from "subBreeds/sub-breeds-app";

import App from "./App";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />

      <Route path="/breeds" element={<Breeds />} />
      <Route path="/sub-breeds" element={<SubBreeds />} />
    </ReactRouterRoutes>
  );
}
