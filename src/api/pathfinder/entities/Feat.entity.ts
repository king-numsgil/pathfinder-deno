import { Collection, Entity, Enum, Index, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { ulid } from "npm:ulid";

import { FeatType } from "@/api/pathfinder/entities/types.ts";

@Entity()
export class Feat {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Index()
    name!: string;

    @Enum({ items: () => FeatType, nativeEnumName: "feat_type", default: [] })
    @Index()
    type: FeatType[] = [];

    @Property()
    description!: string;

    @Property({ columnType: "text" })
    benefit!: string;

    @Property({ nullable: true })
    normal: string | null = null;

    @Property({ nullable: true })
    special: string | null = null;

    @Property({ nullable: true })
    raceName: string | null = null;

    @Property({ nullable: true })
    note: string | null = null;

    @Property({ nullable: true })
    goal: string | null = null;

    @Property({ nullable: true })
    completionBenefit: string | null = null;

    @Property()
    source!: string;

    @Property()
    multiples: boolean = false;

    @OneToMany(() => FeatPrerequisite_Feat, (req) => req.feat)
    requiredBy = new Collection<FeatPrerequisite_Feat>(this);

    @OneToMany(() => FeatPrerequisite_Feat, (req) => req.parent)
    requisiteFeats = new Collection<FeatPrerequisite_Feat>(this);

    @OneToMany(() => FeatPrerequisite_Skill, (req) => req.parent)
    requisiteSkills = new Collection<FeatPrerequisite_Skill>(this);

    @OneToMany(() => FeatPrerequisite_Stat, (req) => req.parent)
    requisiteStats = new Collection<FeatPrerequisite_Stat>(this);

    @OneToMany(() => FeatPrerequisite_Special, (req) => req.parent)
    requisiteSpecial = new Collection<FeatPrerequisite_Special>(this);
}

@Entity()
export class FeatPrerequisite_Feat {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Feat")
    parent!: Feat;

    @ManyToOne("Feat")
    feat!: Feat;

    @Property({ nullable: true })
    note: string | null = null;
}

@Entity()
export class FeatPrerequisite_Skill {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Feat")
    parent!: Feat;

    @Property()
    name!: string;

    @Property()
    rank!: number;
}

@Entity()
export class FeatPrerequisite_Stat {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Feat")
    parent!: Feat;

    @Property()
    name!: string;

    @Property()
    value!: number;
}

@Entity()
export class FeatPrerequisite_Special {
    @PrimaryKey()
    id: string = ulid();

    @ManyToOne("Feat")
    parent!: Feat;

    @Property()
    condition!: string;
}
