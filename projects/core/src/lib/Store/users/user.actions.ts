import { Action } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import { Roles } from "../../authorization/models/roles";

export enum userActionsType {
	setUser = "[USER] setUser",
	setName = "[USER] setName",
	setPhoto = "[USER] setPhoto",
	setRole = "[USER] setRole",
	setVerified = "[USER] setVerified",
	setMail = "[USER] setMail",
	setUid = "[USER] setUid"
}

export class UserSetUserAction implements Action {
	readonly type = userActionsType.setUser;
	constructor(
		public payload: {
			user: User;
		}
	) {}
}

export class UserSetUidAction implements Action {
	readonly type = userActionsType.setUid;
	constructor(
		public payload: {
			uid: string;
		}
	) {}
}

export class UserSetNameAction implements Action {
	readonly type = userActionsType.setName;
	constructor(
		public payload: {
			name: string;
		}
	) {}
}

export class UserSetMailAction implements Action {
	readonly type = userActionsType.setMail;
	constructor(
		public payload: {
			email: string;
		}
	) {}
}

export class UserSetPhotoAction implements Action {
	readonly type = userActionsType.setPhoto;
	constructor(
		public payload: {
			photoUrl: string;
		}
	) {}
}

export class UserSetVerifiedAction implements Action {
	readonly type = userActionsType.setVerified;
	constructor(
		public payload: {
			isVerified: boolean;
		}
	) {}
}

export class UserSetRoleAction implements Action {
	readonly type = userActionsType.setRole;
	constructor(
		public payload: {
			role: Roles;
		}
	) {}
}

export type UserActions =
	| UserSetUserAction
	| UserSetUidAction
	| UserSetNameAction
	| UserSetMailAction
	| UserSetPhotoAction
	| UserSetRoleAction
	| UserSetVerifiedAction;
