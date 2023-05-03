import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	status: Status | "null";
	result: Result | "null";
	comment?: string;
	experts: number[] | "null";
	id?: string | "null";
	lessonId: number;
	menteeId: number;
	conductedExpert: number | "null";
	resultDate: number | "null";
	requestDate: number | "null";
	takeDate: number | "null";
}
