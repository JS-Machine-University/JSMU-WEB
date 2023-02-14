import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Lesson } from "../../../../core/src/lib/models/lesson";

import { LessonComponent } from "./lesson.component";

describe("LessonComponent", () => {
	let component: LessonComponent;
	let fixture: ComponentFixture<LessonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LessonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(LessonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeDefined();
	});

	it("select func should toggle selected var", () => {
		expect(component.selected).withContext("false at first").toBe(false);
		component.select();
		expect(component.selected).withContext("true after click").toBe(true);
		component.select();
		expect(component.selected).withContext("false after second click").toBe(false);
	});
});
