import { createHashRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// @ts-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
// @ts-types="@types/react"
import { FC, StrictMode } from "react";

import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/core/styles.css";

import { cssVariableResolver, theme } from "@/theme/index.ts";
import { routes } from "@/pages/index.tsx";

const router = createHashRouter(routes, {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
        v7_prependBasename: true,
        v7_throwAbortReason: true,
    },
});

export const App: FC = () => {
    return (
        <MantineProvider
            forceColorScheme="dark"
            cssVariablesResolver={cssVariableResolver}
            theme={theme}
        >
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                }}
            />
        </MantineProvider>
    );
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
