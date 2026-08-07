import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </QueryClientProvider>,
);
