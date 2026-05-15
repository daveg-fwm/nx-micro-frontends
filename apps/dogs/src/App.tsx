// import { useNavigate } from "react-router";
import { PageHeader } from "@shared";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  // const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader title="Dog Breed Viewer" />
      <Home />
    </QueryClientProvider>
  );
}
