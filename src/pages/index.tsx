import { Outlet, type RouteObject } from "react-router-dom";

import { pathfinder } from "@/pages/pathfinder/index.tsx";
import { RootLayout } from "@/components/RootLayout.tsx";
import { Home } from "@/pages/Home.tsx";

export const routes: Array<RouteObject> = [
    {
        path: "/",
        element: (
            <RootLayout>
                <Outlet />
            </RootLayout>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            pathfinder,
        ],
    },
];
