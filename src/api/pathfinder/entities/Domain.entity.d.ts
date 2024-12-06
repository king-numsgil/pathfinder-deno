import { Collection } from "@mikro-orm/core";
import type { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class Domain {
    id: string;
    name: string;
    subdomains: Collection<Subdomain, object>;
    spells: Collection<DomainSpell, object>;
    deities: Collection<Deity, object>;
}
export declare class DomainSpell {
    id: string;
    spell: Spell;
    domain: Domain;
    spellLevel: number;
}
export declare class Subdomain {
    id: string;
    name: string;
    parent: Domain;
    spells: Collection<SubdomainSpell, object>;
    deities: Collection<Deity, object>;
}
export declare class SubdomainSpell {
    id: string;
    spell: Spell;
    subdomain: Subdomain;
    spellLevel: number;
}
