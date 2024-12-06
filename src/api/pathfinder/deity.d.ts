export declare const deityApi: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                type: string;
                alignment: import("./entities/types").Alignment;
                mysteries: {
                    id: string;
                    name: string;
                    spells: string[];
                    deities: string[];
                }[];
                domains: {
                    id: string;
                    name: string;
                    subdomains: string[];
                    spells: string[];
                    deities: string[];
                }[];
                subdomains: {
                    id: string;
                    name: string;
                    parent: {
                        id: string;
                        name: string;
                        subdomains: string[];
                        spells: string[];
                        deities: string[];
                    };
                    spells: string[];
                    deities: string[];
                }[];
                spells: {
                    id: string;
                    name: string;
                    link: string | null;
                    description: string;
                    mythicText: string | null;
                    augmented: string | null;
                    castingTime: string;
                    range: string;
                    area: string | null;
                    effect: string | null;
                    targets: string | null;
                    duration: string;
                    savingThrow: string | null;
                    spellResistance: string | null;
                    sourcebook: string;
                    dismissible: boolean;
                    shapeable: boolean;
                    verbal: boolean;
                    somatic: boolean;
                    material: boolean;
                    focus: boolean;
                    divineFocus: boolean;
                    componentCost: number | null;
                    permanency: boolean;
                    permanencyCl: number | null;
                    permanencyCost: number | null;
                    descriptors: import("./entities/types").Descriptor[];
                    race: string | null;
                    school: {
                        id: string;
                        name: string;
                        spells: string[];
                    } | null;
                    subschool: {
                        id: string;
                        name: string;
                        spells: string[];
                    } | null;
                    deity: {
                        id: string;
                        name: string;
                        type: string;
                        alignment: import("./entities/types").Alignment;
                        mysteries: string[];
                        domains: string[];
                        subdomains: string[];
                        spells: string[];
                    } | null;
                    domains: string[];
                    subdomains: string[];
                    patrons: string[];
                    bloodlines: string[];
                    mysteries: string[];
                    classes: string[];
                }[];
            }[];
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: never[] | {
                id: string;
                name: string;
                type: string;
                alignment: import("./entities/types").Alignment;
                mysteries: {
                    id: string;
                    name: string;
                    spells: string[];
                    deities: string[];
                }[];
                domains: {
                    id: string;
                    name: string;
                    subdomains: string[];
                    spells: string[];
                    deities: string[];
                }[];
                subdomains: {
                    id: string;
                    name: string;
                    parent: {
                        id: string;
                        name: string;
                        subdomains: string[];
                        spells: string[];
                        deities: string[];
                    };
                    spells: string[];
                    deities: string[];
                }[];
                spells: {
                    id: string;
                    name: string;
                    link: string | null;
                    description: string;
                    mythicText: string | null;
                    augmented: string | null;
                    castingTime: string;
                    range: string;
                    area: string | null;
                    effect: string | null;
                    targets: string | null;
                    duration: string;
                    savingThrow: string | null;
                    spellResistance: string | null;
                    sourcebook: string;
                    dismissible: boolean;
                    shapeable: boolean;
                    verbal: boolean;
                    somatic: boolean;
                    material: boolean;
                    focus: boolean;
                    divineFocus: boolean;
                    componentCost: number | null;
                    permanency: boolean;
                    permanencyCl: number | null;
                    permanencyCost: number | null;
                    descriptors: import("./entities/types").Descriptor[];
                    race: string | null;
                    school: {
                        id: string;
                        name: string;
                        spells: string[];
                    } | null;
                    subschool: {
                        id: string;
                        name: string;
                        spells: string[];
                    } | null;
                    deity: {
                        id: string;
                        name: string;
                        type: string;
                        alignment: import("./entities/types").Alignment;
                        mysteries: string[];
                        domains: string[];
                        subdomains: string[];
                        spells: string[];
                    } | null;
                    domains: string[];
                    subdomains: string[];
                    patrons: string[];
                    bloodlines: string[];
                    mysteries: string[];
                    classes: string[];
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/">;
