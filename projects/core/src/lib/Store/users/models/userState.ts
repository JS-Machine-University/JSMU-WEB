import { EntityWrapper } from "../../../models/entityWrapper";
import { User } from "../../../authorization/models/user";

export interface UserState {
	user: EntityWrapper<User>;
}
