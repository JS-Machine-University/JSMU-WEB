import { TestBed } from "@angular/core/testing";
import { MenteeTalksFacadeService } from "@jsmu/core";
import createSpyObj = jasmine.createSpyObj;
import { Store } from "@ngrx/store";

describe("MenteeTalksFacadeService", () => {
	let service: MenteeTalksFacadeService;
	let store: Store = createSpyObj(["dispatch", "select"]);

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: Store,
					useValue: store
				}
			]
		});
		service = TestBed.inject(MenteeTalksFacadeService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
