import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { ulid } from "npm:ulid";

import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

@Entity()
export class Patron {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany(() => PatronSpell, (spell) => spell.patron)
    spells = new Collection<PatronSpell>(this);
}

@Entity()
export class PatronSpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Patron")
    patron!: Patron;

    @Property()
    classLevel!: number;
}
