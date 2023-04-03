import { createFeatureSelector } from "@ngrx/store";
import { users } from "./user.reducer";
import { UserState } from "./models/userState";

export const selectUserFeature = createFeatureSelector<UserState>(users);
