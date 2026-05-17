import Breeds from "breeds/breeds-app";
import { Routes as ReactRouterRoutes, Route } from "react-router";
import SubBreeds from "subBreeds/sub-breeds-app";

import App from "./App";
import { Home } from "./Home";

export function Routes() {
  // const navigate = useNavigate();

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />

      <Route path="/dogs" element={<Breeds />} />
      <Route path="/cats" element={<SubBreeds />} />
    </ReactRouterRoutes>
  );
}
