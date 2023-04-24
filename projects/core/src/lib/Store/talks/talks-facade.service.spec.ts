import { TestBed } from "@angular/core/testing";
import { TalksFacadeService } from "./talks-facade.service";
import { Store } from "@ngrx/store";
import createSpyObj = jasmine.createSpyObj;

describe("TalksFacadeService", () => {
	let service: TalksFacadeService;
	let store: Store = createSpyObj(["dispatch", "select"]);

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: Store, useValue: store }]
		});
		service = TestBed.inject(TalksFacadeService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
