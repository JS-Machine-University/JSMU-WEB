import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationIconItemComponent } from "./navigation-icon-item.component";

describe("NavigationIconItemComponent", () => {
	let component: NavigationIconItemComponent;
	let fixture: ComponentFixture<NavigationIconItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigationIconItemComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(NavigationIconItemComponent);
		component = fixture.componentInstance;
		component.socialClassname = {
			className: "someClass"
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
