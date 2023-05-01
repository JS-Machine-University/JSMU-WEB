import { TestBed } from "@angular/core/testing";
import { MenteeTalksFacadeService } from "@jsmu/core";

describe("MenteeTalksFacadeService", () => {
	let service: MenteeTalksFacadeService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MenteeTalksFacadeService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
