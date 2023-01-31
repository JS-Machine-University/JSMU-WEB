import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalksPageComponent } from "@jsmu/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TalksPageComponent", () => {
	let component: TalksPageComponent;
	let fixture: ComponentFixture<TalksPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalksPageComponent],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalksPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("Should compare the length of talks array and sorted talks array", () => {
		component.ngOnInit();
		expect(component.sortedTalks.length).toEqual(component.talks.length);
	});
});
