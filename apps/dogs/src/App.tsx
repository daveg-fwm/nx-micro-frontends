// import { useNavigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "~/components/layout/Header";

import "./App.css";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  // const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  );
}
