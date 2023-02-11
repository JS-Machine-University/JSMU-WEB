import { SortPipe } from "./sort.pipe";
import { Talk } from "@jsmu/core";
import { TestBed } from "@angular/core/testing";
import { expectedTalksMock, talksMock } from "../../../assets/test/talkMocks";

describe("SortPipe", () => {
	let pipe: SortPipe;
	let talks: Talk[];
	let expectedTalks: Talk[];
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SortPipe]
		});

		pipe = TestBed.inject(SortPipe);
		talks = talksMock;
		expectedTalks = expectedTalksMock;
	});

	it("create an instance", () => {
		expect(pipe).toBeTruthy();
	});

	it("should sort array if resultDates are different", () => {
		let res = spyOn(pipe, "transform").and.callThrough();
		pipe.transform(talks);
		expect(res).toHaveBeenCalledWith(talks);
		expect(talks[0]).toEqual(expectedTalks[0]);
	});
});
