export declare const api: import("hono/hono-base").HonoBase<{}, import("hono/types").BlankSchema | import("hono/types").MergeSchemaPath<import("hono/types").BlankSchema | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    bloodline: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
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
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    bloodline: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/bloodline"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    class: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    spellLevel: number;
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
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    class: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    spellLevel: number;
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/class"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                type: string;
                alignment: import("./pathfinder/entities/types").Alignment;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
                alignment: import("./pathfinder/entities/types").Alignment;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
}, "/deity"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
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
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    domain: {
                        id: string;
                        name: string;
                        subdomains: string[];
                        spells: string[];
                        deities: string[];
                    };
                    spellLevel: number;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
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
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    domain: {
                        id: string;
                        name: string;
                        subdomains: string[];
                        spells: string[];
                        deities: string[];
                    };
                    spellLevel: number;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/domain"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                parent: {
                    id: string;
                    name: string;
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
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        domain: {
                            id: string;
                            name: string;
                            subdomains: string[];
                            spells: string[];
                            deities: string[];
                        };
                        spellLevel: number;
                    }[];
                    deities: {
                        id: string;
                        name: string;
                        type: string;
                        alignment: import("./pathfinder/entities/types").Alignment;
                        mysteries: string[];
                        domains: string[];
                        subdomains: string[];
                        spells: string[];
                    }[];
                };
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    subdomain: {
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
                    };
                    spellLevel: number;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
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
                parent: {
                    id: string;
                    name: string;
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
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        domain: {
                            id: string;
                            name: string;
                            subdomains: string[];
                            spells: string[];
                            deities: string[];
                        };
                        spellLevel: number;
                    }[];
                    deities: {
                        id: string;
                        name: string;
                        type: string;
                        alignment: import("./pathfinder/entities/types").Alignment;
                        mysteries: string[];
                        domains: string[];
                        subdomains: string[];
                        spells: string[];
                    }[];
                };
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    subdomain: {
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
                    };
                    spellLevel: number;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/subdomain"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    mystery: {
                        id: string;
                        name: string;
                        spells: string[];
                        deities: string[];
                    };
                    classLevel: number;
                    note: string | null;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
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
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    mystery: {
                        id: string;
                        name: string;
                        spells: string[];
                        deities: string[];
                    };
                    classLevel: number;
                    note: string | null;
                }[];
                deities: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
                    mysteries: string[];
                    domains: string[];
                    subdomains: string[];
                    spells: string[];
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/mystery"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    patron: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
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
                spells: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    patron: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/patron"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
}, "/school"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                        alignment: import("./pathfinder/entities/types").Alignment;
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
}, "/subschool"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    name?: string | string[] | undefined;
                    spellLevel?: string | string[] | undefined;
                    cursor?: string | string[] | undefined;
                    pageLength?: string | string[] | undefined;
                    $school?: string | string[] | undefined;
                    $subschool?: string | string[] | undefined;
                    $class?: string | string[] | undefined;
                    $domain?: string | string[] | undefined;
                    $subdomain?: string | string[] | undefined;
                    $patron?: string | string[] | undefined;
                    $bloodline?: string | string[] | undefined;
                    $mystery?: string | string[] | undefined;
                };
            };
            output: {
                items: {
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
                    descriptors: import("./pathfinder/entities/types").Descriptor[];
                    race: string | null;
                    school: {
                        id: string;
                        name: string;
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                    } | null;
                    subschool: {
                        id: string;
                        name: string;
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                    } | null;
                    deity: {
                        id: string;
                        name: string;
                        type: string;
                        alignment: import("./pathfinder/entities/types").Alignment;
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                    } | null;
                    domains: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        domain: {
                            id: string;
                            name: string;
                            subdomains: string[];
                            spells: string[];
                            deities: string[];
                        };
                        spellLevel: number;
                    }[];
                    subdomains: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        subdomain: {
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
                        };
                        spellLevel: number;
                    }[];
                    patrons: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        patron: {
                            id: string;
                            name: string;
                            spells: string[];
                        };
                        classLevel: number;
                    }[];
                    bloodlines: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        bloodline: {
                            id: string;
                            name: string;
                            spells: string[];
                        };
                        classLevel: number;
                    }[];
                    mysteries: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        mystery: {
                            id: string;
                            name: string;
                            spells: string[];
                            deities: string[];
                        };
                        classLevel: number;
                        note: string | null;
                    }[];
                    classes: {
                        id: string;
                        spell: {
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
                            descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                                alignment: import("./pathfinder/entities/types").Alignment;
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
                        };
                        class: {
                            id: string;
                            name: string;
                            spells: string[];
                        };
                        spellLevel: number;
                    }[];
                }[];
                totalCount: number;
                length: number;
                hasPrevPage: boolean;
                hasNextPage: boolean;
                startCursor: string | null;
                endCursor: string | null;
            };
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
                descriptors: import("./pathfinder/entities/types").Descriptor[];
                race: string | null;
                school: {
                    id: string;
                    name: string;
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                } | null;
                subschool: {
                    id: string;
                    name: string;
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                } | null;
                deity: {
                    id: string;
                    name: string;
                    type: string;
                    alignment: import("./pathfinder/entities/types").Alignment;
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                } | null;
                domains: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    domain: {
                        id: string;
                        name: string;
                        subdomains: string[];
                        spells: string[];
                        deities: string[];
                    };
                    spellLevel: number;
                }[];
                subdomains: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    subdomain: {
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
                    };
                    spellLevel: number;
                }[];
                patrons: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    patron: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
                }[];
                bloodlines: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    bloodline: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    classLevel: number;
                }[];
                mysteries: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    mystery: {
                        id: string;
                        name: string;
                        spells: string[];
                        deities: string[];
                    };
                    classLevel: number;
                    note: string | null;
                }[];
                classes: {
                    id: string;
                    spell: {
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
                        descriptors: import("./pathfinder/entities/types").Descriptor[];
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
                            alignment: import("./pathfinder/entities/types").Alignment;
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
                    };
                    class: {
                        id: string;
                        name: string;
                        spells: string[];
                    };
                    spellLevel: number;
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/spell"> | import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                name: string;
                type: import("./pathfinder/entities/types").FeatType[];
                description: string;
                benefit: string;
                normal: string | null;
                special: string | null;
                raceName: string | null;
                note: string | null;
                goal: string | null;
                completionBenefit: string | null;
                source: string;
                multiples: boolean;
                requiredBy: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    feat: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    note: string | null;
                }[];
                requisiteFeats: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    feat: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    note: string | null;
                }[];
                requisiteSkills: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    name: string;
                    rank: number;
                }[];
                requisiteStats: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    name: string;
                    value: number;
                }[];
                requisiteSpecial: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    condition: string;
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
                type: import("./pathfinder/entities/types").FeatType[];
                description: string;
                benefit: string;
                normal: string | null;
                special: string | null;
                raceName: string | null;
                note: string | null;
                goal: string | null;
                completionBenefit: string | null;
                source: string;
                multiples: boolean;
                requiredBy: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    feat: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    note: string | null;
                }[];
                requisiteFeats: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    feat: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    note: string | null;
                }[];
                requisiteSkills: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    name: string;
                    rank: number;
                }[];
                requisiteStats: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    name: string;
                    value: number;
                }[];
                requisiteSpecial: {
                    id: string;
                    parent: {
                        id: string;
                        name: string;
                        type: import("./pathfinder/entities/types").FeatType[];
                        description: string;
                        benefit: string;
                        normal: string | null;
                        special: string | null;
                        raceName: string | null;
                        note: string | null;
                        goal: string | null;
                        completionBenefit: string | null;
                        source: string;
                        multiples: boolean;
                        requiredBy: string[];
                        requisiteFeats: string[];
                        requisiteSkills: string[];
                        requisiteStats: string[];
                        requisiteSpecial: string[];
                    };
                    condition: string;
                }[];
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/feat">, "/pathfinder"> | import("hono/types").MergeSchemaPath<{
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
}, "/user">, "/">;
