import { type RouteObject, Outlet } from "react-router-dom";

import { RootLayout } from "@/components/RootLayout.tsx";
import { Home } from "@/pages/Home.tsx";

export const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <RootLayout><Outlet /></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
];
