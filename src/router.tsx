import { createBrowserRouter } from "react-router";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import GroqDetailPage from "./pages/detail";
import { detailGroqLoader } from "./pages/detail/detailLoader";
import { dashboardLoader } from "./pages/dashboard/dashboardLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage, loader: dashboardLoader },
      {
        path: "groq_detail",
        Component: GroqDetailPage,
        loader: detailGroqLoader,
      },
    ],
  },
]);
