import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";
import { SignInComponent } from "./sign-in.component";
import { AuthService } from "../../services/auth/auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { UsersDataService } from "../../../services/users.data.service";
import { DataBaseService } from "../../../services/database.service";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RoleSelectComponent } from "../role-select/role-select.component";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";

describe("SignInComponent", () => {
	let component: SignInComponent;
	let fixture: ComponentFixture<SignInComponent>;
	let authService: AuthService;
	let dataService: UsersDataService;
	let userFacade: UserStoreFacade;
	const testUser: User = {
		uid: "123",
		name: undefined,
		email: undefined,
		isVerified: undefined,
		photoURL: undefined,
		role: undefined
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignInComponent],
			providers: [UsersDataService, DataBaseService, UserStoreFacade, provideMockStore({})],
			imports: [
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule,
				HttpClientTestingModule,
				RouterTestingModule.withRoutes([
					{
						path: "role-select",
						component: RoleSelectComponent
					}
				])
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(SignInComponent);
		component = fixture.componentInstance;
		authService = TestBed.inject(AuthService);
		dataService = TestBed.inject(UsersDataService);
		userFacade = TestBed.inject(UserStoreFacade);
		fixture.detectChanges();

		spyOn(authService, "gitHubAuth").and.returnValue(new Promise<void>(() => {}));

		spyOnProperty(authService, "isLoggedIn", "get").and.returnValue(
			new Observable<boolean>((subscriber) => {
				subscriber.next(true);
			})
		);

		spyOn(authService, "getUser").and.returnValue(
			new Observable<User>((subscriber) => {
				subscriber.next(testUser);
			})
		);

		spyOn(userFacade, "getUser").and.returnValue(
			new Observable<User | null>((subscriber) => {
				subscriber.next(null);
			})
		);
	});

	describe("logIn method", () => {
		it("should create", () => {
			expect(component).toBeTruthy();
		});

		it("should call gitHub", () => {
			component.login();
			expect(authService.gitHubAuth).toHaveBeenCalled();
		});

		it("should check isLogged", () => {
			component.login();
			expect(component.isLogged).toBe(true);
		});

		it("should get user", () => {
			component.login();
			expect(component.user).toEqual(testUser);
		});

		it("should navigate to role-select", inject([Router], (mockRouter: Router) => {
			const spy = spyOn(mockRouter, "navigate").and.stub();
			component.login();
			expect(spy.calls.first().args[0]).toContain("role-select");
		}));
	});
});
