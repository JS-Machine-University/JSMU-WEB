import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	status: Status;
	result: Result;
	comment?: string;
	experts: number[];
	id: number;
	lessonId: number;
	menteeId: string;
	conductedExpert: number;
	resultDate: number;
	requestDate: number;
	takeDate: number;
}
