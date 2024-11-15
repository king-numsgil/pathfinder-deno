import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryKey,
    Property,
    type Ref,
    Unique,
} from "@mikro-orm/core";
import { ulid } from "@std/ulid";

import type { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

@Entity()
export class Mystery {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany(() => MysterySpell, (spell) => spell.mystery)
    spells = new Collection<MysterySpell>(this);

    @ManyToMany("Deity", "mysteries", { owner: true })
    deities = new Collection<Deity>(this);
}

@Entity()
export class MysterySpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Mystery")
    mystery!: Mystery;

    @Property()
    classLevel!: number;

    @Property({ nullable: true })
    note: string | null = null;
}
