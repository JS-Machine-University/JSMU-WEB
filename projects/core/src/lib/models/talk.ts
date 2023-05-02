import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	lessonId: number;
	status: Status | null | "null";
	result: Result | null | "null";
	comment?: string;
	experts: any[];
	menteeId: string | null | undefined;
	conductedExpert: number | null | "null";
	resultDate: number | null | "null";
	requestDate: number | null | "null";
	takeDate: number | null | "null";
}
