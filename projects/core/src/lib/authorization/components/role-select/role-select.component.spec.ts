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

describe("RoleSelectComponent", () => {
	let component: RoleSelectComponent;
	let fixture: ComponentFixture<RoleSelectComponent>;
	let authService: AuthService;
	let dataService: UsersDataService;
	const testUser: User = {
		uid: undefined,
		name: undefined,
		email: undefined,
		isVerified: undefined,
		photoURL: undefined,
		role: Roles.MENTEE
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RoleSelectComponent],
			providers: [UsersDataService, DataBaseService],
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
		fixture.detectChanges();

		spyOn(authService, "getUser").and.returnValue(
			new Observable<User>((subscriber) => {
				subscriber.next(testUser);
			})
		);

		spyOn(dataService, "saveUser").and.returnValue(
			new Observable<User>((subscriber) => {
				subscriber.next(testUser);
			})
		);
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	describe("switchRole", () => {
		it("should be called with Mentee", () => {
			component.switchRole(Roles.MENTEE);
			expect(dataService.saveUser).toHaveBeenCalledWith(testUser);
		});

		it("should be called with Expert", () => {
			component.switchRole(Roles.EXPERT);
			expect(dataService.saveUser).toHaveBeenCalledWith({
				uid: undefined,
				name: undefined,
				email: undefined,
				isVerified: undefined,
				photoURL: undefined,
				role: Roles.EXPERT
			});
		});

		it("should be called with RM", () => {
			component.switchRole(Roles.RM);
			expect(dataService.saveUser).toHaveBeenCalledWith({
				uid: undefined,
				name: undefined,
				email: undefined,
				isVerified: undefined,
				photoURL: undefined,
				role: Roles.RM
			});
		});
	});

	it("should call getUser when ngOnInit", () => {
		component.ngOnInit();
		expect(authService.getUser).toHaveBeenCalled();
	});
});
