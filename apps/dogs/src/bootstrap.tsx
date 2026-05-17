import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Routes } from "./Routes";
import { PageHeader } from "./components/PageHeader";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <PageHeader />
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
