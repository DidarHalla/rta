import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Test1 from "./Test1.tsx";

export const Routes = {
  home: "/testSide",
  test1: "/test1",
};

export const createRouter = createBrowserRouter([
  {
    children: [
      {
        path: Routes.home,
        element: (
          <>
            <App />
          </>
        ),
      },
      {
        path: Routes.test1,
        element: <Test1 />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={Routes.home} />,
  },
]);
