import { Hono } from "hono";

import { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import db from "@/database/index.ts";

export const deityApi = new Hono()
    .get("/", async (c) => {
        const repo = db.em.repo(Deity);
        return c.json(await repo.findAll());
    }).get("/:id", async (c) => {
        const repo = db.em.repo(Deity);
        return c.json(
            await repo.findOne({
                id: c.req.param("id"),
            }, {
                populate: [
                    "domains",
                    "subdomains",
                    "spells"
                ],
            }) ?? [],
        );
    });
