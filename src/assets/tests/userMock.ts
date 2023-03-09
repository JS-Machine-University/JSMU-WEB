import { User } from "../../../projects/core/src/lib/authorization/models/user";
import { Roles } from "../../../projects/core/src/lib/authorization/models/roles";

export const user: User = {
	uid: "1",
	email: "",
	name: "",
	photoURL: "",
	isVerified: false,
	role: Roles.MENTEE
};
