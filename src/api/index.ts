import { Hono } from "hono";

import { users } from "@/api/users/index.ts";

export const api = new Hono();

api.route("/user", users);
