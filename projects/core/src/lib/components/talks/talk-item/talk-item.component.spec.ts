import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Result, TalkItemComponent } from "@jsmu/core";
import { SortPipe } from "../../../pipes/sort/sort.pipe";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("TalkItemComponent", () => {
	let component: TalkItemComponent;
	let fixture: ComponentFixture<TalkItemComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemComponent, SortPipe],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemComponent);
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
		expect(component.writeLine(1)).toBeTruthy();
	});
});
