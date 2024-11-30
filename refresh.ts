import db from "@/database/index.ts";
import { Domain, DomainSpell, Subdomain, SubdomainSpell } from "@/api/pathfinder/entities/Domain.entity.ts";
import { Bloodline, BloodlineSpell } from "@/api/pathfinder/entities/Bloodline.entity.ts";
import { Alignment, Descriptor, FeatType } from "@/api/pathfinder/entities/types.ts";
import { Mystery, MysterySpell } from "@/api/pathfinder/entities/Mystery.entity.ts";
import { Patron, PatronSpell } from "@/api/pathfinder/entities/Patron.entity.ts";
import { School, Subschool } from "@/api/pathfinder/entities/School.entity.ts";
import { Class, ClassSpell } from "@/api/pathfinder/entities/Class.entity.ts";
import { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";

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
    };
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
    ].map((name) => em.getRepository(Class).create({ name }));

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
    ].map((name) => em.getRepository(School).create({ name }));

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
    ].map((name) => em.getRepository(Subschool).create({ name }));

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

console.log("Seeding spells...");
{
    const data = JSON.parse(await Deno.readTextFile("./data/spell_codex.json")) as SpellEntry[];

    for (const spell of data) {
        if (spell.name === "Gate") {
            spell.subschool = "calling";
        }

        if (spell.name === "Mislead") {
            spell.subschool = "glamer";
        }

        if (spell.name === "Vomit Twin") {
            spell.subschool = "creation";
        }

        const row = new Spell();
        row.name = spell.name;
        row.link = spell.link;
        row.description = spell.description;
        row.mythicText = spell.mythic_text;
        row.augmented = spell.augmented;
        row.castingTime = spell.casting_time;
        row.range = spell.range;
        row.area = spell.area;
        row.effect = spell.effect;
        row.targets = spell.targets;
        row.duration = spell.duration;
        row.savingThrow = spell.saving_throw;
        row.spellResistance = spell.spell_resistance;
        row.sourcebook = spell.sourcebook;
        row.dismissible = spell.dismissible;
        row.shapeable = spell.shapeable;
        row.verbal = spell.verbal;
        row.somatic = spell.somatic;
        row.material = spell.material;
        row.focus = spell.focus;
        row.divineFocus = spell.divine_focus;
        row.componentCost = spell.component_costs;
        row.permanency = spell.permanency;
        row.permanencyCl = spell.permanency_cl;
        row.permanencyCost = spell.permanency_cost;
        row.race = spell.race;

        if (spell.school !== "see text") {
            row.school = await em.getRepository(School).findOneOrFail({ name: { $ilike: spell.school } });
        }

        row.subschool = spell.subschool
            ? await em.getRepository(Subschool).findOneOrFail({ name: { $ilike: spell.subschool } })
            : null;
        row.deity = spell.deity ? await em.getRepository(Deity).findOne({ name: { $ilike: spell.deity } }) : null;

        if (spell.acid) {
            row.descriptors.push(Descriptor.Acid);
        }
        if (spell.air) {
            row.descriptors.push(Descriptor.Air);
        }
        if (spell.chaotic) {
            row.descriptors.push(Descriptor.Chaotic);
        }
        if (spell.cold) {
            row.descriptors.push(Descriptor.Cold);
        }
        if (spell.curse) {
            row.descriptors.push(Descriptor.Curse);
        }
        if (spell.darkness) {
            row.descriptors.push(Descriptor.Darkness);
        }
        if (spell.death) {
            row.descriptors.push(Descriptor.Death);
        }
        if (spell.disease) {
            row.descriptors.push(Descriptor.Disease);
        }
        if (spell.draconic) {
            row.descriptors.push(Descriptor.Draconic);
        }
        if (spell.earth) {
            row.descriptors.push(Descriptor.Earth);
        }
        if (spell.electricity) {
            row.descriptors.push(Descriptor.Electricity);
        }
        if (spell.emotion) {
            row.descriptors.push(Descriptor.Emotion);
        }
        if (spell.evil) {
            row.descriptors.push(Descriptor.Evil);
        }
        if (spell.fear) {
            row.descriptors.push(Descriptor.Fear);
        }
        if (spell.fire) {
            row.descriptors.push(Descriptor.Fire);
        }
        if (spell.force) {
            row.descriptors.push(Descriptor.Force);
        }
        if (spell.good) {
            row.descriptors.push(Descriptor.Good);
        }
        if (spell.language_dependent) {
            row.descriptors.push(Descriptor.LanguageDependent);
        }
        if (spell.lawful) {
            row.descriptors.push(Descriptor.Lawful);
        }
        if (spell.light) {
            row.descriptors.push(Descriptor.Light);
        }
        if (spell.meditative) {
            row.descriptors.push(Descriptor.Meditative);
        }
        if (spell.mind_affecting) {
            row.descriptors.push(Descriptor.MindAffecting);
        }
        if (spell.pain) {
            row.descriptors.push(Descriptor.Pain);
        }
        if (spell.poison) {
            row.descriptors.push(Descriptor.Poison);
        }
        if (spell.ruse) {
            row.descriptors.push(Descriptor.Ruse);
        }
        if (spell.shadow) {
            row.descriptors.push(Descriptor.Shadow);
        }
        if (spell.sonic) {
            row.descriptors.push(Descriptor.Sonic);
        }
        if (spell.water) {
            row.descriptors.push(Descriptor.Water);
        }

        if (spell.arcanist !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Arcanist" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.arcanist;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.wizard !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Wizard" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.wizard;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.sorcerer !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Sorcerer" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.sorcerer;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.witch !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Witch" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.witch;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.magus !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Magus" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.magus;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.bard !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Bard" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.bard;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.skald !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Skald" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.skald;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.summoner !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Summoner" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.summoner;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.unsummoner !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Summoner (Unchained)" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.unsummoner;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.bloodrager !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Bloodrager" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.bloodrager;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.shaman !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Shaman" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.shaman;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.druid !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Druid" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.druid;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.hunter !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Hunter" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.hunter;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.ranger !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Ranger" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.ranger;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.cleric !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Cleric" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.cleric;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.oracle !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Oracle" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.oracle;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.warpriest !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Warpriest" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.warpriest;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.inquisitor !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Inquisitor" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.inquisitor;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.antipaladin !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Antipaladin" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.antipaladin;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.paladin !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Paladin" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.paladin;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.alchemist !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Alchemist" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.alchemist;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.investigator !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Investigator" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.investigator;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.psychic !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Psychic" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.psychic;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.mesmerist !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Mesmerist" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.mesmerist;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.occultist !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Occultist" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.occultist;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.spiritualist !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Spiritualist" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.spiritualist;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }
        if (spell.medium !== null) {
            const clSpell = new ClassSpell();
            clSpell.class = await em.getRepository(Class).findOneOrFail({ name: "Medium" });
            clSpell.spell = row;
            clSpell.spellLevel = spell.medium;
            em.persist(clSpell);
            row.classes.add(clSpell);
        }

        if (spell.domain) {
            for (const entry of spell.domain.split(",")) {
                const [name, level] = parseEntry(entry);
                const dom = await em.getRepository(Domain).findOne({ name });

                if (dom) {
                    const domSpell = new DomainSpell();
                    domSpell.domain = dom;
                    domSpell.spell = row;
                    domSpell.spellLevel = level;
                    em.persist(domSpell);
                    row.domains.add(domSpell);
                } else {
                    const subsom = await em.getRepository(Subdomain).findOne({ name });

                    if (subsom) {
                        const subdomSpell = new SubdomainSpell();
                        subdomSpell.subdomain = subsom;
                        subdomSpell.spell = row;
                        subdomSpell.spellLevel = level;
                        em.persist(subdomSpell);
                        row.subdomains.add(subdomSpell);
                    } else {
                        console.log(`"${name}" can't be found in either domains or subdomains for spell "${row.name}"`);
                    }
                }
            }
        }

        if (spell.patron) {
            for (const entry of spell.patron.split(",")) {
                const [name, level] = parseEntry(entry);
                let patron = await em.getRepository(Patron).findOne({ name });

                if (!patron) {
                    patron = new Patron();
                    patron.name = name;
                    console.log(`\tAdded patron ${name}`);
                    await em.persist(patron).flush();
                }

                const patronSpell = new PatronSpell();
                patronSpell.patron = patron;
                patronSpell.spell = row;
                patronSpell.classLevel = level;
                em.persist(patronSpell);
                row.patrons.add(patronSpell);
            }
        }

        if (spell.bloodline) {
            for (const entry of spell.bloodline.split(",")) {
                const [name, level] = parseEntry(entry);
                let bloodline = await em.getRepository(Bloodline).findOne({ name });

                if (!bloodline) {
                    bloodline = new Bloodline();
                    bloodline.name = name;
                    console.log(`\tAdded bloodline ${name}`);
                    await em.persist(bloodline).flush();
                }

                const bloodSpell = new BloodlineSpell();
                bloodSpell.bloodline = bloodline;
                bloodSpell.spell = row;
                bloodSpell.classLevel = level;
                em.persist(bloodSpell);
                row.bloodlines.add(bloodSpell);
            }
        }

        console.log(`\tAdded spell ${spell.name}`);
        await em.persist(row).flush();
    }
}
console.log("...Done!");

console.log("Seeding mysteries...");
{
    const data = JSON.parse(await Deno.readTextFile("./data/OracleMysteries.json")) as MysteryEntry[];

    await Promise.all(data.map(async entry => {
        const mystery = new Mystery();
        mystery.name = entry.Name;
        (await em.getRepository(Deity).find({name: {$in: entry.Deities}})).forEach(deity => mystery.deities.add(deity));

        if (entry.Spells["Level 2"] instanceof Array) {
            const [name, note] = entry.Spells["Level 2"];
            const spell = new MysterySpell();
            spell.classLevel = 2;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 2;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 2"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 4"] instanceof Array) {
            const [name, note] = entry.Spells["Level 4"];
            const spell = new MysterySpell();
            spell.classLevel = 4;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 4;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 4"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 6"] instanceof Array) {
            const [name, note] = entry.Spells["Level 6"];
            const spell = new MysterySpell();
            spell.classLevel = 6;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 6;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 6"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 8"] instanceof Array) {
            const [name, note] = entry.Spells["Level 8"];
            const spell = new MysterySpell();
            spell.classLevel = 8;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 8;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 8"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 10"] instanceof Array) {
            const [name, note] = entry.Spells["Level 10"];
            const spell = new MysterySpell();
            spell.classLevel = 10;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 10;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 10"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 12"] instanceof Array) {
            const [name, note] = entry.Spells["Level 12"];
            const spell = new MysterySpell();
            spell.classLevel = 12;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 12;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 12"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 14"] instanceof Array) {
            const [name, note] = entry.Spells["Level 14"];
            const spell = new MysterySpell();
            spell.classLevel = 14;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 14;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 14"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 16"] instanceof Array) {
            const [name, note] = entry.Spells["Level 16"];
            const spell = new MysterySpell();
            spell.classLevel = 16;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 16;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 16"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        if (entry.Spells["Level 18"] instanceof Array) {
            const [name, note] = entry.Spells["Level 18"];
            const spell = new MysterySpell();
            spell.classLevel = 18;
            spell.note = note;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: name} });
            em.persist(spell);
            mystery.spells.add(spell);
        } else {
            const spell = new MysterySpell();
            spell.classLevel = 18;
            spell.note = null;
            spell.spell = await em.getRepository(Spell).findOneOrFail({ name: {$ilike: entry.Spells["Level 18"]} });
            em.persist(spell);
            mystery.spells.add(spell);
        }

        em.persist(mystery);
    }));

    await em.flush();
}
console.log("...Done!");

await db.orm.close();
Deno.exit(0);
