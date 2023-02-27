import { User } from "../../authorization/models/user";
import { UserActions, userActionsType } from "./user.actions";

export const userNode = "user";

const initialState: User = {
	uid: undefined,
	role: undefined,
	name: undefined,
	email: undefined,
	isVerified: undefined,
	photoURL: undefined
};

export const userReducer = (state = initialState, action: UserActions) => {
	switch (action.type) {
		case userActionsType.setUser:
			return action.payload.user;
		case userActionsType.setUid:
			return {
				...state,
				uid: action.payload.uid
			};
		case userActionsType.setName:
			return {
				...state,
				name: action.payload.name
			};
		case userActionsType.setPhoto:
			return {
				...state,
				photoURL: action.payload.photoUrl
			};
		case userActionsType.setMail:
			return {
				...state,
				email: action.payload.email
			};
		case userActionsType.setRole:
			return {
				...state,
				role: action.payload.role
			};
		case userActionsType.setVerified:
			return {
				...state,
				isVerified: action.payload.isVerified
			};
		default:
			return state;
	}
};
