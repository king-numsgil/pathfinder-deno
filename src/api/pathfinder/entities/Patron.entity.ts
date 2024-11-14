import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, type Ref, Unique } from "@mikro-orm/core";
import { ulid } from "@std/ulid";

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
    spell!: Ref<Spell>;

    @ManyToOne("Patron")
    patron!: Ref<Patron>;

    @Property()
    classLevel!: number;
}
