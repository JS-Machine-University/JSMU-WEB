import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { User } from "../authorization/models/user";
import { Lesson } from "../models/lesson";
import { DataBaseService } from "./database.service";

describe("DataBaseService", () => {
	let service: DataBaseService<Lesson | User>;
	let http: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DataBaseService],
			imports: [HttpClientTestingModule]
		});
		service = TestBed.inject(DataBaseService);
		http = TestBed.inject(HttpTestingController);
	});
	afterEach(() => {
		http.verify();
	});
	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
