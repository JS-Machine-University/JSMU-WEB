import { EntityStatus } from "./EntityStatus";
import { User } from "../../../authorization/models/user";

export interface UserState {
	status: EntityStatus;
	value: User;
	error: string | null;
}
