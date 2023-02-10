import { User } from "./user";

export interface UserCheck {
	user: User | undefined;
	isPresent: boolean;
}
