import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";
import { UserState } from "./models/UserState";
import { EntityStatus } from "./models/EntityStatus";

export const users = "users";

const initialState: UserState = {
	status: EntityStatus.INIT,
	value: {
		uid: null,
		role: null,
		name: null,
		email: null,
		isUserAuth: false,
		isUserPresentDB: false,
		checkBase: false,
		photoURL: null
	},
	error: null
};

export const userReducer = createReducer(
	initialState,
	on(userActions.loadUser, (state): UserState => {
		return {
			...state,
			status: EntityStatus.PENDING
		};
	}),
	on(userActions.loadUserSuccess, (state, { user }): UserState => {
		return {
			...state,
			status: EntityStatus.SUCCESS,
			value: user
				? user
				: {
						...state.value,
						checkBase: true
				  }
		};
	}),
	on(userActions.authUser, (state): UserState => {
		return {
			...state,
			status: EntityStatus.PENDING
		};
	}),
	on(userActions.authUserSuccess, (state, { user }): UserState => {
		return {
			...state,
			value: user,
			status: EntityStatus.SUCCESS
		};
	}),
	on(userActions.authUserFailure, (state, { error }): UserState => {
		console.log(error);
		return state;
	}),
	on(userActions.setCheckBase, (state): UserState => {
		return {
			...state,
			value: { ...state.value, checkBase: true }
		};
	}),
	on(userActions.signOut, (): UserState => {
		return initialState;
	})
);
