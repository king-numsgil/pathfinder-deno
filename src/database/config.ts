import { defineConfig } from "@mikro-orm/better-sqlite";

import { Bloodline, BloodlineSpell } from "@/api/pathfinder/entities/Bloodline.entity.ts";
import { Class, ClassSpell } from "@/api/pathfinder/entities/Class.entity.ts";
import { Deity } from "@/api/pathfinder/entities/Deity.entity.ts";
import { Domain, DomainSpell, Subdomain, SubdomainSpell } from "@/api/pathfinder/entities/Domain.entity.ts";
import { Mystery, MysterySpell } from "@/api/pathfinder/entities/Mystery.entity.ts";
import { Patron, PatronSpell } from "@/api/pathfinder/entities/Patron.entity.ts";
import { School, Subschool } from "@/api/pathfinder/entities/School.entity.ts";
import { Spell } from "@/api/pathfinder/entities/Spell.entity.ts";
import { User } from "@/api/user/User.entity.ts";
import {
    Feat,
    FeatPrerequisite_Feat,
    FeatPrerequisite_Skill,
    FeatPrerequisite_Special,
    FeatPrerequisite_Stat,
} from "@/api/pathfinder/entities/Feat.entity.ts";

export default defineConfig({
    dbName: "pathfinder.db",
    forceUndefined: true,

    entities: [
        Bloodline,
        BloodlineSpell,
        Class,
        ClassSpell,
        Deity,
        Domain,
        DomainSpell,
        Subdomain,
        SubdomainSpell,
        Feat,
        FeatPrerequisite_Feat,
        FeatPrerequisite_Skill,
        FeatPrerequisite_Special,
        FeatPrerequisite_Stat,
        Mystery,
        MysterySpell,
        Patron,
        PatronSpell,
        School,
        Subschool,
        Spell,
        User,
    ],
});
