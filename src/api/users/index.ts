import { Hono } from "hono";

import { User } from "@/api/users/User.entity.ts";
import db from "@/database/index.ts";

export const users = new Hono();

users.get("/", async (c) => {
    const repo = db.em.repo(User);
    return c.json(await repo.findAll());
});
