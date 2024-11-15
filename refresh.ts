import db from "@/database/index.ts";

import {Bloodline, BloodlineSpell} from "@/api/pathfinder/entities/Bloodline.entity.ts";
import {Class, ClassSpell} from "@/api/pathfinder/entities/Class.entity.ts";
import {Deity} from "@/api/pathfinder/entities/Deity.entity.ts";
import {Domain, DomainSpell, Subdomain, SubdomainSpell} from "@/api/pathfinder/entities/Domain.entity.ts";
import {Feat, FeatPrerequisite_Feat, FeatPrerequisite_Skill, FeatPrerequisite_Special, FeatPrerequisite_Stat} from "@/api/pathfinder/entities/Feat.entity.ts";
import {Mystery, MysterySpell} from "@/api/pathfinder/entities/Mystery.entity.ts";
import {Patron, PatronSpell} from "@/api/pathfinder/entities/Patron.entity.ts";
import {School, Subschool} from "@/api/pathfinder/entities/School.entity.ts";
import {Spell} from "@/api/pathfinder/entities/Spell.entity.ts";
import {Alignment, Descriptor, FeatType} from "@/api/pathfinder/entities/types.ts";

await db.orm.schema.refreshDatabase();
console.log("Refresh done!");

type SpellEntry = {
    name: string;
    link: string | null;
    description: string;
    rating: number | null;
    school: string;
    subschool: string | null;
    casting_time: string;
    range: string;
    area: string | null;
    effect: string | null;
    targets: string | null;
    duration: string;
    saving_throw: string | null;
    spell_resistance: string | null;
    sourcebook: string;
    dismissible: boolean;
    shapeable: boolean;
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    focus: boolean;
    divine_focus: boolean;
    component_costs: number | null;
    arcanist: number | null;
    wizard: number | null;
    sorcerer: number | null;
    witch: number | null;
    magus: number | null;
    bard: number | null;
    skald: number | null;
    summoner: number | null;
    unsummoner: number | null;
    bloodrager: number | null;
    shaman: number | null;
    druid: number | null;
    hunter: number | null;
    ranger: number | null;
    cleric: number | null;
    oracle: number | null;
    warpriest: number | null;
    inquisitor: number | null;
    antipaladin: number | null;
    paladin: number | null;
    alchemist: number | null;
    investigator: number | null;
    psychic: number | null;
    mesmerist: number | null;
    occultist: number | null;
    spiritualist: number | null;
    medium: number | null;
    permanency: boolean;
    permanency_cl: number | null;
    permanency_cost: number | null;
    acid: boolean;
    air: boolean;
    chaotic: boolean;
    cold: boolean;
    curse: boolean;
    darkness: boolean;
    death: boolean;
    disease: boolean;
    draconic: boolean;
    earth: boolean;
    electricity: boolean;
    emotion: boolean;
    evil: boolean;
    fear: boolean;
    fire: boolean;
    force: boolean;
    good: boolean;
    language_dependent: boolean;
    lawful: boolean;
    light: boolean;
    meditative: boolean;
    mind_affecting: boolean;
    pain: boolean;
    poison: boolean;
    ruse: boolean;
    shadow: boolean;
    sonic: boolean;
    water: boolean;
    sla_level: number | null;
    deity: string | null;
    race: string | null;
    domain: string | null;
    bloodline: string | null;
    patron: string | null;
    mythic_text: string | null;
    augmented: string | null;
};

type DomainList = {
    [name: string]: {
        Subdomains: string[];
        Deities: string[];
    };
};

type MysteryEntry = {
    Name: string;
    Deities: string[];
    Spells: {
        "Level 2": string | string[];
        "Level 4": string | string[];
        "Level 6": string | string[];
        "Level 8": string | string[];
        "Level 10": string | string[];
        "Level 12": string | string[];
        "Level 14": string | string[];
        "Level 16": string | string[];
        "Level 18": string | string[];
    }
};

type FeatPrerequisite = {
    type: "feat";
    name: string;
    note: string | null;
};

type SkillPrerequisite = {
    type: "skill";
    name: string;
    rank: number;
};

type StatPrerequisite = {
    type: "stat";
    name: string;
    value: number;
};

type SpecialPrerequisite = {
    type: "special";
    condition: string;
};

type BasePrerequisite = FeatPrerequisite | SkillPrerequisite | StatPrerequisite | SpecialPrerequisite;
type Prerequisite = BasePrerequisite & { or: Prerequisite | null };

type FeatEntry = {
    name: string;
    type: Array<FeatType>;
    description: string;
    prerequisites: string | null;
    prerequisite_data: Array<Prerequisite> | null;
    benefit: string;
    normal: string | null;
    special: string | null;
    race_name: string | null;
    note: string | null;
    goal: string | null;
    completion_benefit: string | null;
    source: string;
    multiples: boolean;
};

function parseEntry(entry: string): [string, number] {
    const matches = entry.trim().match(/^(.+?)\s\((\d+)\)$/);
    if (!matches || matches.length < 3) {
        throw new Error(`"{entry}" is invalid`);
    }

    return [matches[1].trim(), parseInt(matches[2].trim())];
}

const em = db.em.fork();

console.log("Seeding classes...");
{
    [
        "Alchemist",
        "Antipaladin",
        "Arcanist",
        "Barbarian",
        "Barbarian (Unchained)",
        "Bard",
        "Bloodrager",
        "Brawler",
        "Cavalier",
        "Cleric",
        "Druid",
        "Fighter",
        "Gunslinger",
        "Hunter",
        "Inquisitor",
        "Investigator",
        "Kineticist",
        "Magus",
        "Medium",
        "Mesmerist",
        "Monk",
        "Monk (Unchained)",
        "Ninja",
        "Occultist",
        "Oracle",
        "Paladin",
        "Psychic",
        "Ranger",
        "Rogue",
        "Rogue (Unchained)",
        "Samurai",
        "Shaman",
        "Shifter",
        "Skald",
        "Slayer",
        "Sorcerer",
        "Spiritualist",
        "Summoner",
        "Summoner (Unchained)",
        "Swashbuckler",
        "Vigilante",
        "Warpriest",
        "Witch",
        "Wizard",
    ].map(name => em.getRepository(Class).create({ name }));

    [
        "Abjuration",
        "Conjuration",
        "Divination",
        "Enchantment",
        "Evocation",
        "Illusion",
        "Necromancy",
        "Transmutation",
        "Universal",
    ].map(name => em.getRepository(School).create({ name }));

    [
        "Calling",
        "Charm",
        "Compulsion",
        "Creation",
        "Figment",
        "Glamer",
        "Healing",
        "Pattern",
        "Phantasm",
        "Polymorph",
        "Scrying",
        "Shadow",
        "Summoning",
        "Teleportation",
        "Haunted",
    ].map(name => em.getRepository(Subschool).create({ name }));

    await em.flush();
}
console.log("...Done!");

console.log("Seeding domains...");
{
    const data = JSON.parse(await Deno.readTextFile("./data/domains.json")) as DomainList;

    for (const name of Object.keys(data)) {
        const domain = new Domain();
        domain.name = name;

        for (const dname of data[name].Deities) {
            let deity = await em.getRepository(Deity).findOne({ name: dname });
            if (!deity) {
                deity = new Deity();
                deity.name = dname;
                deity.alignment = Alignment.Neutral;
                deity.type = "Core Divinity";
                em.persist(deity);
                console.log(`\tAdded deity ${dname}`);
            }

            domain.deities.add(deity);
        }

        for (const sub of data[name].Subdomains) {
            let subdomain = await em.getRepository(Subdomain).findOne({ name: sub });
            if (!subdomain) {
                subdomain = new Subdomain();
                subdomain.name = sub;
                subdomain.parent = domain;
                for (const deity of domain.deities) {
                    subdomain.deities.add(deity);
                }

                em.persist(subdomain);
                console.log(`\tAdded subdomain ${sub}`);
            }

            domain.subdomains.add(subdomain);
        }

        console.log(`\tAdded domain ${name}`);
        await em.persist(domain).flush();
    }
}
console.log("...Done!");

await db.orm.close();
Deno.exit(0);
