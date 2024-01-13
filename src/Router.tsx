import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Test1 from "./test1";

export const Routes = {
  home: "/",
  test1: "/test1",
  // registration: "/registration",
  // generate: "/generate",
};

export const createRouter = createBrowserRouter([
  {
    // element: (
    //   <div className="wrapper">
    //     <App />
    //     <Outlet />
    //   </div>
    // ),
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
      // {
      //   path: Routes.registration,
      //   element: <RegistrationForm />,
      // },
      // {
      //   path: Routes.generate,
      //   element: <GenerateProductListing />,
      // },
    ],
  },
  {
    path: "*",
    element: <Navigate to={Routes.home} />,
  },
]);
