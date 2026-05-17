import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
