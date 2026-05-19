import { Suspense, lazy } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router";

import { HomeLoadingSkeleton } from "@shared";

import App from "./App";
import { Home } from "./pages/Home";

const Breeds = lazy(() => import("breeds/breeds-app"));
const SubBreeds = lazy(() => import("subBreeds/sub-breeds-app"));

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>

      <Route
        path="/breeds"
        element={
          <Suspense fallback={<HomeLoadingSkeleton />}>
            <Breeds />
          </Suspense>
        }
      />
      <Route
        path="/sub-breeds"
        element={
          <Suspense fallback={<HomeLoadingSkeleton />}>
            <SubBreeds />
          </Suspense>
        }
      />
    </ReactRouterRoutes>
  );
}
