import { createAction, props } from "@ngrx/store";
import { User } from "../../authorization/models/user";

export enum userActionsType {
	loadUser = "[USER] loadUser",
	loadUserSuccess = "[USER] loadUserSuccess",
	LoadUserFailure = "[USER] loadUserFailure",
	saveUser = "[USER] saveUser",
	saveUserSuccess = "[USER] saveUserSuccess",
	saveUserFailure = "[USER] saveUserFailure"
}

export const loadUser = createAction(userActionsType.loadUser, props<{ uid: string }>());

export const loadUserSuccess = createAction(
	userActionsType.loadUserSuccess,
	props<{ user: User }>()
);

export const loadUserFailure = createAction(userActionsType.LoadUserFailure);

export const saveUser = createAction(userActionsType.saveUser, props<{ user: User }>());

export const saveUserSuccess = createAction(userActionsType.saveUserSuccess);

export const saveUserFailure = createAction(userActionsType.saveUserFailure);
