import { Result } from "./result";

export interface Talk {
	lessonId: number;
	status: Result;
	experts: string[];
	menteeId: number;
	submitDate: number;
	resultDate: number;
}
