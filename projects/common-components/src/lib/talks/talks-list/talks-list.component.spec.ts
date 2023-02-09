import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Result } from "@jsmu/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SortPipe, TalksListComponent } from "@jsmu/common-components";

describe("TalksPageComponent", () => {
	let component: TalksListComponent;
	let fixture: ComponentFixture<TalksListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalksListComponent, SortPipe],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalksListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.talks = [
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

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should return true if resultDates are different", () => {
		expect(component.isShowDateAndLine(1)).toBeTruthy();
	});
});
