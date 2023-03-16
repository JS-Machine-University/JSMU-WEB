import { createFeatureSelector } from "@ngrx/store";
import { users } from "./user.reducer";
import { User } from "../../authorization/models/user";

export const selectUserFeature = createFeatureSelector<User>(users);
