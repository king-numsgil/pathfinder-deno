import { Collection } from "@mikro-orm/core";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class Patron {
    id: string;
    name: string;
    spells: Collection<PatronSpell, object>;
}
export declare class PatronSpell {
    id: string;
    spell: Spell;
    patron: Patron;
    classLevel: number;
}
