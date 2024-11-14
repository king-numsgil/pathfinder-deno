import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { Hono } from "hono";

import { databaseMiddleware } from "@/database/index.ts";
import { api } from "@/api/index.ts";

const app = new Hono();
app.use(logger(), databaseMiddleware);

app.route("/api", api);

if (Deno.env.get("NODE_ENV") !== "production") {
    const { viteMiddleware } = await import("@/viteMiddleware.ts");
    app.all("/*", viteMiddleware());
} else {
    app.get(
        "/",
        serveStatic({ path: "./dist/index.html" }),
    );
    app.get(
        "*",
        serveStatic({
            root: "./dist",
            onNotFound(_path, c) {
                c.redirect("/");
            },
        }),
    );
}

Deno.serve({ port: 3000 }, app.fetch);
