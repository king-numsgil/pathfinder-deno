import {Hono} from "hono";

import { Patron } from "@/api/pathfinder/entities/Patron.entity.ts";
import db from "@/database/index.ts";

export const patronApi = new Hono();

patronApi.get("/", async c => {
    const repo = db.em.repo(Patron);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Patron);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});