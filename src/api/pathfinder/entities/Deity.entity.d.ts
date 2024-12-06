import { Collection } from "@mikro-orm/core";
import type { Domain, Subdomain } from "@/api/pathfinder/entities/Domain.entity.ts";
import type { Mystery } from "@/api/pathfinder/entities/Mystery.entity.ts";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
import { Alignment } from "@/api/pathfinder/entities/types.ts";
export declare class Deity {
    id: string;
    name: string;
    type: string;
    alignment: Alignment;
    mysteries: Collection<Mystery, object>;
    domains: Collection<Domain, object>;
    subdomains: Collection<Subdomain, object>;
    spells: Collection<Spell, object>;
}
