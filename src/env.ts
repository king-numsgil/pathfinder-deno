export const env = {
    get database() {
        return Deno.env.get("DATABASE_URL");
    },
};
