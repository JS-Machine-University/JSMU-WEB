import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { DataBaseService } from "./database.service";
import { ListType } from "../models/list-type";
import { HttpResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UsersDataService } from "./users.data.service";
import { User } from "../authorization/models/user";
import { AuthService } from "../authorization/services/auth/auth.service";
import { of } from "rxjs";
import { user } from "@angular/fire/auth";
import { fakeUser } from "../../../../../src/assets/tests/userMock";

describe("UsersDataService", () => {
	let udb: UsersDataService;
	let httpTestingController: HttpTestingController;
	let fakeAuthServiceObj = jasmine.createSpyObj(["getUser"]);

	const expectedUsers = [
		{ uid: "0", email: "", name: "", photoURL: "", isVerified: false, role: {} },
		{ uid: "1", email: "", name: "", photoURL: "", isVerified: false, role: {} }
	] as User[];
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UsersDataService,
				DataBaseService,
				{ provide: AuthService, useValue: fakeAuthServiceObj }
			],
			imports: [HttpClientTestingModule]
		});
		udb = TestBed.inject(UsersDataService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});
	afterEach(() => {
		httpTestingController.verify();
	});
	it("should be created", () => {
		expect(udb).toBeTruthy();
	});
	it("should get users by calling once", () => {
		udb.getUser().subscribe({
			next: (users) => expect(users).toEqual(expectedUsers)
		});
		const req = httpTestingController.expectOne(
			`${environment.firebaseConfig.databaseURL}/${ListType.USERS}.json`
		);
		expect(req.request.method).toEqual("GET");

		req.flush(expectedUsers);
	});
	it("should save a user and return it", () => {
		const newUser: User = {
			uid: "0",
			email: "",
			name: "",
			photoURL: "",
			isVerified: false
		};
		udb.saveUser(newUser).subscribe({
			next: (user) => expect(user).toEqual(newUser)
		});
		const req = httpTestingController.expectOne(
			`${environment.firebaseConfig.databaseURL}/${ListType.USERS}.json`
		);
		expect(req.request.method).toEqual("POST");
		expect(req.request.body).toEqual(newUser);

		const expectedResponse = new HttpResponse({
			status: 201,
			statusText: "Created",
			body: newUser
		});
		req.event(expectedResponse);
	});

	it("should be equal to object fakeUser", function () {
		spyOn(udb, "isUserLogin").and.returnValue(of(fakeUser));
		udb.isUserLogin().subscribe((user) => {
			expect(user).toEqual(fakeUser);
		});
	});
});
