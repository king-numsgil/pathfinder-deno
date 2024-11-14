import { Collection, Entity, Enum, ManyToMany, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { ulid } from "@std/ulid";

import type { Domain, Subdomain } from "@/api/pathfinder/entities/Domain.entity.ts";
import type { Mystery } from "@/api/pathfinder/entities/Mystery.entity.ts";
import type { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
import { Alignment } from "@/api/pathfinder/entities/types.ts";

@Entity()
export class Deity {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    name!: string;

    @Property()
    type!: string;

    @Enum({ items: () => Alignment, nativeEnumName: "alignment" })
    alignment!: Alignment;

    @ManyToMany("Mystery", (mystery: Mystery) => mystery.deities)
    mysteries = new Collection<Mystery>(this);

    @ManyToMany("Domain", (domain: Domain) => domain.deities)
    domains = new Collection<Domain>(this);

    @ManyToMany("Subdomain", (subdomain: Subdomain) => subdomain.deities)
    subdomains = new Collection<Subdomain>(this);

    @OneToMany("Spell", (spell: Spell) => spell.deity)
    spells = new Collection<Spell>(this);
}
