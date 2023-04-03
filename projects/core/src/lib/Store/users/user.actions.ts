import { createAction, props } from "@ngrx/store";
import { User } from "../../authorization/models/user";

export enum userActionsType {
	loadUser = "[USER] loadUser",
	loadUserSuccess = "[USER] loadUserSuccess",
	LoadUserFailure = "[USER] loadUserFailure",
	setCheckBase = "[USER] setCheckBase",
	saveUser = "[USER] saveUser",
	saveUserSuccess = "[USER] saveUserSuccess",
	saveUserFailure = "[USER] saveUserFailure",
	authUser = "[USER] authUser",
	authUserSuccess = "[USER] authUserSuccess",
	authUserFailure = "[USER] authUserFailure",
	signOut = "[USER] sigOut"
}

export const loadUser = createAction(userActionsType.loadUser, props<{ uid: string }>());

export const loadUserSuccess = createAction(
	userActionsType.loadUserSuccess,
	props<{ user: User }>()
);

export const loadUserFailure = createAction(userActionsType.LoadUserFailure);

export const saveUser = createAction(userActionsType.saveUser, props<{ user: User }>());

export const saveUserSuccess = createAction(
	userActionsType.saveUserSuccess,
	props<{ isUserPresentDB: boolean }>()
);

export const saveUserFailure = createAction(userActionsType.saveUserFailure);

export const authUser = createAction(userActionsType.authUser);

export const authUserSuccess = createAction(
	userActionsType.authUserSuccess,
	props<{ user: User }>()
);

export const authUserFailure = createAction(
	userActionsType.authUserFailure,
	props<{ error: any }>()
);

export const setCheckBase = createAction(userActionsType.setCheckBase);

export const signOut = createAction(userActionsType.signOut);
