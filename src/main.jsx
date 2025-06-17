import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./Router/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./assets/AuthContext/AuthProvider.jsx";
import { ThemeProvider } from "./ThemeToggle/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
