import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationItemListComponent } from "./navigation-item-list.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("NavigationItemListComponent", () => {
	let component: NavigationItemListComponent;
	let fixture: ComponentFixture<NavigationItemListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigationItemListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(NavigationItemListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
