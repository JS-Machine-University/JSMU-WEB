import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	lessonId: number;
	status: Status;
	result: Result;
	comment?: string;
	experts: number[];
	menteeId: number;
	conductedExpert: number;
	resultDate: number;
	requestDate: number;
	takeDate: number;
}
