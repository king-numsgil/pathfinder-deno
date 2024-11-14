import db from "@/database/index.ts";

await db.orm.schema.refreshDatabase();
console.log("Refresh done!");

Deno.exit(0);
