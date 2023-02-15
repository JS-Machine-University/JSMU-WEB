import { Result } from "./result";

export interface Talk {
	lessonId: string;
	result: Result;
	inProgress: boolean;
	expertId: string;
	menteeId: string;
	submitDate: Date;
	resultDate: Date;
}
