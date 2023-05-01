import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { Lesson } from "../../../models/lesson";
import { DataBaseService } from "../../../services/database.service";
import { LessonsDataService } from "../../../services/lessons-data-service/lessons.data.service";
import { MenteeLessonsComponent } from "./mentee-lessons.component";

describe("MenteePageComponent", () => {
	let component: MenteeLessonsComponent;
	let fixture: ComponentFixture<MenteeLessonsComponent>;
	const expectedLes = [
		{ id: "0", title: "", resources: [], duration: "" },
		{ id: "1", title: "", resources: [], duration: "" }
	] as Lesson[];
	class MockLessonsService {
		public getLesson(): Observable<Lesson[]> {
			return new Observable<Lesson[]>((subscriber) => {
				subscriber.next(expectedLes);
			});
		}
	}
	let mockldb: MockLessonsService;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteeLessonsComponent],
			providers: [LessonsDataService, MockLessonsService, DataBaseService],
			imports: [HttpClientTestingModule]
		}).compileComponents();
		mockldb = TestBed.inject(MockLessonsService);
		fixture = TestBed.createComponent(MenteeLessonsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should get lessons", () => {
		mockldb.getLesson().subscribe((lessons: Lesson[]) => {
			component.lessons = lessons;
		});
		expect(component.lessons).toEqual(expectedLes);
	});
});
