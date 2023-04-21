import { createAction, props } from "@ngrx/store";
import { Talk } from "@jsmu/core";

export enum TalksActions {
	LOAD_TALKS = "[Talks Page] load talks",
	LOAD_TALKS_SUCCESS = "[Talks Page] load talks success",
	LOAD_TALKS_FAILURE = "[Talks Page] load talks failure"
}

export const loadTalks = createAction(TalksActions.LOAD_TALKS);
export const loadTalksSuccess = createAction(
	TalksActions.LOAD_TALKS_SUCCESS,
	props<{ talks: Talk[] }>()
);
export const loadTalksFailure = createAction(
	TalksActions.LOAD_TALKS_FAILURE,
	props<{ error: string }>()
);
