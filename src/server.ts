import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { Hono } from "hono";

import { api } from "@/api/index.ts";
import db from "@/database/index.ts";

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

const listener = async () => {
    await db.orm.close();
    console.log("DB connection closed");
    Deno.exit(0);
};

Deno.addSignalListener("SIGINT", listener);
if (Deno.build.os !== "windows") {
    Deno.addSignalListener("SIGTERM", listener);
}

Deno.serve({ port: 3000 }, app.fetch);
