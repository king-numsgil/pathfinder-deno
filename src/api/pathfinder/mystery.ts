import { Hono } from "hono";

import { Mystery } from "@/api/pathfinder/entities/Mystery.entity.ts";
import db from "@/database/index.ts";

export const mysteryApi = new Hono();

mysteryApi.get("/", async (c) => {
    const repo = db.em.repo(Mystery);
    return c.json(await repo.findAll());
}).get("/:id", async (c) => {
    const repo = db.em.repo(Mystery);
    return c.json(
        await repo.findOne({
            id: c.req.param("id"),
        }, {
            populate: [
                "spells",
                "spells.classLevel",
                "spells.spell"
            ],
            populateOrderBy: {
                spells: {
                    classLevel: "asc",
                },
            },
        }) ?? [],
    );
});
