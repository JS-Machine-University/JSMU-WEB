import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Lesson } from "../models/lesson";
import { LessonsDataService } from "../services/lessons.data.service";
import { MenteePageComponent } from "./mentee-page.component";

describe("MenteePageComponent", () => {
	let component: MenteePageComponent;
	let fixture: ComponentFixture<MenteePageComponent>;
	let http: HttpTestingController;
	let ldb: LessonsDataService;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteePageComponent],
			providers: [LessonsDataService],
			imports: [HttpClientTestingModule]
		}).compileComponents();

		http = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(MenteePageComponent);
		component = fixture.componentInstance;
		ldb = TestBed.inject(LessonsDataService);
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should get lessons ", () => {
		spyOn(ldb, "getLesson").and.callThrough();
		expect(
			ldb.getLesson<Lesson[]>().subscribe((lessons: Lesson[]) => {
				component.lessons = lessons;
			})
		).toBeTruthy();
	});
});
