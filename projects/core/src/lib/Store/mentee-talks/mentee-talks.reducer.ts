import { createReducer, on } from "@ngrx/store";
import { initialState, MenteeTalksState } from "./mentee-talks.state";
import { EntityStatus } from "../users/models/entityStatus";
import * as menteeTalksActions from "./mentee-talks.actions";

export const menteeTalksReducer = createReducer(
	initialState,
	on(menteeTalksActions.loadMenteeTalks, (state): MenteeTalksState => {
		return {
			...state,
			talks: {
				...state.talks,
				status: EntityStatus.INIT
			}
		};
	}),
	on(menteeTalksActions.loadMenteeTalksSuccess, (state, { talks }): MenteeTalksState => {
		return {
			...state,
			talks: {
				...state.talks,
				status: EntityStatus.SUCCESS,
				value: talks
			}
		};
	}),

	on(menteeTalksActions.updateMenteeTalks, (state): MenteeTalksState => {
		return {
			...state,
			talks: {
				...state.talks,
				status: EntityStatus.INIT
			}
		};
	}),
	on(menteeTalksActions.updateMenteeTalksSuccess, (state, { updatedTalk }): MenteeTalksState => {
		const updatedTalksArray = state.talks.value.map((talk) => {
			return talk.id === updatedTalk.id ? updatedTalk : talk;
		});
		return {
			...state,
			talks: {
				...state.talks,
				value: updatedTalksArray,
				status: EntityStatus.SUCCESS
			}
		};
	})
);
