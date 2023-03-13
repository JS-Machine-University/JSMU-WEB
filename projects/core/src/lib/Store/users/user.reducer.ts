import { User } from "../../authorization/models/user";
import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";

export const users = "users";

const initialState: User = {
	uid: undefined,
	role: undefined,
	name: undefined,
	email: undefined,
	isVerified: undefined,
	photoURL: undefined
};

export const userReducer = createReducer(
	initialState,
	on(userActions.setUser, (state, { user }) => {
		return user;
	}),
	on(userActions.setUid, (state, { uid }) => ({ ...state, uid: uid })),
	on(userActions.setName, (state, { name }) => ({ ...state, name: name })),
	on(userActions.setMail, (state, { email }) => ({ ...state, email: email })),
	on(userActions.setVerified, (state, { isVerified }) => ({ ...state, isVerified: isVerified })),
	on(userActions.setRole, (state, { role }) => ({ ...state, role: role })),
	on(userActions.setPhoto, (state, { photoUrl }) => ({ ...state, photoURL: photoUrl })),
	on(userActions.loadUserSuccess, (state, { user }) => {
		return user;
	})
);
