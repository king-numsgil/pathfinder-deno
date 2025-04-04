import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { ulid } from "ulid";

import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

@Entity()
export class Bloodline {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany(() => BloodlineSpell, (spell) => spell.bloodline)
    spells = new Collection<BloodlineSpell>(this);
}

@Entity()
export class BloodlineSpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Bloodline")
    bloodline!: Bloodline;

    @Property()
    classLevel!: number;
}
