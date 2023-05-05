import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenteePageComponent } from "./mentee-page.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("MenteePageComponent", () => {
	let component: MenteePageComponent;
	let fixture: ComponentFixture<MenteePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteePageComponent],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(MenteePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
