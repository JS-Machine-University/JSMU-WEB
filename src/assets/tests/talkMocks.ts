import { Result } from "@jsmu/core";

export const talkMock = {
	lessonId: "",
	menteeId: "",
	expertId: "",
	inProgress: true,
	result: Result.Comment,
	resultDate: new Date(new Date().getTime()),
	submitDate: new Date()
};

export const talksMock = [
	{
		lessonId: "",
		menteeId: "",
		expertId: "",
		inProgress: true,
		result: Result.Comment,
		resultDate: new Date(new Date().getTime()),
		submitDate: new Date()
	},
	{
		lessonId: "",
		menteeId: "",
		expertId: "",
		inProgress: true,
		result: Result.Comment,
		resultDate: new Date(new Date().getTime() - 100000000),
		submitDate: new Date()
	}
];

export const expectedTalksMock = [
	{
		lessonId: "",
		menteeId: "",
		expertId: "",
		inProgress: true,
		result: Result.Comment,
		resultDate: new Date(new Date().getTime() - 100000000),
		submitDate: new Date()
	},
	{
		lessonId: "",
		menteeId: "",
		expertId: "",
		inProgress: true,
		result: Result.Comment,
		resultDate: new Date(new Date().getTime()),
		submitDate: new Date()
	}
];
