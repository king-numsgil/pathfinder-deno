import { Collection } from "@mikro-orm/core";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
export declare class Class {
    id: string;
    name: string;
    spells: Collection<ClassSpell, object>;
}
export declare class ClassSpell {
    id: string;
    spell: Spell;
    class: Class;
    spellLevel: number;
}
