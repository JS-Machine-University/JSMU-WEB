import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenteeTalksComponent } from "./mentee-talks.component";

describe("MenteeTalksComponent", () => {
	let component: MenteeTalksComponent;
	let fixture: ComponentFixture<MenteeTalksComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteeTalksComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MenteeTalksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
