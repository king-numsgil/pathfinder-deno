import { EntityManager, RequestContext } from "@mikro-orm/sqlite";
import { createMiddleware } from "hono/factory";
import { MikroORM } from "@mikro-orm/core";

import config from "@/database/config.ts";

const orm = await MikroORM.init(config);

export default {
    orm,
    em: orm.em as EntityManager,
};

export const databaseMiddleware = createMiddleware(async (_c, next) => {
    RequestContext.enter(orm.em);
    await next();
});
