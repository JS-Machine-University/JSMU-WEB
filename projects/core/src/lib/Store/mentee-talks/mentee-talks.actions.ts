import { createAction, props } from "@ngrx/store";
import { Talk } from "@jsmu/core";

export enum MenteeTalksActions {
	MENTEE_TALKS_LOAD = "[Mentee Talks] talks load",
	MENTEE_TALKS_LOAD_SUCCESS = "[Mentee Talks] talks load success",
	MENTEE_TALKS_LOAD_FAILURE = "[Mentee Talks] talks load failure",
	MENTEE_TALKS_UPDATE = "[Mentee Talks] talks update",
	MENTEE_TALKS_UPDATE_SUCCESS = "[Mentee Talks] talks update success",
	MENTEE_TALKS_UPDATE_FAILURE = "[Mentee Talks] talks update failure"
}

export const loadMenteeTalks = createAction(MenteeTalksActions.MENTEE_TALKS_LOAD);
export const loadMenteeTalksSuccess = createAction(
	MenteeTalksActions.MENTEE_TALKS_LOAD_SUCCESS,
	props<{ talks: Talk[] }>()
);
export const loadMenteeTalksFailure = createAction(
	MenteeTalksActions.MENTEE_TALKS_LOAD_FAILURE,
	props<{ error: string }>()
);

export const updateMenteeTalks = createAction(
	MenteeTalksActions.MENTEE_TALKS_UPDATE,
	props<{ talkId: number; updatedTalk: Talk }>()
);
export const updateMenteeTalksSuccess = createAction(
	MenteeTalksActions.MENTEE_TALKS_UPDATE_SUCCESS,
	props<{ updatedTalk: Talk }>()
);
export const updateMenteeTalksFailure = createAction(
	MenteeTalksActions.MENTEE_TALKS_UPDATE_FAILURE,
	props<{ error: string }>()
);
