import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { DataBaseService } from "./database.service";
import { LessonsDataService } from "./lessons.data.service";
import { Lesson } from "../models/lesson";
import { ListType } from "../models/list-type";
import { HttpResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";

describe("LessonsDataService", () => {
	let ldb: LessonsDataService;
	let httpTestingController: HttpTestingController;
	const expectedLes = [
		{ id: "0", title: "", resources: [], duration: "" },
		{ id: "1", title: "", resources: [], duration: "" }
	] as Lesson[];
	const newLesson: Lesson = { id: "0", title: "", resources: [], duration: "" };

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LessonsDataService, DataBaseService],
			imports: [HttpClientTestingModule]
		});
		ldb = TestBed.inject(LessonsDataService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});
	afterEach(() => {
		httpTestingController.verify();
	});
	it("should be created", () => {
		expect(ldb).toBeTruthy();
	});
	it("should get lessons by calling once", () => {
		ldb.getLesson().subscribe({
			next: (lessons) => expect(lessons).toEqual(expectedLes)
		});
		const req = httpTestingController.expectOne(
			`${environment.firebaseConfig.databaseURL}/${ListType.LESSONS}.json`
		);
		expect(req.request.method).toEqual("GET");

		req.flush(expectedLes);
	});
	it("should save a lesson and return it", () => {
		ldb.saveLesson(newLesson).subscribe({
			next: (lesson) => expect(lesson).toEqual(newLesson)
		});
		const req = httpTestingController.expectOne(
			`${environment.firebaseConfig.databaseURL}/${ListType.LESSONS}.json`
		);
		expect(req.request.method).toEqual("POST");
		expect(req.request.body).toEqual(newLesson);

		const expectedResponse = new HttpResponse({
			status: 201,
			statusText: "Created",
			body: newLesson
		});
		req.event(expectedResponse);
	});
});
