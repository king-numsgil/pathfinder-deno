import {Hono} from "hono";

import { Domain, Subdomain } from "@/api/pathfinder/entities/Domain.entity.ts";
import db from "@/database/index.ts";

export const domainApi = new Hono();

domainApi.get("/", async c => {
    const repo = db.em.repo(Domain);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Domain);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});

export const subdomainApi = new Hono();

subdomainApi.get("/", async c => {
    const repo = db.em.repo(Subdomain);
    return c.json(await repo.findAll());
}).get("/:id", async c => {
    const repo = db.em.repo(Subdomain);
    return c.json(await repo.findOne({
        id: c.req.param("id"),
    }) ?? []);
});
