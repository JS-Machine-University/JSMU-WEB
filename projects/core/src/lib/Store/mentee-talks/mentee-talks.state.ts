import { EntityWrapper } from "../../models/entityWrapper";
import { Talk } from "@jsmu/core";
import { EntityStatus } from "../models/entityStatus";

export interface MenteeTalksState {
	talks: EntityWrapper<Talk[]>;
}

export const initialState: MenteeTalksState = {
	talks: {
		status: EntityStatus.INIT,
		value: [],
		error: null
	}
};
