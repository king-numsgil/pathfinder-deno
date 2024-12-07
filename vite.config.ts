import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
    ],
    build: {
        sourcemap: "inline",
        rollupOptions: {
            output: {
                manualChunks: (id: string) => {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
