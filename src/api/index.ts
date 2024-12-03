import { Hono } from "hono";

import { databaseMiddleware } from "@/database/index.ts";
import { pfApi } from "@/api/pathfinder/index.ts";
import { userApi } from "@/api/user/index.ts";

export const api = new Hono()
    .use(databaseMiddleware)
    .route("/pathfinder", pfApi)
    .route("/user", userApi);
