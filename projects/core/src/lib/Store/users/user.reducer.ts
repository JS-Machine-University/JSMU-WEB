import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";
import { EntityStatus } from "./models/entityStatus";
import { UserState } from "./models/userState";

export const users = "users";

const initialState: UserState = {
	user: {
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
	}
};

export const userReducer = createReducer(
	initialState,
	on(userActions.loadUser, (state): UserState => {
		return {
			...state,
			user: {
				...state.user,
				status: EntityStatus.PENDING
			}
		};
	}),
	on(userActions.loadUserSuccess, (state, { user }): UserState => {
		return {
			...state,
			user: {
				...state.user,
				status: EntityStatus.SUCCESS,
				value: user
					? user
					: {
							...state.user.value,
							checkBase: true
					  }
			}
		};
	}),
	on(userActions.authUser, (state): UserState => {
		return {
			...state,
			user: {
				...state.user,
				status: EntityStatus.PENDING
			}
		};
	}),
	on(userActions.authUserSuccess, (state, { user }): UserState => {
		return {
			...state,
			user: {
				...state.user,
				value: user,
				status: EntityStatus.SUCCESS
			}
		};
	}),
	on(userActions.setCheckBase, (state): UserState => {
		return {
			...state,
			user: {
				...state.user,
				value: { ...state.user.value, checkBase: true }
			}
		};
	}),
	on(userActions.signOut, (): UserState => {
		return initialState;
	})
);
