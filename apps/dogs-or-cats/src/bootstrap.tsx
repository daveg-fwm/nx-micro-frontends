import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Routes } from "./Routes";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
