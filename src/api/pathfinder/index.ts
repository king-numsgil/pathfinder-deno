import {Hono} from "hono";

import {classApi} from "@/api/pathfinder/class.ts";

export const pfApi = new Hono();

pfApi.route("/class", classApi);
