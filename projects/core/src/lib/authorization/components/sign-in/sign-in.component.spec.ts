import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";
import { SignInComponent } from "./sign-in.component";
import { AuthService } from "../../services/auth/auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { UsersDataService } from "../../../services/users.data.service";
import { DataBaseService } from "../../../services/database.service";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RoleSelectComponent } from "../role-select/role-select.component";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { EntityStatus } from "../../../Store/users/models/entityStatus";
import { UserState } from "../../../Store/users/models/userState";

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
		photoURL: undefined,
		role: undefined
	};

	const testUserState: UserState = {
		user: {
			status: EntityStatus.INIT,
			value: testUser,
			error: null
		}
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
			new Observable<UserState | null>((subscriber) => {
				subscriber.next(testUserState);
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
	});
});
