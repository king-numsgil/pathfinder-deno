export declare const userApi: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
                password: {
                    load: {};
                    set: {};
                    bind: {};
                };
                isAdmin: boolean;
                createdAt: string;
                updatedAt: string;
                encryptPassword: {};
                verifyPassword: {};
            }[];
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/">;
