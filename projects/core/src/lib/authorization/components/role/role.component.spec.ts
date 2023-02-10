import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Roles } from "../../models/roles";
import { RoleComponent } from "./role.component";

describe("RoleComponent", () => {
	let component: RoleComponent;
	let fixture: ComponentFixture<RoleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RoleComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(RoleComponent);
		component = fixture.componentInstance;
		component.role = {
			type: Roles.MENTEE,
			features: [
				"Learn new features",
				"Have a talks with best Experts",
				"Verify your skills",
				"Upgrade your level"
			]
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should emit on click", () => {
		spyOn(component.roleEvent, "emit");
		const nativeElement = fixture.nativeElement;
		const button = nativeElement.querySelector(".role__button");
		button.dispatchEvent(new Event("click"));
		expect(component.roleEvent.emit).toHaveBeenCalled();
	});
});
