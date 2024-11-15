import { defineConfig } from "@mikro-orm/postgresql";

import { env } from "@/env.ts";

export default defineConfig({
    clientUrl: env.database,
    forceUndefined: true,

    entities: ["src/api/**/*.entity.ts"],
});
