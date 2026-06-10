import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router";

const root = document.getElementById("root")!;

ReactDom.createRoot(root).render(<RouterProvider router={router} />);
