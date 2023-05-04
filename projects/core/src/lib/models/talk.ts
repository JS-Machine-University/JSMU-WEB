import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	lessonId: number;
	status: Status | "null";
	result: Result | "null";
	comment?: string;
	experts: number[] | "null";
	menteeId: string | undefined;
	conductedExpert: number | "null";
	resultDate: number | "null";
	requestDate: number | "null";
	takeDate: number | "null";
}
