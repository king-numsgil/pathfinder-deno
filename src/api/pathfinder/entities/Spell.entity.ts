import { Collection, Entity, Enum, Index, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { ulid } from "npm:ulid";

import type { DomainSpell, SubdomainSpell } from "@/api/pathfinder/entities/Domain.entity.ts";
import type { School, Subschool } from "@/api/pathfinder/entities/School.entity.ts";
import type { BloodlineSpell } from "@/api/pathfinder/entities/Bloodline.entity.ts";
import type { MysterySpell } from "@/api/pathfinder/entities/Mystery.entity.ts";
import type { PatronSpell } from "@/api/pathfinder/entities/Patron.entity.ts";
import type { ClassSpell } from "@/api/pathfinder/entities/Class.entity.ts";
import type { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import { Descriptor } from "@/api/pathfinder/entities/types.ts";

@Entity()
export class Spell {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Index()
    name!: string;

    @Property({ nullable: true })
    link: string | null = null;

    @Property({ columnType: "text", nullable: true })
    description!: string;

    @Property({ columnType: "text", nullable: true })
    mythicText: string | null = null;

    @Property({ columnType: "text", nullable: true })
    augmented: string | null = null;

    @Property()
    castingTime!: string;

    @Property()
    range!: string;

    @Property({ nullable: true })
    area: string | null = null;

    @Property({ nullable: true })
    effect: string | null = null;

    @Property({ nullable: true })
    targets: string | null = null;

    @Property()
    duration!: string;

    @Property({ nullable: true })
    savingThrow: string | null = null;

    @Property({ nullable: true })
    spellResistance: string | null = null;

    @Property()
    @Index()
    sourcebook!: string;

    @Property({ default: false })
    dismissible: boolean = false;

    @Property({ default: false })
    shapeable: boolean = false;

    @Property({ default: false })
    verbal: boolean = false;

    @Property({ default: false })
    somatic: boolean = false;

    @Property({ default: false })
    material: boolean = false;

    @Property({ default: false })
    focus: boolean = false;

    @Property({ default: false })
    divineFocus: boolean = false;

    @Property({ nullable: true })
    componentCost: number | null = null;

    @Property({ default: false })
    permanency: boolean = false;

    @Property({ nullable: true })
    permanencyCl: number | null = null;

    @Property({ nullable: true })
    permanencyCost: number | null = null;

    @Enum({ items: () => Descriptor, nativeEnumName: "descriptor", default: [] })
    descriptors: Descriptor[] = [];

    @Property({ nullable: true })
    race: string | null = null;

    @ManyToOne("School", { nullable: true })
    school: School | null = null;

    @ManyToOne("Subschool", { nullable: true })
    subschool: Subschool | null = null;

    @ManyToOne("Deity", { nullable: true })
    deity: Deity | null = null;

    @OneToMany("DomainSpell", (domain: DomainSpell) => domain.spell)
    domains = new Collection<DomainSpell>(this);

    @OneToMany("SubdomainSpell", (subdomain: SubdomainSpell) => subdomain.spell)
    subdomains = new Collection<SubdomainSpell>(this);

    @OneToMany("PatronSpell", (patron: PatronSpell) => patron.spell)
    patrons = new Collection<PatronSpell>(this);

    @OneToMany("BloodlineSpell", (bloodline: BloodlineSpell) => bloodline.spell)
    bloodlines = new Collection<BloodlineSpell>(this);

    @OneToMany("MysterySpell", (mystery: MysterySpell) => mystery.spell)
    mysteries = new Collection<MysterySpell>(this);

    @OneToMany("ClassSpell", (cl: ClassSpell) => cl.spell)
    classes = new Collection<ClassSpell>(this);
}
