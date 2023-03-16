import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationItemComponent } from "./navigation-item.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavigationItemComponent", () => {
	let component: NavigationItemComponent;
	let fixture: ComponentFixture<NavigationItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigationItemComponent],
			imports: [RouterTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(NavigationItemComponent);
		component = fixture.componentInstance;
		component.itemObj = { any: "any" };
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
