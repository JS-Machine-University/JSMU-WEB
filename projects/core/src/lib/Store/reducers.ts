import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../../../../src/environments/environment";
import { User } from "../authorization/models/user";
import { userNode, userReducer } from "./users/user.reducer";

export interface State {
	[userNode]: User;
}

export const reducers: ActionReducerMap<State> = {
	[userNode]: userReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
