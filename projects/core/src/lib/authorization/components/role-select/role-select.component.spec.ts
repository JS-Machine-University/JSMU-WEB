import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";
import { RoleSelectComponent } from "./role-select.component";
import { AuthService } from "../../services/auth/auth.service";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { Roles } from "../../models/roles";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UsersDataService } from "../../../services/users.data.service";
import { DataBaseService } from "../../../services/database.service";
import { provideMockStore } from "@ngrx/store/testing";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { EntityStatus } from "../../../Store/users/models/entityStatus";
import { UserState } from "../../../Store/users/models/userState";

describe("RoleSelectComponent", () => {
	let component: RoleSelectComponent;
	let fixture: ComponentFixture<RoleSelectComponent>;
	let authService: AuthService;
	let dataService: UsersDataService;
	let userFacade: UserStoreFacade;

	const testUser: User = {
		uid: undefined,
		name: undefined,
		email: undefined,
		photoURL: undefined,
		role: Roles.MENTEE,
		isUserAuth: true,
		isUserPresentDB: true,
		checkBase: true
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
			declarations: [RoleSelectComponent],
			providers: [UsersDataService, DataBaseService, UserStoreFacade, provideMockStore({})],
			imports: [
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule,
				HttpClientTestingModule
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(RoleSelectComponent);
		component = fixture.componentInstance;
		authService = TestBed.inject(AuthService);
		dataService = TestBed.inject(UsersDataService);
		userFacade = TestBed.inject(UserStoreFacade);
		fixture.detectChanges();

		spyOn(userFacade, "getUser").and.returnValue(
			new Observable<UserState>((subscriber) => {
				subscriber.next(testUserState);
			})
		);

		spyOn(userFacade, "saveUser");
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
