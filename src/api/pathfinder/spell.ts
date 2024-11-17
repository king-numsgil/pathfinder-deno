import type { FilterQuery } from "@mikro-orm/core";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
import db from "@/database/index.ts";

export const spellApi = new Hono();

spellApi.get(
    "/",
    zValidator(
        "query",
        z.object({
            cursor: z.string().optional(),
            pageLength: z.number({ coerce: true }).default(10),
            name: z.string().optional(),
            spellLevel: z.number({ coerce: true }).optional(),

            $school: z.string().ulid().optional(),
            $subschool: z.string().ulid().optional(),
            $class: z.string().ulid().optional(),
            $domain: z.string().ulid().optional(),
            $subdomain: z.string().ulid().optional(),
            $patron: z.string().ulid().optional(),
            $bloodline: z.string().ulid().optional(),
            $mystery: z.string().ulid().optional(),
        }),
    ),
    async (c) => {
        const repo = db.em.repo(Spell);
        const params = c.req.valid("query");

        const filter: FilterQuery<Spell> = {
            $and: [],
            $or: [],
        };

        if (params.name && filter.$and) {
            filter.$and.push({
                name: { $ilike: `%${params.name}%` },
            });
        }

        if (params.$class && filter.$and) {
            filter.$and.push({
                classes: { class: params.$class },
            });
        }

        if (params.$domain && filter.$and) {
            filter.$and.push({
                domains: { domain: params.$domain },
            });
        }

        if (params.$subdomain && filter.$and) {
            filter.$and.push({
                subdomains: { subdomain: params.$subdomain },
            });
        }

        if (params.spellLevel && filter.$and && filter.$or) {
            filter.$or.push(
                {classes: {spellLevel: params.spellLevel}},
                {domains: {spellLevel: params.spellLevel}},
                {subdomains: {spellLevel: params.spellLevel}},
            );
        }

        if (params.$school && filter.$and) {
            filter.$and.push({
                school: { id: params.$school },
            });
        }

        if (params.$subschool && filter.$and) {
            filter.$and.push({
                subschool: { id: params.$subschool },
            });
        }

        if (params.$patron && filter.$and) {
            filter.$and.push({
                patrons: { patron: params.$patron },
            });
        }

        if (params.$bloodline && filter.$and) {
            filter.$and.push({
                bloodlines: { bloodline: params.$bloodline },
            });
        }

        if (params.$mystery && filter.$and) {
            filter.$and.push({
                mysteries: { mystery: params.$mystery },
            });
        }

        const cursor = await repo.findByCursor(filter, {
            first: params.pageLength,
            after: params.cursor,
            orderBy: {
                name: "asc",
            },
            populate: [
                "school",
                "subschool",
                "domains",
                "domains.domain",
                "subdomains",
                "subdomains.subdomain",
                "patrons",
                "patrons.patron",
                "bloodlines",
                "bloodlines.bloodline",
                "classes",
                "classes.class",
                "mysteries",
                "mysteries.mystery",
                "deity",
            ],
        });

        return c.json({
            items: cursor.items,
            totalCount: cursor.totalCount,
            length: cursor.length,
            hasPrevPage: cursor.hasPrevPage,
            hasNextPage: cursor.hasNextPage,
            startCursor: cursor.startCursor,
            endCursor: cursor.endCursor,
        });
    },
).get("/:id", async (c) => {
    const repo = db.em.repo(Spell);
    return c.json(
        await repo.findOne({
            id: c.req.param("id"),
        }, {
            populate: [
                "school",
                "subschool",
                "domains",
                "domains.domain",
                "subdomains",
                "subdomains.subdomain",
                "patrons",
                "patrons.patron",
                "bloodlines",
                "bloodlines.bloodline",
                "classes",
                "classes.class",
                "mysteries",
                "mysteries.mystery",
                "deity",
            ],
        }) ?? [],
    );
});
