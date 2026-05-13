import App from "./App";
import { Routes as ReactRouterRoutes, Route, useNavigate } from "react-router";

import { Home } from "./Home";
import { Dogs } from "dogs/dog-app";

export function Routes() {
  const navigate = useNavigate();

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />

      <Route path="/dogs" element={<Dogs navigate={navigate} />} />
    </ReactRouterRoutes>
  );
}
