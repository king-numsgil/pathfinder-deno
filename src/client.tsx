import { hc, type InferRequestType, type InferResponseType } from "hono/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();
export const client = hc<AppType>("/");
export type SpellRequest = InferRequestType<typeof client.api.pathfinder.spell.$get>;
export type SpellResult = InferResponseType<typeof client.api.pathfinder.spell.$get>;

export async function spellFetcher(query: SpellRequest["query"]) {
    const res = await client.api.pathfinder.spell.$get({ query });
    return await res.json() as SpellResult;
}

export async function singleSpellFetcher(id: string) {
    const res = await client.api.pathfinder.spell[":id"].$get({
        param: {
            id,
        },
    });
    return await res.json();
}

export const App: FC = () => {
    return (
        <HashRouter>
            <MantineProvider
                forceColorScheme="dark"
                cssVariablesResolver={cssVariableResolver}
                theme={theme}
            >
                <QueryClientProvider client={queryClient}>
                    <NumsgilRoutes />
                </QueryClientProvider>
            </MantineProvider>
        </HashRouter>
    );
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
