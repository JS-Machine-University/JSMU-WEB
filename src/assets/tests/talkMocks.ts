import { Result, Talk } from "@jsmu/core";

export const talkMock: Talk = {
	lessonId: 1,
	menteeId: 1,
	experts: 1,
	status: Result.Taken,
	resultDate: +new Date(new Date().getTime()),
	submitDate: +new Date()
};

export const talksMock: Talk[] = [
	{
		lessonId: 1,
		menteeId: 1,
		experts: 1,
		status: Result.Taken,
		resultDate: +new Date(new Date().getTime()),
		submitDate: +new Date()
	},
	{
		lessonId: 2,
		menteeId: 2,
		experts: 2,
		status: Result.Taken,
		resultDate: +new Date(new Date().getTime() - 100000000),
		submitDate: +new Date()
	}
];

export const expectedTalksMock: Talk[] = [
	{
		lessonId: 1,
		menteeId: 1,
		experts: 1,
		status: Result.Taken,
		resultDate: +new Date(new Date().getTime() - 100000000),
		submitDate: +new Date()
	},
	{
		lessonId: 2,
		menteeId: 2,
		experts: 2,
		status: Result.Taken,
		resultDate: +new Date(new Date().getTime()),
		submitDate: +new Date()
	}
];
