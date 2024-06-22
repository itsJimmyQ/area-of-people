import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import "./styles/index.css";
import { worker } from "./mocks/browser.ts";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage.tsx";
import { DetailPage } from "./pages/DetailPage.tsx";
import { NotFoundPage } from "./pages/404.tsx";

async function main() {
  // Start the mocking server when the app is started
  await worker.start({
    onUnhandledRequest: "bypass",
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Navigate to="/libraries" replace /> },

        {
          path: "libraries",
          element: <OverviewPage />,
        },
        {
          path: "libraries/:libraryId",
          element: <DetailPage />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

main();
