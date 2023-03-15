import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { DataBaseService } from "../../services/database.service";
import { RouterTestingModule } from "@angular/router/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../../../../../../src/environments/environment";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { User } from "../../authorization/models/user";
import { fakeUser } from "../../../../../../src/assets/tests/userMock";

describe("HeaderComponent", () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let usersDataServ: UsersDataService;
	let expectedUser: User = fakeUser;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			providers: [UsersDataService, DataBaseService],
			imports: [
				RouterTestingModule,
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule,
				HttpClientTestingModule
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		usersDataServ = TestBed.get(UsersDataService);
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should call method isUserLogIn 1 time", () => {
		spyOn(component, "isUserLogin").and.callThrough();
		component.isUserLogin();
		expect(component.isUserLogin).toHaveBeenCalledTimes(1);
	});

	it("should define to isLoggedIn true", () => {
		spyOn(usersDataServ, "isUserLogin").and.returnValue(of(expectedUser));
		component.isUserLogin();
		expect(component.isLoggedIn).toEqual(true);
	});

	it("should toggle sideBarOpen", () => {
		component.isSideBarOpen = false;
		component.toggleSideBar();
		expect(component.isSideBarOpen).toBeTruthy();
	});
});
