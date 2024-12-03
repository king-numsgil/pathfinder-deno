import { Hono } from "hono";

import { Class } from "@/api/pathfinder/entities/Class.entity.ts";
import db from "@/database/index.ts";

export const classApi = new Hono()
    .get("/", async (c) => {
        const repo = db.em.repo(Class);
        return c.json(await repo.findAll());
    }).get("/:id", async (c) => {
        const repo = db.em.repo(Class);
        return c.json(
            await repo.findOne({
                id: c.req.param("id"),
            }) ?? [],
        );
    });
