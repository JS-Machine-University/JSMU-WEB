import { createFeatureSelector, createSelector } from "@ngrx/store";
import { users, UserState } from "./user.reducer";

export const selectUserFeature = createFeatureSelector<UserState>(users);

export const selectUserAuth = createSelector(
	selectUserFeature,
	(state): boolean => state.isUserAuth
);

export const selectUserPresentDB = createSelector(
	selectUserFeature,
	(state): boolean => state.isUserPresentDB
);

export const selectBaseChecked = createSelector(
	selectUserFeature,
	(state): boolean => state.checkBase!
);
