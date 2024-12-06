import { Collection } from "@mikro-orm/core";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class Bloodline {
    id: string;
    name: string;
    spells: Collection<BloodlineSpell, object>;
}
export declare class BloodlineSpell {
    id: string;
    spell: Spell;
    bloodline: Bloodline;
    classLevel: number;
}
