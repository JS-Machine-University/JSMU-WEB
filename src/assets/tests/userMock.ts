import { User } from "../../../projects/core/src/lib/authorization/models/user";
import { Roles } from "../../../projects/core/src/lib/authorization/models/roles";

export const fakeUser: User = {
	uid: "1",
	email: "",
	name: "",
	photoURL: "",
	role: Roles.MENTEE
};
