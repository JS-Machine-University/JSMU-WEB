import { createFeatureSelector } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import { users } from "./user.reducer";

export const selectUserFeature = createFeatureSelector<User>(users);
