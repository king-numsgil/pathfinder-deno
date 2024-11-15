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

export const pfApi = new Hono();

pfApi.route("/bloodline", bloodlineApi);
pfApi.route("/class", classApi);
pfApi.route("/deity", deityApi);
pfApi.route("/domain", domainApi);
pfApi.route("/subdomain", subdomainApi);
pfApi.route("/mystery", mysteryApi);
pfApi.route("/patron", patronApi);
pfApi.route("/school", schoolApi);
pfApi.route("/subschool", subschoolApi);

pfApi.route("/spell", spellApi);
pfApi.route("/feat", featApi);
