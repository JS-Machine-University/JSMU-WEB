import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";
import { Roles } from "../../authorization/models/roles";

export const users = "users";

export interface UserState {
	uid: string | null;
	role: Roles | null;
	name: string | null;
	email: string | null;
	isUserAuth: boolean;
	isUserPresentDB: boolean;
	checkBase?: boolean;
	photoURL: string | null;
}

const initialState: UserState = {
	uid: null,
	role: null,
	name: null,
	email: null,
	isUserAuth: false,
	isUserPresentDB: false,
	checkBase: false,
	photoURL: null
};

export const userReducer = createReducer(
	initialState,
	on(userActions.loadUserSuccess, (state, { user }): UserState => {
		return user ? user : state;
	}),
	on(userActions.authUserSuccess, (state, { user }): UserState => {
		return user ? user : state;
	}),
	on(userActions.saveUserSuccess, (state, { isUserPresentDB }): UserState => {
		return { ...state, isUserPresentDB: isUserPresentDB };
	}),
	on(userActions.setCheckBase, (state): UserState => {
		return { ...state, checkBase: true };
	}),
	on(userActions.signOut, (): UserState => {
		return initialState;
	})
);
