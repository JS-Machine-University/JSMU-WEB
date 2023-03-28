import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";
import { User } from "../../authorization/models/user";

export const users = "users";

const initialState: User = {
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
	on(userActions.loadUserSuccess, (state, { user }): User => {
		return user ? user : state;
	}),
	on(userActions.authUserSuccess, (state, { user }): User => {
		return user ? user : state;
	}),
	on(userActions.saveUserSuccess, (state, { isUserPresentDB }): User => {
		return { ...state, isUserPresentDB: isUserPresentDB };
	}),
	on(userActions.setCheckBase, (state): User => {
		return { ...state, checkBase: true };
	}),
	on(userActions.signOut, (): User => {
		return initialState;
	})
);
