import {Hono} from "hono";

import { School, Subschool } from "@/api/pathfinder/entities/School.entity.ts";
import db from "@/database/index.ts";

export const schoolApi = new Hono();

schoolApi.get("/", async c => {
    const repo = db.em.repo(School);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(School);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});

export const subschoolApi = new Hono();

subschoolApi.get("/", async c => {
    const repo = db.em.repo(Subschool);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Subschool);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});
