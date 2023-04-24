import { createReducer, on } from "@ngrx/store";
import { initialState, TalksState } from "./talks.state";
import * as talksActions from "./talks.actions";
import { EntityStatus } from "../users/models/entityStatus";

export const talksReducer = createReducer(
	initialState,
	on(talksActions.loadTalks, (state): TalksState => {
		return {
			...state,
			talks: {
				...state.talks,
				status: EntityStatus.PENDING
			}
		};
	}),
	on(talksActions.loadTalksSuccess, (state, { talks }): TalksState => {
		return {
			...state,
			talks: {
				...state.talks,
				status: EntityStatus.SUCCESS,
				value: talks
			}
		};
	})
);
