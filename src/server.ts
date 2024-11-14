import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { Hono } from "hono";

import { api } from "@/api/index.ts";

const app = new Hono();
app.use(logger());

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
