import { Roles } from "projects/core/src/lib/authorization/models/roles";

export interface User {
	uid: string | undefined | null;
	email: string | null | undefined;
	name: string | null | undefined;
	photoURL: string | null | undefined;
	role?: Roles | null;
	isUserAuth?: boolean;
	isUserPresentDB?: boolean;
	checkBase?: boolean;
}
