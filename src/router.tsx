import { createBrowserRouter } from "react-router";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layout/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: DashboardLayout,
        children: [
            {index: true, Component: DashboardPage}
        ]
    }
])