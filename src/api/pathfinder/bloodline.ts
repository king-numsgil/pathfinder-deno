import { QueryOrderNumeric } from "@mikro-orm/core";
import { Hono } from "hono";

import { Bloodline } from "@/api/pathfinder/entities/Bloodline.entity.ts";
import db from "@/database/index.ts";

export const bloodlineApi = new Hono();

bloodlineApi.get("/", async c => {
    const repo = db.em.repo(Bloodline);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Bloodline);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }, {
        populate: ["id", "name", "spells", "spells.classLevel", "spells.spell"],
        populateOrderBy: {
            spells: {
                classLevel: QueryOrderNumeric.ASC,
            }
        }
    }) ?? []);
});
