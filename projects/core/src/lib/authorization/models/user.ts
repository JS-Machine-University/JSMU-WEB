import { Roles } from "projects/core/src/lib/authorization/models/roles";

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    role?: Roles
 }
