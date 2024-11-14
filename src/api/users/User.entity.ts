import { Entity, PrimaryKey, Property, type Ref, Unique } from "@mikro-orm/core";
import { hash, verify } from "@denorg/scrypt";
import { ulid } from "@std/ulid";

@Entity()
export class User {
    @PrimaryKey()
    id: string = ulid();

    @Property()
    @Unique()
    email!: string;

    @Property()
    firstName!: string;

    @Property()
    lastName!: string;

    @Property({ lazy: true, ref: true })
    password!: Ref<string>;

    @Property({ default: false })
    isAdmin: boolean = false;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    public encryptPassword(password: string) {
        this.password.set(hash(password));
    }

    public async verifyPassword(password: string) {
        return verify(password, await this.password.load() ?? "");
    }
}
