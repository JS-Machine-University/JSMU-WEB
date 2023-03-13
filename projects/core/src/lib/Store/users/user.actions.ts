import { createAction, props } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import { Roles } from "../../authorization/models/roles";

export enum userActionsType {
	setUser = "[USER] setUser",
	setName = "[USER] setName",
	setPhoto = "[USER] setPhoto",
	setRole = "[USER] setRole",
	setVerified = "[USER] setVerified",
	setMail = "[USER] setMail",
	setUid = "[USER] setUid",
	loadUser = "[USER] loadUser",
	loadUserSuccess = "[USER] loadUserSuccess",
	LoadUserFailure = "[USER] loadUserFailure",
	saveUser = "[USER] saveUser",
	saveUserSuccess = "[USER] saveUserSuccess",
	saveUserFailure = "[USER] saveUserFailure"
}

export const setUser = createAction(userActionsType.setUser, props<{ user: User }>());

export const setUid = createAction(userActionsType.setUid, props<{ uid: string }>());

export const setName = createAction(userActionsType.setName, props<{ name: string }>());

export const setMail = createAction(userActionsType.setMail, props<{ email: string }>());

export const setPhoto = createAction(userActionsType.setPhoto, props<{ photoUrl: string }>());

export const setVerified = createAction(
	userActionsType.setVerified,
	props<{ isVerified: boolean }>()
);

export const setRole = createAction(userActionsType.setRole, props<{ role: Roles }>());

export const loadUser = createAction(userActionsType.loadUser, props<{ uid: string }>());

export const loadUserSuccess = createAction(
	userActionsType.loadUserSuccess,
	props<{ user: User }>()
);

export const loadUserFailure = createAction(userActionsType.LoadUserFailure);

export const saveUser = createAction(userActionsType.saveUser, props<{ user: User }>());

export const saveUserSuccess = createAction(userActionsType.saveUserSuccess);

export const saveUserFailure = createAction(userActionsType.saveUserFailure);
