import { Collection, Entity, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { ulid } from "npm:ulid";

import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

@Entity()
export class School {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany("Spell", (spell: Spell) => spell.school)
    spells = new Collection<Spell>(this);
}

@Entity()
export class Subschool {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany("Spell", (spell: Spell) => spell.subschool)
    spells = new Collection<Spell>(this);
}
