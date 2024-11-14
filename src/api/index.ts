import { Hono } from "hono";

import { databaseMiddleware } from "@/database/index.ts";
import { pfApi } from "@/api/pathfinder/index.ts";
import { userApi } from "@/api/user/index.ts";

export const api = new Hono();
api.use(databaseMiddleware);

api.route("/pathfinder", pfApi);
api.route("/user", userApi);
