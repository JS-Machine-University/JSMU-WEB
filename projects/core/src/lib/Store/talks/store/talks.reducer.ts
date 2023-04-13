import { createReducer, on } from "@ngrx/store";
import { TalksState, initialState } from "./talks.state";
import * as talksActions from "./talks.actions";

export const talks = "talks";
export const talksReducer = createReducer(
	initialState,
	on(talksActions.loadTalksSuccess, (state, { talks }): TalksState => {
		return {
			...state,
			talks
		};
	})
);
