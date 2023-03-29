import { TestBed } from "@angular/core/testing";
import { InfoModalService } from "./info-modal.service";

describe("InfoModalService", () => {
	let service: InfoModalService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(InfoModalService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("subjectEmitter should emit data to isModalOpen", () => {
		service.$serviceSubjectProperty.subscribe((message) => {
			expect(message).toBe(true);
		});
		service.callNextOnSubject(true);
	});
});
