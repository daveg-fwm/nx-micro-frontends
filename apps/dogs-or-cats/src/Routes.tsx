import Cats from "cats/cat-app";
import Dogs from "dogs/dog-app";
import { Routes as ReactRouterRoutes, Route } from "react-router";

import App from "./App";
import { Home } from "./Home";

export function Routes() {
  // const navigate = useNavigate();

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />

      <Route path="/dogs" element={<Dogs />} />
      <Route path="/cats" element={<Cats />} />
    </ReactRouterRoutes>
  );
}
