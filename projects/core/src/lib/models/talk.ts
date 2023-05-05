import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	lessonId: number;
	status: Status | "null";
	result: Result | "null";
	comment?: string;
	experts: number[] | "null";
	id?: string | "null";
	menteeId: string | undefined | number;
	conductedExpert: number | "null";
	resultDate: number | "null";
	requestDate: number | "null";
	takeDate: number | "null";
}
