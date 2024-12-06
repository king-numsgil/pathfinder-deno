import { Collection } from "@mikro-orm/core";
import type { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class Mystery {
    id: string;
    name: string;
    spells: Collection<MysterySpell, object>;
    deities: Collection<Deity, object>;
}
export declare class MysterySpell {
    id: string;
    spell: Spell;
    mystery: Mystery;
    classLevel: number;
    note: string | null;
}
