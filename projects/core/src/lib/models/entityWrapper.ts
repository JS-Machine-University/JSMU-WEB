import { EntityStatus } from "../Store/users/models/entityStatus";

export interface EntityWrapper<T> {
	status: EntityStatus;
	value: T;
	error: string | null;
}
