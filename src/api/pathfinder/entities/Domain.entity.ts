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
export class Domain {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @OneToMany(() => Subdomain, subdomain => subdomain.parent)
    subdomains = new Collection<Subdomain>(this);

    @OneToMany(() => DomainSpell, (spell) => spell.domain)
    spells = new Collection<DomainSpell>(this);

    @ManyToMany("Deity", "domains", { owner: true })
    deities = new Collection<Deity>(this);
}

@Entity()
export class DomainSpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Domain")
    domain!: Domain;

    @Property()
    spellLevel!: number;
}

@Entity()
export class Subdomain {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @ManyToOne("Domain")
    parent!: Domain;

    @OneToMany(() => SubdomainSpell, (spell) => spell.subdomain)
    spells = new Collection<SubdomainSpell>(this);

    @ManyToMany("Deity", "subdomains", { owner: true })
    deities = new Collection<Deity>(this);
}

@Entity()
export class SubdomainSpell {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Spell")
    spell!: Spell;

    @ManyToOne("Subdomain")
    subdomain!: Subdomain;

    @Property()
    spellLevel!: number;
}
