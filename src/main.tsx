import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router";
import ActiveMenuProvider from "./context/ActiveMenuProvider";

const root = document.getElementById("root")!;

ReactDom.createRoot(root).render(
  <ActiveMenuProvider>
    <RouterProvider router={router} />
  </ActiveMenuProvider>,
);
