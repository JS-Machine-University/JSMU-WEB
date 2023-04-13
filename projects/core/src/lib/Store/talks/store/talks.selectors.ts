import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TalksState } from "./talks.state";

export const selectTalksState = createFeatureSelector<TalksState>("talks");
export const selectTalks = createSelector(selectTalksState, (state) => state.talks);
