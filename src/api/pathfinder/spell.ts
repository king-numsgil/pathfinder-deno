import {Hono} from "hono";

import { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
import db from "@/database/index.ts";

export const spellApi = new Hono();

spellApi.get("/", async c => {
    const repo = db.em.repo(Spell);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Spell);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});
