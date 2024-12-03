import { Hono } from "hono";

import { bloodlineApi } from "@/api/pathfinder/bloodline.ts";
import { classApi } from "@/api/pathfinder/class.ts";
import { deityApi } from "@/api/pathfinder/deity.ts";
import { domainApi, subdomainApi } from "@/api/pathfinder/domain.ts";
import { mysteryApi } from "@/api/pathfinder/mystery.ts";
import { patronApi } from "@/api/pathfinder/patron.ts";
import { schoolApi, subschoolApi } from "@/api/pathfinder/school.ts";
import { spellApi } from "@/api/pathfinder/spell.ts";
import { featApi } from "@/api/pathfinder/feat.ts";

export const pfApi = new Hono()
    .route("/bloodline", bloodlineApi)
    .route("/class", classApi)
    .route("/deity", deityApi)
    .route("/domain", domainApi)
    .route("/subdomain", subdomainApi)
    .route("/mystery", mysteryApi)
    .route("/patron", patronApi)
    .route("/school", schoolApi)
    .route("/subschool", subschoolApi)
    .route("/spell", spellApi)
    .route("/feat", featApi);
