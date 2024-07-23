import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { routeTree } from "./routeTree.gen";
import ErrorPage from "./components/ErrorPage";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <ErrorPage />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
