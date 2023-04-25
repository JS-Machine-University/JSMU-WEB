import { Result } from "./result";
import { Status } from "./status";

export interface Talk {
	lessonId: string;
	result: Result;
	inProgress: boolean;
	expertId: string;
	menteeId: string;
	submitDate: Date;
	resultDate: Date;
}
