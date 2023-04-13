import { Talk } from "@jsmu/core";

export interface TalksState {
	talks: Talk[];
}

export const initialState: TalksState = {
	talks: []
};
