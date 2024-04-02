import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { queryClient } from "./queryClient";
import { router } from "./router";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
