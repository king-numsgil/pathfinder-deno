import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, type Ref, Unique } from "@mikro-orm/core";
import { ulid } from "@std/ulid";

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
    spell!: Ref<Spell>;

    @ManyToOne("Bloodline")
    bloodline!: Ref<Bloodline>;

    @Property()
    classLevel!: number;
}
