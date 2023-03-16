import { Roles } from "projects/core/src/lib/authorization/models/roles";

export interface User {
	uid: string | undefined | null;
	email: string | null | undefined;
	name: string | null | undefined;
	photoURL: string | null | undefined;
	isVerified: boolean | undefined;
	role?: Roles | null;
}
