import { Collection } from "@mikro-orm/core";
import type { DomainSpell, SubdomainSpell } from "@/api/pathfinder/entities/Domain.entity.ts";
import type { School, Subschool } from "@/api/pathfinder/entities/School.entity.ts";
import type { BloodlineSpell } from "@/api/pathfinder/entities/Bloodline.entity.ts";
import type { MysterySpell } from "@/api/pathfinder/entities/Mystery.entity.ts";
import type { PatronSpell } from "@/api/pathfinder/entities/Patron.entity.ts";
import type { ClassSpell } from "@/api/pathfinder/entities/Class.entity.ts";
import type { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import { Descriptor } from "@/api/pathfinder/entities/types.ts";
export declare class Spell {
    id: string;
    name: string;
    link: string | null;
    description: string;
    mythicText: string | null;
    augmented: string | null;
    castingTime: string;
    range: string;
    area: string | null;
    effect: string | null;
    targets: string | null;
    duration: string;
    savingThrow: string | null;
    spellResistance: string | null;
    sourcebook: string;
    dismissible: boolean;
    shapeable: boolean;
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    focus: boolean;
    divineFocus: boolean;
    componentCost: number | null;
    permanency: boolean;
    permanencyCl: number | null;
    permanencyCost: number | null;
    descriptors: Descriptor[];
    race: string | null;
    school: School | null;
    subschool: Subschool | null;
    deity: Deity | null;
    domains: Collection<DomainSpell, object>;
    subdomains: Collection<SubdomainSpell, object>;
    patrons: Collection<PatronSpell, object>;
    bloodlines: Collection<BloodlineSpell, object>;
    mysteries: Collection<MysterySpell, object>;
    classes: Collection<ClassSpell, object>;
}