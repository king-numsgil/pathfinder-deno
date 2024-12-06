import { type Ref } from "@mikro-orm/core";
export declare class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: Ref<string>;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    encryptPassword(password: string): void;
    verifyPassword(password: string): Promise<boolean>;
}
