import { User } from "../../authorization/models/user";
import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";

export const users = "users";

const initialState: User = {
	uid: null,
	role: null,
	name: null,
	email: null,
	isVerified: false,
	photoURL: null
};

export const userReducer = createReducer(
	initialState,
	on(userActions.loadUserSuccess, (state, { user }) => {
		return user;
	})
);
