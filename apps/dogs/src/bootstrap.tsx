import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes } from "./Routes";
import { PageHeader } from "./components/PageHeader";

const queryClient = new QueryClient();

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PageHeader />
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
