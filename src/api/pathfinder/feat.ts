import { Hono } from "hono";

import { Feat } from "@/api/pathfinder/entities/Feat.entity.ts";
import db from "@/database/index.ts";

export const featApi = new Hono()
    .get("/", async (c) => {
        const repo = db.em.repo(Feat);
        return c.json(await repo.findAll());
    }).get("/:id", async (c) => {
        const repo = db.em.repo(Feat);
        return c.json(
            await repo.findOne({
                id: c.req.param("id"),
            }) ?? [],
        );
    });
