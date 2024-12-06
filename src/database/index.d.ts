import { EntityManager } from "@mikro-orm/postgresql";
import { MikroORM } from "@mikro-orm/core";
declare const _default: {
    orm: MikroORM<import("@mikro-orm/postgresql").PostgreSqlDriver, EntityManager<import("@mikro-orm/postgresql").PostgreSqlDriver> & import("@mikro-orm/core").EntityManager<import("@mikro-orm/core").IDatabaseDriver<import("@mikro-orm/core").Connection>>>;
    em: EntityManager;
};
export default _default;
export declare const databaseMiddleware: import("hono").MiddlewareHandler<any, string, {}>;
