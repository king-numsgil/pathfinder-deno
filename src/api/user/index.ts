import { Hono } from "hono";

import { User } from "@/api/user/User.entity.ts";
import db from "@/database/index.ts";

export const userApi = new Hono()
    .get("/", async (c) => {
        const repo = db.em.repo(User);
        return c.json(await repo.findAll());
    });
