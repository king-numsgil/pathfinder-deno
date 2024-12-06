import { hc, type InferRequestType, type InferResponseType } from "hono/client";
import { MantineProvider } from "@mantine/core";
import { HashRouter } from "react-router-dom";

// @ts-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
// @ts-types="@types/react"
import { type FC, StrictMode } from "react";

import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/core/styles.css";

import { cssVariableResolver, theme } from "@/theme/index.ts";
import { NumsgilRoutes } from "@/pages/index.tsx";
import type { AppType } from "@/server.ts";

export const client = hc<AppType>("/");
export type SpellRequest = InferRequestType<typeof client.api.pathfinder.spell.$get>;
export type SpellResult = InferResponseType<typeof client.api.pathfinder.spell.$get>;

export const spellFetcher = (arg: SpellRequest) => async () => {
    const res = await client.api.pathfinder.spell.$get(arg);
    return await res.json() as SpellResult;
};

export const App: FC = () => {
    return (
        <HashRouter>
            <MantineProvider
                forceColorScheme="dark"
                cssVariablesResolver={cssVariableResolver}
                theme={theme}
            >
                <NumsgilRoutes />
            </MantineProvider>
        </HashRouter>
    );
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
