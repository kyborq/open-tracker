import { createBrowserRouter } from "react-router-dom";

import { HomePage, ListPage, Root } from "./pages";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "list/:id",
        element: <ListPage />,
      },
    ],
  },
]);
