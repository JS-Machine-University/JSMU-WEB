import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MenteeTalksState } from "./mentee-talks.state";

export const menteeTalks = "mentee talks";

export const selectMenteeTalksState = createFeatureSelector<MenteeTalksState>(menteeTalks);
export const selectMenteeTalks = createSelector(
	selectMenteeTalksState,
	(state) => state.talks.value
);
