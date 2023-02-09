import { SortPipe } from "./sort.pipe";
import { Result, Talk } from "@jsmu/core";
import { TestBed } from "@angular/core/testing";

describe("SortPipe", () => {
	let pipe: SortPipe;
	let talks: Talk[];
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SortPipe]
		});

		pipe = TestBed.inject(SortPipe);
		talks = [
			{
				lessonId: "",
				menteeId: "",
				expertId: "",
				inProgress: true,
				result: Result.comment,
				resultDate: new Date(new Date().getTime()),
				submitDate: new Date()
			},
			{
				lessonId: "",
				menteeId: "",
				expertId: "",
				inProgress: true,
				result: Result.comment,
				resultDate: new Date(new Date().getTime() - 100000000),
				submitDate: new Date()
			}
		];
	});

	it("create an instance", () => {
		expect(pipe).toBeTruthy();
	});

	it("should sort array if resultDates are different", () => {
		let res = spyOn(pipe, "transform").and.callThrough();
		pipe.transform(talks);
		expect(res).toHaveBeenCalledWith(talks);
		expect(res).toHaveBeenCalledTimes(1);
	});
});
