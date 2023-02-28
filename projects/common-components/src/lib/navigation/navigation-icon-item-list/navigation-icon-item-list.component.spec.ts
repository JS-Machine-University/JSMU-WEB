import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationIconItemListComponent } from "./navigation-icon-item-list.component";

describe("NavigationIconItemListComponent", () => {
	let component: NavigationIconItemListComponent;
	let fixture: ComponentFixture<NavigationIconItemListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigationIconItemListComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(NavigationIconItemListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
