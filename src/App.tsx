import { MantineProvider } from "@mantine/core";
// @ts-types="@types/react"
import { type FC } from "react";

import { cssVariableResolver, theme } from "@/theme/index.ts";

export const App: FC = () => {
    return (
        <MantineProvider
            forceColorScheme="dark"
            cssVariablesResolver={cssVariableResolver}
            theme={theme}
        >
            <h1>Hello World!</h1>
        </MantineProvider>
    );
};
