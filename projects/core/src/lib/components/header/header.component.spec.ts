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
import { UserStoreFacade } from "../../Store/users/users.store.facade";
import { provideMockStore } from "@ngrx/store/testing";

describe("HeaderComponent", () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let usersDataServ: UsersDataService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			providers: [UsersDataService, DataBaseService, UserStoreFacade, provideMockStore({})],
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

	it("should toggle sideBarOpen", () => {
		component.isSideBarOpen = false;
		component.toggleSideBar();
		expect(component.isSideBarOpen).toBeTruthy();
	});
});
