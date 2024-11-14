import { IncomingMessage, ServerResponse } from "node:http";
import { createServer, type ViteDevServer } from "vite";
import { createMiddleware } from "hono/factory";

let server: ViteDevServer;

async function getViteServer() {
    if (!server) {
        server = await createServer({
            configFile: "vite.config.ts",
            appType: "spa",
            server: {
                middlewareMode: true,
            },
        });
    }

    return server;
}

export function viteMiddleware() {
    return createMiddleware(async (ctx, next) => {
        const vite = await getViteServer();
        return new Promise((resolve) => {
            let sent = false;
            const headers = new Headers();
            vite.middlewares(
                {
                    url: new URL(ctx.req.raw.url, "http://localhost").pathname,
                    method: ctx.req.raw.method,
                    headers: Object.fromEntries(
                        ctx.req.raw.headers,
                    ),
                } as IncomingMessage,
                {
                    setHeader(name, value: any) {
                        headers.set(name, value);
                        return this;
                    },
                    end(body) {
                        sent = true;
                        resolve(
                            ctx.body(body, {
                                status: this.statusCode,
                                statusText: this.statusMessage,
                                headers,
                            }),
                        );
                    },
                } as ServerResponse,
                () => sent || resolve(next()),
            );
        });
    });
}
