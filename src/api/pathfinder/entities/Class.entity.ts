import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { ulid } from "ulid";

import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

@Entity()
export class Class {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany(() => ClassSpell, (spell) => spell.class)
    spells = new Collection<ClassSpell>(this);
}

@Entity()
export class ClassSpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Class")
    class!: Class;

    @Property()
    spellLevel!: number;
}
