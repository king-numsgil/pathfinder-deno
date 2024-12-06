import { Collection } from "@mikro-orm/core";
import { FeatType } from "@/api/pathfinder/entities/types.ts";
export declare class Feat {
    id: string;
    name: string;
    type: FeatType[];
    description: string;
    benefit: string;
    normal: string | null;
    special: string | null;
    raceName: string | null;
    note: string | null;
    goal: string | null;
    completionBenefit: string | null;
    source: string;
    multiples: boolean;
    requiredBy: Collection<FeatPrerequisite_Feat, object>;
    requisiteFeats: Collection<FeatPrerequisite_Feat, object>;
    requisiteSkills: Collection<FeatPrerequisite_Skill, object>;
    requisiteStats: Collection<FeatPrerequisite_Stat, object>;
    requisiteSpecial: Collection<FeatPrerequisite_Special, object>;
}
export declare class FeatPrerequisite_Feat {
    id: string;
    parent: Feat;
    feat: Feat;
    note: string | null;
}
export declare class FeatPrerequisite_Skill {
    id: string;
    parent: Feat;
    name: string;
    rank: number;
}
export declare class FeatPrerequisite_Stat {
    id: string;
    parent: Feat;
    name: string;
    value: number;
}
export declare class FeatPrerequisite_Special {
    id: string;
    parent: Feat;
    condition: string;
}
