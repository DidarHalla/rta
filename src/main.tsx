import { RouterProvider } from "react-router-dom";
import { createRouter } from "./Router";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={createRouter} />
  </>
);
