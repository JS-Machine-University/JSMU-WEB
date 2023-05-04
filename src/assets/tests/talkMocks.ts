import { Result, Talk } from "@jsmu/core";
import { Status } from "../../../projects/core/src/lib/models/status";

export const talkMock: Talk = {
	lessonId: 1,
	menteeId: "1",
	experts: [1, 2, 3],
	status: Status.Taken,
	result: Result.WellDone,
	resultDate: +new Date(new Date().getTime()),
	conductedExpert: 1,
	requestDate: +new Date(new Date().getTime()),
	takeDate: +new Date(new Date().getTime()),
	comment: "Some comment"
};

export const talksMock: Talk[] = [
	{
		lessonId: 1,
		menteeId: "1",
		experts: [1, 2, 3],
		status: Status.Taken,
		result: Result.WellDone,
		resultDate: +new Date(new Date().getTime()),
		conductedExpert: 1,
		requestDate: +new Date(new Date().getTime()),
		takeDate: +new Date(new Date().getTime()),
		comment: "Some comment"
	},
	{
		lessonId: 1,
		menteeId: "1",
		experts: [1, 2, 3],
		status: Status.Taken,
		result: Result.WellDone,
		resultDate: +new Date(new Date().getTime() - 100000000),
		conductedExpert: 1,
		requestDate: +new Date(new Date().getTime()),
		takeDate: +new Date(new Date().getTime()),
		comment: "Some comment"
	}
];

export const expectedTalksMock: Talk[] = [
	{
		lessonId: 1,
		menteeId: "1",
		experts: [1, 2, 3],
		status: Status.Taken,
		result: Result.WellDone,
		resultDate: +new Date(new Date().getTime() - 100000000),
		conductedExpert: 1,
		requestDate: +new Date(new Date().getTime()),
		takeDate: +new Date(new Date().getTime()),
		comment: "Some comment"
	},
	{
		lessonId: 1,
		menteeId: "1",
		experts: [1, 2, 3],
		status: Status.Taken,
		result: Result.WellDone,
		resultDate: +new Date(new Date().getTime()),
		conductedExpert: 1,
		requestDate: +new Date(new Date().getTime()),
		takeDate: +new Date(new Date().getTime()),
		comment: "Some comment"
	}
];
