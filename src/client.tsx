// @ts-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
// @ts-types="@types/react"
import { StrictMode } from "react";

import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/notifications/styles.css";

import { App } from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
