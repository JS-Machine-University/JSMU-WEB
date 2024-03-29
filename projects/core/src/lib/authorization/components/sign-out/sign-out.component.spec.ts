import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SignOutComponent } from "./sign-out.component";
import { AuthService } from "../../services/auth/auth.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { provideMockStore } from "@ngrx/store/testing";

describe("SignOutComponent", () => {
	let component: SignOutComponent;
	let fixture: ComponentFixture<SignOutComponent>;
	let fakeAuthService = jasmine.createSpyObj(["signOut"]);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignOutComponent],
			providers: [
				{
					provide: AuthService,
					useValue: fakeAuthService
				},
				UserStoreFacade,
				provideMockStore({})
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(SignOutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should be called", () => {
		const res = spyOn(component, "logout");
		component.logout();
		expect(res).toHaveBeenCalled();
	});
});
