import { createFeatureSelector, createSelector } from "@ngrx/store";
import { users } from "./user.reducer";
import { User } from "../../authorization/models/user";
import { Roles } from "../../authorization/models/roles";

export const selectUserFeature = createFeatureSelector<User>(users);

export const selectUid = createSelector(
	selectUserFeature,
	(state): string | undefined => state.uid
);

export const selectName = createSelector(
	selectUserFeature,
	(state): string | null | undefined => state.name
);

export const selectRole = createSelector(
	selectUserFeature,
	(state): Roles | undefined => state.role
);

export const selectVerified = createSelector(
	selectUserFeature,
	(state): boolean | undefined => state.isVerified
);

export const selectMail = createSelector(
	selectUserFeature,
	(state): string | null | undefined => state.email
);

export const selectPhoto = createSelector(
	selectUserFeature,
	(state): string | null | undefined => state.photoURL
);
