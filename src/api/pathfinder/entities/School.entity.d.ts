import { Collection } from "@mikro-orm/core";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class School {
    id: string;
    name: string;
    spells: Collection<Spell, object>;
}
export declare class Subschool {
    id: string;
    name: string;
    spells: Collection<Spell, object>;
}
