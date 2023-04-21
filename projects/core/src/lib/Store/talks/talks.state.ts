import { Talk } from "@jsmu/core";
import { EntityWrapper } from "../../models/entityWrapper";
import { EntityStatus } from "../models/entityStatus";

export interface TalksState {
	talks: EntityWrapper<Talk[]>;
}

export const initialState: TalksState = {
	talks: {
		status: EntityStatus.INIT,
		value: [],
		error: null
	}
};
