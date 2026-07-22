import { createRoot } from "react-dom/client";
import AppRoute from "./routes/AppRoute";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoute />
    <ToastContainer />
  </AuthProvider>,
);
