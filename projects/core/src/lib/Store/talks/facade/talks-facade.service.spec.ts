import { TestBed } from "@angular/core/testing";

import { TalksFacadeService } from "./talks-facade.service";

describe("TalksFacadeService", () => {
	let service: TalksFacadeService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TalksFacadeService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
